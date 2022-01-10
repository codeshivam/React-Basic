import './App.css';
import Student from './Student';

function App() {
  const name = "Shivam";
  return (
    <div className="App">
      <Student name = {name}/>
    </div>
  );
}

export default App;
