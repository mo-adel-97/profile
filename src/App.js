import './App.css';
import { useEffect,useState } from 'react';

function App() {
  const [data,setData] = useState('')

  useEffect(() => {
    fetch("https://api-profile-git-main-mohameds-projects-38a34405.vercel.app/data")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => setData(data.message))
  },[])
  return (
    <div className="App">
       <h1>
        hello ${data} from vercel 
       </h1>
    </div>
  );
}

export default App;
