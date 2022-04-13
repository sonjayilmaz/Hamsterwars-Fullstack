import './HamsterCard.css'



function HamsterCard(props){

return (
    <div key={props.hamster.id} className='hamsterCard'>
    <div className='hamsterCardImg'
    style={{backgroundImage: `url(http://localhost:1337/img/${props.hamster.imgName})` }}>
        <div className='hamster-info'>
            <p>{props.hamster.name}</p>
            <h2>{props.hamster.age}y</h2>
            
            <div className='hamster-info-footer'>
                 <p>
                 <span>Games</span> {props.hamster.games} <br />
                 <span>Wins</span> {props.hamster.wins} <br />
                 <span>Defeats</span> {props.hamster.defeats} <br />
                 <hr />
                 Loves {props.hamster.loves} <br />
                 Favorite food {props.hamster.favFood} 
                 </p>
            </div>
            
        </div>
    </div>
    </div>
);

}

export default HamsterCard;