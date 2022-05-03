import './Battle.css'

function Battle() {

    return (
        <div>
            <h1 className='battle-h1'>Battle</h1>
            <div className='battle-container'>
                <div className='battle-left-container'></div>
                <div className='battle-right-container'></div>
            </div>
        </div>
    );
  }

  function GetRandomHamster()
  {
    fetch('http://localhost:1337/hamsters/random', {
        method: 'GET',
        //body: formData
        })
        .then(response => response.json())
        .then(result => {
          //setList(result);
        })
        .catch(error => {
          console.error('Error:', error);
        });
  }
  
  export default Battle;