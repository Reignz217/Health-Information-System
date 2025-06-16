import { AlignJustify } from "lucide-react";
import { Link } from "react-router-dom";

export default function UserHeader({handleClick}) {

  return (
    <div className="bg-[#227C67] py-3 md:px-10 px-5 flex justify-between text-white items-center gap-5">
        <div className="flex items-center justify-between md:justify-start gap-5 w-full">
            <img src="./flogo.png" className="w-10 md:w-auto"/>
            <h4 className="md:text-2xl text-lg font-medium text-center"><strong>Health</strong> Information System</h4>
            <AlignJustify onClick={handleClick} className="lg:hidden cursor-pointer"/>
        </div>
        <Link to="/dashboard" className="hidden md:block text-center w-96"><p className="hover:underline hover:text-blue-400">Click here to view <strong>Admin Dashboard</strong></p></Link>
        <Link to="/user_view_user" className="hidden md:block">
            <img className="w-12 rounded-full"
            src="/Default.jpg" alt="Profile Pic"/>
        </Link>
    </div>
  )
}
