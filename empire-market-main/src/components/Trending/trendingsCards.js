import React from 'react'
import {Button} from 'reactstrap'
import plus from '../../images/follow plus .png'
import imageOnTrending from '../../images/imageOnTrending1.jfif'

class TrendingCards extends React.Component{
    constructor(){
        super()
        this.state={
            color:"#162e4a",
            colorflag:false
        }
    }
 
    red=()=>{
        if(!this.state.flag){
        this.setState({
            color:"red",
            flag:true
        })}else{
        this.setState({
            color:"#162e4a",
            flag:false
        })}

    }
    render(){
        return(

            <div className="card" id="main-card">
                <img src={this.props.image} id="card-img" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <div className="d-flex justify-content-between">
                        <span className="card-title h5 pt-1 text-white" id="card-title-font">Digital Art 1</span>
                        <span className="card-title" id="heart-background"><i id="heart" onClick={this.red} className="fas fa-heart" style={{color:this.state.color}}></i></span>
                    </div>
                    <p className="mb-1 text-left  text-white" id="bid-color">Price <span id="blue-color">0.122 Empire - 0.5$</span></p>
                    <div className="d-flex justify-content-between">
                        <div className="text-left pt-1">
                            <span className="card-title mb-0  text-white" id="bid-color">Best Bid :<span id="blue-color"> 0.122 Empire</span></span>
                        </div>
                        <div style={{display:'flex',alignItems:'center'}}>
                            <Button className=" text-white" id="buy-btn">Buy</Button>
                        </div>
                    </div>
                    <img src={imageOnTrending} alt="..." id="image-icon"></img>
                    <img id="image-plus-icon" alt="..." src={plus} ></img>

                </div> 
            </div>



        )
    }
}
export default TrendingCards