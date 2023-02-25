import React from 'react';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';
import styles from "../../styles/Landing.module.css";

function PercentCounter() {
    const percentage = 3.8;
  return (
    <div>
        <p className={`text-lg ${styles.textgreen}`}>Upcoming Placement Opportunities</p>
        <div className={`md:grid grid-cols-2 gap-4 mt-10 mb-3 hidden`}>
            <div>
                <p className={`${styles.textblue}`}>Placement Tests</p>
                <p className='my-2 text-gray-500'>No Placement test scheduled yet</p>
            </div>
            <div>
                <p className={`${styles.textblue}`}>Pre-assesments Tests</p>
                <p className='my-2 text-gray-500'>No Pre-assesments test scheduled yet</p>
            </div>
        </div>
            
        <div className={`md:grid grid-cols-2 gap-4 block`}>
            <div className='mt-10'>
                <div className='md:hidden'>
                    <p className={`${styles.textblue}`}>Placement Tests</p>
                    <p className='my-2 text-gray-500'>No Placement test scheduled yet</p>
                </div>
                <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-500 px-3 py-5'>
                
                    <div className={`grid grid-cols-3 ${styles.textorange}`}>
                        <p className='col-span-2'>Placement Exam History</p>
                        <button className="flex justify-end">
                            <MoreVertOutlinedIcon/>
                        </button>
                    </div>

                    <div className={`${styles.percentLoad} grid grid-rows-4 mt-5 m-auto`}>
                        <div className='row-span-3 '>
                            <CircularProgressbar 
                                value={percentage} 
                                strokeWidth={5}
                                text={`${percentage}%`} 
                                styles={buildStyles({
                                    textSize: '12px',
                                    pathColor: '#3b82f6'
                                })}
                            />
                        </div>
                        <p className='pt-3 text-center'>26 Students</p>
                    </div>

                    <div className='grid grid-cols-2 gap-4 text-center'>
                        <p className={`${styles.textblue}`}>Total Students Attended</p>
                        <p className={`${styles.textblue}`}>Total Students Cleared</p>
                    </div>

                    <div className='grid grid-cols-2 gap-4 text-center'>
                        <div className='bg-green-600 p-2 rounded-3xl text-lg text-white font-semibold'>1</div>
                        <div className='bg-green-600 p-2 rounded-3xl text-lg text-white font-semibold'>1</div>
                    </div>

                    <div className='py-5 px-3'>
                        <p className='text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>

                    <div className='grid grid-cols-6 gap-4'>
                        <div className='grid grid-rows-2 col-start-2'>
                            <p className={`${styles.textblue} text-center`}>Total</p>
                            <div className='bg-blue-600 rounded-lg text-center text-lg text-white font-semibold'>1</div>
                        </div>
                        <div className='grid grid-rows-2 col-end-6'>
                            <p className={`${styles.textblue} text-center`}>Total</p>
                            <p className='bg-blue-600 rounded-lg text-center text-lg text-white font-semibold'>1</p>
                        </div>
                    </div>

                </div>
            </div>
            
            <div className='mt-10'>
                <div className='md:hidden'>
                    <p className={`${styles.textblue}`}>Pre-assesments Tests</p>
                    <p className='my-2 text-gray-500'>No Pre-assesments test scheduled yet</p>
                </div>

                <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-500 px-3 py-5'>
                            
                    <div className={`grid grid-cols-3 ${styles.textorange}`}>
                        <p className='col-span-2'>Placement Exam History</p>
                        <button className="flex justify-end">
                            <MoreVertOutlinedIcon/>
                        </button>
                    </div>

                    <div className={`${styles.percentLoad} grid grid-rows-4 mt-5 m-auto`}>
                        <div className='row-span-3 '>
                            <CircularProgressbar 
                                value={percentage} 
                                strokeWidth={5}
                                text={`${percentage}%`} 
                                styles={buildStyles({
                                    textSize: '12px',
                                    pathColor: '#3b82f6'
                                })}
                            />
                        </div>
                        <p className='pt-3 text-center'>26 Students</p>
                    </div>

                    <div className='grid grid-cols-2 gap-4 text-center'>
                        <p className={`${styles.textblue}`}>Total Students Attended</p>
                        <p className={`${styles.textblue}`}>Total Students Cleared</p>
                    </div>

                    <div className='grid grid-cols-2 gap-4 text-center'>
                        <div className='bg-green-600 p-2 rounded-3xl text-lg text-white font-semibold'>1</div>
                        <div className='bg-green-600 p-2 rounded-3xl text-lg text-white font-semibold'>1</div>
                    </div>

                    <div className='py-5 px-3'>
                        <p className='text-gray-400 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    </div>

                    <div className='grid grid-cols-6 gap-4'>
                        <div className='grid grid-rows-2 col-start-2'>
                            <p className={`${styles.textblue} text-center`}>Total</p>
                            <div className='bg-blue-600 rounded-lg text-center text-lg text-white font-semibold'>1</div>
                        </div>
                        <div className='grid grid-rows-2 col-end-6'>
                            <p className={`${styles.textblue} text-center`}>Total</p>
                            <p className='bg-blue-600 rounded-lg text-center text-lg text-white font-semibold'>1</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    </div>
  )
}

export default PercentCounter