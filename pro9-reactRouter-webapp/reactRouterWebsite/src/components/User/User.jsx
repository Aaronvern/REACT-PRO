import React from 'react';
import { useParams } from 'react-router-dom';


function User(props) {
    const {id} = useParams()
    return (
        <div className=' bg-gray-600  text-white text-3xl align-middle p-4'>
            user :{id}
        </div>
    );
}

export default User;