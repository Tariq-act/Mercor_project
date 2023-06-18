import React from 'react'
import Navbar from '../navbar/Navbar'
import Sidebar from '../sidebar/Sidebar'

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main style={{ marginLeft: '250px' }}>
        {children}
      </main>
    </div>
  )
}

export default Layout