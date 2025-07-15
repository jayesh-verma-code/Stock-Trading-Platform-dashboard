import React, {useState} from 'react'
import {CircleUserRound} from 'lucide-react';
import UserBarActive from './UserBarActive';

const UserBar = () => {
  const [userBarActive, setUserBarActive] = useState(false);
  return (
    <div onClick={() => {setUserBarActive(!userBarActive)}} className='flex items-center gap-[1rem] rounded-[2px] hover:bg-purple-200'> 
       <span className='text-purple-500'><CircleUserRound size={20} strokeWidth={1.75} /></span>
       <span>User</span>

       {userBarActive && <UserBarActive/> }
    </div>

  )
}

export default UserBar