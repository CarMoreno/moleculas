import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import { green } from '@mui/material/colors';
import { Biotech, ArrowForward } from '@mui/icons-material';
import { IconButton, ListItemButton } from '@mui/material';

export function MoleculeItem({molecule, setMolecule, setModalMolecule, setOpen}) {
    const {id, name, structure} = molecule

    const handleOpenModal = () => {
        setOpen(true)
        setModalMolecule(molecule)
    }

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
                <ListItemButton onClick={handleOpenModal}>
                    <ListItemText
                        primary={`Molecule # ${id}: ${name}`}
                        secondary={structure}
                    />
                </ListItemButton>
            </ListItem>
            <Divider variant="inset" component="li" />
        </>
    )
}