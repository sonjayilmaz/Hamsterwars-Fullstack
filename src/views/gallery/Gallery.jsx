import './Gallery.css'
import { useState, useEffect} from 'react';
import HamsterCard from './HamsterCard.jsx';
import Api from '../../Api.js';


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
        <HamsterCard battleMode={false} key={hamster.id} hamster={hamster} />
      )}
     </div>
   );

  }
  
  export default Gallery;
