import React from 'react';
import Overview from './Overview';
import Settings from './Settings';
import Ballot from './Ballot';
import Preview from './Preview';
import Voters from './Voters';
import Launch from "./Launch";
const logo = require("../assets/images/logo.png")

const Dashboard: React.FunctionComponent = () => {
    const [ page , setPage ] = React.useState("overview");

    const handleOverview = ()=>setPage("overview");
    const handleSettings = () => setPage("settings");
    const handleBallot = ()=>setPage("ballot");
    const handleLaunch = ()=>setPage("launch");
    const handlePreview = ()=>setPage("preview");
    const handleVoters = ()=>setPage("voters");
  return (
    <section className='w-full h-screen flex justify-center items-center'>
       <div className='w-[30%] h-full bg-black flex justify-start items-center flex-col gap-5'>
       <div className='w-full bg-bluerry h-[10%] hover:cursor-pointer flex justify-start items-center'>
        <img src={logo} className='w-24 h-16' alt='logo'/>
        
        <span className='text-white font-kanit text-4xl -ml-6'>eVote Restart</span>
        </div>
        <div className='w-full h-[10%] p-3 hover:cursor-pointer flex gap-5 justify-start items-center active:bg-bluerry ' onClick={handleOverview}>
            <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 16 16">
            <path fill="currentColor" d="M8 1.4L6 2.7V1H4v3L0 6.6l.6.8L8 2.6l7.4 4.8l.6-.8z"/>
            <path fill="currentColor" d="M8 4L2 8v7h5v-3h2v3h5V8z"/></svg>
            <span className='font-kanit text-white text-2xl'>Overview</span>
        </div>
        <div className='w-full h-[10%] p-3 hover:cursor-pointer gap-5 flex justify-start items-center active:bg-bluerry' onClick={handleSettings}>
            <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor" d="M10.825 22q-.675 0-1.162-.45t-.588-1.1L8.85 18.8q-.325-.125-.612-.3t-.563-.375l-1.55.65q-.625.275-1.25.05t-.975-.8l-1.175-2.05q-.35-.575-.2-1.225t.675-1.075l1.325-1Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337l-1.325-1Q2.675 9.9 2.525 9.25t.2-1.225L3.9 5.975q.35-.575.975-.8t1.25.05l1.55.65q.275-.2.575-.375t.6-.3l.225-1.65q.1-.65.588-1.1T10.825 2h2.35q.675 0 1.163.45t.587 1.1l.225 1.65q.325.125.613.3t.562.375l1.55-.65q.625-.275 1.25-.05t.975.8l1.175 2.05q.35.575.2 1.225t-.675 1.075l-1.325 1q.025.175.025.338v.674q0 .163-.05.338l1.325 1q.525.425.675 1.075t-.2 1.225l-1.2 2.05q-.35.575-.975.8t-1.25-.05l-1.5-.65q-.275.2-.575.375t-.6.3l-.225 1.65q-.1.65-.587 1.1t-1.163.45zm1.225-6.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.488 1.025T8.55 12t1.013 2.475T12.05 15.5"/>
            </svg>
            <span className='font-kanit text-white text-2xl'>Settings</span>
        </div>
        <div className='w-full h-[10%] p-3 hover:cursor-pointer gap-5 flex justify-start items-center active:bg-bluerry' onClick={handleBallot}>
            <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 10h5V8h-5zm0 6h5v-2h-5zm-3-5q.825 0 1.413-.587T11 9t-.587-1.412T9 7t-1.412.588T7 9t.588 1.413T9 11m0 6q.825 0 1.413-.587T11 15t-.587-1.412T9 13t-1.412.588T7 15t.588 1.413T9 17m-4 4q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"/>
            </svg>
            <span className='font-kanit text-white text-2xl'>Ballot</span>
        </div>
        <div className='w-full h-[10%] p-3 hover:cursor-pointer gap-5 flex justify-start items-center active:bg-bluerry' onClick={handleVoters}>
            <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 640 512">
            <path fill="currentColor" d="M360 72a40 40 0 1 0-80 0a40 40 0 1 0 80 0M144 208a40 40 0 1 0 0-80a40 40 0 1 0 0 80M32 416c-17.7 0-32 14.3-32 32s14.3 32 32 32h576c17.7 0 32-14.3 32-32s-14.3-32-32-32zm464-208a40 40 0 1 0 0-80a40 40 0 1 0 0 80M200 313.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-36.3-67.5c1.7-1.7 3.2-3.6 4.3-5.8l26.8-49.9V272c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32v-54.5l26.9 49.9c1.2 2.2 2.6 4.1 4.3 5.8l-36.3 67.5c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8l26.8-49.9V352c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32v-38.5l26.9 49.9c6.3 11.7 20.8 16 32.5 9.8s16-20.8 9.8-32.5l-37.9-70.3c-15.3-28.5-45.1-46.3-77.5-46.3h-19.5c-16.3 0-31.9 4.5-45.4 12.6l-33.6-62.3c-15.3-28.5-45.1-46.3-77.5-46.3h-19.5c-32.4 0-62.1 17.8-77.5 46.3l-33.6 62.3c-13.5-8.1-29.1-12.6-45.4-12.6h-19.5c-32.4 0-62.1 17.8-77.5 46.3l-37.9 70.2c-6.3 11.7-1.9 26.2 9.8 32.5s26.2 1.9 32.5-9.8L88 313.5V352c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32z"/>
            </svg>
            <span className='font-kanit text-white text-2xl'>Voters</span>
        </div>
        <div className='w-full h-[10%] p-3 hover:cursor-pointer gap-5 flex justify-start items-center' onClick={handlePreview}>
            <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
            <path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"/>
            </svg>
            <span className='font-kanit text-white text-2xl'> Preview</span>
        </div>
       
       <div className='w-full h-[10%] p-3 hover:cursor-pointer gap-5 flex justify-start items-center' onClick={handleLaunch}>
            <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m3.7 11.287l3.623-3.624q.293-.292.671-.413t.783-.04l1.415.294Q9.073 8.873 8.366 9.98t-1.414 2.688zm4.125 1.62q.652-1.51 1.563-2.89q.91-1.378 2.08-2.548q1.873-1.873 4.073-2.806t4.746-.797q.136 2.546-.795 4.746t-2.803 4.073q-1.164 1.163-2.548 2.07t-2.897 1.559zm6.17-2.768q.44.44 1.066.44t1.066-.44t.44-1.057t-.44-1.057t-1.066-.44t-1.067.44t-.44 1.057t.44 1.056m-1.161 10.314L11.444 17.2q1.581-.706 2.691-1.423q1.111-.717 2.48-1.836l.289 1.415q.08.404-.031.785q-.111.382-.404.675zm-7.687-4.306q.587-.586 1.423-.58t1.423.594q.587.586.587 1.423t-.587 1.423q-.51.51-1.635.873t-2.605.502q.138-1.479.511-2.602t.883-1.633"/>
            </svg>
            <span className='font-kanit text-white text-2xl'>Launch</span>
        </div>
       </div>
       <div className='w-full h-full bg-white'>
            {
               page === "overview" && <Overview />
               
            }
            {page === "settings" && <Settings />}
            {page === "ballot" && <Ballot />}
            {page === "voters" && <Voters />}
            {page === "preview" && <Preview />}
            {page === "launch" && <Launch/>}
       </div>
    </section>
  );
}

export default Dashboard;
