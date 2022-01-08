import React,{Component} from "react";

class Reset extends Component{
    onResetDefault = () =>{
        this.props.onResetDefault(true);
    }
    render(){
        return (
            <div className='bg-blue-600 text-white mx-2 rounded p-2 cursor-pointer' onClick={ () => this.onResetDefault()}>Reset</div>
        )
    }
}

export default Reset;