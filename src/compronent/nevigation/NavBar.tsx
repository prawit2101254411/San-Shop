'use client'
import page from '@/app/page'
import React from 'react'
import { signOut } from 'next-auth/react'

type Props = {
  session: any,
}

export default function NavBar({ session }: Props) {
  return (
    <div className="flex flex-col border p-3">
      <div className='navbar bg-base-100 py-2  z-50'>
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
        <div className=" flex flex-col ml-auto border">
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
      <div className='flex justify-center border p-2'>
        <input type="text" className='border rounded-lg pl-1' />
        <button className=' p-1 ml-1'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
        </svg></button>
        <a href="http://localhost:3000/app/trolley" className='p-1 ml-3'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart3" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
        </svg></a>
      </div>
    </div>
  )
}
