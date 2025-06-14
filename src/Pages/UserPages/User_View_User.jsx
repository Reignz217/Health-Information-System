import { Link } from "react-router-dom";
import Button from "../../Components/Button";

export default function User_View_User() {
  return (
    <div className="w-full">
        <div className='my-10'>
            <h1 className='text-5xl text-[#227C67] text-center font-bold tracking-widest uppercase fade-in-right'>User <span className='text-black'>Info</span></h1>
            <div className="flex flex-col gap-10 shadow-lg p-10 rounded-2xl fade-in-up">
                <div className="flex justify-between items-center px-10">
                    <h4 className="text-3xl text-[#227C67] font-medium">User Profile</h4>
                    <div className="flex gap-5">
                        <Link to="/user_users"><Button name="Back"/></Link>
                        <Link to="/user_edit_user"><Button name="Edit"/></Link>
                    </div>
                </div>
                <div className="flex justify-evenly items-center">
                    <div className="w-96">
                        <img src="/Default.jpg" alt="Profile Pic" className="w-full shadow-lg object-cover aspect-square"></img>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Firstname">Firstname:</label>
                                <input type="text" readOnly value="Firstname" name="Firstname" id="Firstname" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Lastname">Lastname:</label>
                                <input type="text" readOnly value="Lastname" name="Lastname" id="Lastname" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Middlename">Middlename:</label>
                                <input type="text" readOnly value="Middlename" name="Middlename" id="Middlename" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Username">Username:</label>
                                <input type="text" readOnly value="Username" name="Username" id="Username" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Email">Email:</label>
                                <input type="text" readOnly value="Email" name="Email" id="Email" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Gender">Gender:</label>
                                <input type="text" readOnly value="Gender" name="Gender" id="Gender" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Occupation">Occupation:</label>
                                <input type="text" readOnly value="Occupation" name="Occupation" id="Occupation" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Contact">Contact No:</label>
                                <input type="text" readOnly value="Contact" name="Contact" id="Contact" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="role">User Type:</label>
                                <input type="text" readOnly value="role" name="role" id="role" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="dob">Date of Birth:</label>
                                <input type="text" readOnly value="dob" name="dob" id="dob" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
