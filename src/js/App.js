import '../scss/App.scss';
import Graph from './components/Graph';
import Map from './components/Map';
const title = require('../title.png');

function App() {
  return (
    <div className="App">
      <div className='hidden' id='tooltip'>
        <p className='hidden' id='content'></p>
      </div>

      <img className="title" src={title.default} alt="Title" />
      <Map />
      <Graph />
    </div>
  );
}

export default App;
