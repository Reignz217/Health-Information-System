
import { Outlet } from 'react-router-dom'
import User_Header from '../Components/User_Header'
import UserSideBar from '../Components/User_SideBar'
import { useState } from 'react'

export default function AdminLayout() {

  const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(prev => !prev);
    }
    
  return (
    <div className="flex flex-col h-screen">
      <div>
          <User_Header handleClick={handleClick}/>
      </div>
      <div className='flex-1 flex overflow-y-auto'>
        <UserSideBar menu={menu} setMenu={setMenu}/>
        <Outlet/>
      </div>
    </div>
  )
}