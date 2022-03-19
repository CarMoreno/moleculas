import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Divider, List, ListItemText, Modal, Typography } from "@mui/material";
import { red, grey } from "@mui/material/colors";
import React from "react"
import MoleculeStructure from "./third-party-components/MoleculeStructure";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24
  };

export function MoleculeDetail({open, setOpen, modalMolecule}) {
    const {name, max_phase, structure, inchi_key} = modalMolecule

    return (
        <div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Card sx={style}>
                    <CardActionArea>
                        <MoleculeStructure
                            id="structure-example-svg-aspirin"
                            structure={structure}
                            width={350}
                            height={300}
                        />
                        <Divider/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {name}
                            </Typography>
                            <List >
                                <ListItemText>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Structure:</strong> <Typography variant="body2" sx={{color: red[400]}}>{structure} {""}</Typography>
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Inchi key:</strong> {inchi_key} {""}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        <strong>Max phase:</strong> {max_phase} {""}
                                    </Typography>
                                </ListItemText>
                            </List>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={() => {setOpen(false)}} size="small" color="success">
                            Close
                        </Button>
                    </CardActions>
                </Card>
            </Modal>
        </div>
    )
}