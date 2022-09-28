import './App.css';
import Vision from './components/Vision';
import Track from './components/track';
import Mark from './components/mark';
import Emergency from './components/emergency';
import Approach from './components/Approach';


function App() {
  return (
    <div className="App">
      <Track />
      <Mark />
      <Vision />
      <Emergency />
      <Approach />
    </div>
  );
}

export default App;
