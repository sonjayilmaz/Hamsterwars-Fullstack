import './BattleCard.css'
import { useState, useEffect} from 'react';


function BattleCard(props) {
	const [hamster, sethamster] = useState([]);
  
    useEffect(() => {
  
   sethamster(props.hamster);
    });



	return (
	  <div key={hamster.id} className='CardBattle'>
  
	  <p>{hamster.name}</p>
	  <p>{hamster.age}</p>
	  <p>{hamster.loves}</p>
	  <p>{hamster.favFood}</p>
  
		<div className='CardBattleImg' style={{backgroundImage: `url(http://localhost:1337/img/${hamster.imgName})` }}></div>
  
	  </div>
	);
  }
  
  export default BattleCard;