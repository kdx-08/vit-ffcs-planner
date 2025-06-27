import React from 'react';
import data from '../models/slots.json';

const Timetable = () => {
  return (
    <div>
        <table>
            <tr>
                <td>Lecture<br></br>Hours</td>
                {
                    data.theory.map((item,index)=>(
                        <td key={index}>{item.start}<br/>-<br/>{item.end}</td>
                    ))
                }
            </tr>
            <tr>
                <td>Practical Hours</td>
                {
                    data.lab.map((item,index)=>(
                        <td key={index}>{item.start}</td>
                    ))
                }
            </tr>
        </table>
    </div>
  )
}

export default Timetable