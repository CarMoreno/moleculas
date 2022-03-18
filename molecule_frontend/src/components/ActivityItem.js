import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import { Biotech } from '@mui/icons-material';

export function ActivityItem(props) {
    //const {id, name, structure} = props.activity
    return (
        <>
            <ListItemButton>
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: green[700] }} >
                        <Biotech />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={"name"}
                    secondary={
                        <>
                            <Typography
                                sx={{ fontWeight: "bold" }}
                                component="span"
                                variant="body2"
                                color="text.primary"
                            >
                                Id: <strong>{"id"}</strong>
                            </Typography>

                            <Typography>
                                {"structure"}
                            </Typography>
                        </>
                    }
                />
            </ListItemButton>
            <Divider variant="inset" component="li" />
        </>
    )
}