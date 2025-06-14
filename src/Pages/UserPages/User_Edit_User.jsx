import { Link } from "react-router-dom";
import Button from "../../Components/Button";
import { useState } from "react";

export default function User_Edit_User() {

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
        <div className='my-10'>
            <h1 className='text-5xl text-[#227C67] text-center font-bold tracking-widest uppercase fade-in-right'>User <span className='text-black'>Info</span></h1>
            <div className="flex flex-col gap-10 shadow-lg p-10 rounded-2xl fade-in-up">
                <div className="flex justify-between items-center px-10">
                    <h4 className="text-3xl text-[#227C67] font-medium">User Profile</h4>
                    <div className="flex gap-5">
                        <Link to="/user_view_user"><Button name="Back"/></Link>
                        <Button name="Save"/>
                    </div>
                </div>
                <div className="flex justify-evenly items-center">
                    <div className="w-96">
                        <img src={image || '/Default.jpg'} alt="Profile Pic" className="w-full shadow-lg object-cover aspect-square"></img>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Firstname">Firstname:</label>
                                <input type="text" value="Firstname" name="Firstname" id="Firstname" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Lastname">Lastname:</label>
                                <input type="text" value="Lastname" name="Lastname" id="Lastname" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Middlename">Middlename:</label>
                                <input type="text" value="Middlename" name="Middlename" id="Middlename" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Username">Username:</label>
                                <input type="text" value="Username" name="Username" id="Username" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Email">Email:</label>
                                <input type="text" value="Email" name="Email" id="Email" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-4">
                                <label className="text-lg font-medium" htmlFor="Gender">Gender:</label>
                                <div className="flex items-center gap-10">
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
                        <div className="flex gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Occupation">Occupation:</label>
                                <input type="text" value="Occupation" name="Occupation" id="Occupation" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="Contact">Contact No:</label>
                                <input type="text" value="Contact" name="Contact" id="Contact" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="role">User Type:</label>
                                <select name="role" id="role" className="px-5 py-3 w-96 bg-slate-200 rounded-lg">
                                    <option value="Admin">Admin</option>
                                    <option value="User">User</option>
                                </select>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="dob">Date of Birth:</label>
                                <input type="text" value="Birthday" name="dob" id="dob" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="image">Update Pic:</label>
                                <input type="file" name="image" accept="image/*" onChange={handleImage} id="image" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="old_pass">Change Password?</label>
                                <input type="text" value="Old Password" name="old_pass" id="old_pass" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="new_pass">New Password:</label>
                                <input type="text" value="New Passord" name="rolnew_passe" id="new_pass" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-lg font-medium" htmlFor="confirm_pass">Confirm Password:</label>
                                <input type="text" value="Confirm Password" name="confirm_pass" id="confirm_pass" className="px-5 py-3 w-96 bg-slate-200 rounded-lg"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
