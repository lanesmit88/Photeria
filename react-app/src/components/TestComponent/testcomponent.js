import React,{useState,useEffect} from 'react';
import ImageUpload from '../PhotoUploadComponent/photoUpload'
 
function TestComponent() {
const [imgurl, setImgUrl] = useState('');
useEffect(()=>{
    console.log(imgurl)
},[imgurl])
  return (
    <div>
     
     <ImageUpload onNewImageBase64={b64=>setImgUrl(b64)}/>

   
    </div>
  );
}

export default TestComponent