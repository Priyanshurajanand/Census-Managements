import React from 'react'
import { useNavigate } from 'react-router-dom';
import CensusForm from '../components/CensusForm';

const AddData = () => {
  const navigate = useNavigate();


  

  const addPerson = async (person) => {
    await fetch('http://localhost:3000/vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(person),
    });

    setTimeout(() => {
      navigate('/');
    }, 2000);
    
  };

  return (
    <>
      <h1 className='text-center text-2xl font-bold mt-20' > Fill details to add data in census </h1>
      <CensusForm onAddPerson={addPerson} />
    </>
  )
}

export default AddData