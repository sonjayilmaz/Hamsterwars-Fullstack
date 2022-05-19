import './Gallery.css'
import {Link} from 'react-router-dom'
import { useState, useEffect} from 'react';
import HamsterCard from './HamsterCard.jsx';
import Api from '../../Api';

 function Gallery() {

  const [hamsterList, sethamsterList] = useState([]);

  useEffect(() => {

    if(hamsterList.length > 0)
    return;

    Api.getAllHamsters().then(data => sethamsterList(data));
  });


   return (
    <div className='gallery-container'>
       {
       hamsterList.map(hamster => 
        <HamsterCard battleMode={false} key={hamster.id} hamster={hamster} />,
        
       )}

<Link to='/form' className='formLink'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
            Add a new hamster
          </Link>
      
     </div>
   );

  }
  
  export default Gallery;
