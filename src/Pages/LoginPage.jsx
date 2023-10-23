import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { adminLogin } from '../redux/action/adminAction'
import classnames from 'classnames'
import image1 from "../Style/Images/My_project.png"


const LoginPage = () => {
    const store = useSelector((store) => store)
    const dispatch = useDispatch( )
    const [registrationNumber, setRegistrationNumber] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    useEffect(() => {
        if (store.admin.isAuthenticated) {
            history.push('/admin')
        }
    }, [store.admin.isAuthenticated])
    useEffect(() => {
        if (store.error) {
            setError(store.error)
        }
    }, [store.error])

    const fromHandler = (e) => {
        e.preventDefault()
        setIsLoading(true)
        dispatch(adminLogin({registrationNumber, password}))
       
    }

    useEffect(() => {
        if (store.error ||
            store.admin.isAuthenticated) {
            setIsLoading(false)
        }
        
        else {
            setIsLoading(true)
        }
    }, [store.error, store.admin.isAuthenticated])

    
    return (
        <div>
                <div className='header'> IIITL ATTENDANCE</div>

        <div className="login-cont">
     
            <div className="row  row2 ">
            <img src={image1}  className="attend-img" alt=""/>
        
                    <div className="d-flex login-panel  align-items-center ">
                        <div>
                            <h1 className="h1 text-center">ADMIN</h1>
                            <form noValidate onSubmit={fromHandler}>
                                <div className="form-group">
                                    <label className='h5' htmlFor="emailId">Registration Number</label>
                                    <input onChange={(e) => setRegistrationNumber(e.target.value)} type="text" value={registrationNumber} className={classnames("form-control form-control-lg",
                                        {'is-invalid' : error.registrationNumber
                                        
                                        })} id="emailId" />
                                    {error.registrationNumber && (<div className="invalid-feedback">{error.registrationNumber}</div>)}
                                </div>
                                <div className="form-group">
                                    <label className='h5' htmlFor="passwordId">Password</label>
                                    <input onChange={(e) => setPassword(e.target.value)} value={password} className={classnames("form-control form-control-lg", {
                                        "is-invalid": error.password
                                    })}  type="password" id="passwordId" />
                                    {error.password && (<div className="invalid-feedback">{error.password}</div>)}
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-md-1">
                                        {
                                            isLoading && <div class="spinner-border text-primary" role="status">
                                                <span class="sr-only">Loading...</span>
                                            </div>
                                        }
                                    </div>
                                </div>
                                {!isLoading && <button type="submit" className="btn btn-info updatebtn btn-block">Login</button>}
                            </form>
                        </div>
                    
                </div>
            </div>
            </div>
            </div>
    )
}

export default LoginPage
