import React,{useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import M from 'materialize-css'

const Signup = ()=>{
    const history = useHistory()
    const [name,setName] = useState("")
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: 'Invalid email',classes:"#ef5350 red lighten-1"})
            return
        }
        fetch("/signup",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,
            password,
            email
        })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error,classes:"#ef5350 red lighten-1"})
            }
            else{
                M.toast({html:data.message,classes:"#43a047 green darken-1"})
                window.location.href="http://localhost:3000/signin"
                
            }
        }).catch(err=>{
            console.log(err)
        })
    }

    return(
        <div className='mycard'>
            <div className="card auth-card input-field">
                <h2>Dailygram</h2>
                <input
                type="text"
                placeholder='name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <input
                type="text"
                placeholder='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                type="text"
                placeholder='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                
                <button className="btn waves-effect waves-light #ea80fc purple darken-1"
                onClick={()=>PostData()}
                >
                    Sign-up 
                </button>
                <h5>
                    <a href='/signin'>Already have an account?</a>
                </h5>

            </div>
        </div>
    )
}

export default  Signup
