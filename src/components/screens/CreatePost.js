import React,{useState,useEffect} from "react"
import M from 'materialize-css'
import {useHistory} from 'react-router-dom'

const CreatePost = ()=>{
    const history = useHistory()
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [image,setImage] = useState("")
    const [url,setUrl] = useState("")
    useEffect(()=>{
        if(url){
            fetch("/createpost",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                    title,
                    body,
                    pic:url
                })
                }).then(res=>res.json())
                .then(data=>{
                   
                    if(data.error){
                        M.toast({html: data.error,classes:"#ef5350 red lighten-1"})
                    }
                    else{
                        M.toast({html:"Created post successfully",classes:"#43a047 green darken-1"})
                        window.location.href="http://localhost:3000/"
                    }
                }).catch(err=>{
                    console.log(err)
                })
        }

    },[url])

const postDetails = ()=>{
    const data = new FormData()
    data.append("file",image)
    data.append("upload_preset","dailygram")
    data.append("cloud_name","dailygram-mern")
    fetch("https://api.cloudinary.com/v1_1/dailygram-mern/image/upload",{
        method:"post",
        body:data
    })
    .then(res=>res.json())
    .then(data=>{
        setUrl(data.url)
    })
    .catch(err=>{
        console.log(err)
    })
    
 

}

    return(
        <div className="card input-field"
        style={{
            margin:"30px auto",
            maxWidth:"500px",
            padding:"20px",
            textAlign:"center"
        }}
        >
            <input 
            type='text' 
            placeholder='Title'
            value={title} 
            onChange={(e)=>setTitle(e.target.value)}
            />
            <input 
            type='text' 
            placeholder='Body' 
            value={body} 
            onChange={(e)=>setBody(e.target.value)}
            />
            <div className="file-field input-field">
                <div className="btn #ea80fc purple accent-1">
                    <span>Upload image</span>
                    <input type="file" onChange={(e)=>setImage(e.target.files[0])}/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
                </div>
                <button className="btn waves-effect waves-light #ea80fc purple darken-1"
                onClick={()=>postDetails()}
                
                >
                    Submit Post
                </button>

        </div>
    )
}

export default CreatePost
