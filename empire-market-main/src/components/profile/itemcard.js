import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NFTMinter from '../../NFTMinter';
import { itemMinted } from '../../redux/ActionCreators';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
import ListingModal from './listingModal';
import web3 from '../../web3';

export default function ItemCard({item}){
  const [status, setStatus] = useState('Not Minted');
  const [mintingLoading, setMintingLoading] = useState(false);
  const [modal, showModal] = useState(false);
  const [listingModal, showListingModal] = useState(false);
  const authedUser = useSelector(state => state.authedUser);
  const dispatch = useDispatch();

  const toggle = () => showModal(!modal);

  const mintToken = async () => {
    try{
        console.log('here');
        setMintingLoading(true);
        setStatus('Minting NFT');
        showModal(true);
        // document.getElementById('mint-modal-opener').click();
        // setMintingLoading(true)
        // const signature = await web3.eth.personal.sign(
        //     `I am signing my one-time nonce: ${authedUser.authedUser.nonce}`,
        //     authedUser.authedUser.address,
        //     '' // MetaMask will ignore the password argument here
        // );
        const minted = await NFTMinter.methods.createItem(item.token_uri, 2*100).send({
            from: authedUser.authedUser.address
        });
        console.log(minted);
        console.log(minted.events.Transfer.returnValues[2]);
        dispatch(itemMinted(item._id, authedUser.authedUser.address, minted.events.Transfer.returnValues[2], minted.transactionHash))
        .then(res => {
            console.log('updating state')
            setMintingLoading(false);
            setStatus('NFT Minted');
        //     // history.push(`/token/${process.env.REACT_APP_TOKEN_ADDRESS}/${minted.events.Transfer.returnValues[2]}`)
        });    
    }
    catch(e){
        console.log("fuckkkkk", e);
        setMintingLoading(false);
        setStatus('');
        // document.getElementById('modal-closer').click();
        // setShowModal(false);
    }
}

  return(
    <div className="col-12 col-md-6 col-lg-3 mt-3" >

      <div className="card" id="main-card">
        <div >
          <img style={{minHeight: '250px', maxHeight: '250px'}} src={`${process.env.REACT_APP_BASE_URL}/${item.image_local}`} id="card-img" className="card-img-top" alt="..."></img>
        </div>
        <div className="card-body">
          <div>
          <div className="d-flex justify-content-between">
                <span className="card-title h5 pt-1 text-white" id="card-title-font">{item.name}</span>
                <span className="card-title" id="profile-heart-background"><i id="heart" className="fas fa-heart" style={{color:"#162e4a"}}></i></span>
            </div>
            {item.minted ? (
              <>
                {item.status === "0" && ( // not listed
                  <>
                    <p className="mb-1 text-left  text-white" id="bid-color">Status: <span id="blue-color"> Not Listed</span></p>
                    <div className="text-left pt-1" style={{height: '28px'}}>
                        <span className="card-title mb-0  text-white" id="bid-color"><span id="blue-color" onClick={() => showListingModal(true)} style={{textDecoration: 'underline', cursor: 'pointer', position: 'absolute'}}> List Now</span></span>
                    </div>
                  </>
                )}
                {item.status === "1" && ( // on instant buy
                  <>
                    <p className="mb-1 text-left  text-white" id="bid-color">Status: <span id="blue-color"> Available for buying</span></p>
                    <div className="text-left pt-1">
                      <span className="card-title mb-0  text-white" id="bid-color">Buying Price:<span id="blue-color"> {web3.utils.fromWei(item.price)} Empire</span></span>
                    </div>
                  </>
                )}
                {item.status === "2" && ( // on auction
                  <>
                  <p className="mb-1 text-left  text-white" id="bid-color">Status: <span id="blue-color"> Available for bidding</span></p>
                  <div className="text-left pt-1">
                    <span className="card-title mb-0  text-white" id="bid-color">Minimum Bid Price:<span id="blue-color"> {web3.utils.fromWei(item.price)} Empire</span></span>
                  </div>
                </>
                )}
              </>
            ) : (
              <>
                <p className="mb-1 text-left  text-white" id="bid-color">Status: <span id="blue-color"> Not Minted</span></p>
                <div className="text-left pt-1" style={{height: '28px'}}>
                    <span className="card-title mb-0  text-white" id="bid-color"><span id="blue-color" onClick={() => mintToken()} style={{textDecoration: 'underline', cursor: 'pointer',  position: 'absolute'}}> Mint Now</span></span>
                </div>
              </>
            )}
            {/* <p className="mb-1 text-left  text-white" id="bid-color">Price <span id="blue-color">0.122 Empire - 0.5$</span></p>
            <div className="d-flex justify-content-between">
                <div className="text-left pt-1">
                    <span className="card-title mb-0  text-white" id="bid-color">Best Bid :<span id="blue-color"> 0.122 Empire</span></span>
                </div>
                <div>
                    <Button className=" text-white" id="buy-btn">Buy</Button>
                </div>
            </div> */}
          </div>
        </div>
      <Modal isOpen={modal} backdrop={false} id="mintingmodall" toggle={toggle} className="minting-modal">
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody style={{textAlign: 'center'}}>
          {mintingLoading ? (
            <div className="create-loader"></div>
          ) : (
            <i className="far fa-check-circle" style={{color: 'green', fontSize: '52px'}}></i>
          )}
          <h4>Status: {status}</h4>
          {mintingLoading && (
          <p>Dont close the window until the project is created!</p>
          )}

        </ModalBody>
          
        <ModalFooter style={{display: mintingLoading  === true ? 'none' : 'flex'}}>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      <ListingModal modal={listingModal} setShow={showListingModal} item={item} />
      </div>
    </div>
  );
}