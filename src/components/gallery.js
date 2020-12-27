import React, { Component } from 'react';
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import { render } from 'react-dom';

class Gallery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gallery: []
        }
    }
    componentDidMount() {
              
        axios.get('https://res.cloudinary.com/sparklemoon/image/list/wildlife.json')
            .then(res => {
                console.log(res.data.resources);
                this.setState({gallery: res.data.resources});
            });
    }
    uploadWidget() {
        let _this = this;
        cloudinary.openUploadWidget({ cloud_name: 'sparklemoon', upload_preset: 'photography', tags:['wildlife']},
            function(error, result) {
            // Update gallery state with newly uploaded image
                _this.setState({gallery: _this.state.gallery.concat(result)})
            });
    }
    
    render(){
        return (
            <div className="gallery-wrapper">
                <h1>Parker James Gallery</h1>
                <div className="gallery">
                    <CloudinaryContext cloudName="sparkelmoon">
                        {
                            this.state.gallery.map(data => {
                                return (
                                    <div className="responsive" key={data.public_id}>
                                        <div className="img">
                                            <a target="_blank" href={`https://res.cloudinary.com/sparklemoon/image/upload/${data.public_id}.jpg`}>
                                                <Image publicId={data.public_id}>
                                                    <Transformation
                                                        crop="scale"
                                                        width="300"
                                                        height="200"
                                                        dpr="auto"
                                                        responsive_placeholder="blank"
                                                    />
                                                </Image>
                                            </a>
                                            <div className="desc">Created at {data.created_at}</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </CloudinaryContext>
                    <div className="clearfix"></div>
                </div>
            </div>

        );
    }
}

render(<Gallery />, document.getElementById('container'));

/* <CloudinaryContext>
    <Image>
        <Transformation />
        <Transformation />
    </Image>
    <Image>
        <Transformation />
    </Image>
</CloudinaryContext> */




// import React, { useState } from 'react';

// import Login from './login.js';
// // import GalleryWidget from './gallery-widget.js';


// function Gallery() {

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

// export default Gallery;
