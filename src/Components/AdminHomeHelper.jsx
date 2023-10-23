import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { adminLogout } from '../redux/action/adminAction'
import logo from "../Style/Images/College_logo.jpeg"
import "../Style/HomeHelper.css"
const Home = () => {
    const store = useSelector(store => store)
    const [name, setName] = useState("")
    useEffect(() => {

        if (store.admin.admin.name) {
            setName(store.admin.admin.name)
        }
    }, [store.admin.admin.name])
    const history = useHistory()
    const dispatch = useDispatch()
    const logoutHandler = () => {
        dispatch(adminLogout())
        history.push('/')
    }
    return (
        <div className="container-fluid m-0 p-0">
          
            <nav className="navbar navbar-expand-lg ">
            <img src={logo} className="logo" alt="logo"/>
                    <h4 className="navbar-brand mt-1 text-white m-3 h1" href="">Attendance</h4>
               
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <button type="button" className="btn linkbtn"><Link to="/admin"><li className='text-3xl text-white'>{name.toUpperCase()}</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn linkbtn"><Link to="/admin/addFaculty"><li className='text-3xl text-white'>ADD FACULTY</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn linkbtn"><Link to="/admin/addStudent"><li className='text-3xl text-white'>ADD STUDENT</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn linkbtn"><Link to="/admin/addSubject"><li className='text-3xl text-white'>ADD SUBJECT</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn linkbtn"><Link to="/admin/addAdmin"><li className='text-3xl text-white'>ADD ADMIN</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn linkbtn"><Link to="/admin/allFaculties"><li className='text-3xl text-white'>OUR FACULTIES</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn linkbtn"><Link to="/admin/allStudents"><li className='text-3xl text-white'>OUR STUDENTS</li></Link></button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="btn linkbtn"><Link to="/admin/allSubject"><li className='text-3xl text-white'>SUBJECTS</li></Link></button>
                        </li>

                    </ul>
                </div>
                <div>

                    <button style={{ listStyle: "None" }} onClick={logoutHandler} type="button" className="btn linkbtn"><li className='text-3xl text-white'>LOGOUT</li></button>

                </div>
            </nav>
        </div>
    )
}

export default Home
