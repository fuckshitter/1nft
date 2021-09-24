import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import imageOnTrending3 from '../../images/imageOnTrending3.jpeg';
import cat1 from '../../images/cat1.jpg';
import cat4 from '../../images/cat4.jpg';
import fb from '../../images/fb.png';
import youtube from '../../images/youtube.png';
import twitter from '../../images/twitte.png';
import insta from '../../images/insta.png';
import { Button } from 'reactstrap';
import plus from '../../images/follow plus .png'
import imageOnTrending from '../../images/imageOnTrending1.jfif'


export default function ProfileMiddle(){
  const authedUser = useSelector(state => state.authedUser);
  const [selectedTab, setSelectedTab] = useState('auction');
  const tabClicked = (idd) => {
    document.getElementById(selectedTab).classList.remove('active');
    document.getElementById(idd).classList.add('active');
    setSelectedTab(idd);
  }
  return(
    <div className="container-fluid">
      <div className="row" style={{paddingLeft: '30px', paddingRight: '30px'}}>
        <div className="col-12 col-sm-5 mt-3">
          <div className="pic-name-addrs">
            <img src={imageOnTrending3} className="profile-pic-img" />
            <div className="name-address">
              <span className="username">Name</span>
              <span className="address">{authedUser.authedUser.address}</span>
            </div>
          </div>
          <div className="user-desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Vivamus et sollicitudin velit, id feugiat felis. Morbi luctus,
            velit quis convallis vehicula, ante libero imperdiet augue,
            ut placerat nisl quam non lorem Lorem ipsum dolor sit amet,
            consectetur tadipiscing elit.
          </div>
          <div className="row">
            <div className="col-6">
              <div className="social-detail  mt-2">
                <img src={fb} className="social-icon" />
                <span>@AmyAndrea</span>
              </div>
              <div className="social-detail  mt-2">
                <img src={insta} className="social-icon" />
                <span>@Amy_Andrea</span>
              </div>
            </div>
            <div className="col-6">
            <div className="social-detail  mt-2">
                <img src={twitter} className="social-icon" />
                <span>@Amy.Andrea12</span>
              </div>
              <div className="social-detail mt-2">
                <img src={youtube} className="social-icon" />
                <span>@AmyAndreaOfficial</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button className="follow-btn">Follow +</button>
              <div className="share-msg-btn">
                <img src={fb} />
              </div>
              <div className="share-msg-btn">
                <img src={youtube} />
              </div>
            </div>

          </div>
        </div>
        <div className="col-12 col-sm-7 mt-3">
          <img src={cat1} className="weird-img" />
          <ul className="nav nav-pills nav-fill profile-view-tabs">
            <li className="nav-item" onClick={() => tabClicked('auction')}>
              <span className="active" id="auction">On Auction</span>
            </li>
            <li class="nav-item" onClick={() => tabClicked('owned')}>
              <span id="owned" >Owned</span>
            </li>
            <li class="nav-item" onClick={() => tabClicked('created')}>
              <span id="created">Created</span>
            </li>
            <li class="nav-item" onClick={() => tabClicked('liked')}>
              <span id="liked" >Liked</span>
            </li>
            <li class="nav-item" onClick={() => tabClicked('followers')}>
              <span id="followers">Followers</span>
            </li>
            <li class="nav-item" onClick={() => tabClicked('following')}>
              <span id="following">Following</span>
            </li>
          </ul>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-3">
            <div className="card" id="profile-main-card">
              <div style={{  backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)', borderRadius: '27px 27px 0px 0px'}}>
                <img src={cat4} id="card-img" className="card-img-top" alt="..."></img>
              </div>
              <div className="card-body p-0" style={{backgroundColor: '#18e9d9',}}>
                <div style={{padding: '20px', borderRadius: '0px 0px 27px 27px', backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)'}}>
                <div className="d-flex justify-content-between">
                      <span className="card-title h5 pt-1 text-white" id="card-title-font">Digital Art 1</span>
                      <span className="card-title" id="profile-heart-background"><i id="heart" className="fas fa-heart" style={{color:"#162e4a"}}></i></span>
                  </div>
                  <p className="mb-1 text-left  text-white" id="bid-color">Price <span id="blue-color">0.122 Empire - 0.5$</span></p>
                  <div className="d-flex justify-content-between">
                      <div className="text-left pt-1">
                          <span className="card-title mb-0  text-white" id="bid-color">Best Bid :<span id="blue-color"> 0.122 Empire</span></span>
                      </div>
                      <div>
                          <Button className=" text-white" id="buy-btn">Buy</Button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{backgroundColor: '#18e9d9', borderBottomRightRadius: '27px', borderBottomLeftRadius: '27px'}}>
                  <div className="time-remaining">
                    01d: 21h: 30m: 01s
                  </div>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-3">
            <div className="card" id="profile-main-card">
              <div style={{  backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)', borderRadius: '27px 27px 0px 0px'}}>
                <img src={cat4} id="card-img" className="card-img-top" alt="..."></img>
              </div>
              <div className="card-body p-0" style={{backgroundColor: '#18e9d9',}}>
                <div style={{padding: '20px', borderRadius: '0px 0px 27px 27px', backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)'}}>
                <div className="d-flex justify-content-between">
                      <span className="card-title h5 pt-1 text-white" id="card-title-font">Digital Art 1</span>
                      <span className="card-title" id="profile-heart-background"><i id="heart" className="fas fa-heart" style={{color:"#162e4a"}}></i></span>
                  </div>
                  <p className="mb-1 text-left  text-white" id="bid-color">Price <span id="blue-color">0.122 Empire - 0.5$</span></p>
                  <div className="d-flex justify-content-between">
                      <div className="text-left pt-1">
                          <span className="card-title mb-0  text-white" id="bid-color">Best Bid :<span id="blue-color"> 0.122 Empire</span></span>
                      </div>
                      <div>
                          <Button className=" text-white" id="buy-btn">Buy</Button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{backgroundColor: '#18e9d9', borderBottomRightRadius: '27px', borderBottomLeftRadius: '27px'}}>
                  <div className="time-remaining">
                    01d: 21h: 30m: 01s
                  </div>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-3">
            <div className="card" id="profile-main-card">
              <div style={{  backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)', borderRadius: '27px 27px 0px 0px'}}>
                <img src={cat4} id="card-img" className="card-img-top" alt="..."></img>
              </div>
              <div className="card-body p-0" style={{backgroundColor: '#18e9d9',}}>
                <div style={{padding: '20px', borderRadius: '0px 0px 27px 27px', backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)'}}>
                <div className="d-flex justify-content-between">
                      <span className="card-title h5 pt-1 text-white" id="card-title-font">Digital Art 1</span>
                      <span className="card-title" id="profile-heart-background"><i id="heart" className="fas fa-heart" style={{color:"#162e4a"}}></i></span>
                  </div>
                  <p className="mb-1 text-left  text-white" id="bid-color">Price <span id="blue-color">0.122 Empire - 0.5$</span></p>
                  <div className="d-flex justify-content-between">
                      <div className="text-left pt-1">
                          <span className="card-title mb-0  text-white" id="bid-color">Best Bid :<span id="blue-color"> 0.122 Empire</span></span>
                      </div>
                      <div>
                          <Button className=" text-white" id="buy-btn">Buy</Button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{backgroundColor: '#18e9d9', borderBottomRightRadius: '27px', borderBottomLeftRadius: '27px'}}>
                  <div className="time-remaining">
                    01d: 21h: 30m: 01s
                  </div>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-3">
            <div className="card" id="profile-main-card">
              <div style={{  backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)', borderRadius: '27px 27px 0px 0px'}}>
                <img src={cat4} id="card-img" className="card-img-top" alt="..."></img>
              </div>
              <div className="card-body p-0" style={{backgroundColor: '#18e9d9',}}>
                <div style={{padding: '20px', borderRadius: '0px 0px 27px 27px', backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)'}}>
                <div className="d-flex justify-content-between">
                      <span className="card-title h5 pt-1 text-white" id="card-title-font">Digital Art 1</span>
                      <span className="card-title" id="profile-heart-background"><i id="heart" className="fas fa-heart" style={{color:"#162e4a"}}></i></span>
                  </div>
                  <p className="mb-1 text-left  text-white" id="bid-color">Price <span id="blue-color">0.122 Empire - 0.5$</span></p>
                  <div className="d-flex justify-content-between">
                      <div className="text-left pt-1">
                          <span className="card-title mb-0  text-white" id="bid-color">Best Bid :<span id="blue-color"> 0.122 Empire</span></span>
                      </div>
                      <div>
                          <Button className=" text-white" id="buy-btn">Buy</Button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{backgroundColor: '#18e9d9', borderBottomRightRadius: '27px', borderBottomLeftRadius: '27px'}}>
                  <div className="time-remaining">
                    01d: 21h: 30m: 01s
                  </div>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-3">
            <div className="card" id="profile-main-card">
              <div style={{  backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)', borderRadius: '27px 27px 0px 0px'}}>
                <img src={cat4} id="card-img" className="card-img-top" alt="..."></img>
              </div>
              <div className="card-body p-0" style={{backgroundColor: '#18e9d9',}}>
                <div style={{padding: '20px', borderRadius: '0px 0px 27px 27px', backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)'}}>
                <div className="d-flex justify-content-between">
                      <span className="card-title h5 pt-1 text-white" id="card-title-font">Digital Art 1</span>
                      <span className="card-title" id="profile-heart-background"><i id="heart" className="fas fa-heart" style={{color:"#162e4a"}}></i></span>
                  </div>
                  <p className="mb-1 text-left  text-white" id="bid-color">Price <span id="blue-color">0.122 Empire - 0.5$</span></p>
                  <div className="d-flex justify-content-between">
                      <div className="text-left pt-1">
                          <span className="card-title mb-0  text-white" id="bid-color">Best Bid :<span id="blue-color"> 0.122 Empire</span></span>
                      </div>
                      <div>
                          <Button className=" text-white" id="buy-btn">Buy</Button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{backgroundColor: '#18e9d9', borderBottomRightRadius: '27px', borderBottomLeftRadius: '27px'}}>
                  <div className="time-remaining">
                    01d: 21h: 30m: 01s
                  </div>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-3">
            <div className="card" id="profile-main-card">
              <div style={{  backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)', borderRadius: '27px 27px 0px 0px'}}>
                <img src={cat4} id="card-img" className="card-img-top" alt="..."></img>
              </div>
              <div className="card-body p-0" style={{backgroundColor: '#18e9d9',}}>
                <div style={{padding: '20px', borderRadius: '0px 0px 27px 27px', backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)'}}>
                <div className="d-flex justify-content-between">
                      <span className="card-title h5 pt-1 text-white" id="card-title-font">Digital Art 1</span>
                      <span className="card-title" id="profile-heart-background"><i id="heart" className="fas fa-heart" style={{color:"#162e4a"}}></i></span>
                  </div>
                  <p className="mb-1 text-left  text-white" id="bid-color">Price <span id="blue-color">0.122 Empire - 0.5$</span></p>
                  <div className="d-flex justify-content-between">
                      <div className="text-left pt-1">
                          <span className="card-title mb-0  text-white" id="bid-color">Best Bid :<span id="blue-color"> 0.122 Empire</span></span>
                      </div>
                      <div>
                          <Button className=" text-white" id="buy-btn">Buy</Button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{backgroundColor: '#18e9d9', borderBottomRightRadius: '27px', borderBottomLeftRadius: '27px'}}>
                  <div className="time-remaining">
                    01d: 21h: 30m: 01s
                  </div>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-3">
            <div className="card" id="profile-main-card">
              <div style={{  backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)', borderRadius: '27px 27px 0px 0px'}}>
                <img src={cat4} id="card-img" className="card-img-top" alt="..."></img>
              </div>
              <div className="card-body p-0" style={{backgroundColor: '#18e9d9',}}>
                <div style={{padding: '20px', borderRadius: '0px 0px 27px 27px', backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)'}}>
                <div className="d-flex justify-content-between">
                      <span className="card-title h5 pt-1 text-white" id="card-title-font">Digital Art 1</span>
                      <span className="card-title" id="profile-heart-background"><i id="heart" className="fas fa-heart" style={{color:"#162e4a"}}></i></span>
                  </div>
                  <p className="mb-1 text-left  text-white" id="bid-color">Price <span id="blue-color">0.122 Empire - 0.5$</span></p>
                  <div className="d-flex justify-content-between">
                      <div className="text-left pt-1">
                          <span className="card-title mb-0  text-white" id="bid-color">Best Bid :<span id="blue-color"> 0.122 Empire</span></span>
                      </div>
                      <div>
                          <Button className=" text-white" id="buy-btn">Buy</Button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{backgroundColor: '#18e9d9', borderBottomRightRadius: '27px', borderBottomLeftRadius: '27px'}}>
                  <div className="time-remaining">
                    01d: 21h: 30m: 01s
                  </div>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-3">
            <div className="card" id="profile-main-card">
              <div style={{  backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)', borderRadius: '27px 27px 0px 0px'}}>
                <img src={cat4} id="card-img" className="card-img-top" alt="..."></img>
              </div>
              <div className="card-body p-0" style={{backgroundColor: '#18e9d9',}}>
                <div style={{padding: '20px', borderRadius: '0px 0px 27px 27px', backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)'}}>
                <div className="d-flex justify-content-between">
                      <span className="card-title h5 pt-1 text-white" id="card-title-font">Digital Art 1</span>
                      <span className="card-title" id="profile-heart-background"><i id="heart" className="fas fa-heart" style={{color:"#162e4a"}}></i></span>
                  </div>
                  <p className="mb-1 text-left  text-white" id="bid-color">Price <span id="blue-color">0.122 Empire - 0.5$</span></p>
                  <div className="d-flex justify-content-between">
                      <div className="text-left pt-1">
                          <span className="card-title mb-0  text-white" id="bid-color">Best Bid :<span id="blue-color"> 0.122 Empire</span></span>
                      </div>
                      <div>
                          <Button className=" text-white" id="buy-btn">Buy</Button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{backgroundColor: '#18e9d9', borderBottomRightRadius: '27px', borderBottomLeftRadius: '27px'}}>
                  <div className="time-remaining">
                    01d: 21h: 30m: 01s
                  </div>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-3">
            <div className="card" id="profile-main-card">
              <div style={{  backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)', borderRadius: '27px 27px 0px 0px'}}>
                <img src={cat4} id="card-img" className="card-img-top" alt="..."></img>
              </div>
              <div className="card-body p-0" style={{backgroundColor: '#18e9d9',}}>
                <div style={{padding: '20px', borderRadius: '0px 0px 27px 27px', backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)'}}>
                <div className="d-flex justify-content-between">
                      <span className="card-title h5 pt-1 text-white" id="card-title-font">Digital Art 1</span>
                      <span className="card-title" id="profile-heart-background"><i id="heart" className="fas fa-heart" style={{color:"#162e4a"}}></i></span>
                  </div>
                  <p className="mb-1 text-left  text-white" id="bid-color">Price <span id="blue-color">0.122 Empire - 0.5$</span></p>
                  <div className="d-flex justify-content-between">
                      <div className="text-left pt-1">
                          <span className="card-title mb-0  text-white" id="bid-color">Best Bid :<span id="blue-color"> 0.122 Empire</span></span>
                      </div>
                      <div>
                          <Button className=" text-white" id="buy-btn">Buy</Button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{backgroundColor: '#18e9d9', borderBottomRightRadius: '27px', borderBottomLeftRadius: '27px'}}>
                  <div className="time-remaining">
                    01d: 21h: 30m: 01s
                  </div>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-3">
            <div className="card" id="profile-main-card">
              <div style={{  backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)', borderRadius: '27px 27px 0px 0px'}}>
                <img src={cat4} id="card-img" className="card-img-top" alt="..."></img>
              </div>
              <div className="card-body p-0" style={{backgroundColor: '#18e9d9',}}>
                <div style={{padding: '20px', borderRadius: '0px 0px 27px 27px', backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)'}}>
                <div className="d-flex justify-content-between">
                      <span className="card-title h5 pt-1 text-white" id="card-title-font">Digital Art 1</span>
                      <span className="card-title" id="profile-heart-background"><i id="heart" className="fas fa-heart" style={{color:"#162e4a"}}></i></span>
                  </div>
                  <p className="mb-1 text-left  text-white" id="bid-color">Price <span id="blue-color">0.122 Empire - 0.5$</span></p>
                  <div className="d-flex justify-content-between">
                      <div className="text-left pt-1">
                          <span className="card-title mb-0  text-white" id="bid-color">Best Bid :<span id="blue-color"> 0.122 Empire</span></span>
                      </div>
                      <div>
                          <Button className=" text-white" id="buy-btn">Buy</Button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{backgroundColor: '#18e9d9', borderBottomRightRadius: '27px', borderBottomLeftRadius: '27px'}}>
                  <div className="time-remaining">
                    01d: 21h: 30m: 01s
                  </div>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-3">
            <div className="card" id="profile-main-card">
              <div style={{  backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)', borderRadius: '27px 27px 0px 0px'}}>
                <img src={cat4} id="card-img" className="card-img-top" alt="..."></img>
              </div>
              <div className="card-body p-0" style={{backgroundColor: '#18e9d9',}}>
                <div style={{padding: '20px', borderRadius: '0px 0px 27px 27px', backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)'}}>
                <div className="d-flex justify-content-between">
                      <span className="card-title h5 pt-1 text-white" id="card-title-font">Digital Art 1</span>
                      <span className="card-title" id="profile-heart-background"><i id="heart" className="fas fa-heart" style={{color:"#162e4a"}}></i></span>
                  </div>
                  <p className="mb-1 text-left  text-white" id="bid-color">Price <span id="blue-color">0.122 Empire - 0.5$</span></p>
                  <div className="d-flex justify-content-between">
                      <div className="text-left pt-1">
                          <span className="card-title mb-0  text-white" id="bid-color">Best Bid :<span id="blue-color"> 0.122 Empire</span></span>
                      </div>
                      <div>
                          <Button className=" text-white" id="buy-btn">Buy</Button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{backgroundColor: '#18e9d9', borderBottomRightRadius: '27px', borderBottomLeftRadius: '27px'}}>
                  <div className="time-remaining">
                    01d: 21h: 30m: 01s
                  </div>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-3">
            <div className="card" id="profile-main-card">
              <div style={{  backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)', borderRadius: '27px 27px 0px 0px'}}>
                <img src={cat4} id="card-img" className="card-img-top" alt="..."></img>
              </div>
              <div className="card-body p-0" style={{backgroundColor: '#18e9d9',}}>
                <div style={{padding: '20px', borderRadius: '0px 0px 27px 27px', backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)'}}>
                <div className="d-flex justify-content-between">
                      <span className="card-title h5 pt-1 text-white" id="card-title-font">Digital Art 1</span>
                      <span className="card-title" id="profile-heart-background"><i id="heart" className="fas fa-heart" style={{color:"#162e4a"}}></i></span>
                  </div>
                  <p className="mb-1 text-left  text-white" id="bid-color">Price <span id="blue-color">0.122 Empire - 0.5$</span></p>
                  <div className="d-flex justify-content-between">
                      <div className="text-left pt-1">
                          <span className="card-title mb-0  text-white" id="bid-color">Best Bid :<span id="blue-color"> 0.122 Empire</span></span>
                      </div>
                      <div>
                          <Button className=" text-white" id="buy-btn">Buy</Button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{backgroundColor: '#18e9d9', borderBottomRightRadius: '27px', borderBottomLeftRadius: '27px'}}>
                  <div className="time-remaining">
                    01d: 21h: 30m: 01s
                  </div>
              </div>
            </div>
        </div>
        <div className="col-12 col-md-6 col-lg-3 mt-3">
            <div className="card" id="profile-main-card">
              <div style={{  backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)', borderRadius: '27px 27px 0px 0px'}}>
                <img src={cat4} id="card-img" className="card-img-top" alt="..."></img>
              </div>
              <div className="card-body p-0" style={{backgroundColor: '#18e9d9',}}>
                <div style={{padding: '20px', borderRadius: '0px 0px 27px 27px', backgroundImage: 'linear-gradient(to right, #152a45, #1f3f65, #152a45)'}}>
                <div className="d-flex justify-content-between">
                      <span className="card-title h5 pt-1 text-white" id="card-title-font">Digital Art 1</span>
                      <span className="card-title" id="profile-heart-background"><i id="heart" className="fas fa-heart" style={{color:"#162e4a"}}></i></span>
                  </div>
                  <p className="mb-1 text-left  text-white" id="bid-color">Price <span id="blue-color">0.122 Empire - 0.5$</span></p>
                  <div className="d-flex justify-content-between">
                      <div className="text-left pt-1">
                          <span className="card-title mb-0  text-white" id="bid-color">Best Bid :<span id="blue-color"> 0.122 Empire</span></span>
                      </div>
                      <div>
                          <Button className=" text-white" id="buy-btn">Buy</Button>
                      </div>
                  </div>
                </div>
              </div>
              <div className="card-body" style={{backgroundColor: '#18e9d9', borderBottomRightRadius: '27px', borderBottomLeftRadius: '27px'}}>
                  <div className="time-remaining">
                    01d: 21h: 30m: 01s
                  </div>
              </div>
            </div>
        </div>
        
        
      </div>
    </div>
  );
}