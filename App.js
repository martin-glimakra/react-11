import './App.css';
import Frisör from '../src/components/Frisör'
import React, { useState } from 'react';


function App() {

  let dataFrånApi = [
    {
      namn: 'Lars',
      tid: 14,
      ledig: true,
      bildUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Example.jpg'
    },
    {
      namn: 'Tomas',
      tid: 15,
      ledig: false
    },
    {
      namn: 'Patrik',
      tid: 17,
      ledig: false,
    }
  ]

  const [språk, setSpråk] = useState('svenska');


  function hanteraklick () {
    // console.log('klick fungerar')
    
    if (språk === 'svenska'){
      setSpråk('engelska')
    }

    if (språk === 'engelska'){
      setSpråk('svenska')
    }
  }


  return (
    <div>


      <div onClick={hanteraklick}>Byt språk nuvarande språk: {språk}</div>



      {/* <Frisör namn={'Lars'} tid={14} />
      <Frisör namn={'Tomas'} tid={15}/> */}

      {/* <Frisör namn={dataFrånApi[0].namn} tid={dataFrånApi[0].tid} />
      <Frisör namn={dataFrånApi[1].namn} tid={dataFrånApi[1].tid} /> */}

      {dataFrånApi.map(frisör => 
        <Frisör
          språk={språk} 
          ledig={frisör.ledig} 
          namn={frisör.namn} 
          tid={frisör.tid}
          bildUrl={frisör.bildUrl}
        />)}

      {/* {dataFrånApi.map(variabelnamn => <div>en vanlig div {variabelnamn.tid}</div>)} */}
      
    </div>
  );
}

export default App;
