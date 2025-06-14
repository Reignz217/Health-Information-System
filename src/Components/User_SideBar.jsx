import {House, Files, Printer, ChartLine, User, LogOut, Icon, ChevronLast} from 'lucide-react'
import {Link, useLocation } from 'react-router-dom'

export default function UserSideBar({menu, setMenu}) {

    const nav = [
        {Name: 'Dashboard', Path: '/user_dashboard', Icon: <House/>},
        {Name: 'Records', Path: ['/user_records', '/user_add_patient'], Icon: <Files/>},
        {Name: 'Issuance', Path: '/user_issuance', Icon: <Printer/>},
        {Name: 'Analytics', Path: '/user_analytics', Icon: <ChartLine/>},
        {Name: 'Users', Path: ['/user_users', '/user_view_user', '/user_edit_user'], Icon: <User/>},
    ]


     const isActive = (path) => {
        if (Array.isArray(path)) {
        return path.includes(location.pathname);
        }
        return location.pathname === path;
    };

    const location = useLocation();
    const getHref = (path) => (Array.isArray(path) ? path[0] : path); // default to first path


  return (
    <aside 
        className={
            `fixed top-0 left-0 w-full bg-[#227C67] pb-10 transform transition-transform duration-500 z-10
            ${menu ? 'translate-x-0 flex h-full justify-between' : '-translate-x-full h-full'} lg:relative lg:translate-x-0 lg:w-56 lg:flex flex-col lg:justify-between fade-in-left` 
        }>
        <ul className="flex flex-col text-center gap-5 p-5">
            <ChevronLast size={30} onClick={()=>setMenu(!menu)} className={`lg:hidden cursor-pointer ${menu ? 'block text-white self-end' : 'hidden'}`}/>
            <Link to="/view_user" onClick={()=>setMenu(false)} className="lg:hidden block self-center mb-5">
                <img className="md:w-24 w-20 rounded-full"
                src="/Default.jpg" alt="Profile Pic"/>
            </Link>
            {nav.map((item,index) =>
                <li key={index}>
                    <Link 
                        to={getHref(item.Path)}
                        onClick={()=>setMenu(false)} 
                        className={`p-5 hover:bg-white hover:text-[#227C67] hover:rounded-2xl flex items-center justify-center lg:justify-start md:w-96 lg:w-auto m-auto gap-2 md:text-xl text-lg font-medium
                        ${isActive(item.Path) ? " bg-white text-[#227C67] rounded-2xl" : "text-white"}`}> 
                        {item.Icon}
                        {item.Name} 
                    </Link>
                </li>
            )}
        </ul>
        <Link href="/logout" className="self-center text-white flex items-center gap-2 md:text-xl text-lg font-medium">Logout<LogOut /></Link>
    </aside>
  )
}
