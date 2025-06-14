import { Search } from "lucide-react"
import UsersData from "../../Data/Users"
import { Link } from "react-router-dom"

export default function User_Users() {
  return (
    <div className="w-full">
      <div className='md:my-10 my-5'>
        <h1 className="md:text-5xl text-3xl text-[#227C67] text-center font-bold tracking-widest uppercase fade-in-left">Users</h1> 
        <div className="flex justify-between items-center font-medium md:px-12 px-5 mt-5 fade-in-up">
            <h6 className="md:text-2xl text-[#227C67]">List of users</h6>
          <div className="relative">
            <input type="text" placeholder="Search" className="md:px-5 px-3 md:py-3 py-2 text-sm md:w-96 bg-slate-200 rounded-2xl"/>
            <button className="cursor-pointer">
              <Search size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </button>
          </div>
        </div>
        <div className='overflow-auto lg:mx-10 mx-3 mt-2 md:my-5 shadow-lg rounded-2xl max-h-[600px] fade-in-up'>
          <table className='w-full min-w-[600px] text-center'>
            <thead className='bg-[#227C67] text-white sticky top-0'>
              <tr>
                <th className='lg:p-5 p-2 lg:text-xl text-sm rounded-tl-2xl'>ID</th>
                <th className='lg:p-5 p-2 lg:text-xl text-sm'>Name</th>
                <th className='lg:p-5 p-2 lg:text-xl text-sm'>Email</th>
                <th className='lg:p-5 p-2 lg:text-xl text-sm'>Role</th>
                <th className='lg:p-5 p-2 lg:text-xl text-sm'>Contact</th>
                <th className='lg:p-5 p-2 lg:text-xl text-sm rounded-tr-2xl'>Action</th>
              </tr>
            </thead>
            <tbody>
              {UsersData.map((user,index)=>
              <tr key={index} className='hover:bg-gray-200 border-b border-gray-300'>
                <td className='md:p-3 p-1 md:text-lg text-sm'>{index}</td>
                <td className='md:p-3 p-1 md:text-lg text-sm'>{user.name}</td>
                <td className='md:p-3 p-1 md:text-lg text-sm'>{user.email}</td>
                <td className='md:p-3 p-1 md:text-lg text-sm'>{user.role}</td>
                <td className='md:p-3 p-1 md:text-lg text-sm'>{user.contact}</td>
                <td className='md:p-3 p-1 md:text-lg text-sm flex md:gap-5 gap-2 justify-center items-center'>
                  <Link to='/user_view_user' className='md:px-5 md:py-2 px-3 py-2 bg-[#227C67] hover:bg-[#549686] rounded-xl font-medium text-white text-sm'> View </Link>
                  <Link to='#' className='md:px-5 md:py-2 px-3 py-2 bg-red-500 hover:bg-red-400 rounded-xl font-medium text-white text-sm'> Delete </Link>
                </td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
