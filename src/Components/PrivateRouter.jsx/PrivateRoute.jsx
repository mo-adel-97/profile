import React from 'react';
import { useNavigate } from 'react-router-dom';
import UserComponent from '../User/UserComponent';
import { useEffect } from 'react';
export default function PrivateRoute() {
  // Check for authentication token in local storage
  const auth = localStorage.getItem('token');
  const navigate = useNavigate();


  // Function to navigate to the login page

  useEffect(() => {
    if (!auth) {
      navigate('/login');
    }
  }, [auth, navigate]);
console.log(auth)
  return (
    <div>
      {auth ? <UserComponent /> : null}
    </div>
  );
}