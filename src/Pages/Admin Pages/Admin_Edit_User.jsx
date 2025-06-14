import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { useState } from "react";

export default function Admin_Edit_User() {

    const [image, setImage] = useState();

    const handleImage = (e) => {
        const file = (e.target.files[0]);
            if (file) {
                const imgUrl = URL.createObjectURL(file);
                setImage(imgUrl);
            }
    }

  return (
    <div className="w-full">
        <div className='my-10 md:mx-10 mx-3'>
            <h1 className='lg:text-5xl text-3xl text-[#227C67] text-center font-bold tracking-widest uppercase fade-in-right'>User <span className='text-black'>Info</span></h1>
            <div className="flex flex-col gap-10 shadow-lg md:p-10 px-3 py-10 rounded-2xl fade-in-up">
                <div className="flex justify-between items-center">
                    <h4 className="md:text-3xl text-xl text-[#227C67] font-medium">User Profile</h4>
                    <div className="flex md:gap-5 gap-2">
                        <Link to="/view_user"><Button name="Back"/></Link>
                        <Button name="Save"/>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-5 lg:justify-evenly items-center">
                    <div className="md:w-96 w-60">
                        <img src={image || '/Default.jpg'} alt="Profile Pic" className="w-full shadow-lg object-cover aspect-square"></img>
                    </div>
                    <div className="flex flex-col gap-2 w-full md:w-auto">
                        <div className="flex flex-col md:flex-row md:gap-10 gap-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Firstname">Firstname:</label>
                                <input type="text" placeholder="Firstname" name="Firstname" id="Firstname" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Lastname">Lastname:</label>
                                <input type="text" placeholder="Lastname" name="Lastname" id="Lastname" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-10 gap-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Middlename">Middlename:</label>
                                <input type="text" placeholder="Middlename" name="Middlename" id="Middlename" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Username">Username:</label>
                                <input type="text" placeholder="Username" name="Username" id="Username" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-10 gap-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Email">Email:</label>
                                <input type="text" placeholder="Email" name="Email" id="Email" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="text-lg font-medium" htmlFor="Gender">Gender:</label>
                                <div className="flex items-center md:gap-10 gap-5">
                                    <div className="flex gap-2 items-center">
                                        <input type="radio" value="Male" name="male" id="male"/>    
                                        <label className="text-lg font-medium" htmlFor="male">Male</label>
                                    </div>
                                    <div className="flex gap-2 items-center">
                                        <input type="radio" value="Female" name="female" id="female"/>
                                        <label className="text-lg font-medium" htmlFor="female">Female</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-10 gap-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Occupation">Occupation:</label>
                                <input type="text" placeholder="Occupation" name="Occupation" id="Occupation" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Contact">Contact No:</label>
                                <input type="text" placeholder="Contact" name="Contact" id="Contact" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-10 gap-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="role">User Type:</label>
                                <select name="role" id="role" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg">
                                    <option value="Admin">Admin</option>
                                    <option value="User">User</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="dob">Date of Birth:</label>
                                <input type="text" placeholder="Birthday" name="dob" id="dob" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-10 gap-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="image">Update Pic:</label>
                                <input type="file" name="image" accept="image/*" onChange={handleImage} id="image" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="old_pass">Change Password?</label>
                                <input type="text" placeholder="Old Password" name="old_pass" id="old_pass" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-10 gap-2">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="new_pass">New Password:</label>
                                <input type="text" placeholder="New Passord" name="rolnew_passe" id="new_pass" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="confirm_pass">Confirm Password:</label>
                                <input type="text" placeholder="Confirm Password" name="confirm_pass" id="confirm_pass" className="px-5 py-3 lg:w-96 md:w-72 w-full bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
