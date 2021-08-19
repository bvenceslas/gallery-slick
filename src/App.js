import { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';

class App extends Component {

  render() {
    const pics = [
      {
        name:'pic 1',
        url:'https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        name:'pic 2',
        url:'https://images.pexels.com/photos/2387869/pexels-photo-2387869.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      },
      {
        name:'pic 3',
        url:'https://images.pexels.com/photos/5409751/pexels-photo-5409751.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
      }
    ]

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    }

    return (
      <div className="App">
        {
          pics.map((pic) => {
            return (
              <>
                <h2> Mountain design</h2>
                
                <Slider {...settings}>
                  <div>
                    <img width="100%" src={pic.url} />
                  </div>
                  
                </Slider>
              </>
            )
          })
        }
      </div>
    );
  }
  }

  

export default App;
