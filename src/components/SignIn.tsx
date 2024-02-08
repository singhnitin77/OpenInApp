'use client'
import { useState } from 'react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { Toaster } from "react-hot-toast";

export default function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!email || !password) {
            return toast.error('Please fill in all fields');
        }

        try {
            toast.success('Login successful!');
            window.location.href = '/signin';
        } catch (error) {
            toast.error('Invalid email or password');
        }
    };

    return (
        <div className="flex flex-col justify-center gap-6">
            <div className="flex flex-col items-start sm:gap-2 lg:gap-[10px]">
                <h1 className="lg:text-[36px] sm:text-[24px] text-[#000] font-bold">Sign In</h1>
                <h3 className="lg:text-[16px] sm:text-[12px] text-[#000] font-normal">Sign in to your account</h3>
                <div className="flex items-center gap-2 lg:gap-[20px]">
                    {/* Google SignIn */}
                    <button className="bg-[#fff] px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-[#858585] text-[12px] font-normal hover:border-slate-400 hover:text-slate-900  hover:shadow transition duration-150">
                        <img className="w-[15px] h-[15px]" src="https://www.svgrepo.com/show/475656/google-color.svg"
                            loading="lazy" alt="google logo" />
                        <span>Sign in with Google</span>
                    </button>
                    {/* Apple SignIn */}
                    <button className="bg-[#fff] px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-[#858585] text-[12px] font-normal hover:border-slate-400 hover:text-slate-900  hover:shadow transition duration-150">
                        <img className="w-[15px] h-[15px]" src="https://www.svgrepo.com/show/475656/google-color.svg"
                            loading="lazy" alt="google logo" />
                        <span>Sign in with Apple</span>
                    </button>
                </div>
            </div>
            <div className="w-[420px] p-[12px] lg:p-[24px] bg-white border rounded-[20px]">a
                <Toaster
                    toastOptions={{
                        success: {
                            duration: 4000,
                        },
                        error: {
                            duration: 3000
                        }
                    }}
                />
                <div className="">
                    <form onSubmit={handleSubmit} className="lg:space-y-4" action="#">
                        <div>
                            <label className="block mb-2 text-[16px] font-normal text-[#000]">Email address</label>
                            <input required type="email" value={email}
                                onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="rounded-lg bg-[#f5f5f5] text-[#000] text-[16px] font-normal focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="johndoe@company.com" />
                        </div>
                        <div>
                            <label className="block mb-2 text-[16px] font-normal text-[#000]">Password</label>
                            <input required type="password" value={password}
                                onChange={(e) => setPassword(e.target.value)} name="password" id="password" placeholder="••••••••" className="rounded-lg bg-[#eaeaea] text-[#000] text-[16px] font-normal focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" />
                        </div>

                        <div className="flex items-center">
                            <a href="#" className="text-[#346bd4] font-normal text-[16px] hover:underline">Forgot password?</a>
                        </div>
                        {/* <Link href="/signin"> */}
                            <button
                                type="submit" className="w-full text-white bg-[#605bff] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-800">Sign in</button>
                        {/* </Link> */}
                    </form>
                </div>
            </div>
            <div>
                <p className="text-[12px] sm:text-center lg:text-[16px] --font-roboto-mono text-[#858585] font-noraml">
                    Dont have an account yet? <a href="" className="font-normal text-[#346bd4]">Register here</a>
                </p>
            </div>
        </div>
    )
}