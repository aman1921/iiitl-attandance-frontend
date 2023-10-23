import React, {useState,useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import {facultyLogout} from '../redux/action/facultyAction'
import logo from "../Style/Images/College_logo.jpeg"
import "../Style/HomeHelper.css"


const Home = () => {
    const store = useSelector((store)=>store)
    const history = useHistory()
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    useEffect(() => {

        if (store.faculty.faculty.faculty.name) {
            setName(store.faculty.faculty.faculty.name)
        }
    }, [store.faculty.faculty.faculty.name])
    const logoutHandler = () => {
        dispatch(facultyLogout())
        history.push('/')
    }
    return (
        <div className="container-fluid p-0 m-0">
            {/* <Header /> */}
            <div className="row p-0 m-0">
                <div className="col p-0">
                    <nav className="navbar navbar-expand-lg ">
                    <img src={logo} className="logo" alt="logo"/>
                    <h4 className="navbar-brand mt-1 text-white m-3 h1" href="">Attendance</h4>
                    
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    <button type="button" className="btn linkbtn"><Link to="/home"><li  className='text-3xl text-white'>{name.toUpperCase()}</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn linkbtn"><Link to="/faculty/updateProfile"><li  className='text-3xl text-white'>UPDATE PROFILE</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn linkbtn"><Link to="/attendenceFaculty"><li  className='text-3xl text-white'>MARK ATTENDANCE</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn linkbtn"><Link to="/faculty/uploadMarks"><li  className='text-3xl text-white'>UPLOAD MARKS</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn linkbtn"><Link to="/faculty/updatePassword"><li  className='text-3xl text-white'>UPDATE PASSWORD</li></Link></button>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <button style={{listStyle:"None"}} onClick={logoutHandler} type="button" className="btn linkbtn"><li  className='text-3xl text-white'>LOGOUT</li></button>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Home
