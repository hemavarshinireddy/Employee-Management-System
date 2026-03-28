import React from 'react'

const Header = () => {
  const username = sessionStorage.getItem('username')//getting the value of username if username is there then login button is showed otherwise logout button is seen
    return (
    <header className="header">
      <div className="header_logo">
        <img src='https://vectorified.com/images/google-icon-download-36.png'/>
      </div>
      <div className="header_title">
        <p className="headertext">
          Google  Foundation Inc
        </p>
      </div>
      {username?
      <div className="header_menu">
        <button className='headerloginbutton'>
          <a href='/logout' className='anchor'>Logout</a>
        </button>
        </div>
        :
        <div className='header_menu'>
          <button className='headerloginbutton'><a href='/login' className='anchor'>Login</a></button>
      </div>
}

    </header>
    
  )
}

export default Header
