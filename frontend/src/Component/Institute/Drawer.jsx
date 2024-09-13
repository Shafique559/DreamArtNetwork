import React from 'react'

const Drawer = () => {
  return (
    <>
    <div className="border drawer lg:drawer-open z-[1]" >
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
    {/* Page content here */}
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
      Menu
    </label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full p-4" style={{width:'230px', fontSize:'16px', gap:'5px'}}>
      {/* Sidebar content here */}
      <li><a href='/Institute'>Home</a></li>
      <li><a href='/HowApply'>How to Apply?</a></li>
      <li><a href='/Now'>Courses</a></li>
      <li><a href='/ContactTo'>Contact Us</a></li>
      <p style={{marginTop:'25rem', fontSize:'20px', fontWeight:'bold', color:'green', marginLeft:'28px'}}>DREAMART</p>
      <p style={{marginLeft:'15px'}}>A hope of Success </p>
    </ul>
  </div>
</div>
    </>
  )
}

export default Drawer