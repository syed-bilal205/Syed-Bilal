'use client';
import React,{useEffect} from 'react'
import Typewritter from 'typewriter-effect'
import styles from '../src/app/page.module.css'
import Download from './Download';

const Header = () => {
  return (
    <>
      <div className={styles.header}>
      <div>
        <h6 className='text-white font-bold tracking-widest'>HELLO I M</h6>
        </div>
        <div className='text-[#20c863] font-extrabold text-5xl md:text-9xl text-center'>
        <Typewritter 
            options={{
                strings:['SYED<br>BILAL','FRONTEND<br>DEVELOPER','WEB<br>DESIGNER'],
                autoStart:true,
                loop:true,
            }}
        />
        </div>
        <br />
        <Download/>
      </div>
    </>
  )
}

export default Header
