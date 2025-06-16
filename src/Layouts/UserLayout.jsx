
import { Outlet } from 'react-router-dom'
import UserHeader from '../Components/User_Header'
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
          <UserHeader handleClick={handleClick}/>
      </div>
      <div className='flex-1 flex overflow-y-auto'>
        <UserSideBar menu={menu} setMenu={setMenu}/>
        <Outlet/>
      </div>
    </div>
  )
}