
import './App.css';
import bankLogo from './assets/images/bank_loyaute_cropped.png'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <img src={bankLogo} alt="bankLogo"></img>
    </div>
  );
}

export default App;
