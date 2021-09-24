import React from 'react'
import AuctionCards from './AuctionCards'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cat4 from '../../images/cat4.jpg'

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1441 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 1440, min: 1076 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1075, min: 993 },
      items: 3
    },
    tablet1: {
        breakpoint: { max: 992, min: 768 },
        items: 2
      },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1
    }
  };

const trendingData=[cat4,cat4,cat4,cat4,cat4,cat4,cat4,cat4,cat4,cat4,cat4,cat4,cat4]

class Auction extends React.Component{
    render(){
        return(
            <div className="mt-5">
                <Carousel responsive={responsive}>
                    {trendingData.map((image,index)=>{
                        return(
                            <div key={index} className="mx-1">
                                <AuctionCards image={image}></AuctionCards>
                            </div>
                        )
                    })}
                </Carousel>
            </div>


 


                  /*  <div className="row pb-5 ml-1 ml-lg-0">
                        <div className="col-md-6 pl-0 col-lg-3 col-12">
                            <AuctionCards></AuctionCards>
                        </div>
                        <div className="col-md-6 pl-0 mt-5 mt-md-0 col-lg-3 col-12">
                            <AuctionCards></AuctionCards>
                        </div>
                        <div className="col-md-6 pl-0 mt-5 mt-md-5 mt-lg-0 col-lg-3 col-12">
                            <AuctionCards></AuctionCards>
                        </div>
                        <div className="col-md-6 pl-0 mt-5 mt-md-5 mt-lg-0 col-lg-3 col-12">
                            <AuctionCards></AuctionCards>
                        </div>
                    </div> */


                
        )
    }
}
export default Auction