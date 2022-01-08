import logo from './logo.svg';
import './App.css';

function App() {
  return (
  <>
    <div>
        <div className='w-11/12 mx-auto p-20'>
          <div className='flex w-full'>
              <div className='mx-5 w-1/2 border border-blue-500'>
                  <div className=' px-5 w-full bg-blue-500 text-white'>
                    Color Picker
                  </div>
                  <div className='flex p-3'>
                      <button className='cursor-pointer w-10 h-10 mx-5 bg-red-600'></button>
                      <button className='cursor-pointer w-10 h-10 mx-5 bg-green-600'></button>
                      <button className='cursor-pointer w-10 h-10 mx-5 bg-yellow-500'></button>
                      <button className='cursor-pointer w-10 h-10 mx-5 bg-black'></button>
                  </div>
              </div>
              <div className='mx-5 w-1/2 border border-yellow-300'>
                <div className=' px-5 w-full bg-yellow-300 text-yellow-800'>
                 Size: <span>12px</span>
                </div>
                <div className='p-3 flex'>
                  <div className='flex'>
                    <div className='bg-lime-600 text-white mx-2 rounded p-2 cursor-pointer'>Tăng</div>
                    <div className='bg-lime-600 text-white mx-2 rounded p-2 cursor-pointer'>Giảm</div>
                    <div className='bg-blue-600 text-white mx-2 rounded p-2 cursor-pointer'>Reset</div>
                  </div>
                </div>
              </div>
          </div>
          <div className='mt-12'>
            <div className='my-5'>
              Color: <span>red</span> - Fontsize: <span>12px</span>
            </div>
          </div>
          <div className='border-2 border-red-500 p-5'>
              <div>Nội dung text</div>
          </div>
        </div> 
    </div>
  </> 
  );
}

export default App;
