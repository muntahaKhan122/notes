import * as React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
export default function Toast({type,text,active,setToast}) {
  
  const notify = () => toast({text});
  const  notifySuccess = () => toast.success({text});
  
  React.useEffect(()=>{
  console.log(type,text,active);
    if(active){
      if(type==="success")
      {
        console.log("toast");
        notifySuccess();
      }
      else
      {
        console.log("toast");
        notify();
      }
      setTimeout(() => {
        setToast(false);
      }, 2000);
    }


  },[active,type]);
  
  
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