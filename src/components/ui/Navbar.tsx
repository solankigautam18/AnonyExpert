'use client'
// server par render hokar nahi ayega, js shift hogi user ke browser pe, aur wahan par ise use karenge.
import React from 'react'
import Link from 'next/link'
import { useSession,signOut } from 'next-auth/react'
import {User} from 'next-auth'
import { Button } from './button'

const Navbar = () => {
    const {data: session} = useSession()

    const user: User = session?.user as User

  return (
    // bg-gradient-to-r from-black via-gray-900 to-black
    <nav className='p-4 md:p-6 shadow-md bg-gradient-to-r from-black via-gray-900 to-black  text-white'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            <a className='text-xl font-bold mb-4 md:mb-0 ' href="#">Anony-Expert</a>
            {
                session ? (
                    <>
                    <span className='mr-4 '>Welcome, {user?.username || user?.email}</span>
                    <Button className='w-full md:w-auto ' onClick={() => signOut()}>Logout</Button>
                    </>
                ) : (
                    <>
                    <Link href='/sign-in'>
                    <Button className='w-full md:w-auto'>Login</Button>
                    </Link>
                    </>
                )
            }
        </div>
    </nav>
  )
}

export default Navbar