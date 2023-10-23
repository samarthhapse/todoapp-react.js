import React from 'react'
// integration of externall css in react app
// import './footer.css'
export const Footer = () => {
  // integration of internal css in react app
  // let footerstyle={
  //   position:"absolute",
  //   top:"150vh",
  //   width:"100%",
  // }
  return (
    <div className="bg-dark text-light py-3">
      <p className="text-center">
      Copyright &copy; Samtodos.com
      </p>
    </div>
  )
}
