import * as React from "react"

import * as style from './layout.module.scss'

const Layout = ({ children }) => {
  return (
    <main className={style.layout}>
      {children}
    </main>
  )
}

export default Layout