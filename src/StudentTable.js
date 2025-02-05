// const dataSource = [
//   {
//     key: '1',
//     name: 'Mike',
//     age: 32,
//     address: '10 Downing Street',
//   },
//   {
//     key: '2',
//     name: 'John',
//     age: 42,
//     address: '10 Downing Street',
//   },
// ];
// import { Table } from "antd";
// import StudentData from "./util/studentData";

// const columns = [
//   {
//     title: 'id',
//     dataIndex: 'id',
//     key: 'id',
//   },
//   {
//     title: 'firstName',
//     dataIndex: 'firstName',
//     key: 'firstName',
//   },
//   {
//     title: 'lastName',
//     dataIndex: 'lastName',
//     key: 'lastName',
//   },
//   {
//     title: 'email',
//     dataIndex: 'email',
//     key: 'email',
//   },
//   {
//     title: 'gender',
//     dataIndex: 'gender',
//     key: 'gender',
//   },
// ];

// export default function StudentTable() {
//   return (
// <Table dataSource={StudentData()} columns={columns} />
//   );
// }

import React from 'react'

function StudentTable({StudentArr}) { 

  // let StudentArr = studentData()
 
  return (
   <div className='table-container'>
     <table>
        <caption>Our Client Data</caption>
        <tbody>
          {StudentArr.map(({id,firstName,lastName,email,gender})=>(
             <tr key = {id}>
             <td>{firstName}</td>
             <td>{lastName}</td>
             <td>{email}</td>
             <td>{gender}</td>
           </tr>
          ))}
        </tbody>
      </table>
   </div>
  )
}

export default StudentTable;

