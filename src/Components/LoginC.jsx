import React, { useState } from 'react';

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

  return (
    <div className='flex flex-col' >
      
      <form onSubmit={handleSubmit} className="flex flex-col justify-between">
        <div  className='flex flex-col gap-y-4'>
        <div>
         
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder='Email'
            className=' bg-gray-200 rounded-md py-2 px-4 '
          />
        </div>
        <div>
          
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder='Mot de passe'
            className=' bg-gray-200 rounded-md py-2 px-4 '

          />
        </div></div>
        <button type="submit" className='flex bg-blue-500 py-2 rounded-md text-white  mt-6 justify-center '>Se connecter</button>
      </form>
    </div>
  );
}

export default LoginC;
