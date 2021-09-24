import React, { useEffect } from 'react'
import empirelogo from '../../images/empirelogo.png'
import bannerimage from '../../images/bg header.png'
import {Button} from 'reactstrap'
import {NavLink} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getMyItems, logInRequest } from '../../redux/ActionCreators'


function HomeNav(){
    const authedUser = useSelector(state => state.authedUser);
    const dispatch = useDispatch();
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
        return(
            <div>


                {/* display on md */}
                <div className="main-banner" id="none-sm">
                    <div className="image-banner">
                        <img src={bannerimage} alt="" className="w-100"/>
                    </div>
                
                    <div className="image-above-content">
                        <div className="mx-5 d-flex justify-content-end">
                            <Button className="text-white px-4" id="connect-btn" onClick={connectMetamask}>
                                {authedUser.authedUser.address ? (
                                    `${authedUser.authedUser.address.substring(0,5)}...${authedUser.authedUser.address.substring(38,42)}`
                                ) : 'Connect Wallet'}    
                            </Button>            
                        </div>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={empirelogo} alt="" className="w-100"/>
                                </div>
                                <div className="col-md-6">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <NavLink to="/marketplace" id="HomeNavlink">
                                                <div className="box-wrapper">
                                                    <div className="box">
                                                        <p className="text-white" id="home-hex-routes">Marketplace</p>         
                                                    </div>          
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className="col-md-6 p-0">
                                            <NavLink to="/resources" id="HomeNavlink">
                                                <div className="box-wrapper second-wrapper">
                                                    <div className="box">
                                                        <p className="text-white"  id="home-hex-routes">Resources</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-7">
                                            <NavLink to="/create" id="HomeNavlink">
                                                <div className="box-wrapper">
                                                    <div className="box">
                                                        <p className="text-white"  id="home-hex-routes">Create</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className="col-md-5 p-0">
                                            <NavLink to="/pricecharts" id="HomeNavlink">
                                                <div className="box-wrapper fourth-wrapper">
                                                    <div className="box">
                                                    <p className="text-white" id="home-hex-routes">Price Charts</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="col-md-4">
                                            <NavLink to="/audits" id="HomeNavlink">
                                                <div className="box-wrapper second-last-wrapper">
                                                    <div className="box">
                                                    <p className="text-white" id="home-hex-routes">Audit</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className="col-md-8 p-0">
                                            <NavLink to="/profile" id="HomeNavlink">
                                                <div className="box-wrapper last-wrapper">
                                                    <div className="box">
                                                    <p className="text-white" id="home-hex-routes">Profile</p>
                                                    </div>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="container">
                                <div className="row">
                                    <div className="col-8 offset-md-2 p-0">
                                        <div className="input-group mt-3 input-group-lg d-flex justify-content-center">
                                        <input type="text" className="form-control text-white" id="search-field-md" placeholder="Search NFTs,Items,Collections etc." aria-label="Username" aria-describedby="basic-addon1"></input>
                                        <i className="fal fa-search text-white" id="search-icon"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>       
                    </div>
                </div>



                {/* display on sm */}
                <div id="display-sm">
                    <div className="main-banner">
                        <div className="image-banner">
                            <img src={bannerimage} alt="..." className="w-100" id="banner-image"/>
                        </div>

                        <div className="image-above-content pt-2">
                            <div className="mx-3 d-flex justify-content-end">
                                <Button className="text-white px-4" id="connect-btn-sm" onClick={connectMetamask}>
                                {authedUser.authedUser.address ? (
                                    `${authedUser.authedUser.address.substring(0,5)}...${authedUser.authedUser.address.substring(38,42)}`
                                ) : 'Connect Wallet'}    
                                </Button>            
                            </div>

                            <div className="container-fluid">
                                <div className="row mt-4">
                                    <div className="col-5 offset-7" id="hex-col">
                                        <NavLink to="/marketplace" id="HomeNavlink">
                                            <div id="hex1" className="text-white d-flex align-items-center justify-content-center font-weight-light">Marketplace</div>
                                        </NavLink>
                                        <NavLink to="/resources" id="HomeNavlink">
                                            <div id="hex2" className="text-white d-flex align-items-center justify-content-center font-weight-light">Resources</div>
                                        </NavLink>
                                        <NavLink to="/pricecharts" id="HomeNavlink">
                                            <div id="hex3" className="text-white d-flex align-items-center justify-content-center font-weight-light">Price Charts</div>
                                        </NavLink>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-8 offset-4" style={{position:'relative'}}>
                                        <img src={empirelogo} alt="..." id="logoimg"></img>
                                    </div>
                                </div>
                                <div className="row" id="row-sm-3">
                                    <div className="col-9 offset-3" id="hex-col" style={{marginTop:'-8px'}}>
                                        <NavLink to="/statistics" id="HomeNavlink">
                                            <div id="hex4" className="text-white d-flex align-items-center justify-content-center font-weight-light">Statistics</div>
                                        </NavLink>
                                        <NavLink to="/audit" id="HomeNavlink">
                                            <div id="hex5" className="text-white d-flex align-items-center justify-content-center font-weight-light">Audit</div>
                                        </NavLink>
                                        <NavLink to="/profile" id="HomeNavlink">
                                            <div id="hex6" className="text-white d-flex align-items-center justify-content-center font-weight-light">Profile</div>
                                        </NavLink>
                                    </div>
                                </div> 

                            </div>



                             


                            <div className="container">
                                <div className="row" id="search-row">
                                    <div className="col-1"></div>
                                    <div className="col-10 p-0">
                                        <div className="input-group mt-2 input-group-lg d-flex justify-content-center">
                                            <input type="text" className="form-control text-white" id="search-field-sm" placeholder="Search NFTs,Items,Collections etc."></input>
                                            <i className="fal fa-search text-white" id="search-icon"></i>
                                        </div>
                                    </div>
                                    <div className="col-1"></div>

                                </div>
                            </div>

                        </div>
                    </div>
                

                </div>

            </div>

        )
}
export default HomeNav