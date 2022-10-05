import React from "react";
//import child components/ containers
import Navbar from './components/Navbar.jsx';
import ContentContainer from './containers/ContentContainer.jsx'


// const App = () => {
//     return (
//         <Homepage />
//     )
// }


// fetch('/api/', {
//     method: 'GET',
//     headers: { "Content-Type": "application/json" },
//     body: ''
// })
//     .then((data) => {
//         return data.json();
//     })
//     .catch(err => console.log(err))

const App = () => {

    return (
        <div className="app-container">
            <Navbar />
            <ContentContainer />
        </div>
    )
}

export default App;