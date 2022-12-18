import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header.js';
import Form from "./components/Form.js";
import TravelPhotos from './components/TravelPhotos.js'
import Footer from './components/Footer.js';
import './components/FontawesomeIcons';
import './App.css';



function App() {

  // state that holds the current country from api
  const[country, setCountry] = useState('');
  const[city, setCity] = useState('');

  // state that holds the user's form input 
  const[input, setInput] = useState('');

  const[savedInput, setSavedInput] = useState('Canada');

  // state that holds the photos from api
  const[photos, setPhotos] = useState([]);
  
useEffect( () => {
    const apiKey = 'LVlFUSS-0R1ZRwOiVjZsa_qT7YxsbG2YpjNTAkYc5bg';
    axios({
      url: "https://api.unsplash.com/photos/random",
      method: "GET",
      dataResponse: "json",
      params: {
        client_id: apiKey,
        query: savedInput,
        orientation: "landscape",   
        count: 21
      },
    })
    .then( (res) => {
      if(res.data[0].location.country !== null || res.data[0].location.city !== null) {
        setPhotos(res.data)
        setCountry(res.data.location.country);
        console.log("checking the country", res.data.location.country);
        setCity(res.data.location.city);
        console.log("checking out the data", res.data[0])
      } else {
        alert('Sorry, please try again!');
      }

    });
  }, [savedInput]);


  // if(country === null || city === null)

  // on submit, if location = null, return error alert
  // else return data 





  const userChoice = (e) => {
    setInput(e.target.value)
  }

  
  console.log("this one", savedInput);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSavedInput(input);
  }



  return (
  <div className="App">
    <Header />

    <Form 
      userChoice={userChoice}
      input={input} 
      handleSubmit={handleSubmit} />

    <h3> {country}</h3>

    <section className="wrapper">
      {photos.map((display) => {
        return (
          <TravelPhotos
          key={display.id} 
          src={display.urls.small} 
          alt={display.alt_description}
          likes={display.likes} 
          />
        );
      })}
      </section>

      <Footer />
    </div>
  );
}

export default App;
