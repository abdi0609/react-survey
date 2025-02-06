
//må importere dette for å bruke usestae

import Checkboxes from "./checkboxes";
import RadioButtons from "./RadioButtons";
import { useState } from "react";

function Form(){
      // State for å lagre brukerens svar
  const [formData, setFormData] = useState({
    review: "",
    username: "",
    email: "",
    rating: "",
    activities: [],
    // Legg gjerne til flere svar her senere, f.eks. for Checkbox og RadioButtons
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
        setFormData((prevData) => {
          if (checked) {
            return { ...prevData, activities: [...prevData.activities, value] };
          } else {
            return {
              ...prevData,
              activities: prevData.activities.filter((activity) => activity !== value),
            };
          }
        });
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    
    console.log("current state: " ,formData);
  }
  function handleSubmit(event) {
    event.preventDefault(); // Hindrer siden i å laste på nytt

   
    for (let key in formData) {
        console.log(`${key}: ${formData[key]}`);
      }
  
      alert("Takk for tilbakemeldingen din!");
      setFormData({
        review: "",
        username: "",
        email: "",
        rating: "",
        activities: [],
      });
    }


return (
<form className="form" onSubmit={handleSubmit}>
  <h2>Tell us what you think about your rubber duck!</h2>
  <div className="form__group radio">
    <h3>How do you rate your rubber duck colour?</h3>
    <RadioButtons handleChange={handleChange}/>
  </div>
  <div className="form__group">
    <h3>How do you like to spend time with your rubber duck</h3>
    <Checkboxes selectedActivities={formData.activities} handleChange={handleChange}/>
  </div>
  <label
    >What else have you got to say about your rubber duck?<textarea
      name="review"
      cols="30"
      rows="10"
      value={formData.review}
      onChange={handleChange}
    ></textarea></label
  ><label
    >Put your name here (if you feel like it):<input
      type="text"
      name="username"
      value={formData.username}
      onChange={handleChange}/></label
  ><label
    >Leave us your email pretty please??<input
      type="email"
      name = "email"
      value={formData.email}
      onChange={handleChange} /></label
  ><input className="form__submit" type="submit" value="Submit Survey!" />
</form>
    );
}


export default Form;
