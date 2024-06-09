import React from 'react'

export default function AppBar() {
  return (
    <div className="navbar bg-base-100">
    <div className="navbar-start">
    
      <p className=" font-bold text-2xl">🛡️SecureGuard</p>
    </div>
    <div className="navbar-center hidden lg:flex">
      {/* <ul className="menu menu-horizontal px-1">
        <li><a>Item 1</a></li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul className="p-2">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </details>
        </li>
        <li><a>Item 3</a></li>
      </ul> */}
    </div>
    <div className="navbar-end">
      <a className="btn btn-primary bg-[#eab308]">Get Started</a>

    </div>
  </div>
  )
}
