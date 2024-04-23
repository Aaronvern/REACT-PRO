import React, { useEffect, useLayoutEffect, useState } from 'react';

function Github(props) {
const [data,setData]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Aaronvern')
        .then (res => res.json())
        .then ( data =>{
            setData(data)
        })
    },[])
    return (
        <div className=' text-center bg-gray-700 text-white p-4 text-3xl'>
            Github followers : {data.followers} <br></br>
            Twitter : {data.twitter_username}<br></br>
            folowing : {data.following}<br></br>
            <img src={data.avatar_url} height="500" width="300"></img>
        </div>
        
    );
}

export default Github;