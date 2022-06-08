import { useState } from 'react';
import './HamsterForm.css';

const HamsterForm = () => {
  const [inputName, setInputName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [inputAge, setInputAge] = useState("");
  const [ageTouched, setAgeTouched] = useState(false);
  const [inputFavFood, setInputFavFood] = useState("");
  const [inputLoves, setInputLoves] = useState("");
  const [inputImgName, setInputImgName] = useState("");
  const [imgNameTouched, setImgNameTouched] = useState(false);
  const [wins] = useState(0);
  const [defeats] = useState(0);
  const [games, setGames] = useState(0);

  let nameIsValid = true;
  let nameErrorMessage = "";
  let nameClass = "";
  if (inputName === "") {
    nameIsValid = false;
    nameErrorMessage = "Please enter the hamster's name!";
  }
  if (nameTouched) {
    nameClass = nameIsValid ? "valid" : "error";
  }

  let ageIsValid = true;
  let ageErrorMessage = "";
  let ageClass = "";
  if (inputAge === "") {
    ageIsValid = false;
    ageErrorMessage = "Please enter the hamster's age!";
  }
  if (ageTouched) {
    ageClass = ageIsValid ? "valid" : "error";
  }

  let imgNameIsValid = true;
  let imgNameErrorMessage = "";
  let imgNameClass = "";
  if (inputImgName === "") {
    imgNameIsValid = false;
    imgNameErrorMessage = "Please enter the hamster's imageName!";
  }
  if (imgNameTouched) {
    imgNameClass = imgNameIsValid ? "valid" : "error";
  }

  let formIsInvalid = !nameIsValid || !ageIsValid || !imgNameIsValid;

  async function postHamster() {
    setGames(wins + defeats);

    const formData = {
      name: inputName,
      age: Number(inputAge),
      favFood: inputFavFood,
      loves: inputLoves,
      imgName: inputImgName,
      wins: wins,
      defeats: defeats,
      games: games,
    };

    console.log("formData: ", formData);

    await fetch(`/hamsters`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
  }

  return (
    <div>
      <h1 className='form-h1'>Hamster Form</h1>
      <div className='form-container'>
        <div className='hamster-form'>
          <div>
            <label>
                <p className='hamster-name'>Name</p>
              <input
                type='text'
                onBlur={() => setNameTouched(true)}
                onChange={(e) => {
                  console.log('controlled change', e.target.value);
                  setInputName(e.target.value);
                }}
                value={inputName}
                className={nameClass}
                required
              />
              {nameTouched ? (
                <div className='message'> {nameErrorMessage} </div>
              ) : null}
            </label>
          </div>
          <div>
            <label>
                <p className='hamster-age'>Age</p>
              <input
                type="text"
                onBlur={() => setAgeTouched(true)}
                onChange={(e) => {
                  console.log('controlled change', e.target.value);
                  setInputAge(e.target.value);
                }}
                value={inputAge}
                className={ageClass}
                required
              />
              {ageTouched ? (
                <div className='message'> {ageErrorMessage} </div>
              ) : null}
            </label>
          </div>
          <div>
            <label>
                <p className='hamster-food'>Favorite Food</p>
              <input
                onChange={(e) => {
                  console.log('controlled change', e.target.value);
                  setInputFavFood(e.target.value);
                }}
                value={inputFavFood}
              />
            </label>
          </div>
          <div>
            <label>
                <p className='hamster-loves'>Loves</p>
              <input
                onChange={(e) => {
                  console.log('controlled change', e.target.value);
                  setInputLoves(e.target.value);
                }}
                value={inputLoves}
              />
            </label>
          </div>
          <div>
            <label>
                <p className='hamster-image'>Image Name</p>
              <input
                type='text'
                onBlur={() => setImgNameTouched(true)}
                onChange={(e) => {
                  console.log('controlled change', e.target.value);
                  setInputImgName(e.target.value);
                }}
                value={inputImgName}
                className={imgNameClass}
                required
              />
              {imgNameTouched ? (
                <div className='message'> {imgNameErrorMessage} </div>
              ) : null}
            </label>
          </div>
          <button
            className='submitHamster'
            onClick={postHamster}
            disabled={formIsInvalid}
          >
            {" "}
            Add new hamster 🐹
          </button>
        </div>
      </div>
    </div>
  );
};

export default HamsterForm;

 