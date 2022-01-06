import './App.css';
import { List } from './List';
import { Listwithkeys } from './Listwithkeys';
import { Post } from './Post';

function App() {

  const num = [43,65,32,64,11];
  const post =[
    {id : 1, name : "Satyam Pandey", email : "satyam@gmail.com"},
    {id : 2, name : "Shivam Pandey", email : "shivam@gmail.com"},
    {id : 3, name : "Sundaram Pandey", email : "sundaram@gmail.com"}
  ];
  return (
    <div className="App">
      <List />
      <Listwithkeys numbers ={num} />
      <Post post = {post}/>
    </div>
  );
}

export default App;
