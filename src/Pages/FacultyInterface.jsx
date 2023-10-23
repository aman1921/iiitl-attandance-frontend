import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'


import FacultyHomeHelper from '../Components/FacultyHomeHelper'

import '../Style/StudentHome.css'
const FacultyInterface = () => {
    const history = useHistory()
    const store = useSelector((store) => store)
    return (
        <>
            {store.faculty.isAuthenticated ? <>
                <FacultyHomeHelper />
                <div className="div1">
                    <div className="row row1">
                      
                       
                                <div className="left">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img className="card-img-top" src={store.faculty.faculty.faculty.avatar} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{store.faculty.faculty.faculty.name}</h5>
                                            <h5 className="card-title">{store.faculty.faculty.faculty.registrationNumber}</h5>
                                           
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                <div>
                             <Link to='/faculty/updateProfile'> <button  type='button' className=' btn float-right editbtn'><li className=' list-unstyled text-3xl text-white'>UPDATE PROFILE</li> </button> </Link> 
                               <h1 className='heading'>About</h1>
                               </div>
                                    <table className="profile-table">
                                        <tbody className='text-dark'>
                                            <tr>
                                                <td className='table-item'>Name</td>
                                                <td className='table-val'>{store.faculty.faculty.faculty.name}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Email</td>
                                                <td className='table-val'>{store.faculty.faculty.faculty.email}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Registration Number</td>
                                                <td className='table-val'>{store.faculty.faculty.faculty.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Date Of Birth</td>
                                                <td className='table-val'>{store.faculty.faculty.faculty.dob}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Designation</td>
                                                <td className='table-val'>{store.faculty.faculty.faculty.designation}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Joining Year</td>
                                                <td className='table-val'>{store.faculty.faculty.faculty.joiningYear}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Department</td>
                                                <td className='table-val'>{store.faculty.faculty.faculty.department}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Gender</td>
                                                <td className='table-val'>{store.faculty.faculty.faculty.gender ? store.faculty.faculty.faculty.gender :

                                                    "NA"
                                                }</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Contact Number</td>
                                                <td className='table-val'>{store.faculty.faculty.faculty.facultyMobileNumber ?
                                                    store.faculty.faculty.faculty.facultyMobileNumber : "NA"}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                       

            </> : (history.push('/'))}
           
        </>


    )
}

export default FacultyInterface
