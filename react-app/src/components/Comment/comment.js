import React from 'react';

function CreateComment(){

    // function submitHandler(e){
    //     e.preventDefault();
    //      POST to database with the comment
    // }

    return(
        <form action={''} method={'POST'}>
            <textarea placeholder='Leave a comment'></textarea>
            <button type='submit'>Post</button>
        </form>
    )
}

export default CreateComment;
