import React from 'react';
//styles
import { GlobalStyle } from './GlobalsStyles'
//Components
import Header from './components/Header/index';
import Home from './components/Home'
function App() {
  return (
    <div className="App">
      Start here.
      https://www.youtube.com/watch?v=nTeuhbP7wdE
      2:20:23
      <Header/>
      <Home/>
      <GlobalStyle/>
    </div>
  );
}

export default App;
