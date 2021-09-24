import React from 'react'
import cat3 from '../../images/cat3.jpg'
import CategoriesCards from './categoriesCards'

const categoryimages=[cat3,cat3,cat3,cat3,cat3,cat3]

class Categories extends React.Component{
    render(){
        return(
            <div>
                <div className="row">
                  {categoryimages.map((images,index)=>
                    <div key={index} className="col-12 mt-4 col-md-4">
                      <CategoriesCards img={images} ></CategoriesCards>
                    </div>
                  )}
                </div>
            </div>
        )
    }
}
export default Categories