import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import HomeHelper from '../Components/HomeHelper'

const Home = () => {
    const store = useSelector((store) => store)
    const history = useHistory()

    return (
        <div  >
            {store.student.isAuthenticated ? <>
                <HomeHelper />
                <div className="div1 "   >
                    <div className="row  row1 ">
                        
                       
                                <div className="left">
                                    <div className="card   ">
                                        <img className="card-img-top " src={store.student.student.student.avatar} alt="Card image cap" />
                                        <div className="card-body ">
                                            <h5 className="card-title">{store.student.student.student.name}</h5>
                                            <h5 className="card-title">{store.student.student.student.registrationNumber}</h5>
                                         
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                <div>
                             <Link to='/student/updateProfile'> <button  type='button' className=' btn float-right editbtn'><li className=' list-unstyled text-3xl text-white'>UPDATE PROFILE</li> </button> </Link> 
                               <h1 className='heading'>About</h1>
                               </div>
                                    <table className="profile-table ">
                                        <tbody className="text-dark">
                                            <tr>
                                                <td className='table-item'>Name</td>
                                                <td className='table-val'>{store.student.student.student.name}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Email</td>
                                                <td  className='table-val'>{store.student.student.student.email}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Registration Number</td>
                                                <td  className='table-val'>{store.student.student.student.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Date Of Birth</td>
                                                <td  className='table-val'>{store.student.student.student.dob}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Year</td>
                                                <td  className='table-val'>{store.student.student.student.year}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Department</td>
                                                <td  className='table-val'>{store.student.student.student.department}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Section</td>
                                                <td  className='table-val'>{store.student.student.student.section}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Batch</td>
                                                <td  className='table-val'>{store.student.student.student.batch}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Gender</td>
                                                <td  className='table-val'>{store.student.student.student.gender ? store.student.student.student.gender : 
                                                
                                                   "NA"
                                                }</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Contact Number</td>
                                                <td  className='table-val'>{store.student.student.student.studentMobileNumber ?
                                                    store.student.student.student.studentMobileNumber : "NA"}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Aadhar Card</td>
                                                <td  className='table-val'>{store.student.student.student.aadharCard ? store.student.student.student.aadharCard : "NA"} </td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Father Name</td>
                                                <td  className='table-val'>{store.student.student.student.fatherName ? store.student.student.student.fatherName : "NA" }</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Father Contact Number</td>
                                                <td  className='table-val'>{store.student.student.student.fatherMobileNumber ? store.student.student.student.fatherMobileNumber : "NA"}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    

            </> : (history.push('/'))}
        </div>

    )
}

export default Home
