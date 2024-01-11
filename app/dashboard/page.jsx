import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='wrapper'>
        <div className="dashboard">
            <Link href={"/dashboard/cryptolist"}>CRYPTO LIST</Link>
            <Link href={"/dashboard/trades"}>TRADES</Link>
            <Link href={"/dashboard/settings"}>SETTINGS</Link>
        </div>
    </div>
  )
}

export default page