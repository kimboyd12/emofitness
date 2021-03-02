import logo from './logo.svg';
import './App.css';
import Navigation from "../src/components/navigation";
import './components/navigation.css';
import Body from "../src/components/body";
import Overview from "../src/components/overview";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Body/>
      <Overview />
    </div>
  );
}

export default App;
