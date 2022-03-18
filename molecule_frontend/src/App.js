import { Grid } from "@mui/material";
import { Header } from "./components/Header";
import { ListActivities } from "./components/ListActivities";
import { ListMolecules } from "./components/ListMolecules";

function App() {

    return (
        <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={12} sx={{marginTop: 0}}>
                <Header/>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <ListMolecules />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <ListActivities />
            </Grid>
        </Grid>
    );
}

export default App;
