import './Battle.css'

function Battle() {
    return (
        <div>
     <h1 className='battle-h1'>Battle</h1>
     {/* 
 När battle-vyn visas ska du slumpa två hamstrar, som visas för användaren. 
 Användaren ska klicka för att rösta på den sötaste. 
 Man ska kunna se bilderna och information om varje hamster - 
 men inte hur många vinster/förluster hamstern har. 
 (Det kan påverka hur man röstar!)

När användaren klickar ska båda hamster-objekten uppdateras: 
vinnaren får +1 vinst och förloraren +1 förlust. 
Nu ska du visa hur många vinster och förluster respektive hamster har. 
Användaren ska få möjligheten att starta en ny match, med två slumpade hamstrar.
se till så att det inte dyker upp samma hamster en gång till.

Tänk på att uppdatera alla dokument i databasen där vinst och förlust lagras.
     */}
     </div>
    );
  }
  
  export default Battle;