import { CssBaseline } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Home from './pages/home';
import themeObject from './util/Themes';


function App() {
  const theme = createMuiTheme(themeObject);
  return (
    <div className="background-color">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Home/>
      </ThemeProvider>
    </div>
  );
}

export default (App);
