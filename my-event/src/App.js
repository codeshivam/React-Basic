import './App.css';
import { Student } from './Student';
import { ThisBinding } from './ThisBinding';

function App() {
  return (
    <div className="App">

      <h1>This is react event</h1>
      <Student />
      <ThisBinding id = "20" />
    </div>
  );
}

export default App;
