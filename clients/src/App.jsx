import React from 'react'
import {Route,Routes} from 'react-router-dom';
import {Footer,Navbar,Service,Transaction,Loader,Welcome} from './components';


const App = () => {
  return (
    <div className='gradient-bg-welcome ' >
    
    
      <Navbar/>
      <Welcome/>
      
      <Footer/>
     <Service/>
     <Transaction/>
</div>
  )
}

export default App