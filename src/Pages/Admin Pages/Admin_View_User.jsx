import { Link } from "react-router-dom";
import Button from "../../Components/Button";

export default function Admin_View_User() {
  return (
    <div className="w-full">
        <div className='my-10 md:mx-10 mx-3'>
            <h1 className='lg:text-5xl text-3xl text-[#227C67] text-center font-bold tracking-widest uppercase fade-in-right'>User <span className='text-black'>Info</span></h1>
            <div className="flex flex-col gap-10 shadow-lg md:p-10 px-3 py-10 rounded-2xl fade-in-up">
                <div className="flex justify-between items-center">
                    <h4 className="md:text-3xl text-xl text-[#227C67] font-medium">User Profile</h4>
                    <div className="flex md:gap-5 gap-2">
                        <Link to="/users"><Button name="Back"/></Link>
                        <Link to="/edit_user"><Button name="Edit"/></Link>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 lg:justify-evenly items-center">
                    <div className="md:w-96 w-60">
                        <img src='/Default.jpg' alt="Profile Pic" className="w-full shadow-lg object-cover aspect-square"></img>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                        <div className="flex flex-col md:flex-row md:gap-10 gap-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Firstname">Firstname:</label>
                                <input type="text" readOnly placeholder="Firstname" name="Firstname" id="Firstname" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Lastname">Lastname:</label>
                                <input type="text" readOnly placeholder="Lastname" name="Lastname" id="Lastname" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-10 gap-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Middlename">Middlename:</label>
                                <input type="text" readOnly placeholder="Middlename" name="Middlename" id="Middlename" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Username">Username:</label>
                                <input type="text" readOnly placeholder="Username" name="Username" id="Username" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-10 gap-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Email">Email:</label>
                                <input type="text" readOnly placeholder="Email" name="Email" id="Email" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="text-lg font-medium">Gender:</label>
                                <input type="text" readOnly placeholder="Male" name="Male" id="Male" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-10 gap-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Occupation">Occupation:</label>
                                <input type="text" readOnly placeholder="Occupation" name="Occupation" id="Occupation" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Contact">Contact No:</label>
                                <input type="text" readOnly placeholder="Contact" name="Contact" id="Contact" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-10 gap-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="role">User Type:</label>
                                <input type="text" readOnly placeholder="Role" name="role" id="role" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="dob">Date of Birth:</label>
                                <input type="text" readOnly placeholder="Birthday" name="dob" id="dob" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
