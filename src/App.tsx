import React from 'react';

import {Header} from "./components/Header/Header";
import {Goods} from "./components/Main/Goods";

const App = () => {
    return(
      <>
        <header className='header'>
          <Header />
        </header>
        <main className='main'>
          <Goods />
        </main>
      </>
    )
}

export default App;
