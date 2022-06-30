import './Gallery.css'
import {Link} from 'react-router-dom'
import {toast} from 'react-toastify'
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

  const Delete = (id) => {

    Api.deleteHamster(id)
    hamsterList.splice(hamsterList.findIndex(hamster => hamster.id === id), 1);
    sethamsterList([...hamsterList]);
    toast.success("Hamster deleted from gallery")
    }

    


   return (
    <div className='gallery-container'>
     <button className='add-hamster-button'>
          <Link to='/form' className='add-hamster-link'>
          <span className='text'> Add a new hamster to gallery</span>
          </Link>
     </button>
<div className='hamster-gallery'>
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
</div>
     </div>
  );
}
  
  export default Gallery;

 