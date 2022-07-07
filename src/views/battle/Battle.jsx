import React from "react";
import { useEffect, useState } from "react";
import BattleCard from "./BattleCard";


//import {toast} from 'react-toastify'
//import Spinner from "../../components/Spinner";


const Battle = () => {
    const [hamsterOne, setHamsterOne] = useState([]);

    useEffect(() => {
        async function getRandomHamster(random) {
          const response = await fetch('/hamsters/random', { method: 'GET' });
          const data = await response.json();
          random(data);
        }
    
        getRandomHamster(setHamsterOne);
      }, []);
   
   
    return (
        <main className="container-battle">

                {/* Hamster nummer 1 */}

                <div className="hamster-one">   
                <BattleCard hamsterOne={hamsterOne}/>
                </div>
            

                {/* Hamster nummer 2 
                
                <div className="hamster-two">
                <HamsterCard hamsterTwo={hamsterTwo}/>
                </div>
                */}
        </main>
);
    }

export default Battle;