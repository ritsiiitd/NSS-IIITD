import React from 'react'
import { adminBG } from "../../assets/images";
const AdminBG = () => {
  return (
    <div className='text-white text-[50px] text-center font-palanquin'>
        <h3>NSS-Admin CMS </h3>
        <h7 className='text-[22px] text-zinc-400'>control NSS-IIITD content dynamically</h7>
        <img className='mt-[25px]' src={adminBG} alt="" />
    </div>
  )
}

export default AdminBG