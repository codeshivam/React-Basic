import './App.css';
import { Employee } from './Employee';
import { Student } from './Student';
import { ThisBinding } from './ThisBinding';

function App() {
  return (
    <div className="App">

      <h1>This is react event</h1>
      <Student />
      <ThisBinding id = "20" />
      <Employee />
    </div>
  );
}

export default App;
