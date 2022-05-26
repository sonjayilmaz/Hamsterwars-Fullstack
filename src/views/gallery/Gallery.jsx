import './Gallery.css'
import {Link} from 'react-router-dom'
import { useState, useEffect} from 'react';
import HamsterCard from './HamsterCard.jsx';
import Api from '../../Api.js';

 function Gallery() {

  const [hamsterList, sethamsterList] = useState([]);

 


  useEffect(() => {

    if(hamsterList.length > 0)
    return;

    Api.getAllHamsters().then(data => sethamsterList(data));
  }, [hamsterList]);

  function Delete(id) {

    Api.deleteHamster(id)
    hamsterList.splice(hamsterList.findIndex(hamster => hamster.id === id), 1);
    sethamsterList([...hamsterList]);
    
    }

    


   return (
    <div className='gallery-container'>
       {hamsterList &&
          hamsterList.map((hamster) => {
            return (
              <div key={hamster.id}>
                <HamsterCard hamster={hamster} />
                <button className='hamster-delete-button' onClick={() => Delete(hamster.id)}>
                  DELETE ❌
                </button>
              </div>
            );
          })}
    <div>
          <Link to='/form' className='formLink'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
            Add a new hamster
          </Link>
     </div>
     </div>
  );
}


      
  
  
  export default Gallery;

  /*
 {
       hamsterList.map(hamster => 
        <li key={hamster.id}>
        <HamsterCard battleMode={false} hamster={hamster} />,
        <button className='hamster-delete-button' onClick={() =>
           Delete(hamster.id)}>Delete ❌</button>
         </li>
       )}
      
  */