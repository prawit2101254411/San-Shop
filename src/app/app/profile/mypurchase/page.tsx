import React from 'react'
import MyPurchase from '@/compronent/Profile/My-Purchase'
import { getSession } from '@/utils/auth'
export default async function page() {
    const session = await getSession();
    return (
        <div >
         <MyPurchase session={session}/>
        </div>
    )
}
