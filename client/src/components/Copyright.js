import React from 'react'

const Copyright = () => {
  console.log(window.location.pathname)
  const isHome = window.location.pathname == "/";
  return (
    <footer>
      <p style={{margin: "0 auto", textAlign: "center", fontSize: "13px"}}>Copyright &copy; E2A 2022. All Rights Reserved.</p>
    </footer>
  )
}

export default Copyright;