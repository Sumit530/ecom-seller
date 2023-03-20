import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const formArray = [1, 2, 3, 4];
  const [formNo, setFormNo] = useState(formArray[0])
  const [state, setState] = useState({
    name: '',
    email: '',
    bussiness_name: '',
    password: '',
    cpassword: '',

  })
  const [otp,setotp] = useState({
    first:"",
    second:"",
    third:"",
    fourth:"",
    fifth:"",
    sixth:"",
  })
  const otphandle = (e) =>{
    if(!isNaN(parseInt(e.target.value)))
    setotp({...otp,[e.target.name]:e.target.value})
  }
  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  const next = () => {
    console.log(state)
    console.log(window.path)
        if(formNo==1 ){
          if(state.name != "" && state.email != "" && state.bussiness_name != "" && state.password != "" && state.password == state.cpassword){

            const formdata = new FormData()
            formdata.append("name",state.name)
            formdata.append("email",state.email)
            formdata.append("bussiness_name",state.bussiness_name)
            formdata.append("password",state.password)
            fetch(`${window.path}/register`,{
              method:"post",
              body:formdata
            })
            setFormNo(formNo + 1)
          }else{
            toast.error('Please fillup all input field')
          }
        }
        else if (formNo == 2){
          setFormNo(formNo + 1)
        }
        else if(formNo==3){
          
        }
  
  }
  const pre = () => {
    if(formNo != 1){

      setFormNo(formNo - 1)
    }
  }
  const finalSubmit = () => {
    if (state.district && state.thana && state.post) {
      toast.success('form submit success')
    } else {
      toast.error('Please fillup all input field')
    }
  }
  return (
    <div className="w-screen h-screen bg-slate-300 flex justify-center items-center">
      <ToastContainer />
      <div className="card w-[500px] rounded-md shadow-md bg-white p-5">
        <div className='flex justify-center items-center'>
          {
            formArray.map((v, i) => <><div className={`w-[35px] my-3 text-white rounded-full ${formNo>=v ? 'bg-blue-500 ' : 'bg-gray-400'} h-[35px] flex justify-center items-center`}>
              {v}
            </div>
              {
                i !== formArray.length - 1 && <div className={`w-[85px] h-[2px] ${formNo === i + 2 || formNo === formArray.length ? 'bg-blue-500' : 'bg-gray-400'}`}></div>
              }
            </>)
          }
        </div>
        {
          formNo === 1 && 
        <>
        
          <div>
              <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 undefined"
              >
                  Name
              </label>
              <div className="flex flex-col items-start">
                  <input
                      type="text"
                      name="name"
                      onChange={inputHandle}
                      value={state.name}
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
              </div>
          </div>
          <div className="mt-4">
              <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 undefined"
              >
                  Email
              </label>
              <div className="flex flex-col items-start">
                  <input
                      type="email"
                      name="email"
                      onChange={inputHandle}
                      value={state.email}
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
              </div>
          </div>
          <div className="mt-4">
              <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 undefined"
              >
                  Bussiness Name
              </label>
              <div className="flex flex-col items-start">
                  <input
                      type="email"
                      name="bussiness_name"
                      onChange={inputHandle}
                      value={state.bussiness_name}
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
              </div>
          </div>
          <div className="mt-4">
              <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 undefined"
              >
                  Password
              </label>
              <div className="flex flex-col items-start">
                  <input
                      type="password"
                      name="password"
                      onChange={inputHandle}
                      value={state.password}
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
              </div>
          </div>
          <div className="mt-4">
              <label
                  htmlFor="password_confirmation"
                  className="block text-sm font-medium text-gray-700 undefined"
              >
                  Confirm Password
              </label>
              <div className="flex flex-col items-start">
                  <input
                      type="password"
                      name="cpassword"
                      onChange={inputHandle}
                      value={state.cpassword}
                      className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
              </div>
          </div>
          <div className="flex items-center justify-end mt-4">
            
              <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
            </div>
          </div>
    </>
        }
        {
             formNo === 2 &&  
             <div>

             
             <div class="  py-3 rounded text-center">
             <h1 class="text-2xl font-bold">OTP Verification</h1>
             <div class="flex flex-col mt-4">
                 <span>Enter the OTP you received at</span>
                 <span class="font-bold">+91 ******876</span>
             </div>
             
             <div id="otp" class="flex flex-row justify-center text-center px-2 mt-5">
   <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" name='first'   value={otp.first} onChange={otphandle} id="first" maxlength="1" /> 
   <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" name='second' value={otp.second} onChange={otphandle}   id="second" maxlength="1" /> 
   <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" name='third'  value={otp.third} onChange={otphandle}  id="third" maxlength="1" /> 
   <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" name='fourth' value={otp.fourth} onChange={otphandle}   id="fourth" maxlength="1" />
   <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" name='fifth'  id="fifth" value={otp.fifth} onChange={otphandle} maxlength="1" /> 
   <input class="m-2 border h-10 w-10 text-center form-control rounded" type="text" name='sixth'  value={otp.sixth} onChange={otphandle}  id="sixth" maxlength="1" />
             </div>
             
             <div class="flex justify-center text-center mt-5">
                 <a class="flex items-center text-blue-700 hover:text-blue-900 cursor-pointer"><span class="font-bold">Resend OTP</span><i class='bx bx-caret-right ml-1'></i></a>
             </div>
             <div className="flex items-center justify-end mt-4">
            
              <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
            </div>
          </div>
       </div>
       </div>
        }

        {
          formNo === 3 && <div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="varsity">GSTN</label>
              <input value={state.varsity} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='varsity' placeholder='varsity name' id='varsity' />
            </div>
            
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="session">PAN No.</label>
              <input value={state.session} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="text" name='session' placeholder='session' id='session' />
            </div>
            <div className='flex flex-col mb-2'>
              <label className='text-slate-500' htmlFor="address">PAN No.</label>
              <textarea value={state.address} onChange={inputHandle} row='10' className='p-2 border border-slate-400 mt-1 outline-0 text-slate-500 focus:border-blue-500 rounded-md' type="number" name='address' placeholder='address' ></textarea>
            </div>
            <div className="flex items-center justify-end mt-4">
            
              <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
            </div>
          </div>
          </div>
        }

        {
          formNo === 4 && <div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="district">House No.</label>
              <input value={state.district} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='house' placeholder='district name' id='district' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="thana">Area </label>
              <input value={state.thana} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='area' placeholder='thana' id='thana' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="post">city</label>
              <input value={state.post} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='city' placeholder='post' id='post' />
            </div>
            <div className='flex flex-col mb-2'>
              <label htmlFor="post">State</label>
              <input value={state.post} onChange={inputHandle} className='p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md' type="text" name='state' placeholder='post' id='post' />
            </div>
            <div className="flex items-center justify-end mt-4">
            
              <div className='mt-4 gap-3 flex justify-center items-center'>
              <button onClick={pre} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Previous</button>
              <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Next</button>
            </div>
          </div>
          </div>
        }

      </div>
    </div>
  );
}

export default App;