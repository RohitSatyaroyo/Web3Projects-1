import React,{useEffect,useState} from 'react';
import {ethers} from 'ethers';
import { contractABI,contractAddress } from '../utls/constants';

export const TransactionContext=React.createContext();

const {ethereum} =window;