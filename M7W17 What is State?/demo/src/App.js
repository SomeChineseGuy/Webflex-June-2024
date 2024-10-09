import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Counter from './components/Counter';
import Form from './components/Form';

function App() {
  return (
    <div className="App">
      <Header />
      <Counter />
      {/* <Form /> */}
    </div>
  );
}

export default App;