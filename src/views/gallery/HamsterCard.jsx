import './HamsterCard.css'
import { useState, useEffect} from 'react';




function HamsterCard(props){

    const [hamster, sethamster] = useState([]);
  
    useEffect(() => {
  
   sethamster(props.hamster);
    });



return (
    <div key={hamster.id} className='hamsterCard'>
    <div className='hamsterCardImg'
    style={{backgroundImage: `url(http://localhost:1337/img/${hamster.imgName})` }}>
        <div className={props.battleMode ? "hamster-info battle-on" : "hamster-info"}>
            <p>{hamster.name}</p>
            <h2>{hamster.age}y</h2>
            
            <div className='hamster-info-footer'>
                 <p>
                 <span>Games</span> {hamster.games} <br />
                 <span>Wins</span> {hamster.wins} <br />
                 <span>Defeats</span> {hamster.defeats} <br />
      
                 Loves {hamster.loves} <br />
                 Favorite food {hamster.favFood} 
                 </p>
            </div>
        </div>
    </div>
    </div>
);

}

export default HamsterCard;
