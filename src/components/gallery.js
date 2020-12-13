import React, { useState } from 'react';
//add preventDefault to stop refresh
function Gallery() {

    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState("")

    const uploadImage = async event => {
        const files = event.target.files
        const data = new FormData()
        data.append('file',files[0])
        data.append('upload_preset', 'photography')
        setLoading(true)

        const response = await fetch("",
        {
            method:"POST",
            body:data,
        })

        const file = await response.json()

        console.log(file)

        setImage(file.secure_url)
        setLoading(false)

    }

    return (
        <div className="gallery-wrapper">
            <h1> Upload Photography </h1>
            <input type="file"
            name="file"
            placeholder="upload your photography pic"
            onChange={uploadImage}/>
        
        {loading?(<h3>LOADING!!!!</h3>):(<img src={image} style={{width:'300px'}}/>
            ) 
        }

        </div>
    )
}

export default Gallery;

