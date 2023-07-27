import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export default function Register() {
    const navigate = useNavigate();

    // input과 관련있는 state
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

   
    const disabled = !username.trim() || !email.trim() || !password.trim() || !passwordConfirm.trim();

    return (
        <form  className="max-w-xs mx-auto px-2">
              <div className="mb-4 flex h-24 items-end">
                <h1 className="text-2xl">회원가입</h1>
            </div>

            <div className="mb-2">
                <label>이름</label>
                <input
                    type="text"
                    className="border px-2 py-1 w-full"
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className="mb-2">
                <label>E-mail</label>
                <input
                    type="text"
                    className="border px-2 py-1 w-full"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="mb-2">
                <label>비밀번호</label>
                <input
                    type="password"
                    className="border px-2 py-1 w-full"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="mb-2">
                <label>비밀번호 확인</label>
                <input
                    type="password"
                    className="border px-2 py-1 w-full"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                />
            </div>
            <div className="mb-2">
                <button
                    type="submit"
                    className="border rounded-lg
                bg-pink-500	 text-white p-1 w-full disabled:opacity-[0.2]"
                    disabled={disabled}
                >
                    계속
                </button>
            </div>
            <div className="">
                <Link to="/login" className="text-blue-500 mb-8">로그인</Link>
            </div>
        </form>
    )
};