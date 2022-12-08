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

  // state that holds the user's form input 
  const[input, setInput] = useState('');

  // state that holds the photos from api
  const[photos, setPhotos] = useState([]);
  
useEffect( () => {
    const apiKey = 'Hmr8UwfnF0taBg8dfAjYymG0vhvNGt9QoT7BPAA599s';
    axios({
      url: "https://api.unsplash.com/photos/random",
      method: "GET",
      dataResponse: "json",
      params: {
        client_id: apiKey,
        query: input,
        orientation: "landscape",   
        count: 21
      },
    })
    .then( (res) => {
      setPhotos(res.data)
      setCountry(res.data[0].location.country);
    });
  }, [input]);





  const userChoice = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
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
