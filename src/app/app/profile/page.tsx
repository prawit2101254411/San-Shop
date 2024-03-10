import React from 'react'
import { getSession } from '@/utils/auth';
import Profile from '@/compronent/Profile/Profile';

type Props = {}

export default async function page({ }: Props) {
  const session = await getSession();
  // console.log(session)
  return (
    <div className='flex '>
   <Profile session={session}/>
    </div>
  )
}