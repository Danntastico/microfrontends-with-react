import React from 'react'
import ReactDOM from 'react-dom'
  

//Mount function to start up the app
const mount = (el) => {
  ReactDOM.render(
    <h1>Hi there!</h1>,
    el
  );
}


//If we are in development and in isolation
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_marketing-dev-root')

  if(devRoot){
    mount(devRoot)
  }

}

// We are running through container
export { mount }