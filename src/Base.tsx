export abstract class Base {         
    
    public static Time(flux: Number = 0): Number {
      return Math.trunc((Date.now() / 1000) + flux.valueOf());
    }
    
    public static GetAllHamster(): any {

      fetch('http://localhost:1337/hamsters', {
      method: 'GET',
      //body: formData
    })
    .then(response => response.json())
    .then(result => {

      
      console.log('Success:', result);
      return result;
    })
    .catch(error => {
      console.error('Error:', error);
    });

      return null;
    }

}
