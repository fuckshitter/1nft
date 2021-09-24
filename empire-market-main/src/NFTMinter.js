import web3 from './web3';
import NFTMinter from './ethereum/NFTMinterAbi.json';

const instance = new web3.eth.Contract(
    NFTMinter.abi, 
    process.env.REACT_APP_TOKEN_ADDRESS
);

export default instance;