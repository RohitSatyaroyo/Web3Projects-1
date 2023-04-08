// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

contract unsin{
    address[] public alist;
    uint s=0;
    mapping(address=>bool) adcheck;
    event dep(address from);
    event rec(address f,address t);

       function join()public {
           require(adcheck[msg.sender]==false,"You already JOINED!!!!!!!!");
           alist.push(msg.sender);
           s++;
           adcheck[msg.sender]=true;
           emit dep(msg.sender);
       }

       function size()public view returns(uint){
         return alist.length;
          
       }

       function donate()public payable {
           uint am=msg.value/s;
           for(uint i=0;i<alist.length;i++){
               payable(alist[i]).transfer(am);
               emit rec(msg.sender,alist[i]);

           }
       }
}