import './HamsterCard.css'
import { useState, useEffect} from 'react';
import Api from '../../Api';


async function Delete(id) {

    await Api.deleteHamster(id).then(data => {
      console.log(data);
    });
    }

    


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
            
            {props.battleMode ? "" : <button onClick={async () => await Delete(props.hamster.id)}>Delete</button>}

        </div>
    </div>
    </div>
);

}

export default HamsterCard;
