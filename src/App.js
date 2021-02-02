import logo from './logo.svg';
import React from 'react';
import './App.css';

function formatName( user ) {
  return `${ user.name } ${ user.lastname }`;
}

// DRY => Dont Repeat Yourself
function App( { users } ) {
  return (
    <>
      <h1>Lista de usuarios</h1>
      <ul>
      {
        users.map( ( user ) => {
          return <li>Hola { formatName( user ) }</li>;
        } )
      }
      </ul>
    </>
  )


}

export default App;
