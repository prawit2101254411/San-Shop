import React from 'react'
import { getSession } from '@/utils/auth';
import Profile from '@/compronent/Profile/Profile';
import NavBar from '@/compronent/nevigation/NavBar';

type Props = {}

export default async function page({ }: Props) {
  const session = await getSession();
  // console.log(session)
  return (
    <div className=' w-full h-ful '>
      <Profile session={session} />
    </div>
  )
}