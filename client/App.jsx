import React from "react";
//import child components/ containers
import Navbar from './components/Navbar.jsx';
import ContentContainer from './containers/ContentContainer.jsx'


const App = () => {
    return (
        <div className="app-container">
            <Navbar />
            {/* <Routes>
                <Route path='/login' element={<Login />} />
            </Routes> */}

            <ContentContainer />
        </div>
    )
}

export default App;