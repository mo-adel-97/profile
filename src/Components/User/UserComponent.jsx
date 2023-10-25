import React from 'react'
import { useParams } from "react-router-dom";
import Sidebar from '../SideBar/SideBar';
export default function UserComponent() {
    const {id} = useParams();
    console.log(`routerparams : ${id}`)
  return (
    <div>
     <Sidebar/>
    </div>
  )
}
