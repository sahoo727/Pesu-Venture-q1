import React, { useState } from 'react';
import Sidebar from './landing/Sidebar';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

import styles from "../styles/Landing.module.css";
import Count from './landing/Count';
import PercentCounter from './landing/PercentCounter';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function Landing() {
  const [visibility, setVisibility] = useState("hidden")
  return (
    <>
      <button className='md:hidden mx-2' onClick={() => {setVisibility("block")}}><MenuOutlinedIcon /></button>
      <div className='md:grid md:grid-cols-6 lg:grid-cols-4'>
          
          <div className='md:col-span-4 lg:col-span-3 md:col-start-3 lg:col-start-2 md:order-2 mx-5 my-5'>
            <Count/>
            <div className='my-10 grid grid-cols-3 lg:grid-cols-4'>
              <button className='bg-orange-500 p-3 text-white font-semibold rounded hover:bg-orange-700 hover:shadow-xl col-end-5'>Share with Reciurter <ShareOutlinedIcon/></button>
            </div>
            <PercentCounter/>
          </div>

          <div className={`${styles.sidebar}  md:order-1 ${visibility} md:block ${styles.sidebarVisible}`}>
            <Sidebar
              onClose= {() =>{
                setVisibility("hidden")
              }}
            />
          </div>
      </div>
    </>
  )
}

export default Landing