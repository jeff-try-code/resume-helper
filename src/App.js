import Header from "./components/Header";
import Projects from "./components/Projects";
import { Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Projects />
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </div>
  );
}

export default App;
