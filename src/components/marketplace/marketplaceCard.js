import React, { useState } from 'react'
import {Button} from 'reactstrap'
import plus from '../../images/follow plus .png'
import imageOnTrending from '../../images/imageOnTrending1.jfif'
import web3 from '../../web3';

function MarketplaceCards ({item}){
    const [color, setColor] = useState("#162e4a");
    
    const red = () => {
        if(color === 'red'){
            setColor('#162e4a');
        }
        else{
            setColor('red');
        }
    }
    return(
        <div className="card" id="main-card">
            <img src={`${process.env.REACT_APP_BASE_URL}/${item.image_local}`} style={{maxHeight: '250px', minHeight: '250px'}} id="card-img" className="card-img-top" alt="..."></img>
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <span className="card-title h5 pt-1 text-white" id="card-title-font">{item.name}</span>
                    <span className="card-title" id="heart-background"><i id="heart" onClick={red} className="fas fa-heart" style={{color:color}}></i></span>
                </div>
                <>
                {item.status === "1" && ( // on instant buy
                  <>
                  <p className="mb-1 text-left  text-white" id="bid-color">Status: <span id="blue-color"> Available for buying</span></p>
                  <div className="d-flex justify-content-between">
                      <div className="text-left pt-1">
                          <span className="card-title mb-0  text-white" id="bid-color">Asking Price :<span id="blue-color"> {web3.utils.fromWei(item.price)} Empire</span></span>
                      </div>
                      <div style={{display:'flex',alignItems:'center'}}>
                          <Button className=" text-white" id="buy-btn">Buy</Button>
                      </div>
                  </div>
                  </>
                )}
                {item.status === "2" && ( // on auction
                  <>
                    <p className="mb-1 text-left  text-white" id="bid-color">Status: <span id="blue-color"> Available for bidding</span></p>
                    <div className="d-flex justify-content-between">
                        <div className="text-left pt-1">
                            <span className="card-title mb-0  text-white" id="bid-color">Best Bid :<span id="blue-color"> {web3.utils.fromWei(item.price)} Empire</span></span>
                        </div>
                        <div  style={{display:'flex',alignItems:'center'}}>
                            <Button className=" text-white" id="buy-btn">Buy</Button>
                        </div>
                    </div>
                </>
                )}
                </>

                {/* <p className="mb-1 text-left  text-white" id="bid-color">Price <span id="blue-color">0.122 Empire - 0.5$</span></p>
                <div className="d-flex justify-content-between">
                    <div className="text-left pt-1">
                        <span className="card-title mb-0  text-white" id="bid-color">Best Bid :<span id="blue-color"> 0.122 Empire</span></span>
                    </div>
                    <div>
                        <Button className=" text-white" id="buy-btn">Buy</Button>
                    </div>
                </div> */}
                <img src={imageOnTrending} alt="..." id="image-icon"></img>
                <img id="image-plus-icon" alt="..." src={plus} ></img>

            </div> 
        </div>



    )
}
export default MarketplaceCards