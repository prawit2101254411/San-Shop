import React from 'react'
import FormLogin from '@/compronent/login/FormLogin'
import { getSession } from '@/utils/auth';
import { redirect } from 'next/navigation';
import NavBar from '@/compronent/nevigation/NavBar';

type Props = {}

export default async function page({ }: Props) {
  const session = await getSession();
  // if (session?.user) {
  //   redirect("/app/profile")
  // }
  return (
    <div className='flex justify-center items-center border w-full h-screen'>
      <FormLogin />
    </div>
  )
}