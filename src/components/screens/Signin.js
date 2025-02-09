import React,{useState,useContext} from 'react'
import {UserContext} from '../../App'
import M from 'materialize-css'

const Signin = ()=>{
    const {state,dispatch} = useContext(UserContext)
    const [password,setPassword] = useState("")
    const [email,setEmail] = useState("")
    const PostData = ()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
            M.toast({html: 'Invalid email',classes:"#ef5350 red lighten-1"})
            return
        }
        fetch("/signin",{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            password,
            email
        })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                M.toast({html: data.error,classes:"#ef5350 red lighten-1"})
            }
            else{
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
                dispatch({type:"USER",payload:data.user})
                M.toast({html:"Signed-in successfully",classes:"#43a047 green darken-1"})
                window.location.href="http://localhost:3000/"
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
                placeholder='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input
                type="password"
                placeholder='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <button className="btn waves-effect waves-light #ea80fc purple darken-1"
                onClick={()=>PostData()}
                >
                    Login   
                </button>
                <h5>
                    <a href='/signup'>Create new account</a>
                </h5>
        
            </div>
        </div>
    )
}

export default  Signin
