import {BigNumber, ethers} from 'ethers';
import web3 from 'web3';
import React,{useState,useEffect} from 'react';

import abi from './Transaction.json';

let contract;
let t1;
let val="";
let receipt;
const Welcome =()=>{
  const [currentAccount,setCurrentAccount]=useState(null);
  const[balances,setbalances]=useState(null);
  const[ob,nb]=useState("Connect Wallet");
  const [sb,fb]=useState(null);
  const[contractdata,setcontractdata]=useState("empty");

  const[addr,setaddr]=useState(null);
  const[am,setam]=useState(null);
  const[ms,setms]=useState(null);
  const[ti,setti]=useState(null);
  const[key,setkey]=useState(null);
  const [inputValues, setInputValues] = useState(['', '', '', '', '']);




  const[details,setdetails]=useState({
     to:"",
     am:"",
     mess:"",
     tim:"",
     keyw:"",
  });
let addrss;
useEffect(()=>{
    
})


  const connectContract =async()=>{
    const cabi=[
      {
        "inputs": [],
        "name": "donate",
        "outputs": [],
        "stateMutability": "payable",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "join",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
      },
      {
        "inputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "name": "alist",
        "outputs": [
          {
            "internalType": "address",
            "name": "",
            "type": "address"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      },
      {
        "inputs": [],
        "name": "size",
        "outputs": [
          {
            "internalType": "uint256",
            "name": "",
            "type": "uint256"
          }
        ],
        "stateMutability": "view",
        "type": "function"
      }
    ];
    addrss='0x4c00De91428Fafda13634034A2bD69fFAB03066B';
    const provider=new ethers.providers.Web3Provider(window.ethereum);
    const signer=provider.getSigner();
    console.log(provider);
   
    
  
    contract=new ethers.Contract(addrss,cabi,signer);
     val=await contract.size();
          //To get hex code of payable functions or function in smart contract 
          // const hexx=contract.donate().encodeABI();
    console.log(val);
    setcontractdata(val.toString());
   
  
    console.log(contract.address);


  }
 

  async function joins(){
    console.log(parseInt(addr));
    connectContract();
  try{
    if(window.ethereum)
    {
      window.ethereum.request({method:'eth_requestAccounts'}).then(acs=>{
        const pm={
          from:acs[0],
          to:addrss.toString(),
          data:"0xb688a363",
          
      
        }
        const txe= window.ethereum.request({method:"eth_sendTransaction",params:[pm]}).then((txhash)=>{
          console.log(txhash);
          const gi=Number(contractdata)+Number(1);
          setcontractdata(gi.toString());
        })
        console.log("Transaction Succesfull");
        // const privatekey='133a1f2d755b9da7553c757ab184ca0cb2b6e4fee6fe9643c713b68b7f6b220f';
        // const signedTx =  web3.eth.personal.signTransaction(tx, privatekey);
        //  receipt =  web3.eth.sendSignedTransaction(signedTx.rawTransaction);
        

  })}}catch(err){
    alert("You are joined already");
  }
  
        // try{ 

        //   const pams={
        //     from:"0x8678F23BE0f3AD113E03f7aC37c50C8802289a1e",
        //     to:addrss.toString(),
        //          // gas:Number(21000).toString(16),
        //          // gasPrice:Number(250000).toString(16),
        //       //  value:Number(1000000000000000000*inputValues[1]).toString(16),
        //        data:"0xb688a363",
               
        //             };
        //         const tx=await  window.ethereum.request({method:"eth_sendTransaction",params:[pams]});
        //         console.log("Transaction Succesfull");

        // }catch(error){
        //   console.log("error");
        // }

       
          
     
        

        


    
   
    
  }

 const connectWallet =()=>{
  if(window.ethereum){
    window.ethereum.request({method:'eth_requestAccounts'}).then(accounts=>{
      setCurrentAccount(accounts[0]);
     window.ethereum.request({method:'eth_getBalance',params:[accounts[0],'latest']}).then(balance=>{
       fb(web3.utils.fromWei(balance,'ether')+'ETH');
       nb("Wallet Connected");

     })
      
    })
  
  }}



 const Donate =async(e)=>{
  connectContract();
 
    try{ 

          const pams={
            from:currentAccount.toString(),
            to:addrss.toString(),
                 // gas:Number(21000).toString(16),
                 // gasPrice:Number(250000).toString(16),
               value:Number(1000000000000000000*inputValues[1]).toString(16),
               data:"0xed88c68e",
               
                    };
                const tx=await  window.ethereum.request({method:"eth_sendTransaction",params:[pams]});
                console.log("Transaction Succesfull");

        }catch(error){
          console.log(error);
        }
  
  




 }
 function handleInputChange(index, event) {
  const newInputValues = [...inputValues];
  newInputValues[index] =event.target.value;
  setInputValues(newInputValues);
}
 console.log(inputValues);
 
    return(
      <div className="flex w-full justify-center items-center h-full">
        <div className="flex md:flex-row flex-col justify-between items-start md:p-20 py-12 px-4">
          <div className='flex flex-1 justify-start  flex-col md:mr-10'>
            <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>Send Crypto To Clear Your Sins, 2 Features Join and Donate,Click Join to Recieve Cryptos from Sinful Persons,Use Donate To clear Your Sins</h1><br></br>
            <h2 className='text-3xl sm:text-5xl text-white text-gradient py-1'>How This works?</h2><br></br>
            <h3 className='text-2xl sm:text-3xl text-white text-gradient py-1'>If 4 Persons Joined in this Website and Next Person want to donate 4 Ethers means each joined 4 person receive 1 ethers</h3><br></br>
            
            <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>Connect Your Wallet Before Join or Donate</h1><br></br>
          </div>
                 
        </div>
        <button onClick={connectWallet}  className="flex flex-row flex-col justify-center items-center bg-[#0000FF] my-5 p-3 rounded-full cursor-pointer hover:bg-[#ff0000]">{ob}</button>
        <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorpism">
          <h3 id="i1" className="text-white ">User Address:{currentAccount}</h3>
          <h3 id="i2" className="text-white">Balance:{sb}</h3>
          {/* <p className='text-white'>{contractdata}</p> */}
          {/* <button onClick={connectContract} className="flex flex-row flex-col justify-center items-center bg-[#0000FF] my-5 p-3 rounded-full cursor-pointer hover:bg-[#ff0000]">Connect Contract</button> */}
          <button onClick={joins} className="flex flex-row flex-col justify-center items-center bg-[#0000FF] my-5 p-3 rounded-full cursor-pointer hover:bg-[#ff0000]">JOIN</button>
        </div>
        <div className="p-1 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
          {/* <input type="text"  name="var1" id="var1"  placeholder="address to"  value={inputValues[0]}
          onChange={(event) => handleInputChange(0, event)}></input><br/><br/> */}
          <input type="number" name="var2" id="var2" placeholder="amount in ETH" value={inputValues[1]}
          onChange={(event) => handleInputChange(1, event)}></input><br/><br/>
          {/* <input type="text" name="var3" id="var3" placeholder="Keyword" value={inputValues[2]}
          onChange={(event) => handleInputChange(2, event)}></input><br/><br/>
          <input type="text"  name="var4" id="var4" placeholder="TimeStamp" value={inputValues[3]}
          onChange={(event) => handleInputChange(3, event)}></input><br/><br/>
          <input type="text"  name="var5" id="var5" placeholder="Enter Message" value={inputValues[4]}
          onChange={(event) => handleInputChange(4, event)}></input><br/><br/> */}
          
          <button className="text-white mt-2 w-full  border-[1px]  p-2 rounded-full cursor-pointer bg-[#00ff37] hover:bg-[#ff0000]" onClick={Donate}>Donate</button>
        </div>
      </div>
    )
}
export default Welcome;