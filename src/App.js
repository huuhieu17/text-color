import logo from './logo.svg';
import './App.css';
import SizeSetting from './components/SizeSetting';
import ColorPicker from './components/ColorPicker';
import Result from './components/Result';
import Reset from './components/Reset';
import { Component } from 'react';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize : 12
    }
  }
  onSetColor = (param) =>{
    this.setState({
      color: param
    })
  }
  onSetSize = (param) => {
    this.setState({
      fontSize: param
    })
  }
  onReset = (value) =>{
    if(value){
      this.setState({
        color: 'red',
        fontSize : 12
      });
    }
  }
  render() {
    return (
      <>
        <div>
          <div className='w-11/12 mx-auto p-20'>
            <div className='flex w-full'>
              <div className='mx-5 w-1/2 border border-blue-500'>
                <div className=' px-5 w-full bg-blue-500 text-white'>
                  Color Picker
                </div>
                <ColorPicker color={this.state.color} size={this.state.fontsize} onGetColor={this.onSetColor}></ColorPicker>
              </div>
              <div className='mx-5 w-1/2 border border-yellow-300'>
                <div className=' px-5 w-full bg-yellow-300 text-yellow-800'>
                  Size
                </div>
                <div className='p-3 flex'>
                  <div className='flex'>
                    <SizeSetting fontSize={this.state.fontSize} onGetSize={this.onSetSize}></SizeSetting>
                    <Reset onResetDefault={this.onReset}></Reset>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Result color={this.state.color} fontSize={this.state.fontSize}></Result>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
