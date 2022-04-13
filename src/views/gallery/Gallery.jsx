import './Gallery.css'
import { useState, useEffect} from 'react';
import { Base } from '../../Base.tsx';
import HamsterCard from './HamsterCard.jsx';
function Gallery() {

  const [list, setList] = useState([]);


  
   // Did finish loading
   useEffect(()=>{
     console.clear();

     fetch('http://localhost:1337/hamsters', {
      method: 'GET',
      //body: formData
      })
      .then(response => response.json())
      .then(result => {
        setList(result);
      })
      .catch(error => {
        console.error('Error:', error);
      });

     
   }, []);

   return (
    <div className='gallery-container'>
       {
       list.map(hamster => 
        <HamsterCard hamster={hamster} /> 
      )}
     </div>
   );

  }
  
  export default Gallery;