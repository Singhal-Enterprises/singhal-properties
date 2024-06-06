import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator } from './ui/dropdown-menu'
import React from 'react'
import { MenuIcon } from 'lucide-react'
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faHandshake, faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faHome, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Home } from 'lucide-react';

const UserNav = async () => {
    const {getUser} = getKindeServerSession();
    const user = await getUser()
  return (
    <DropdownMenu>
    <DropdownMenuTrigger>
      <div className="rounded-full border px-2 py-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
        <MenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />

        <img
          src={ 
            "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
          }
          alt="Profile Image"
          className="rounded-full h-8 w-8 hidden lg:block"
        />
      </div>
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-[200px]">
          {user ? (
            <>

            <DropdownMenuItem>
                <div  className='w-full flex space-x-2'>
                <Home className='w-4 h-4 mr-1 mt-0.5' />                
                <Link href='/'>
                    Home
                </Link>
                </div>
            </DropdownMenuItem>

            <DropdownMenuItem>
                <div  className='w-full flex space-x-2'>
                <FontAwesomeIcon icon={faBookmark} className='mt-1 mr-1.5 ml-0.5' />
                <Link href='/bookmarks'>
                    Bookmarks
                </Link>
                </div>
            </DropdownMenuItem>

            <DropdownMenuItem>
            <div  className='w-full flex space-x-2'>
            <FontAwesomeIcon icon={faHandshake} className='mt-1' />
                  <Link href='/listing'>
                    My Listings
                </Link>
                </div>
            </DropdownMenuItem>

            <DropdownMenuSeparator />
            <DropdownMenuItem>
            <div  className='w-full flex space-x-2'>
            <FontAwesomeIcon icon={faRightFromBracket} className='mt-1' />
            <LogoutLink>Log Out</LogoutLink>
                </div>
            </DropdownMenuItem>
           
            </>
          ): (
          <>
            <DropdownMenuItem>
            <RegisterLink className='w-full'>Register</RegisterLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
            <LoginLink className='w-full'>Login</LoginLink>
            </DropdownMenuItem>
            </>
          )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default UserNav