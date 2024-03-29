"use client"
import { signIn } from "next-auth/react";
import { useRouter,redirect } from "next/navigation";
import { useState,useEffect } from "react";
import { FormButton } from "../FormButton";

type Props = {
  session : any,
}

export default function LoginForm({session}:Props) {
  // console.log(session)
  const router = useRouter();

  if(session?.user?.role == 'Admin'){
    redirect('/app/admin/edit-table-user')
  }
  if(session?.user?.role == 'User'){
    redirect('/app/user/profile')
  }
 
  const [errorMessage, setError] = useState<string | null>(null)

  const handleSubmit = async (formData: FormData) => {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;
    // console.log(username, password)

    const { error, status, ok, url, user }: any = await signIn('credentials', {
      username: username,
      password: password,
      redirect: false,
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
    <div className=" flex bg-white rounded-xl border 
    before:w-24 before:h-24 before:absolute before:bg-blue-500 
    before:rounded-full before:z-10 before:blur-2xl before:mt-[100px] before:ml-14
    before:animate-pulse

    after:w-32 after:h-32 after:absolute after:bg-blue-300 after:rounded-full 
    after:z-10 after:blur-xl after:top-24 after:ml-[450px] after:mt-[350px] after:animate-pulse
    ">
      <form action={handleSubmit} className=" z-50 flex flex-col items-center  px-20 py-20">
        <h1 className=" text-5xl ">เข้าสู่ระบบ</h1>
        <div className="md:w-[400px] w-[300px] mt-10 ">
          <label htmlFor="username">อีเมล</label>
          <input className="mt-2 h-12 w-full bg-white rounded-xl shadow px-4 text-sm outline-none"
            type="text"
            id="username"
            name="username"
            placeholder=""
            required
          />
        </div>
        <div className="md:w-[400px] w-[300px] mt-5 ">
          <label htmlFor="password">รหัสผ่าน</label>
          <input className="mt-2 h-12 w-full bg-white rounded-xl shadow px-4 text-sm outline-none"
            type="password"
            id="password"
            name="password"
            required
          />
        </div>
        <div className=" py-5 mt-10 rounded-lg">
          <FormButton>
            <a className="transition duration-700 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500 shadow py-3 rounded-lg px-9  ">
              เข้าสู่ระบบ
            </a>
          </FormButton>
        </div>
        <h1 className="text-sm font-thin text-gray-500 mt-7 ">การลงทะเบียนเพื่อจำหน่ายสินค้า <a href="" className=" underline text-blue-600">เงื่อนไขการสมัคร</a></h1>
        <div>
          {!!errorMessage && <p className="py-5 text-sm text-red-500">{errorMessage} <a href="" className="text-blue-400 underline">ตลิกเพื่อสมัครสมาชิก</a></p>}
        </div>
        <hr className=" w-96 mt-5" />
        <div className="flex mt-3">
          <button onClick={() => signIn('google')}
            className="flex items-center justify-center w-[200px] p-3 shadow-lg rounded-lg mt-3
          transition duration-500 hover:scale-125 delay-100 hover:shadow-xl
          ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill="#F44336"
                d="M12,5c1.6167603,0,3.1012573,0.5535278,4.2863159,1.4740601l3.637146-3.4699707 C17.8087769,1.1399536,15.0406494,0,12,0C7.392395,0,3.3966675,2.5999146,1.3858032,6.4098511l4.0444336,3.1929321 C6.4099731,6.9193726,8.977478,5,12,5z"
              ></path>
              <path
                fill="#2196F3"
                d="M23.8960571,13.5018311C23.9585571,13.0101929,24,12.508667,24,12 c0-0.8578491-0.093689-1.6931763-0.2647705-2.5H12v5h6.4862061c-0.5247192,1.3637695-1.4589844,2.5177612-2.6481934,3.319458 l4.0594482,3.204834C22.0493774,19.135437,23.5219727,16.4903564,23.8960571,13.5018311z"
              ></path>
              <path
                fill="#FFC107"
                d="M5,12c0-0.8434448,0.1568604-1.6483765,0.4302368-2.3972168L1.3858032,6.4098511 C0.5043335,8.0800171,0,9.9801636,0,12c0,1.9972534,0.4950562,3.8763428,1.3582153,5.532959l4.0495605-3.1970215 C5.1484375,13.6044312,5,12.8204346,5,12z"
              ></path>
              <path
                fill="#00B060"
                d="M12,19c-3.0455322,0-5.6295776-1.9484863-6.5922241-4.6640625L1.3582153,17.532959 C3.3592529,21.3734741,7.369812,24,12,24c3.027771,0,5.7887573-1.1248169,7.8974609-2.975708l-4.0594482-3.204834 C14.7412109,18.5588989,13.4284058,19,12,19z"
              ></path>
              <path
                d="M12,23.75c-3.5316772,0-6.7072754-1.4571533-8.9524536-3.7786865C5.2453613,22.4378052,8.4364624,24,12,24 c3.5305786,0,6.6952515-1.5313721,8.8881226-3.9592285C18.6495972,22.324646,15.4981079,23.75,12,23.75z"
                opacity=".1"
              ></path>
              <polygon
                points="12,14.25 12,14.5 18.4862061,14.5 18.587492,14.25"
                opacity=".1"
              ></polygon>
              <path
                fill="#E6E6E6"
                d="M23.9944458,12.1470337C23.9952393,12.0977783,24,12.0493774,24,12 c0-0.0139771-0.0021973-0.0274658-0.0022583-0.0414429C23.9970703,12.0215454,23.9938965,12.0838013,23.9944458,12.1470337z"
              ></path>
              <path
                fill="#FFF"
                d="M12,9.5v0.25h11.7855721c-0.0157471-0.0825195-0.0329475-0.1680908-0.0503426-0.25H12z"
                opacity=".2"
              ></path>
              <linearGradient
                id="LxT-gk5MfRc1Gl_4XsNKba_xoyhGXWmHnqX_gr1"
                x1="0"
                x2="24"
                y1="12"
                y2="12"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stopColor="#fff" stopOpacity=".2"></stop>
                <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
              </linearGradient>
              <path
                fill="url(#LxT-gk5MfRc1Gl_4XsNKba_xoyhGXWmHnqX_gr1)"
                d="M23.7352295,9.5H12v5h6.4862061C17.4775391,17.121582,14.9771729,19,12,19 c-3.8659668,0-7-3.1340332-7-7c0-3.8660278,3.1340332-7,7-7c1.4018555,0,2.6939087,0.4306641,3.7885132,1.140686 c0.1675415,0.1088867,0.3403931,0.2111206,0.4978027,0.333374l3.637146-3.4699707L19.8414307,2.940979 C17.7369385,1.1170654,15.00354,0,12,0C5.3725586,0,0,5.3725586,0,12c0,6.6273804,5.3725586,12,12,12 c6.1176758,0,11.1554565-4.5812378,11.8960571-10.4981689C23.9585571,13.0101929,24,12.508667,24,12 C24,11.1421509,23.906311,10.3068237,23.7352295,9.5z"
              ></path>
              <path
                d="M15.7885132,5.890686C14.6939087,5.1806641,13.4018555,4.75,12,4.75c-3.8659668,0-7,3.1339722-7,7 c0,0.0421753,0.0005674,0.0751343,0.0012999,0.1171875C5.0687437,8.0595093,8.1762085,5,12,5 c1.4018555,0,2.6939087,0.4306641,3.7885132,1.140686c0.1675415,0.1088867,0.3403931,0.2111206,0.4978027,0.333374 l3.637146-3.4699707l-3.637146,3.2199707C16.1289062,6.1018066,15.9560547,5.9995728,15.7885132,5.890686z"
                opacity=".1"
              ></path>
              <path
                fill="#FFF"
                d="M12,0.25c2.9750366,0,5.6829224,1.0983887,7.7792969,2.8916016l0.144165-0.1375122 l-0.110014-0.0958166C17.7089558,1.0843592,15.00354,0,12,0C5.3725586,0,0,5.3725586,0,12 c0,0.0421753,0.0058594,0.0828857,0.0062866,0.125C0.0740356,5.5558472,5.4147339,0.25,12,0.25z"
                opacity=".2"
              ></path>
            </svg>
            <h1 className=" ml-3">Sign In Google</h1>
          </button>
          <button onClick={() => signIn('facebook')}
            className="flex items-center justify-center p-3 shadow-lg shadow-blue-700 rounded-lg w-[200px] mt-3 ml-16 bg-blue-500 text-white
          transition duration-500 hover:scale-125 delay-100 hover:shadow-xl hover:shadow-blue-500
          ">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-facebook mt-1 " viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
            <h1 className=" ml-3">Sign In Facebook</h1>
          </button>
        </div>
      </form>
    </div>
  );
}