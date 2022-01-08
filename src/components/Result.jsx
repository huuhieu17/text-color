import React, { Component } from "react";

class Result extends Component {

    setStyle(){
        return{
            color: this.props.color,
            borderColor: this.props.color,
            borderWidth: '2',
            fontSize: this.props.fontSize
        }
    }
    render() {
        return (
            <>
                <div className='mt-12'>
                    <div className='my-5'>
                        Color: <span>{this.props.color}</span> - Fontsize: <span>{this.props.fontSize}</span>
                    </div>
                </div>
                
                <div className="p-5 border-2" style={this.setStyle()}>Nội dung text</div>
            
            </>
        )
    }
}

export default Result;