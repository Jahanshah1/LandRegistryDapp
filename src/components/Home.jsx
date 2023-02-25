
import React from 'react';


const Home = () => {
  return (


    <div className="h-screen bg-[#1F2833]">
    <nav className="p-4 flex items-center justify-between">
      <div className="w-3/4 flex justify-start">
      
  
  
  
    
  
        <div className="text-6xl font-[poppins] text-white hidden sm:block" style={{marginLeft:'80px', marginTop:'100px'}}>
          Decentralised Land Registry Platform
          <div className='sm:block md:hidden lg:hidden xl:hidden'>
            jfndm 
          </div>
        </div>
        <div className='sm:block md:hidden lg:hidden xl:hidden text-3xl text-white font-poppins flex justify-center' style={{marginTop:'30px',}}>
            decentralised Land Registry Platform
            <br />
            <br />
            Please use a desktop :)
          </div>
       
  
  
  
  
    
  </div>
  
  
      
  
      <div className="w-1/4 flex justify-end">
      </div>
    </nav>
  

    <div className="relative flex items-center justify-center h-full bg-[#1F2833]">
   
    <div className="sm:block md:hidden lg:hidden xl:hidden text-white" style={{marginBottom:'480px',marginLeft:'50px'}}>
          <h2>Unfortunately this App is not compatible with smartphones at the moment</h2>
  
        </div>
        <div class="boxes">
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="box">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</div>
        
    <div className="card2 text-xl hidden sm:block" style={{marginBottom:'480px',marginRight:'1000px',overflow:'scroll'}}>
      <div className="align">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
      </div>
  
      <h1>Purpose</h1>
      <p>
      The purpose of this platform is to provide a secure and transparent decentralized land registry 
      system that uses smart contracts and web3.storage to verify and store land ownership data. The platform aims
       to offer features such as land dispute resolution, land valuation, and property transactions, ensuring fair and 
       transparent processes for all parties involved. By using blockchain technology, the platform can provide a tamper-proof 
       and trustworthy system that enables property owners to register their ownership details with confidence.
      </p>
      </div>
  
  
      <div className="card2 text-xl hidden sm:block" style={{marginBottom:'480px', marginRight:'550px',overflow:'scroll'}}>
      <div className="align">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
      </div>
  
      <h1>How</h1>
      <p>
        This platform allows the land data to be stored in a 
        distributed manner across multiple nodes using IPFS. Further 
        using smart contract the details are verified and finally stored 
        on the blockchain.
      </p>
  
      </div>
      
  
      <div className="card2 text-xl hidden sm:block" style={{marginBottom:"480px",marginRight:'100px',overflow:'scroll'}}>
      <div className="align">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
      </div>
  
      <h1>About</h1>
      <p>
        Created by Jahan Shah
      </p>
      
      </div>
     
  
  
  
    </div>
    { /*<ConnectWallet />*/}
   {/*test*/}
  </div>
  )
}

export default Home
