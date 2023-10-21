import { Note } from "../../Components/NoteHome/NoteHome";
import ButtonAppBar from "../../Components/NavBar/NavBar";
import { useState } from "react";
const Home = ()=> {
  const [loginButton,setLoginButton] = useState(true)

    return (
      <div >
        <ButtonAppBar loginButton={loginButton} setLoginButton={setLoginButton} />
        <Note />
      </div>
    );
  }

export default Home