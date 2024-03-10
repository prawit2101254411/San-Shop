'use client'
import page from '@/app/page'
import React from 'react'
import { signOut } from 'next-auth/react'

type Props = {
  session: any,
}

export default function NavBar({ session }: Props) {
  return (
    <div className=" navbar bg-base-100 py-2 border z-50">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-50  p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a>เสื้อผ้า</a>
              <ul className="p-2 w-full">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl" href="http://localhost:3000/">San Wit</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>เสื้อผ้า</summary>
              <ul className="p-2 w-52 z-50">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
      <div className=" flex flex-col ml-auto">
        {!session && <a className="btn" href="http://localhost:3000/login">เข้าสู่ระบบ</a>}
        {session && <img src={session.user.image} className=' w-20 rounded-full' />}
        {session &&
          <ul className="menu menu-horizontal px-1">
            <li>
              <details className=' mr-20'>
                <summary></summary>
                <ul className=" w-32 z-50">
                  <li><a href='http://localhost:3000/app/profile'>Profile</a></li>
                  <li><a>Store</a></li>
                  <li><a onClick={(e) => {
                    e.preventDefault()
                    signOut({ callbackUrl: '/' })
                  }}>Sign Out</a></li>
                </ul>
              </details>
            </li>
          </ul>
        }
      </div>
    </div>
  )
}
