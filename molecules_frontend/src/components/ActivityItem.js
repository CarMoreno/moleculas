import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { green, brown } from '@mui/material/colors';
import { EmojiNature } from '@mui/icons-material';
import { ListItem } from '@mui/material';

export function ActivityItem({activity}) {
    const {id, organism, relation, target_name, type, units, value} = activity
    return (
        <>
            <ListItem>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: brown[500] }} >
                        <EmojiNature />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={`Activity # ${id}`}
                    secondary={
                        <>
                            <Typography
                                sx={{ display: 'inline', color: green[800]}}
                                variant='body2'
                            >
                                <strong>Organism:</strong> {organism} {""}
                                <strong>Target:</strong> {target_name} {""}
                                <strong>Type:</strong> {type} {""}
                                <strong>Units:</strong> {units} {""}
                                <strong>Value:</strong> {value} {""}
                                <strong>Relation:</strong> {relation} 
                            </Typography>
                            
                                
                                
                            
                            
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}