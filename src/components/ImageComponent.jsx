import React from "react";


class ImageComponent extends React.Component{
    render(){
        console.log(this.props)
        return <><img src={this.props.src} alt={this.props.alt} className={`${this.props.className}`}/></>;
    }
}

export default ImageComponent

