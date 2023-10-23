import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import AdminHomeHelper from '../../Components/AdminHomeHelper'

const AdminHome = () => {
    const store = useSelector((store) => store)

    const history = useHistory()
    return (
        <div>
           
            {store.admin.isAuthenticated ? <>
                <AdminHomeHelper />
                <div className="div1">
                    <div className="row row1">
                       
                        
                                <div className="left">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img className="card-img-top" src={store.admin.admin.avatar} alt="Card image cap" />
                                        <div className="card-body">
                                            <h5 className="card-title">{store.admin.admin.name}</h5>
                                            <h5 className="card-title">{store.admin.admin.registrationNumber}</h5>
                                          
                                        </div>
                                    </div>
                                </div>
                                <div className="right">
                                <div>
                             {/* <Link to='/admin/updateProfile'> <button  type='button' className=' btn float-right editbtn'><li className=' list-unstyled text-3xl text-white'>UPDATE PROFILE</li> </button> </Link>  */}
                               <h1 className='heading'>About</h1>
                               </div>
                                    <table className="profile-table">
                                        <tbody className='text-dark'>
                                            <tr>
                                                <td className='table-item'>Name</td>
                                                <td className='table-val'>{store.admin.admin.name}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Email</td>
                                                <td className='table-val'>{store.admin.admin.email}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Registration Number</td>
                                                <td className='table-val'>{store.admin.admin.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Joining Year</td>
                                                <td className='table-val'>{store.admin.admin.joiningYear}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Department</td>
                                                <td className='table-val'>{store.admin.admin.department}</td>
                                            </tr>
                                            <tr>
                                                <td className='table-item'>Contact Number</td>
                                                <td className='table-val'>{store.admin.admin.contactNumber ?
                                                    store.admin.admin.contactNumber : "NA"}</td>
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

export default AdminHome
