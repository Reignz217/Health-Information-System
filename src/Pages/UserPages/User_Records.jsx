import { Search } from "lucide-react"
import PatientsData from "../../Data/PatientsData"
import { Link } from "react-router-dom"
import Button from "../../Components/Button"


export default function User_Records() {
  return (
    <div className="w-full">
       <div className='md:my-10 my-5'>
         <h1 className="md:text-5xl text-3xl text-[#227C67] text-center font-bold tracking-widest uppercase fade-in-left">Patients <span className='text-black'>List</span></h1> 
         <div className="flex gap-5 justify-between items-center lg:px-10 px-3 pt-5 fade-in-up">
           <div className="relative">
             <input type="text" placeholder="Search" id="search" name="search" className="md:px-5 md:py-3 px-3 py-2 text-sm w-full md:w-96 bg-slate-200 rounded-2xl"/>
             <button className="cursor-pointer">
               <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
             </button>
           </div>
           <Link to='/user_add_patient'><Button name="Add Patient"/> </Link>
         </div>
         <div className='overflow-auto lg:mx-10 mx-3 mt-2 md:my-5 shadow-lg rounded-2xl max-h-[600px] fade-in-up'>
           <table className='w-full whitespace-nowrap min-w-[600px] text-center'>
             <thead className='bg-[#227C67] text-white sticky top-0'>
               <tr>
                 <th className='lg:p-5 p-2 lg:text-xl text-sm rounded-tl-2xl'>ID</th>
                 <th className='lg:p-5 p-2 lg:text-xl text-sm'>Name</th>
                 <th className='lg:p-5 p-2 lg:text-xl text-sm'>Date of Birth</th>
                 <th className='lg:p-5 p-2 lg:text-xl text-sm'>Gender</th>
                 <th className='lg:p-5 p-2 lg:text-xl text-sm'>Address</th>
                 <th className='lg:p-5 p-2 lg:text-xl text-sm'>Contact</th>
                 <th className='lg:p-5 p-2 lg:text-xl text-sm rounded-tr-2xl'>Action</th>
               </tr>
             </thead>
             <tbody>
               {PatientsData.map((patient,index)=>
               <tr key={index} className='hover:bg-gray-200 border-b border-gray-300'>
                 <td className='md:p-3 p-1 md:text-lg text-sm'>{patient.id}</td>
                 <td className='md:p-3 p-1 md:text-lg text-sm'>{patient.name}</td>
                 <td className='md:p-3 p-1 md:text-lg text-sm'>{patient.dob}</td>
                 <td className='md:p-3 p-1 md:text-lg text-sm'>{patient.gender}</td>
                 <td className='md:p-3 p-1 md:text-lg text-sm'>{patient.address}</td>
                 <td className='md:p-3 p-1 md:text-lg text-sm'>{patient.contact}</td>
                 <td className='md:p-3 p-1 md:text-lg text-sm flex md:gap-5 gap-2 justify-center items-center'>
                   <Link to='/user_view_patient' className='md:px-5 md:py-2 px-3 py-2 bg-[#227C67] hover:bg-[#549686] rounded-xl font-medium text-white text-sm'> View </Link>
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
