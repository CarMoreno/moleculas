export const getMolecules = async (pageNumber=1) => {
    return fetch(`${process.env.REACT_APP_API_URL}/molecule?page_number=${pageNumber}`)
                .then( response => response.json())
                .then( molecules => molecules)
                .catch( error => console.log(error))
}

export const getMoleculeById = async (moleculeId) => {
    return fetch(`${process.env.REACT_APP_API_URL}/molecule/${moleculeId}`)
    .then( response => response.json())
    .then( molecule => molecule)
    .catch( error => console.log(error))
}

export const getActivities = async (moleculeId, pageNumber=1) => {
    return fetch(`${process.env.REACT_APP_API_URL}/molecule/${moleculeId}/activity?page_number=${pageNumber}`)
    .then( response => response.json())
    .then( activities => activities)
    .catch( error => console.log(error))
}