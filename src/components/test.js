{/*import React, { useState } from "react";
import { create } from "web3.storage";

function UploadForm() {
  const [titleNumber, setTitleNumber] = useState("");
  const [owner, setOwner] = useState("");
  const [location, setLocation] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new LandTitle object from the input field values
    const newLandTitle = {
      titleNumber: titleNumber,
      owner: owner,
      location: location,
      registrationDate: registrationDate,
    };

    // Create a new web3.storage client
    const client = create();

    // Upload the LandTitle object to web3.storage
    const cid = await client.put(JSON.stringify(newLandTitle));

    // Log the CID to the console
    console.log(cid);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title Number:
        <input type="text" value={titleNumber} onChange={(e) => setTitleNumber(e.target.value)} />
      </label>
      <br />
      <label>
        Owner:
        <input type="text" value={owner} onChange={(e) => setOwner(e.target.value)} />
      </label>
      <br />
      <label>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </label>
      <br />
      <label>
        Registration Date:
        <input type="text" value={registrationDate} onChange={(e) => setRegistrationDate(e.target.value)} />
      </label>
      <br />
      <input type="submit" value="Submit" />
    </form>
  );
}


//current 
import React from 'react';
import {useState} from 'react';

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDI1NTYxMDc4OGY5Q0JmZGU1MDFkNDkyRUY1ODI2MDM0Y0QwZTNEYjIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzczMDM1NTExMjIsIm5hbWUiOiJMYW5kUmVnaXN0cnkifQ.-JZm83XB4BfxjMgvWOTi8MzULrsq71ilfNbfAK5HHMQ
const Application = () => {
  

  return (
    <div className='h-screen bg-[#1F2833]'>
      <h1 className='text-white text-2xl bg-[#1f2833] font-new' style={{marginLeft:'20px'}}>
        Please enter your details below 
   
      </h1>
      

    
    
  
    </div>
    
  )
}

export default Application*/}


{/*<div className='h-screen bg-[#1F2833]'>
    <form onSubmit={handleSubmit}>
      <div className='textInputWrapper text-white'>
        Title Number:
        <input type="text" value={titleNumber} onChange={(e) => setTitleNumber(e.target.value)}  />
      </div>

      <br />
     <div>
        Owner:
        <input type="text" value={owner} onChange={(e) => setOwner(e.target.value)} />
     </div>
      <br />
     <div>
        Location:
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
      </div>
      <br />
      <div>
        Registration Date:
        <input type="text" value={registrationDate} onChange={(e) => setRegistrationDate(e.target.value)} />
      </div>
      <br />
      <input type="submit" value="Submit" />
    </form>
    </div>*/}


    {/*import React, { useState } from "react";
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'



function Application() {
  const [titleNumber, setTitleNumber] = useState("");
  const [owner, setOwner] = useState("");
  const [location, setLocation] = useState("");
  const [registrationDate, setRegistrationDate] = useState("");

  const client = new Web3Storage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDI1NTYxMDc4OGY5Q0JmZGU1MDFkNDkyRUY1ODI2MDM0Y0QwZTNEYjIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzczMDM1NTExMjIsIm5hbWUiOiJMYW5kUmVnaXN0cnkifQ.-JZm83XB4BfxjMgvWOTi8MzULrsq71ilfNbfAK5HHMQ' });
  async function uploadDataToWeb3Storage() {
    const data = {
      titleNumber,
      owner,
      location,
      registrationDate,
    };
  
    const cid = await client.put(JSON.stringify(data));
  
    console.log(`Data uploaded to web3.storage with CID: ${cid}`);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await uploadDataToWeb3Storage();
  }

  return (
    <div className='h-screen bg-[#1F2833]'>
    <h1 className='text-2xl text-white'>Please enter your details below </h1>
    
      <div style={{ marginTop: '30px' }}>
        <input type='text' value={titleNumber} onChange={(e) => setTitleNumber(e.target.value)} placeholder='title number' />
      </div>
      <br />
      <div>
        <input type='text' value={owner} onChange={(e) => setOwner(e.target.value)} placeholder='owner' />
      </div>
      <br />
      <div>
        <input type='text' value={location} onChange={(e) => setLocation(e.target.value)} placeholder='location' />
      </div>
      <br />
      <div>
        <input type='text' value={registrationDate} onChange={(e) => setRegistrationDate(e.target.value)} placeholder='registration date' />
      </div>
      <br />
      <button type='submit' onClick={handleSubmit}>Upload to web3.storage</button>
  
  </div>
  );
}


export default Application;*/}