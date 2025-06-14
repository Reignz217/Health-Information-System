
import { Outlet } from 'react-router-dom'
import Admin_Header from '../Components/Admin_Header'
import Admin_SideBar from '../Components/Admin_SideBar'
import { useState } from 'react';

export default function AdminLayout() {

  const [menu, setMenu] = useState(false);

    const handleClick = () => {
        setMenu(prev => !prev);
    }

  return (
    <div className="flex flex-col h-screen">
      <div>
          <Admin_Header handleClick={handleClick}/>
      </div>
      <div className='flex-1 flex overflow-y-auto'>
        <Admin_SideBar menu={menu} setMenu={setMenu}/>
        <Outlet/>
      </div>
    </div>
  )
}
