import React from "react";
//import child components/ containers
import Navbar from './components/Navbar.jsx';
import ContentContainer from './containers/ContentContainer.jsx'


const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            <ContentContainer />
        </div>
    )
}

export default App;