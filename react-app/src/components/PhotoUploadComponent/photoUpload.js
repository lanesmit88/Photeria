import React from 'react';
import ImageUploading from 'react-images-uploading';
 
function ImageUpload() {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
 
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const handleSubmit = async (e) => {
      e.preventDefault()
      let image64 = document.querySelector('.image-item > img')
      let base =image64.src
      const newPost = await fetch(`/api/post/uploadimage`,{method:'post',body: JSON.stringify({base})});
    //   const newPost = await fetch(`/api/post/uploadimage`,{method:'post',body: JSON.stringify({base})});
      alert(image64.src)
  }

  const handleSubmit2 = async (e) => {
      e.preventDefault()
  
      const getImage = await fetch(`/api/post/testgetimage`);
      const resp = await getImage.json()
    //   const newPost = await fetch(`/api/post/uploadimage`,{method:'post',body: JSON.stringify({base})});
      console.log(resp.image[0].photoData)
      let newImg=document.createElement('img')
      newImg.setAttribute('src',`${resp.image[0].photoData}`)
      document.querySelector('.newImage').appendChild(newImg)  
  }
 
  return (
    <div className="App">
      <ImageUploading
        // multiple
        value={images}
        onChange={onChange}
        maxNumber={1}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI
          <div className="upload__image-wrapper">
            <button
              style={isDragging ? { color: 'red' } : undefined}
              onClick={onImageUpload}
              {...dragProps}
            >
              Upload Image
            </button>
            &nbsp;
            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image['data_url']} alt="" width="100" />
                <div className="image-item__btn-wrapper">
                  <button onClick={() => onImageUpdate(index)}>Update</button>
                  <button onClick={() => onImageRemove(index)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>

     
      <div class='newImage'></div>
      {/* <form onSubmit={handleSubmit} action="" method="post">
          <button type='submit'>Send Image</button>
      </form>

      <form onSubmit={handleSubmit2} action="" method="get">
          <button type='submit'>Get Image</button>
      </form> */}
    </div>
  );
}

export default ImageUpload