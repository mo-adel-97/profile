import './App.css';
import { useState } from 'react';
import axios from 'axios';
function App() {
  const [data,setData] = useState('')

  axios.get('https://api-profile-git-main-mohameds-projects-38a34405.vercel.app/data') // Replace with your actual API endpoint
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
