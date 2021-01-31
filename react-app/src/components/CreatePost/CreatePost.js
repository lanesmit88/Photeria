import React from 'react';
import { useState } from "react";
import ImageUpload from '../PhotoUploadComponent/photoUpload';

function CreatePost(){
    const [imgurl, setImgUrl] = useState('');

    return(
        <div>
            <form action={''} method={'POST'}>
                <label for="img">Select image:</label>
                <ImageUpload onNewImageBase64={b64 => setImgUrl(b64)}/>
                <textarea placeholder='Create a caption'></textarea>
                <input placeholder='Location' />
                <button type='submit'>Post</button>
            </form>
        </div>
    )
}

export default CreatePost;
