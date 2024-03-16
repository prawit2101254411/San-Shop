import React from 'react'
import { getSession } from '@/utils/auth';
import Profile from '@/compronent/Profile/Profile';
import { getUserById } from '@/server/get-user-byid';

type Props = {}

export default async function page({ }: Props) {
  const session = await getSession();

  const user = await Promise.all([getUserById(String(session?.user.id))]);
  // console.log(user)
  return (
    <div className=' w-full h-ful '>
      <Profile session={session} />
    </div>
  )
}