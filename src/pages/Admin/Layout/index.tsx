import React from 'react'
import { Outlet } from 'react-router-dom'
import '../../../App.scss'
import LayoutSidenav from "./layoutSidenav"
import LayoutFooter from './layoutFooter'
import LayoutHeader from "./layoutHeader"
import { AuthorizedPage, ToastContainer } from 'component'

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <AuthorizedPage>
      <div className="dashboard-container">
        <div className="grid">
          <LayoutHeader />
          <LayoutSidenav />
          <main className="main">
            <Outlet />
          </main>
          <LayoutFooter />
        </div>
      </div>
      <ToastContainer />
    </AuthorizedPage>
  )
}
