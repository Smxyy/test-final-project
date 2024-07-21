import React from 'react'
import { Link } from 'react-router-dom'

export function DropdownMenu({data, nav}) {
  return (
    <>
       <li>
        <Link to={`${nav}`} class={`flex items-center w-full text-sm hover:bg-gray-100 p-2 transition duration-75 rounded-lg pl-11 ${location.pathname === nav ? 'group text-primary' : 'text-gray-700 hover:text-primary'}`}>{data}</Link>
      </li>
    </>
  )
}

export function DropDownMenuHover({data, nav}){
    return (
        <>
          <li>
            <Link to={`${nav}`} class={`block px-4 py-2 hover:bg-gray-100 ${location.pathname === nav ? 'group text-primary' : 'text-gray-700 hover:text-primary'}`}>{data}</Link>
          </li>
        </>
    )
}

export function DropDownUserMenu({data, nav}){
  return (
    <>
      <li>
        <Link to={`${nav}`} class={`block px-4 py-2 text-sm ${location.pathname === nav ? 'group text-primary' : 'text-gray-700 hover:text-primary'}`} role="menuitem">{data}</Link>
      </li>
    </>
  )
}
