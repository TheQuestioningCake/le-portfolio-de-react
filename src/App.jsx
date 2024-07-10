// import './App.css'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
// import Socials from './components/Socials'
// import Main from './components/Main'
// import Aside from './components/Aside'
import { Outlet } from 'react-router-dom'
function App() {
    return (
        <>
            <Navigation />
            <Outlet />
            {/* <Main  />
            <Aside /> */}
            {/* <Socials /> */}
                <Footer />
        </>
    );
}

export default App;