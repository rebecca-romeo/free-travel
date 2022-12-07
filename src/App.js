import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from './components/Header.js';
import TravelPhotos from './components/TravelPhotos.js'
import './App.css';


function App() {
  const[photos, setPhotos] = useState([]);
  
  useEffect( () => {
    const apiKey = 'Hmr8UwfnF0taBg8dfAjYymG0vhvNGt9QoT7BPAA599s';


    axios({
      url: "https://api.unsplash.com/photos/random",
      method: "GET",
      dataResponse: "json",
      params: {
        client_id: apiKey,
        query: "china",
        orientation: "landscape",
        count: 21
      },

    })
    .then( (res) => {
      console.log(res.data);
      setPhotos(res.data)
      
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



    <section>
      {photos.map((display) => {
        return (
          <TravelPhotos
          key={display.id} 
          src={display.urls.small} 
          alt={display.alt_description} 
          />
        );
      })}
      </section>


    </div>
  );
}

export default App;
