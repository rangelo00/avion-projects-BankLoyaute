
import './App.css';
import bankLogo from './assets/images/bank_loyaute_cropped.png'
import navBar from './components/navBar/navBar'

function App() {
  return (
    <div className="App">
      <img src={bankLogo} alt="bankLogo"></img>
      <navBar></navBar>
    </div>
  );
}

export default App;
