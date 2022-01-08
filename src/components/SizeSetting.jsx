import React, { Component } from "react";

class SizeSetting extends Component {
    constructor(props){
        super(props);
    }
    changeSize(value){
        // console.log(value);
        this.props.onGetSize((this.props.fontSize + value) < 1 ? 1 : this.props.fontSize + value );
    }
    render() {
        return (
            <div className="flex">
                <div className='bg-lime-600 text-white mx-2 rounded p-2 cursor-pointer' onClick={() => this.changeSize(+2)}>Tăng</div>
                <div className='bg-lime-600 text-white mx-2 rounded p-2 cursor-pointer' onClick={() => this.changeSize(-2)}>Giảm</div>
            </div>
        )
    }
}

export default SizeSetting;