import './App.css';
import Frisör from '../src/components/Frisör'

function App() {


  let dataFrånApi = [
    {
      namn: 'Lars',
      tid: 14
    },
    {
      namn: 'Tomas',
      tid: 15
    },
    {
      namn: 'Patrik',
      tid: 17
    }
  ]



  return (
    <div>
      {/* <Frisör namn={'Lars'} tid={14} />
      <Frisör namn={'Tomas'} tid={15}/> */}

      {/* <Frisör namn={dataFrånApi[0].namn} tid={dataFrånApi[0].tid} />
      <Frisör namn={dataFrånApi[1].namn} tid={dataFrånApi[1].tid} /> */}

      {dataFrånApi.map(frisör => <Frisör namn={frisör.namn} tid={frisör.tid}/>)}

      {dataFrånApi.map(variabelnamn => <div>en vanlig div {variabelnamn.tid}</div>)}
      
    </div>
  );
}

export default App;
