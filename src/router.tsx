import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import App from './App';
import NavBar from './pages/navBar';

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<Home />} />
        </Routes>
    );
}

export default Router;