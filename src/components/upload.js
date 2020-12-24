import React, { Component } from 'react';
import { render } from 'react-dom';

class Upload extends Component {

uploadWidget() {
    cloudinary.openUploadWidget({ cloud_name: 'sparklemoon', upload_preset: 'preset', tags:['wildlife']},
        function(error, result) {
            _this.setState({gallery: _this.state.gallery.concat(result)})
        });
}
render(){
    return (
        <div className="main">
            <h1>Gallery</h1>
            <div className="upload">
                <button onClick={this.uploadWidget.bind(this)} className="upload-button">
                    Add Image
                </button>
            </div>
        </div>

    );
}
}

render(<Upload />, document.getElementById('container'));





// import React, { useState } from 'react';

// import Login from './login.js';
// // import GalleryWidget from './gallery-widget.js';


// function Upload() {

//     const [loading, setLoading] = useState(false)
//     const [image, setImage] = useState("")
    

//     const uploadImage = async event => {
//         const files = event.target.files
//         const data = new FormData()
//         data.append('file',files[0])
//         data.append('upload_preset', 'photography')
//         setLoading(true)

//         const response = await fetch("https://api.cloudinary.com/v1_1/sparklemoon/image/upload",
//         {
//             method:"POST",
//             body:data,
//         })

//         const file = await response.json()

//         console.log(file)

//         setImage(file.secure_url)
//         setLoading(false)

//     }

//     return (
        
//         <div className="all-gallery-content-wrapper">
//         <div className="gallery-upload-wrapper">
//             <h1> Upload Photography </h1>
//             <input type="file"
//             name="file"
//             placeholder="upload your photography pic"
//             onChange={uploadImage}/>
        
//         {loading?(<h3>LOADING!!!!</h3>):(<img src={image} style={{width:'300px'}}/>

//             ) 
//         }
        
//         <Login/>
//         {/* <GalleryWidget/> */}
//         </div>

//         <div className="gallery-widget-wrapper">
        
//         </div>

//         </div>
            
//     )

              
// }

// export default Upload;
