"use client"
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";
import { FormButton } from "../FormButton";

export default function LoginForm() {

  const [errorMessage, setError] = useState<string | null>(null)

  const handleSubmit = async (formData: FormData) => {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    // console.log(username, password)

    const { error, status, ok, url }: any = await signIn('credentials', {
      username: username,
      password: password,
      redirect: false,
      callbackUrl: '/',
    });
    if (error) {
      setError("Username or Password is incorrect")
      console.error(error)
    }
    if (status == 200 && ok) {
      redirect(url)
    }
  }
  return (
    <form action={handleSubmit} className=" flex items-center justify-center h-screen border ">
      <div className=" flex flex-col items-center border px-20 py-20">
        <h1 className=" text-5xl ">เข้าสู่ระบบ</h1>
        <div className="md:w-[400px] w-[300px] mt-10 ">
          <label htmlFor="username">อีเมล</label>
          <input className=" h-12 w-full rounded-xl border-2  px-4 text-sm outline-none"
            type="text"
            id="username"
            name="username"
            placeholder=""
            required
          />
        </div>
        <div className="md:w-[400px] w-[300px] mt-3 ">
          <label htmlFor="password">รหัสผ่าน</label>
          <input className=" h-12 w-full rounded-xl border-2 px-4 text-sm outline-none"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <div className=" py-5 mt-4 rounded-lg">
          <FormButton>
            <a className=" border-2 py-3 rounded-lg px-9 hover:bg-blue-500 hover:text-white hover:shadow-lg ">
              เข้าสู่ระบบ
            </a>
          </FormButton>
        </div>
        <h1 className=" mt-3">การลงทะเบียนเพื่อจำหน่ายสินค้า <a href="http://localhost:3000/register" className=" text-blue-600">เงื่อนไขการสมัคร</a></h1>
        <div>
          {!!errorMessage && <p className="py-5 text-red-500">{errorMessage}</p>}
        </div><br />
        <hr className=" w-96" />
        <button onClick={() => signIn('google', { callbackUrl: "/" })} className="flex p-3 border mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google mt-1" viewBox="0 0 16 16">
            <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
          </svg>
          <h1 className=" ml-2"> Google</h1>
        </button>
        <button onClick={() => signIn('facebook')} className="flex p-3 border mt-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-facebook mt-1 " viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
          </svg>
          <h1 className=" ml-2"> Facebook</h1>
        </button>

      </div>
    </form>
  );
}