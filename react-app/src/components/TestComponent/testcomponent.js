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
     <img src={imgurl} style={{height:'300px', width:'300px', marginTop:'50px'}}></img>
     <textarea value={imgurl} style={{width:"500px",height:'500px'}}></textarea>
    </div>
  );
}

export default TestComponent