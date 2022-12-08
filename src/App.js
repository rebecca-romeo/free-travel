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
        query: "Australia",
        orientation: "landscape",   
        count: 21
      },
    })
    .then( (res) => {
      console.log(res.data);
      setPhotos(res.data)
      console.log('country here', res.data[0].location.country)

      // const countryName = res.data[0].location.country
      setCountry(res.data[0].location.country);
    });
  }, []);


  // const getPhotos = async () => {
  //   const url = new URL('https://api.unsplash.com/photos/random')

  //   url.search = new URLSearchParams({
  //       client_id: 'Hmr8UwfnF0taBg8dfAjYymG0vhvNGt9QoT7BPAA599s',
  //       query: "china",
  //       count: 20
  //   })

  //   const res = await fetch(url)
  //   const data = await res.json()
  //   console.log(data)
  //   console.log(data.urls.small)
  // }
  // getPhotos();





  return (
    <div className="App">
      <Header />
      <Form />

      <h3>Welcome to {country}</h3>



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
