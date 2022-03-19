import List from '@mui/material/List';
import { MoleculeItem } from './MoleculeItem';
import { useEffect, useState } from "react";
import { getMolecules } from '../api/MoleculesAPI';
import { Pagination, Typography } from '@mui/material';

export function ListMolecules({molecules, setMolecules, setMolecule, setModalMolecule, setOpen}) {
    const [totalPages, setTotalPages] = useState(0)

    useEffect( () => {
        getMolecules()
            .then(molecules => {
                setMolecules(molecules.data)
                setTotalPages(molecules.total_number_pages)
            })
            .catch(error => console.log(error))
    }, [])

    const handleChange = (event, currentPage) => {
        event.preventDefault()
        getMolecules(currentPage)
            .then(molecules => setMolecules(molecules.data))
            .catch(error => console.log(error))
    }

    return (
        <>
            <Typography variant="h5" sx={ {marginTop: 5, textAlign:"center"}}>List of Molecules</Typography>
            <List sx={{ width: '80%', bgcolor: 'background.paper', margin: "2% auto 0% auto" }}>
            { molecules.map( molecule => {
                    return (
                        <MoleculeItem 
                            molecule={molecule}
                            setMolecule={setMolecule}
                            setModalMolecule={setModalMolecule}
                            setOpen={setOpen}
                            key={molecule.id}
                        />
                    )
            })}
                <Pagination 
                    count={totalPages} 
                    color="success" 
                    onChange={handleChange} 
                    sx={{display:"flex", justifyContent: "center", margin: "4% auto 2% auto"}}
                />
            </List>
        </>
      );
}