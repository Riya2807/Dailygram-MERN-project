import React,{useEffect,useState} from 'react'


const Profile = ()=>{
    return(
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
                    <h4>Riya Godiyal</h4>
                    <div style={{display:'flex',justifyContent:'space-between', width:'108%'}}>
                        <h6>358 posts</h6>
                        <h6>271 followers</h6>
                        <h6>300 following</h6>
                    </div>
                </div>
            </div>
            <div className='gallery'>
                <img className='item' src='https://images.unsplash.com/photo-1642534270237-ae57b321c5bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8R0VoMVluRTdNLW98fGVufDB8fHx8&dpr=2&auto=format&fit=crop&w=294&q=60'/>
                <img className='item' src='https://images.unsplash.com/photo-1588774587756-2d190b67c56c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60'/>
                <img className='item' src='https://images.unsplash.com/photo-1612454376902-577cd469d008?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MnxHRWgxWW5FN00tb3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60'/>

            </div>
        </div>
    )
}

export default  Profile