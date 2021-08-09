import Header from "./components/Header";
import { ThemeProvider } from '@material-ui/styles'
import theme from './components/ui/Theme';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
     <Header/>
   </BrowserRouter>
 </ThemeProvider>
  );
}

export default App;
