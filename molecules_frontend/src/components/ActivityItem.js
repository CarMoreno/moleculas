import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import {ArrowForward, Biotech } from '@mui/icons-material';
import { IconButton } from '@mui/material';

export function ActivityItem({activity}) {
    const {id, organism, relation, target_name, type, units, value} = activity
    return (
        <>
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: green[700] }} >
                        <Biotech />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={organism}
                    secondary={
                        <>
                            <Typography
                                sx={{ display: 'inline', color: green[800], fontWeight: "bold"}}
                                component="span"
                                variant='body2'
                            >
                                Id: {id}
                            </Typography>
                            { ` ${"structure"}` }
                        </>
                    }
                />
            </ListItemButton>
            <Divider variant="inset" component="li" />
        </>
    )
}