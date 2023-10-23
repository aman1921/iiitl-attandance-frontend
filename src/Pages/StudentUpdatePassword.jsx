import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import classnames from 'classnames'
import HomeHelper from '../Components/HomeHelper'
import { studentUpdatePassword } from '../redux/action/studentAction'




const StudentUpdatePassword = () => {
    const store = useSelector((store) => store)
    const history = useHistory()
    const dispatch = useDispatch()
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [error, setError] = useState({})

    useEffect(() => {
        if (store.errorHelper) {
            setError(store.errorHelper)
            console.log(store.errorHelper)
        }
    }, [store.errorHelper])
    const formHandler = (e) => {
        e.preventDefault()
        dispatch(studentUpdatePassword({ registrationNumber: store.student.student.student.registrationNumber, oldPassword, newPassword, confirmNewPassword }))
    }
    return (
        <div>
            {store.student.isAuthenticated ? <>
                <HomeHelper />
                <div className="div1">
                    <div className="row row1">
                        <div className="col-md-5 m-auto">
                        <h1   className='heading text-center m-auto pb-5'>UPDATE PASSWORD</h1>
                            <form noValidate onSubmit={formHandler}>
                                <div className="form-group">
                                    <label className='h5' htmlFor="emailId">Old Password</label>
                                    <input onChange={(e) => setOldPassword(e.target.value)} type="password" value={oldPassword} className={classnames("form-control",
                                        {
                                            'is-invalid': error.oldPassword

                                        })} id="emailId" />
                                    {error.oldPassword && (<div className="invalid-feedback">{error.oldPassword}</div>)}
                                </div>
                                <div className="form-group">
                                    <label className='h5' htmlFor="passwordId">New Password</label>
                                    <input onChange={(e) => setNewPassword(e.target.value)} value={newPassword} className={classnames("form-control", {
                                        "is-invalid": error.newPassword
                                    })} type="password" id="passwordId" />
                                    {error.newPassword && (<div className="invalid-feedback">{error.newPassword}</div>)}
                                </div>
                                <div className="form-group">
                                    <label className='h5' htmlFor="passwordCId">Confirm New Password</label>
                                    <input onChange={(e) => setConfirmNewPassword(e.target.value)} value={confirmNewPassword} className={classnames("form-control", {
                                        "is-invalid": error.confirmNewPassword
                                    })}  type="password" id="passwordCId" />
                                    {error.confirmNewPassword && (<div className="invalid-feedback">{error.confirmNewPassword}</div>)}
                                </div>
                                <button type="submit" class="btn btn-info btn-block updatebtn ">Update Password</button>
                            </form>
                        </div>
                    </div>
                </div></> : (history.push('/'))}

           

        </div>
    )
}

export default StudentUpdatePassword
