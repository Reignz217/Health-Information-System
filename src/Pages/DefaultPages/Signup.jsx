import { Eye, EyeOff, Lock, Mail, Phone, User } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


export default function Signup() {
    /* Password Visibility */
    const [showPassword, setShowPassword] = useState();
    const handleClick = () => {
        setShowPassword(prev => !prev);
    }
    /*Confirm Password Visibility */
    const [showCpassword, setShowCpassword] = useState();
    const handleClick2 = () => {
        setShowCpassword(prev => !prev);
    }

    /* From Validation*/
    const form = useRef();
    const [errors, setErrors] = useState({
        email: '',
        number: '',
        username: '',
        password: '',
        cpassword: '',
        role: '',
    });
    const [success, setSuccess] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value.trim();
        const number = e.target.number.value.trim();
        const username = e.target.username.value.trim();
        const password = e.target.password.value;
        const cpassword = e.target.cpassword.value;
        const role = e.target.role.value;

        const newErrors = {
            email: '',
            number: '',
            username: '',
            password: '',
            cpassword: '',
            role: ''
        };

        let hasError = false;
        
        if (!email) {
            newErrors.email = 'Email is required';
            hasError = true;
        } 
         if (!validateEmail(email)) {
            newErrors.email = 'Invalid email address';
            hasError = true;
        }
         if (!number) {
            newErrors.number = 'Contact number is required';
            hasError = true;
        }
         if (!username) {
            newErrors.username = 'Username is required';
            hasError = true;
        }
         if (!password) {
            newErrors.password = 'Password is required';
            hasError = true;
        }
         if (!cpassword) {
            newErrors.cpassword = 'Please confirm your password';
            hasError = true;
        } 
         if (password !== cpassword) {
            newErrors.cpassword = 'Passwords do not match';
            hasError = true;
        }
         if (!['User', 'Admin'].includes(role)) {
            newErrors.role = 'Please select a valid role';
            hasError = true;
        }
        setErrors(newErrors);
            if (hasError) {
                setSuccess('');
                return;
            }

        setSuccess('Account created successfully!');
        setErrors({});
            if (form.current) {
                form.current.reset();
        }
    };

  return (
    <div className="flex flex-col lg:flex-row-reverse gap-5 md:gap-0 overflow-y-auto h-screen relative">
    {/* desktopscreen = Right / mobilescreen = Left  Logo*/}
        <div className="lg:flex-1 flex flex-col justify-between items-center py-20 text-white text-center relative fade-in-right">
            <div className="bg-[#227C67] absolute top-0 w-full h-full lg:h-full lg:rounded-br-none rounded-br-full rounded-bl-full -z-1"></div>
            <div>
                <div className="flex flex-col items-center gap-2">
                    <h4 className="md:text-4xl text-xl font-bold">Healthy Life, Happy Life!</h4>
                    <p className="md:text-xl text-lg font-medium"> Prioritizing your health is the first step toward happiness.</p>
                </div>
                <div className="flex flex-col items-center gap-3 mt-10 text-2xl font-medium">
                    <Link to="/" className="px-8 py-2 bg-[#227C67] hover:bg-[#549686] text-lg rounded-3xl border-2 uppercase">Sign In</Link>
                </div>
            </div>
            <img className="lg:block hidden h-3/4 fade-in-right" src="./register.svg"/>
        </div>

    {/* Desktopscreen = Left / Mobilescreen = Right Forms*/}
        <div className="flex-1 flex lg:justify-center lg:items-center">
            <div className="flex flex-col md:justify-center md:items-center gap-5 fade-in-up w-full">
                <h4 className="md:text-3xl text-xl font-bold uppercase text-center">Sign up</h4>
                <form ref={form} onSubmit={onSubmit} className="flex flex-col items-center lg:gap-5 gap-2 px-5 md:px-0">
                    {success && <p className="text-white w-full text-center p-2 rounded-xl bg-green-500">{success}</p>}
                    <div className="w-full">
                        <div className="relative">
                            <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className={`pl-12 pr-5 py-3 bg-slate-200 rounded-2xl md:w-96 w-full text-gray-500 font-medium ${errors.email ? 'border-red-700 border' : ''}`}
                            />
                            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        {errors.email && <p className="text-red-600 text-sm mt-1 ml-2">{errors.email}</p>}
                    </div>
                    <div className="w-full">
                        <div className="relative">
                            <input
                            type="text"
                            name="number"
                            placeholder="number"
                            className={`pl-12 pr-5 py-3 bg-slate-200 rounded-2xl md:w-96 w-full text-gray-500 font-medium ${errors.number ? 'border-red-700 border' : ''}`}
                            />
                            <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        {errors.number && <p className="text-red-600 text-sm mt-1 ml-2">{errors.number}</p>}
                    </div>
                    <div className="w-full">
                        <div className="relative">
                            <input
                            type="text"
                            name="username"
                            placeholder="username"
                            className={`pl-12 pr-5 py-3 bg-slate-200 rounded-2xl md:w-96 w-full text-gray-500 font-medium ${errors.username ? 'border-red-700 border' : ''}`}
                            />
                            <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        {errors.username && <p className="text-red-600 text-sm mt-1 ml-2">{errors.username}</p>}
                    </div>
                    <div className=" w-full">
                        <div className="relative">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" className={`pl-12 pr-5 py-3 bg-slate-200 rounded-2xl md:w-96 w-full text-gray-500 font-medium ${errors.password ? 'border-red-700 border' : ''}`}/>
                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            {showPassword ? (
                                <Eye className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" 
                                onClick={()=>handleClick()} />
                            ) : (
                                <EyeOff className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" 
                                onClick={()=>handleClick()} />
                            )}
                        </div>
                        {errors.password && <p className="text-red-600 text-sm mt-1 ml-2">{errors.password}</p>}
                    </div>
                    <div className=" w-full">
                        <div className="relative">
                            <input type={showCpassword ? "text" : "password"} name="cpassword" placeholder="Confirm Password" className={`pl-12 pr-5 py-3 bg-slate-200 rounded-2xl md:w-96 w-full text-gray-500 font-medium ${errors.cpassword ? 'border-red-700 border' : ''}`}/>
                            <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            {showCpassword ? (
                                <Eye className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" 
                                onClick={()=>handleClick()} />
                            ) : (
                                <EyeOff className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer" 
                                onClick={()=>handleClick()} />
                            )}
                        </div>
                        {errors.cpassword && <p className="text-red-600 text-sm mt-1 ml-2">{errors.cpassword}</p>}
                    </div>
                    <div className="w-full">
                        <select name="role" className={`px-5 py-3 bg-slate-200 rounded-2xl md:w-96 w-full text-gray-500 font-medium ${errors.role ? 'border-red-700 border' : ''}`}>
                            <option value=''>Select Role</option>
                            <option value='User'>User</option>
                            <option value='Admin'>Admin</option>
                        </select>
                        {errors.role && <p className="text-red-600 text-sm mt-1 ml-2">{errors.role}</p>}
                    </div>
                    <button className="py-3 bg-[#227C67] hover:bg-[#549686] text-white font-bold w-40 rounded-3xl cursor-pointer">Sign Up</button>
                    <p className="font-medium text-sm">Already have an Account? <Link to="/" className="text-red-500 hover:underline">Click here!</Link></p>
                </form>
            </div>
        </div>
    </div>
    
  )
}
