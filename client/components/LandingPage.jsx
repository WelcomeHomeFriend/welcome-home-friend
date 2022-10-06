import React from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '../styles/MUIComponents.jsx'
import { useNavigate } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import kobe from '../images/kobe.jpg';
import jinx from '../images/jinx.jpg';
import logo from '../images/logo_navbar.png';

// const getImgsPaths = () => {
//     fetch('/api/images', {
//         method: 'GET',
//         headers: { "Content-Type": "application/json" },
//         body: ''
//     })
//         .then((data) => {
//             return data.json();
//         })
//         .catch(err => console.log(err))
// }

/*

const imageUrl = "https://.../image.jpg";

fetch(imageUrl)
  //                         vvvv
  .then(response => response.blob())
  .then(imageBlob => {
      // Then create a local URL for that image and print it 
      const imageObjectURL = URL.createObjectURL(imageBlob);
      console.log(imageObjectURL);
  });

*/

//<img src={require('/images/image-name.png')} />

const imagesPathsArray = [kobe, jinx, logo]
// const imagesPathsArray = ['../images/kobe.jpg',
//     '../images/jinx.jpg',
//     '../images/logo_navbar.png']

const CarouselImg = ({ imagesPaths }) => {
    // Map an array of 6 random photos 
    let arrayOfImages = imagesPaths.map((el, i) => {
        console.log(el)
        return (
            <div>
                <img key={i} src={el} width={'50px'} />
                <p className="legend"></p>
            </div>
        )
    });
    console.log(arrayOfImages);
    return (
        <Carousel>
            {arrayOfImages}
        </Carousel>
    );
}

const LandingPage = (props) => {
    let navigate = useNavigate();

    // fetch('/api/', {
    //     method: 'GET',
    //     headers: { "Content-Type": "application/json" },
    //     body: ''
    // })
    //     .then((data) => {
    //         return data.json();
    //     })
    //     .catch(err => console.log(err))

    return (
        <>
            <div>LandingPage</div>
            <Button onClick={() => { navigate('/login') }}>Login</Button>
            <Button onClick={() => { navigate('/signup') }}>Sign Up</Button>
            <div className='missionStatement'>
                Mission Statement
            </div>
            <CarouselImg imagesPaths={imagesPathsArray} />
        </>
    );
}


export default LandingPage;

// fetch('/api/found', {
//     method: 'POST',
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify( {_id: petObj._id} )
//   })
//     .then(() => {
//       addPetData({DELETEID: petObj._id});
//     })
//     .catch(err => console.log(err))
// }