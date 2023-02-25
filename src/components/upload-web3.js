import { Web3Storage } from 'web3.storage/dist/bundle.esm.min.js';

const client = new Web3Storage({ token: 'YOUR_API_KEY' });

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