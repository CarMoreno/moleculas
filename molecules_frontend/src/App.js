import { useState } from "react";
import { Grid } from "@mui/material";
import { Header } from "./components/Header";
import { ListActivities } from "./components/ListActivities";
import { ListMolecules } from "./components/ListMolecules";

function App() {
    const [molecules, setMolecules] = useState([])
    const [molecule, setMolecule] = useState({})
    const [activities, setActivities] = useState([])

    return (
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sx={{marginTop: 0}}>
                <Header/>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
                <ListMolecules
                    molecules={molecules}
                    setMolecules={setMolecules}
                    setMolecule={setMolecule}
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
    );
}

export default App;
