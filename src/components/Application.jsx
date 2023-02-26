import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js'




function Application() {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  // Construct with token and endpoint
  const client = new Web3Storage({ token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDI1NTYxMDc4OGY5Q0JmZGU1MDFkNDkyRUY1ODI2MDM0Y0QwZTNEYjIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzczNDg1NzY5MTQsIm5hbWUiOiJMYW5kcmVnaXN0cnktMiJ9.IXCajfgrwI6gRZ2CkMQ-sBJKESjXq0_t0AMZ6ObppIk'});
  const onDrop = async acceptedFiles => {
    setLoading(true);
    // Pack files into a CAR and send to web3.storage
    const rootCid = await client.put(acceptedFiles) // Promise<CIDString>
    // Get info on the Filecoin deals that the CID is stored in
    const info = await client.status(rootCid) // Promise<Status | undefined>
    // Fetch and verify files from web3.storage
    const res = await client.get(rootCid) // Promise<Web3Response | null>
    const files = await res.files() // Promise<Web3File[]>
    setFiles(files.map(file => ({
      cid: file.cid,
      name: file.name,
      size: file.size,
      preview: URL.createObjectURL(file)
    })));
    setLoading(false);
  };

  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop, accept: 'application/pdf'});

  return (
    <div className="h-screen bg-[#1F2833] flex flex-col">
        <div className="flex justify-between">
            <div className="w-1/2">
                <div {...getRootProps()} className={`dropzone border border-[#fff] text-xl font-poppins text-white p-20 ${isDragActive && 'dropzone--isActive'}`} style={{marginTop:'370px', marginLeft:'40px'}}>
                    <input {...getInputProps()} />
                    {
                      isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag 'n' drop json files here, or click here to select files...</p>
                    }
                </div>
                {loading && <p className="mt-3 text-white spinner" style={{marginLeft:'60px', marginTop:'45px'}}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  
                  
                  </p>}
                <div className="mt-3 text-white" style={{marginLeft:'20px'}}>
                    <ul>
                      {files.map(file => (
                        <li key={file.cid}>
                           {file.name}
                           {file.size} bytes - CID: {file.cid}
                           <a href={`https://ipfs.io/ipfs/${file.cid}`} onClick={() => window.open(`https://ipfs.io/ipfs/${file.cid}`,'_blank')} style={{marginLeft:'20px'}} >View the file</a>
                           
                        </li>
                        
                      ))}
                    </ul>
                </div>
            </div>

            <div className="w-1/2 text-white mt-5">

              <div>
               
              </div>
              
             <div className='text-3xl font-poppins' style={{marginLeft:'350px',marginTop:'100px'}}>Instructions</div>
              <li style={{marginTop:'18px', marginLeft:'200px'}}>
                  Drag & drop or click on the box provided to upload your file
                  <li>
                    Once selected the file, upload it
                  </li>
                  <li>
                      After it's successfully uploaded you will get The CID of it
                  </li>
                  <li>
                    You will also get an option to view the file 
                  </li>
                  <li>
                      Store the CID somewhere to view and share your land details
                  </li>

                      </li>
<br />
                      <div className='text-3xl' style={{marginLeft:'350px',marginTop:'15px'}}>
                        formatting
                      </div>
                      <br />
                     <div className='' style={{marginLeft:'300px'}}>
                          Create a .json file which specifies :
                      </div>

                      <li style={{marginLeft:'335px',marginTop:'10px'}}>
                        Name of the owner 
                      </li>
                      <li style={{marginLeft:'335px'}}>
                        Registeration date
                      </li>
                      <li style={{marginLeft:'335px'}}>
                        Location ( co-ordinates )
                      </li>



     
                      <div class="bar" style={{marginTop:'150px',marginLeft:'320px'}}>
                      <div class="ball"></div>
                      </div>






            </div>
        </div>
    </div>
  );
}




export default Application;