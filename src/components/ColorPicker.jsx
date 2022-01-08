import React, { Component } from "react";

class ColorPicker extends Component {
    constructor(props){
        super(props);
        this.state = {
            colors : ['red','blue','green','yellow']
        }
    }
    showColor(color){
        return {
            background: color
        };
    }
    setActiveColor(color){
        this.props.onGetColor(color);  
    }
    render() {
        var colors = this.state.colors.map((color,index) => {
            var activeClass = this.props.color === color ? 'border-2 border-gray-900' : '';
            return <button key={index} className={`cursor-pointer w-10 h-10 mx-5 ${activeClass}`} onClick={ () => this.setActiveColor(color)} style={this.showColor(color)} ></button>
        });
        return (
            <>
                <div className='flex p-3'>
                    {colors}
                </div>
            </>
        )
    }
}

export default ColorPicker;