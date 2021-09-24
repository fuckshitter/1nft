import React from 'react'
import ImageUploading from "react-images-uploading";
import profile from '../../../images/profile.png'


class General extends React.Component{
    constructor(){
        super()
        this.state={
            circleimg:undefined,
        }

    }

    onChangeprofile = (imageList) => {
        this.setState({
            circleimg:imageList[0].data_url,
        })
    };

    render(){
        return(
            <div className="ml-4 ml-md-0 mt-4 mt-md-0">
                <div className="mt-2 mb-4">
                    <p className="h1 text-white"  id="general-settings">General Settings</p>
                </div>
                <div>
                    <p className="h4 text-white mb-2"  id="logo-image-font">Profile Picture</p>
                    <p className="text-white" id="logo-image-description-font">Upload new profile picture</p>
                    <ImageUploading
                        multiple
                        onChange={this.onChangeprofile}
                        dataURLKey="data_url"
                    >
                        {({
                          onImageUpload
                        }) => (
                            <div>
                                {this.state.circleimg ? 
                                 (
                                    <div onClick={onImageUpload} style={{cursor:'pointer'}}>
                                        <img alt="..." src={this.state.circleimg} id="image-general-circle"></img>
                                    </div>
                                ): <div id="image-general-circle" className="mt-4" onClick={onImageUpload}  style={{cursor:'pointer'}}>
                                        <img alt="..." src={profile} id="profile-image"></img>
                                    </div>

                                }
                            </div>
                        )}
                    </ImageUploading>
                </div>

                <form className="mt-5 mr-5">
                    <div className="form-group">
                      <label htmlFor="exampleInputText" className="h5 text-white general-label mb-3">User Name</label>
                      <input type="text" className="form-control general-form text-white pl-3 py-2" id="exampleInputText" placeholder="Enter your username"></input>
                    </div>
                    <div className="form-group mt-5">
                      <label htmlFor="exampleInputEmail1" className="h5 text-white general-label mb-3">Email</label>
                      <input type="email" className="form-control general-form text-white pl-3 py-2" id="exampleInputEmail1" placeholder="Enter your email"></input>
                    </div>
                    <div className="form-group mt-5">
                      <label htmlFor="Textarea1" className="h5 text-white general-label mb-3">Bio</label>
                      <textarea className="form-control general-form text-white pl-3 py-2" id="Textarea1" rows="5" placeholder="Let the world know about you"></textarea>
                    </div>
                </form>

            </div>
        )
    }
}
export default General