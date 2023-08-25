import React, { Component } from 'react';

class ImgSrc extends Component{
    
    render(){
        console.log(this.imgSrc)
        return(
            
            <img src={this.props.imgSrc}/>

            

        )
    }
}
export default ImgSrc