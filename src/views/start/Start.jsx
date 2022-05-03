import './Start.css'
import {Link} from 'react-router-dom'

function Start() {
     
    return (
        <div>
     <h1 className='start-h1'>Hamsterwars 🐹⚔️🐹</h1>
     <h2>Welcome to the ultimate hamsterwars duel battle where you choose the cutest of
      two hamsters. May the cutest hamster win!</h2>


     <div className='battle-link-container'>
     <Link to='/battle' className='battleLink'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
            Start the battle
          </Link>
          </div>
     </div>
    );
  }
  
  export default Start;