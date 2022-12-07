import { useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header.js';
import './App.css';


function App() {
  
  useEffect( () => {
    const apiKey = 'Hmr8UwfnF0taBg8dfAjYymG0vhvNGt9QoT7BPAA599s';


    axios({
      url: "https://api.unsplash.com/photos/random",
      method: "GET",
      dataResponse: "json",
      params: {
        client_id: apiKey,
        query: "china",
        count: 20
      },

    })
    .then( (res) => {
      console.log(res);
      
    });



  }, [] );


  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
