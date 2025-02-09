import React, { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../App'
import { useParams } from 'react-router-dom'

const Profile = ()=>{
    const [userProfile,setProfile] = useState(null)
    const [showfollow,setShowFollow] = useState(true)
    const { state, dispatch } = useContext(UserContext)
    const {userid} = useParams()
    
    useEffect(()=>{
        fetch(`/user/${userid}`,{
            headers:{
                'Authorization':"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then(result=>{
            setProfile(result)
        })
    },[])

    const followUser = ()=>{
        fetch('/follow',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                followId:userid
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            dispatch({type:"UPDATE",payload:{following:data.following,followers:data.followers}})
            localStorage.setItem("user",JSON.stringify(data))
            setProfile((prevState)=>{
                return {
                    ...prevState,
                    user:{
                        ...prevState.user,
                        followers:[...prevState.user.followers,data._id]
                    }
                }
            })
            setShowFollow(false)
        })
    }
    const unfollowUser = ()=>{
        fetch('/unfollow',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                unfollowId:userid
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            dispatch({type:"UPDATE",payload:{following:data.following,followers:data.followers}})
            localStorage.setItem("user",JSON.stringify(data))
            
            setProfile((prevState)=>{
                const newFollower = prevState.user.followers.filter(item=>item !== data._id)
                return {
                    ...prevState,
                    user:{
                        ...prevState.user,
                        followers:newFollower
                    }
                }
            })
            setShowFollow(true)
        })
    }

    return(
        <>
        {userProfile ? 
        <div style={{maxWidth:'550px',margin:'0px auto'}}>
        <div style={{
            display:'flex',
            justifyContent:'space-around',
            margin:'18px 0px',
            borderBottom:'1px solid grey'
        }}>
            <div>
                <img style={{width:'160px',height:'160px',borderRadius:'80px'}} 
                src='https://images.unsplash.com/photo-1601430854328-26d0d524344a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                />
            </div>
            <div>
                
                <h4>{userProfile.user.name}</h4>
                <div style={{display:'flex',justifyContent:'space-between', width:'108%'}}>
                    <h6>{userProfile.posts.length} Posts</h6>
                    <h6>{userProfile.user.followers.length} Followers</h6>
                    <h6>{userProfile.user.following.length} Following</h6>
                </div>
                {showfollow?
                <button style={{
                    margin:"10px"
                }} className="btn waves-effect waves-light #ea80fc purple darken-1"
                onClick={()=>followUser()}
                >
                    Follow  
                </button>
                :
                <button style={{
                    margin:"10px"
                }} className="btn waves-effect waves-light #ea80fc purple darken-1"
                onClick={()=>unfollowUser()}
                >
                    UnFollow  
                </button>
            }
                
                
            </div>
        </div>
        <div className='gallery'>
        {
               userProfile.posts.map(item=>{
                   return(
                    <img key={item._id} className="item" src={item.photo} alt={item.title}/>  
                   )
               })
           }

        </div>
    </div>
        
        : <h2>loading....</h2>}
        
        </>
    )
}

export default  Profile

//JSON.parse(localStorage.getItem('user').name)