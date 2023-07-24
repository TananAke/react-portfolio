import React, { Component } from 'react'


 class Widecard extends Component {


    render() {
        return(
            <div name="widecard" 
                className="group flex px-2 mt-0 mr-0 mb-0 ml-0 rounded-md  hover:bg-green-800 "
            >
                <div name="wide-con">
                    <h3  className= " text-green-500 group-hover:text-white">{this.props.title}</h3>
                    <h4 name="secondtext" className="text-green-500 group-hover:text-white">{this.props.where}</h4>
                    <br></br>
                </div>

            </div>

           
        )
    }
}

export default Widecard