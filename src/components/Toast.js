import * as React from 'react';
import 'react-toastify/dist/ReactToastify.css'; 
import { ToastContainer, toast } from 'react-toastify';

export default function Toast({type,text,active,setToast}) {

  
  const notify = () => {toast(text)};
  const  notifySuccess = () => {toast.success(text)};
  
  React.useEffect(()=>{
  console.log(type,text,active);
    if(active){
      if(type==="success")
      {
        notifySuccess();
      }
      else
      {

        notify();
      }
      setTimeout(() => {
        setToast(false);
      }, 3000);
    }


  },[active,type,text]);
  
  
    return (
      <ToastContainer
      position="top-right"
      autoClose={1500}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
  );
}