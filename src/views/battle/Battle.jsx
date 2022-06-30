import React from "react";
import { useEffect, useState } from "react";


const Battle = () => {
    const [random1, setRandom1] = useState([]);
    const [random2, setRandom2] = useState([]);

    useEffect(() => {
        async function getRandomHamster(random) {
            const response = await fetch('/hamsters/random', { method: 'GET' });
            const data = await response.json();
            random(data);
        }

        getRandomHamster(setRandom1);
        getRandomHamster(setRandom2);
    }, []);

    return (
        <main className="container-battle">


            {random1 ? (
                <div
                    className="container1"
                    key={random1.id}
                >

                    <img src={`img/${random1.imgName}`} alt="hamster" />


                    <div className="description">
                        <h2>{random1.name}</h2>
                        <p>{random1.age} år</p>
                        <p>Favoritmat: {random1.favFood}</p>
                        <p>Gillar att: {random1.loves}</p>
                    </div>



                    

                  
                </div>
            ) : (
                " API"
            )}





    {/* Hamster nummer 2 */}


            {random2 ? (
                <div
                    className="container2"
                    key={random2.id}
                >



                    <img src={`img/${random2.imgName}`} alt="hamster" />

                    <div className="description">
                        <h2>{random2.name}</h2>
                        <p>{random2.age} år</p>
                        <p>Favoritmat: {random2.favFood}</p>
                        <p>Gillar att: {random2.loves}</p>
                    </div>
                </div>
            ) : (
                "API"
            )}
        </main>
    );
};

export default Battle;