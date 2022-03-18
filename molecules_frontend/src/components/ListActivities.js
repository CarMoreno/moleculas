import List from '@mui/material/List';
import { ActivityItem } from './ActivityItem';
import { useEffect, useState } from "react";
import { getActivities, getMolecules } from '../api/MoleculesAPI';
import { Pagination, Typography } from '@mui/material';

export function ListActivities() {
    const [activities, setActivities] = useState([])
    const [totalPages, setTotalPages] = useState(0)

    useEffect( () => {
        getActivities(97)
            .then(activities => {
                setActivities(activities.data)
                setTotalPages(activities.total_number_pages)
            })
            .catch(error => console.log(error))
    }, [])

    const handleChange = (event, currentPage) => {
        event.preventDefault()
        getMolecules(currentPage)
            .then(molecules => setActivities(molecules.data))
            .catch(error => console.log(error))
    }

    return (
        <>
            <Typography variant="h5" sx={ {marginTop: 5, textAlign:"center"}}>List of Activities</Typography>
            <List sx={{ width: '100%', bgcolor: 'background.paper', margin: "2% auto 0% auto" }}>
            { activities.map( activity => {
                    return (
                        <ActivityItem molecule={activity} key={activity.id}/>
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