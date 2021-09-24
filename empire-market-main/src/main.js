import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAuctions, getItemsOnSale, getMyItems, logInRequest } from './redux/ActionCreators';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Profile from "./components/profile/profile";
import Create from "./components/create/create";
import Collectible from "./components/collectibles/collectible";
import Home from './components/home/home'
import Marketplace from '../src/components/marketplace/marketplace'
import Settings from '../src/components/Settings/Settings'
import Nav from './components/Navbar/Nav';
import HomeNav from './components/home/homeNav';


export default function Main(){
  const dispatch = useDispatch();
  const authedUser = useSelector(state => state.authedUser);
  const connectMetamask = async () => {
      console.log('here');
      if (!window.ethereum){
          alert('Install metamask first!');
      }
      else if (window.ethereum.chainId !== process.env.REACT_APP_CHAIN_ID){
          alert('Connect to BSC Testnet')
      }
      else{
          var accs = await window.ethereum.request({ method: 'eth_requestAccounts' });
          if (accs.length > 0){
            dispatch(logInRequest(accs[0]))
            .then(res => {
              if (res.type === "LOGGED_IN"){
                //retrieve user's items
                dispatch(getMyItems(accs[0]));
              }
            });
          }
          else{
            alert('Please connect to MetaMask.');
          }
      }
  }
  
  useEffect(() => {
    connectMetamask();
    dispatch(getItemsOnSale());
    dispatch(getAllAuctions());
  }, []);

  return(
    <div>
    <Router>
      <Route path="/" component={Home} exact={true}></Route>
      <Route path="/marketplace" component={Marketplace} exact={true}></Route>
      <Route path="/profile" component={Profile} exact={true}></Route>
      <Route path="/create" component={Create} exact={true}></Route>
      <Route path="/collectible" component={Collectible} exact={true}></Route>
      <Route path="/settings" component={Settings} exact={true}></Route>
    </Router>
  </div>
  );
}