import React, {useState} from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/global';
import { theme } from './styles/themes';
import Burger from './components/Burger';
import Menu from './components/Menu';

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>
          <h1>Hello. This is burger menu tutorial</h1>
          <img src="https://media.giphy.com/media/xTiTnwj1LUAw0RAfiU/giphy.gif" alt="animated burger" />
        </div>
        <div>
          <Burger open={open} setOpen={setOpen}/>
          <Menu open={open} setOpen={setOpen}/>
        </div>
    </ThemeProvider>
    
  );
}

export default App;