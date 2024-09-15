import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faEye } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faPinterest, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleLogin = () => {
        // Perform validation
        if (email && password) {
            // If both fields are filled, navigate to home
            navigate('/home');
        } else {
            // Show some validation error (could be an alert or inline message)
            alert('Please fill in both email and password.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-80">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <p className="text-center text-gray-600 mb-4">
                    By signing in you are agreeing to our <a href="#" className="text-blue-500">Terms and privacy policy</a>
                </p>
                <div className="flex justify-center mb-4">
                    <a href="#" className="text-blue-500 border-b-2 border-blue-500 pb-1 mr-4">Login</a>
                    <a href="#" className="text-gray-400 pb-1">Register</a>
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <FontAwesomeIcon icon={faEnvelope} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="border-b-2 border-pink-500 w-full py-2 pl-10 focus:outline-none"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                </div>
                <div className="mb-4">
                    <div className="relative">
                        <FontAwesomeIcon icon={faLock} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            placeholder="Password"
                            className="border-b-2 border-gray-300 w-full py-2 pl-10 focus:outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <FontAwesomeIcon
                            icon={faEye}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                            onClick={togglePasswordVisibility}
                        />
                    </div>
                </div>
                <div className="flex items-center justify-between mb-4">
                    <label className="flex items-center">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-blue-500" />
                        <span className="ml-2 text-gray-600">Remember password</span>
                    </label>
                    <a href="#" className="text-blue-500">Forget password</a>
                </div>
                <button
                    onClick={handleLogin}
                    className="bg-blue-600 text-white w-full py-2 rounded shadow-lg hover:bg-blue-700 active:bg-blue-800"
                >
                    LOGIN NOW!
                </button>

                <div className="text-center text-gray-600 my-4">or connect with</div>
                <div className="flex justify-center space-x-4 mb-4">
                    <a href="#"><FontAwesomeIcon icon={faFacebook} className="text-2xl text-blue-700" /></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram} className="text-2xl text-pink-500" /></a>
                    <a href="#"><FontAwesomeIcon icon={faPinterest} className="text-2xl text-red-600" /></a>
                    <a href="#"><FontAwesomeIcon icon={faLinkedin} className="text-2xl text-blue-700" /></a>
                </div>
            </div>
        </div>
    );
}

export default Login;
