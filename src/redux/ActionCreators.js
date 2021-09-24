import * as ActionTypes from './ActionTypes';
import web3 from '../web3';

export const logInRequest = (address) => dispatch => {
    return fetch(`${process.env.REACT_APP_BASE_URL}/users/${address}`)
    .then(res => res.json())
    .then(async res => {
      if (res.success) {
        var balance = await web3.eth.getBalance(address);
        res.user.balance = balance;
        return dispatch(login(res.user));
      }
      else{
        return dispatch(logout(null))
      };
    });
}
const login = (user) => ({
    type: ActionTypes.LOGGED_IN,
    payload: user
})
export const logout = (id) => ({
    type: ActionTypes.LOGGED_OUT,
    payload: id
})

const updateNonce = (user) => ({
  type: ActionTypes.UPDATE_NONCE,
  payload: user
})
export const createItemRequest = (name, desc, image, ipfs_json, ipfs_image, address, signature, category, imageType) => (dispatch) => {
  var myHeaders = new Headers();

  var formdata = new FormData();
  formdata.append("nftImage", image, image.name);
  formdata.append("name", name);
  formdata.append("description", desc);
  formdata.append("image_ipfs", ipfs_image);
  formdata.append("token_uri", ipfs_json);
  formdata.append("signature", signature);
  formdata.append("address", address);
  formdata.append("category", category);
  formdata.append("nftType", imageType);

  var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: formdata,
  redirect: 'follow'
  };

  return fetch(`${process.env.REACT_APP_BASE_URL}/items/${address}`, requestOptions)
  .then(response => response.json())
  .then(async result => {
    if (result.success){
      var balance = await web3.eth.getBalance(result.user.address);
      result.user.balance = balance;
      dispatch(updateNonce(result.user));
      return dispatch(addNewItem(result.item));
    } 
    else{
      alert(result.status);
      return dispatch(addNewItemFailed(result.status));
    }
  })
}
const addNewItem = (item) => ({
  type: ActionTypes.ADD_ITEM,
  payload: item
})
const addNewItemFailed = (err) => ({
  type: ActionTypes.ADD_ITEM_FAILED
})

export const itemMinted = (id, address, nft_id, txHash) => dispatch => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({address, id, nft_id, txHash});
  console.log(raw)
  var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
  };
    
  return fetch(`${process.env.REACT_APP_BASE_URL}/items/minted`, requestOptions)
          .then(res => res.json())
          .then(res => {
              if (res.success) {
                dispatch(addTransactions([res.transaction]));
                return dispatch(replaceItem(res.item));
              }
              else{
                alert('Update Failed!');
              }
          })
}

const replaceItem = (item) => ({
  type: ActionTypes.REPLACE_ITEM,
  payload: item
})
const addTransactions = (transactions) => ({
  type: ActionTypes.ADD_TRANSACTIONS,
  payload: transactions
})

export const getMyItems = (address) => (dispatch) => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/items/${address}`)
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if (res.success){
        return dispatch(addItems(res.items));
      }
      else{
        return dispatch(addItemsFailed());
      }
    });
}
const addItems = (items) => ({
  type: ActionTypes.ADD_ITEMS,
  payload: items
})
const addItemsFailed = () => ({
  type: ActionTypes.ADD_ITEMS_FAILED
})

export const updateItem = (price, status, item_id, address, marketplace_id, txHash, enddate) => dispatch => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({price, item_id, address, status, marketplace_id, txHash, enddate});
  console.log(raw)
  var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
  };
    
  return fetch(`${process.env.REACT_APP_BASE_URL}/items/added_to_marketplace`, requestOptions)
          .then(res => res.json())
          .then(res => {
              if (res.success){
                if (status === "2"){
                  dispatch(addAuction(res.auction));
                }
                return dispatch(replaceItem(res.item));
              }
              else{
                alert('Update Failed!');
              }
          }) 
}
const addAuction = (auction) => ({
  type: ActionTypes.ADD_AUCTION,
  payload: auction
})

export const getAllAuctions = () => dispatch => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/auctions/`)
        .then(res => res.json())
        .then(res => {
          if (res.success){
            return dispatch(addAuctions(res.auctions));
          }
        });
}
const addAuctions = (auc) => ({
  type: ActionTypes.ADD_AUCTIONS,
  payload: auc
})
export const getItemsOnSale = () => dispatch => {
  // dispatch(itemsLoading());
  return fetch(`${process.env.REACT_APP_BASE_URL}/items/`)
          .then(res => res.json())
          .then(res => {
            if (res.success){
              return dispatch(addItems(res.items))
            }
          });
}

