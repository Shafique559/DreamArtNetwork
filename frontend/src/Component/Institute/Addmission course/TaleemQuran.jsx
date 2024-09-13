import React from 'react'
import AdmissionForm from '../addmission';
const Taleem = () => {
  return (
   <>
   {/* You can open the modal using document.getElementById('ID').showModal() method */}
<dialog id="Quran" className="modal">
  <div className="modal-box w-11/12 max-w-5xl" style={{color:'black', textAlign:'left'}}>
  <AdmissionForm courseName="Taleem-Ul-Quran" />
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button, it will close the modal */}
        <button className="btn" style={{backgroundColor:'green', color:'white'}}>Close</button>
      </form>
    </div>
  </div>
</dialog>
   </>
  )
}

export default Taleem