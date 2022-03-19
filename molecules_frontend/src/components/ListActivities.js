import List from '@mui/material/List';
import { ActivityItem } from './ActivityItem';
import { useEffect, useState } from "react";
import { getActivities, getMolecules } from '../api/MoleculesAPI';
import { Pagination, Paper, Typography } from '@mui/material';
import { ListItemText } from '@material-ui/core';

export const ListActivities = ({activities, setActivities, molecule}) => {
    const [totalPages, setTotalPages] = useState(0)
    useEffect( () => {
        if (Object.keys(molecule).length > 0) {

            getActivities(molecule.id)
                .then(activities => {
                    setActivities(activities.data)
                    setTotalPages(activities.total_number_pages)
                })
                .catch(error => console.log(error))
        }
    }, [molecule])

    const handleChange = (event, currentPage) => {
        event.preventDefault()
        getActivities(molecule.id, currentPage)
            .then(activities => setActivities(activities.data))
            .catch(error => console.log(error))
    }

    return (

        <>
            {activities && activities.length ? (
                <>
                    <Typography variant="h5" sx={ {marginTop: "5px", textAlign:"center"}}>List of Activities </Typography>
                    <List sx={{ width: '80%', bgcolor: 'background.paper', margin: "2% auto 0% auto" }}>
                    { activities.map( activity => {
                            return (
                                <ActivityItem activity={activity} key={activity.id}/>
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
            ): 
                <>
                    <Typography variant="h5" sx={ {marginTop: "5px", textAlign:"center"}}>List of Activities </Typography>
                    <List sx={{ width: '80%', bgcolor: 'background.paper', margin: "2% auto 0% auto" }}>
                        <ListItemText>
                            <Typography align='center'>Please, click on arrow icon to see activities related to a specific molecule</Typography>
                        </ListItemText>
                    </List>
                </>
            }
            
        </>
      );
}