import Link from 'next/link'
import React from 'react'

const Dashbord = () => {
  return (
        <div className="dashboard">
            <Link href={"/dashboard/cryptolist"}>CRYPTO LIST</Link>
            <Link href={"/dashboard/trades"}>TRADES</Link>
            <Link href={"/dashboard/settings"}>SETTINGS</Link>
        </div>
  )
}

export default Dashbord