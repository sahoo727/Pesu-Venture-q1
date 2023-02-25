import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Dashboard} from '@mui/icons-material';
import StyleIcon from '@mui/icons-material/Style';
import ViewWeekIcon from '@mui/icons-material/ViewWeek';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import styles from "../../styles/Landing.module.css";

function Sidebar({onClose}) {
  return (
    <div className='mx-5 my-3' style={{position:"sticky"}}>
        <div>
            <button className='vibile md:hidden text-white' onClick={onClose}><CloseOutlinedIcon /></button>
            <h6 className='mt-5 text-white'>Reports</h6>
            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <Dashboard className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
                </ListItemButton>
            </div>
            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <StyleIcon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="Department" />
                </ListItemButton>
            </div>
            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <ViewWeekIcon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="Skillwise Data" />
                </ListItemButton>
            </div>
            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <CalendarMonthIcon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="View Schedule" />
                </ListItemButton>
            </div>

            <h6 className='mt-5 text-white'>Accesories</h6>
            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <BatchPredictionIcon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="Explore Skills" />
                </ListItemButton>
            </div>
            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <ContentPasteSearchIcon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="Placement Test" />
                </ListItemButton>
            </div>
            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <EqualizerIcon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="Pre assesments" />
                </ListItemButton>
            </div>

            <h6 className='mt-5 text-white'>Organization</h6>
            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <AcUnitIcon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="Assign Skills" />
                </ListItemButton>
            </div>
            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <ManageAccountsIcon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="Manage Students" />
                </ListItemButton>
            </div>
            <div className={`${styles.list}`}>
                <ListItemButton className={`${styles.listButton}`}>
                <ListItemIcon>
                    <AssessmentIcon className={`${styles.iconDashboard}`}/>
                </ListItemIcon>
                <ListItemText primary="Reports" />
                </ListItemButton>
            </div>
            
        </div>

        <div className='my-10'>
            <ListItemIcon>
                <AccountCircleIcon className={`${styles.iconDashboard}`} style={{fontSize:"3rem"}}/>
                <div className='text-white px-3 pt-1'>
                    <h5 className='font-bold'>College Admin</h5>
                    <p className='text-xs'>College Admin</p>
                </div>
            </ListItemIcon>
        </div>
    </div>
  )
}

export default Sidebar