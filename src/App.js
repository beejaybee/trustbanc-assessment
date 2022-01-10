// import { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';


import Login from './components/Login';
import Dashboard from './components/Dashboard';

// import AuthContext from './context/AuthProvider'

const App = () => {
    // const { auth } = useContext(AuthContext);

   const user = JSON.parse(localStorage.getItem('profile'));; 
    console.log(user);
    return (
        <Router>
            <Routes>
                <Route path='/' exact element={<Navigate to='/login' />} /> 
                
                <Route path='/login' exact element={(!user ? <Login /> : <Navigate to='/dashboard' />)} />
                
                <Route path='/dashboard' element={ (user ? <Dashboard /> : <Navigate to='/login' />)} />
            </Routes>
        </Router>   
    )

}



export default App;