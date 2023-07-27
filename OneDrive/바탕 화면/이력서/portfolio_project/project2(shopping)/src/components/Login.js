import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail]=useState(localStorage.getItem("email")||"");
    const [password, setPassword]= useState("");
    const [showPassword, setShowPassword] = useState(false);

    return(
        <form className="max-w-xs px-2 mx-auto">
           <div className="mb-2 h-48 flex flex-col justify-center items-center">
                <div className="">
                <h1 className="text-3xl font-bold">환영합니다</h1>
                </div>
                <div className="mt-5">
                <h1 className="text-xl font-bold">로그인 또는 회원가입</h1>
                </div>
            </div>
            <div className="mb-2">
                <label htmlFor="">Email</label>
                <input
                type="text"
                className="border px-2 py-1 w-full"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className="mb-2">
                <label htmlFor="">Password</label>
                <input
                type={showPassword ? "text": "password"}    
                className="border px-2 py-1 w-full"
                onChange={(e)=>setPassword(e.target.value)}
                />
                <label>
                    <input
                    type="checkbox"
                    onChange={(e)=>setShowPassword(e.target.checked)}
                    />{" "}
                    Show password
                </label>
            </div>
            <div className="mb-2">
                <button
                type="submit"
                className="border rounded-lg
                bg-pink-500	 text-white p-1 w-full disabled:opacity-[0.2]"
                disabled={!email.trim()|| !password.trim()} 
                >
                    계속
                </button>
            </div>
            <div>
                <Link to="/register" className="text-blue-500">회원가입</Link>
            </div>
        </form>
    )
}