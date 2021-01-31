import React from 'react';

function CreatePost(){

    return(
        <div>
            <form action={''} method={'POST'}>
                <label for="img">Select image:</label>
                <input type="file" name="img" accept="image/*" />
                <textarea placeholder='Create a caption'></textarea>
                <input placeholder='Location' />
                <button type='submit'>Post</button>
            </form>
        </div>
    )
}

export default CreatePost;
