import React, { useState } from 'react';
import StuComponent from './stu_component';
import TeacherComponent from './teacher_component';
import './App_.css';
function App_() {
    const[student,setstudent]=useState(false);
    const[teacher,setteacher]=useState(false);
    const[subject,setsubject]=useState(false);
    const[period,setperiod]=useState(false);
    const[club,setclub]=useState(false);
    const[btn,setbtn]=useState(true);
    const stud =()=>{
        setstudent(true);
        setteacher(false);
        setsubject(false);
        setperiod(false);
        setclub(false);
        setbtn(false);
    };
    const teach =()=>{
        setstudent(false);
        setteacher(true);
        setsubject(false);
        setperiod(false);
        setclub(false);
        setbtn(false);
    };
    const sub =()=>{
        setstudent(false);
        setteacher(false);
        setsubject(true);
        setperiod(false);
        setclub(false);
        setbtn(false);
    };
    const perid =()=>{
        setstudent(false);
        setteacher(false);
        setsubject(false);
        setperiod(true);
        setclub(false);
        setbtn(false);
    };
    const clb =()=>{
        setstudent(false);
        setteacher(false);
        setsubject(false);
        setperiod(false);
        setclub(true);
        setbtn(false);
    };
    return ( 
        <div className='content'>
            {btn?<div><div className='space'></div>
            <div className='buttons' onClick={stud}>Student</div><br/>
            <div className='buttons' onClick={teach}>Teacher</div><br/>
            <div className='buttons' onClick={sub}>Subject</div><br/>
            <div className='buttons' onClick={perid}>Period</div><br/>
            <div className='buttons' onClick={clb}>Club</div></div>:<div/>}
            {student?<StuComponent/>:<div></div>}
            {teacher?<TeacherComponent/>:<div></div>}
            
        </div>
        
     );
}

export default App_;