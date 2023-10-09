import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { RiUserLine } from 'react-icons/ri'; 

function LoginC() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform form submission logic, e.g., sending the data to a server.
    console.log('Email:', email);
    console.log('Password:', password);
  };
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex flex-col p-16' >
     
      <form onSubmit={handleSubmit} className="flex flex-col justify-between">
        <div  className='flex flex-col gap-y-4'>
        <div className=' bg-gray-200 rounded-md  px-4 flex flex-row items-center' > 
         
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder='Matricule'
            className=' bg-gray-200 rounded-md py-2 px-4 border-transparent focus:outline-none'
          />
          <RiUserLine className=" text-gray-500" />
        </div>
        <div className=' bg-gray-200 rounded-md  px-4 flex flex-row items-center'>
          
          <input
             type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder='Mot de passe'
            className=' bg-gray-200 rounded-md py-2 px-4 border-transparent focus:outline-none '

          />
          <div className="icon" onClick={togglePasswordVisibility}>
          {showPassword ? <FaEyeSlash className=" text-gray-500" /> : <FaEye className=" text-gray-500" />}
        </div>
        </div>
        </div>
        <a className=' self-end text-gray-200 py-2' href='#mdpsoublié'>Mot de passe oublié </a>
        <button type="submit" className='flex bg-blue py-2 rounded-md text-white  mt-6 justify-center '>Se connecter</button>
      </form>
    </div>
  );
}

export default LoginC;
