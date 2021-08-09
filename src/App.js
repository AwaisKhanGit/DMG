import Header from "./components/Header";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './components/ui/Theme';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import SubGrade from './components/Tests/SubGrade'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
     <Header/>
     <Switch>
            <Route exact path="/subgrade" render={(props)=>(<SubGrade/>)} />
          </Switch>
   </BrowserRouter>
 </ThemeProvider>
  );
}

export default App;
