import Header from './components/Header'
import Form from './components/Form'
import Display from './components/Display'
import { Grid } from '@material-ui/core'

function App() {
  return (
    <div className="App">
      <Header />
      <Grid container>
        <Grid item xs={1}></Grid>
        <Form />
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
}

export default App;
