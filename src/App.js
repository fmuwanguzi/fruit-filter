import './App.css';
import FruitContainer from './components/FruitContainer'



function App() {
  const fruits = ['banana', 'watermelon', 'apple', 'orange']


  return (
    <div className="App">
      <FruitContainer fruits={fruits} />

    </div>
  );
}

export default App;
