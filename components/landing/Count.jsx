import React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StyleOutlinedIcon from '@mui/icons-material/StyleOutlined';
import CasesOutlinedIcon from '@mui/icons-material/CasesOutlined';

import styles from "../../styles/Landing.module.css";

function Count() {
  return (
    <div >
        <div className='block md:grid grid-cols-3 gap-4'>
            <div className={`${styles.counterBox1} p-3 mt-3`}>
                <div className='grid grid-rows-3'>
                    <div className=' grid grid-cols-3 font-bold'>
                        <div className='col-start-1 text-white'>Institutions</div>
                        <div className='col-end-4 text-left flex justify-end text-white'><AccountCircleOutlinedIcon/></div>
                    </div>
                    <div className='row-span-2 text-5xl py-2 font-semibold text-white'>
                        26
                    </div>
                </div>
            </div>
            <div className={`${styles.counterBox2} p-3 mt-3`}>
                <div className='grid grid-rows-3'>
                    <div className=' grid grid-cols-3 font-bold'>
                        <div className='col-start-1 text-white'>Departments</div>
                        <div className='col-end-4 text-left flex justify-end text-white'><StyleOutlinedIcon/></div>
                    </div>
                    <div className='row-span-2 text-5xl py-2 font-semibold text-white'>
                        5
                    </div>
                </div>
            </div>
            <div className={`${styles.counterBox3} p-3 mt-3`}>
                <div className='grid grid-rows-3'>
                    <div className=' grid grid-cols-3 font-bold'>
                        <div className='col-start-1 text-white'>Placements</div>
                        <div className='col-end-4 text-left flex justify-end text-white'><CasesOutlinedIcon/></div>
                    </div>
                    <div className='row-span-2 text-5xl py-2 font-semibold text-white'>
                        0
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Count