import './App.css';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [data,setData] = useState('')

  axios.get('http://localhost:4000/data') // Replace with your actual API endpoint
  .then(response => {
    setData(response.data)
  })
  .catch(error => {
    console.error(error);
  });
  return (
    <div className="App">
       <h1>
        hello {data.name} from vercel 
       </h1>
    </div>
  );
}

export default App;
