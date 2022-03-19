import { useState } from "react";
import { Grid } from "@mui/material";
import { Header } from "./components/Header";
import { ListActivities } from "./components/ListActivities";
import { ListMolecules } from "./components/ListMolecules";
import { MoleculeDetail } from "./components/MoleculeDetail";
import MoleculeStructure from "./components/third-party-components/MoleculeStructure";

function App() {
    const [molecules, setMolecules] = useState([])
    const [molecule, setMolecule] = useState({})
    const [modalMolecule, setModalMolecule] = useState({})
    const [activities, setActivities] = useState([])
    const [open, setOpen] = useState(false)

    return (
        <>
            <Header/>
            <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }} rowSpacing={{lg:3}}>
                <Grid item xs={12} sx={{marginTop: 0}}>
                    
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <ListMolecules
                        molecules={molecules}
                        setMolecules={setMolecules}
                        setMolecule={setMolecule}
                        setModalMolecule={setModalMolecule}
                        setOpen={setOpen}
                    />
                    <MoleculeDetail
                        open={open}
                        setOpen={setOpen}
                        modalMolecule={modalMolecule}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={6}>
                    <ListActivities
                        activities={activities}
                        setActivities={setActivities}
                        molecule={molecule}
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default App;
