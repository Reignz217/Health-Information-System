import { Eye, EyeOff, Lock, User, X } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Login() {

    /* Show Password */
    const [showPassword, SetShowPassword] = useState(false);
    const handleClick = () => {
        SetShowPassword(prev => !prev)
    }

    /* Form Validation */
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const form = useRef();

    const Submit = (e) => {
        e.preventDefault();
        form.current;
        const username = e.target.username.value.trim();
        const password = e.target.password.value;

            if (username === '' || password === ''){
                setError('All fields are required!');
                setSuccess('');
                return;
            }else {
                setSuccess('Login Successfully!');
                setError('')
                form.current.reset();
                return;
            }
    }
    /* END */
    /* Modal Info */
    const [show, setShow] = useState(true); // default is visible

useEffect(() => {
  const hideModal = localStorage.getItem("hideModal");
  if (hideModal === "true") {
    setShow(false); // user already closed it before
  }
}, []);

const handleCloseModal = () => {
  setShow(false); // hide it now
  localStorage.setItem("hideModal", "true"); // remember user's choice
};




  return (
    <div className="flex flex-col lg:flex-row h-screen pb-10 lg:pb-0">
        {show && (
            <div className="absolute flex justify-center items-center bg-black/80 top-0 w-full h-full z-10">
                <div className="bg-gray-300 rounded-2xl md:w-2/3 md:h-96 h-70 flex flex-col justify-between md:p-10 p-5 mx-3 fade-in-up">
                    <X className="cursor-pointer border rounded-full p-1 self-end " onClick={handleCloseModal} size={35}/>
                    <div className=" flex justify-center items-center text-center h-full">   
                        <p className="md:text-2xl text-lg">This is just a frontend for demo purposes only. There is no Backend. if you want to go to dashboard,
                            just put any details on the fields and click on the button 1 or 2 times. 
                        </p>
                    </div>
                </div>
            </div>
        )}
        <div className="flex-1 flex flex-col justify-between items-center py-20 text-white text-center relative fade-in-left">
            <div className="bg-[#227C67] absolute top-0 w-full h-3/4 lg:h-full  rounded-br-full rounded-bl-full lg:rounded-bl-none -z-1"></div>
            <div>
                <div className="flex flex-col items-center">
                    <img src="./flogo.png"/>
                    <p className="md:text-2xl font-medium">Welcome to</p>
                    <p className="md:text-4xl text-xl font-medium"><strong>Health</strong> Information System</p>
                </div>
                <div className="flex flex-col items-center gap-3 mt-10 md:text-2xl text-sm font-medium">
                    <p>Join Us!</p>
                    <Link to="/signup" className="md:px-8 md:py-2 px-3 py-2 bg-[#227C67] hover:bg-[#549686] md:text-lg tex-sm rounded-3xl border-2 uppercase">Sign Up</Link>
                </div>
            </div>
            <img className="lg:h-120 h-80 fade-in-left delay-600 lg:block hidden" src="./log.svg"/>
        </div>
        <div className="flex-1 flex md:justify-center md:items-center -translate-y-40 md:-translate-y-30 lg:translate-y-0">
            <div className="flex flex-col justify-center w-full md:w-auto items-center gap-5 fade-in-up">
                <h4 className="md:text-3xl text-xl font-bold uppercase">Sign In</h4>
                <form ref={form} onSubmit={Submit} className="flex flex-col items-center md:gap-5 gap-2 px-5 md:px-0 w-full">
                    {success && <p className=" p-2 rounded-xl text-white bg-green-500 w-full text-center">{success}</p>}
                    {error && <p className=" p-2 rounded-xl text-white bg-red-500 w-full text-center">{error}</p>}
                    <div className="relative w-full">
                        <input type="text" placeholder="Username" name="username" className="pl-12 pr-5 py-3 bg-slate-200 rounded-2xl md:w-96 w-full text-gray-500 font-medium"/>
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    </div>
                    <div className="relative w-full">
                        <input type={showPassword ? "text" : "password"} placeholder="Password" name="password" className="pl-12 pr-5 py-3 bg-slate-200 rounded-2xl md:w-96 w-full text-gray-500 font-medium"/>
                        <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        {showPassword ? (
                            <Eye className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" onClick={()=>handleClick()}/>    
                        ): (
                            <EyeOff className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" onClick={()=>handleClick()}/> 
                        )}
                    </div>
                    <button className="py-3 bg-[#227C67] hover:bg-[#549686] text-white font-bold w-40 rounded-3xl cursor-pointer"><Link to="/dashboard" onClick={handleCloseModal}>Login</Link></button>
                    <p className="font-medium text-sm">Forgot your password? <Link to="/forgot_pass" className="text-red-500 hover:underline">Click here!</Link></p>
                </form>
            </div>
        </div>
    </div>
  )
}
