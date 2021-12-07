import '../scss/App.scss';
import Map from './components/Map';

function App() {
  return (
    <div className="App">
      <div className='hidden' id='tooltip'>
        <p className='hidden' id='content'></p>
      </div>

      <Map />
    </div>
  );
}

export default App;
