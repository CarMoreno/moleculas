import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { green } from '@mui/material/colors';
import { Biotech, ArrowForward } from '@mui/icons-material';
import { IconButton, ListItemButton } from '@mui/material';

export function MoleculeItem({molecule, setMolecule}) {
    const {id, name, structure} = molecule

    return (
        <>
            <ListItem
                secondaryAction={
                    <IconButton onClick={() => {setMolecule(molecule)}}>
                        <ArrowForward />
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar sx={{ bgcolor: green[700] }} >
                        <Biotech />
                    </Avatar>
                </ListItemAvatar>
                <ListItemButton>
                    <ListItemText
                        primary={name}
                        secondary={
                            <>
                                <Typography
                                    sx={{ display: 'inline', color: green[800], fontWeight: "bold"}}
                                    component="span"
                                    variant='body2'
                                >
                                    Id: {id}
                                </Typography>
                                { ` ${structure}` }
                            </>
                        }
                    />
                </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}