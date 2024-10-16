import logo from './logo.svg';
import './App.css';
import Classbased from './components/ClassBased';
import LifeCycle from './components/LifeCycle';

function App() {
  return (
    <div className="App">
      {/* <Classbased name="Alvin" items={[1,2,3,4,5]} /> */}
      <LifeCycle />
    </div>
  );
}

export default App;
