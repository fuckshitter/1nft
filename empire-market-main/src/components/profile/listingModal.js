import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, ModalBody, ModalHeader, ModalFooter, Button, InputGroup, InputGroupText, InputGroupAddon, Input, Label } from 'reactstrap';
import Marketplace from '../../Marketplace';
import NFTMinter from '../../NFTMinter';
import { updateItem } from '../../redux/ActionCreators';
import web3 from '../../web3';

export default function ListingModal({modal, setShow, item}){
  const [listingStatus, setListingStatus] = useState('0'); // 0 - no status, // 1 - for instant buy, // 2- auction
  const [step, setStep] = useState(1); 
  const [bnbAmt, setBnbAmt] = useState(0); 
  const [updateLoading, setUpdateLoading] = useState(false);
  const [status, setStatus] = useState('Not Listed');
  const [enddate, setEndDate] = useState("");

  const authedUser = useSelector(state => state.authedUser);
  
  const toggle = () => setShow(!modal);

  const dispatch = useDispatch();

  const resett = () => {
    toggle();
    setListingStatus('0');
    setEndDate('');
    setStep(1);
  }

  const isApproved = async (token_id) => {
    const approvedAddress = await NFTMinter.methods.getApproved(token_id).call({from: authedUser.authedUser.address});
    if (approvedAddress !== process.env.REACT_APP_MARKETPLACE_ADDRESS){
        await NFTMinter.methods.approve(process.env.REACT_APP_MARKETPLACE_ADDRESS, token_id).send({from: authedUser.authedUser.address});
    }
  }

  const listNft = async () => {
    const isAuction = listingStatus === '2';
    if (listingStatus === '1'){ //instant buy
      console.log(bnbAmt);
      if (parseFloat(bnbAmt) > 0){
        setStatus('Getting Approval to list NFT');
        setUpdateLoading(true);
        try{
          await isApproved(item.nft_id);
          setStatus('Listing NFT');
          const result = await Marketplace.methods.addItemToMarket(item.nft_id, process.env.REACT_APP_TOKEN_ADDRESS, web3.utils.toWei(bnbAmt), isAuction).send({from: authedUser.authedUser.address});
          setStatus('Completing..');
          console.log(result);
          //dispatch to add marketplace id
          let nft_id = item.marketplace_id;
          if (result.events.ItemAdded){
            nft_id = result.events.ItemAdded.returnValues[0];
          }
          console.log("new item, case 1");
          dispatch(updateItem(web3.utils.toWei(bnbAmt), listingStatus, item._id, authedUser.authedUser.address, nft_id, result.transactionHash, ''))
          .then(res => {
              setUpdateLoading(false);
              resett();
              console.log(res);
          });  
        }
        catch(e){
          console.log(e);
          setUpdateLoading(false);
          resett();
        }
      }
      else{
          alert('Set Price greater than 0!');
      }
    }
    else if (listingStatus === '2'){
      console.log(bnbAmt, enddate);
      if (parseFloat(bnbAmt) > 0){
        setStatus('Getting Approval to list NFT');
        setUpdateLoading(true);
        try{
          await isApproved(item.nft_id);
          setStatus('Listing NFT');
          const result = await Marketplace.methods.addItemToMarket(item.nft_id, process.env.REACT_APP_TOKEN_ADDRESS, web3.utils.toWei(bnbAmt), isAuction).send({from: authedUser.authedUser.address});
          setStatus('Completing..');
          console.log(result);
          //dispatch to add marketplace id
          let nft_id = item.marketplace_id;
          if (result.events.ItemAdded){
            nft_id = result.events.ItemAdded.returnValues[0];
          }
          console.log("new item, case 1");
          dispatch(updateItem(web3.utils.toWei(bnbAmt), listingStatus, item._id, authedUser.authedUser.address, nft_id, result.transactionHash, enddate))
          .then(res => {
              setUpdateLoading(false);
              toggle();
              console.log(res);
          });  
        }
        catch(e){
          console.log(e);
          setUpdateLoading(false);
          toggle();
        }
      }
      else{
          alert('Set Price greater than 0!');
      }
    }
  }
  return(
    <Modal isOpen={modal} className="listing-modal">
        <ModalHeader toggle={toggle}>List Your Token - Step {step}</ModalHeader>
        <ModalBody>
          {listingStatus === '0' && (
          <>
            <div className="list-status-btn" onClick={() => {setListingStatus('2'); setStep(2)}}>
              List for - Auction
            </div>
            <div className="list-status-btn" onClick={() => {setListingStatus('1');  setStep(2)}}>
              List for - Instant Buy
            </div>
          </>        
          )}
          {listingStatus === '1' && (
          <>
          <Label style={{textAlign: 'left'}}>Enter Amount:</Label>
          <InputGroup>
            <Input placeholder="BNB Amount" value={bnbAmt} onChange={(e) => setBnbAmt(e.target.value)} />
            <InputGroupAddon addonType="append">
              <InputGroupText>
                <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=013" style={{height: '20px'}} />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          </>        
          )}
          {listingStatus === '2' && (
            <><Label style={{textAlign: 'left'}}>Enter Amount:</Label>
            <InputGroup>
              <Input placeholder="BNB Amount" value={bnbAmt} onChange={(e) => setBnbAmt(e.target.value)} />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=013" style={{height: '20px'}} />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>

            <Label>End date</Label>
            <input className="form-control" type="datetime-local" value={enddate} onChange={(e) => setEndDate(e.target.value)} label="End date"
              placeholder="End Auction Date"/>
            </>
          )}
          {updateLoading && (
            <>
              <div className="create-loader"></div>
              <h4>Status: {status}</h4>
              <p>Dont close the window until the item is listed is created!</p>
            </>
          )}
        </ModalBody>
          
        <ModalFooter>
          {listingStatus !== '0' && (
            <Button color="secondary" onClick={() => listNft()}>List NFT</Button>
          )}
          <Button color="secondary" onClick={() => resett()}>Cancel</Button>
        </ModalFooter>
      </Modal>
  );
}