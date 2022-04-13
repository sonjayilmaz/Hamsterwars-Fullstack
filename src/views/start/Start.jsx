import './Start.css'
import {Link} from 'react-router-dom'

function Start() {
    return (
        <div>
     <h1 className='start-h1'>Hamsterwars 🐹⚔️🐹</h1>
     <h2>Welcome to the ultimate hamsterwars duel battle where you choose the cutest of
      two hamsters. May the cutest hamster win!</h2>

     {/* 
     Här ska du förklara för användaren hur man använder appen. 
     Länka till vyerna Tävla och Galleri. 
     (Med React Router-länkar, <Link />.)

Om det av någon anledning inte går att nå backend-servern 
så ska du visa ett användarvänligt felmeddelande här. 
Användaren ska också få möjligheten att försöka igen.
     */}
     <button className='battleButton'>
     <Link to='/battle' className='battleLink'>
            Start the battle
          </Link>
     </button>
     </div>
    );
  }
  
  export default Start;