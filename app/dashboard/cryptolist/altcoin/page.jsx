import React from 'react'
import Dashbord from '../../../component/Dashbord'
import Link from 'next/link'

const page = () => {
  return (
    <div className='cryptolist'>
      <Dashbord/>

      <div className='wrapper-menu'>
        <h1>CRYPTOLIST</h1>
      <ul>
        <li>
          <Link href="/dashboard/cryptolist/giants">Giants</Link>
        </li>
        <li>
          <Link href="/dashboard/cryptolist/altcoin">Altcoins</Link>
        </li>
       </ul>
       <h3>Altcoin</h3>
      </div>
    </div>
  )
}

export default page