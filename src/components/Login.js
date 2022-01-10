import { useState, useContext } from 'react';

import AuthContext from '../context/AuthProvider'

import { API } from '../api';

import trustbancLogo from '../images/trustbanclogo.png'

const initialState = {
    phoneNumber: '',
    password: '',
}

const LOGIN_URL = '/Authentication/LoginUser';



const Login = () => {

    const [formData, setFormData] = useState(initialState);

    const { setAuth } = useContext(AuthContext);

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { phoneNumber, password } = formData;
        try {
            const response = await API.post(LOGIN_URL,
                { phoneNumber, password },
                { headers: { 'Content-Type': 'Application/json' } }
            );
            const { firstname, bvn, sessionID } = response?.data;

            setAuth({ firstname, phoneNumber, bvn, sessionID });
            localStorage.setItem('profile', JSON.stringify(sessionID));
            localStorage.setItem('name', JSON.stringify(firstname));
            localStorage.setItem('bvn', JSON.stringify(bvn));
            window.location.reload();
            setFormData(initialState);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div id="login-page">
            <div id="login-card">
                <div className="login-containerLogo">
                    <img src={trustbancLogo} alt="trustbanc" />
                    <div>
                        <p>
                            Are you a new customer or an existing customer yet to setup your online account?    
                        </p>
                        <button>GET STARTED</button>
                    </div>
                </div>
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <h4>Log in to your account</h4>
                        <div className="login-input">
                            <input
                                name='phoneNumber'
                                type='text'
                                placeholder='Phone Number'
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="login-input">
                            <input
                                name='password'
                                type='password'
                                placeholder='Password'
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button className="login-button">LOGIN</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login