
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
        
    <div className="card text-xl hidden sm:block" style={{marginBottom:'480px',marginRight:'1000px',overflow:'scroll'}}>
      <div className="align">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
      </div>
  
      <h1>Purpose</h1>
      <p>
      By using this platform, scientists and researchers can securely
       store and share their research data without the fear of it being
        tampered with or compromised. This is made possible by the use of
        InterPlanetary File System IPFS
      </p>
      </div>
  
  
      <div className="card text-xl hidden sm:block" style={{marginBottom:'480px', marginRight:'550px',overflow:'scroll'}}>
      <div className="align">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
      </div>
  
      <h1>How</h1>
      <p>
        This platform allows the research data to be stored in a distributed manner across multiple nodes, rather than being stored 
        in a central location, which makes it much more resistant to tampering or interference. Overall, this decentralised platform 
        provides a secure and reliable way for scientists and researchers to share research proposals and data within the scientific 
        community
      </p>
  
      </div>
      
  
      <div className="card text-xl hidden sm:block" style={{marginBottom:"480px",marginRight:'100px',overflow:'scroll'}}>
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
