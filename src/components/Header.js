import planeImage from './planeImage.png';
const Header = () => {  
  return (
    <header>
      {/* Header wave effect made using https://www.app.websitebackgroundmaker.com */}
      <div className="wave">
        <svg width="100%" height="200px" fill="none" version="1.1"
        xmlns="http://www.w3.org/2000/svg">
          <path 
            fill="white" 
            d="
              M0 67
              C 273,183
                822,-41
                1920.01,106 
              V 359 
              H 0 
              V 67
              Z">
          </path>
        </svg>
      </div>

      <div id="container">
          <h1>FreeTravel</h1>
          <h2>explore the world from home</h2>
          <img src={planeImage} alt="cartoon plane flying" />
      </div> 
    </header>
  )
}

export default Header; 