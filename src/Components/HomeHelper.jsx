import React, {useState, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { studentLogout, newerChats, previousChats} from '../redux/action/studentAction'
import logo from "../Style/Images/College_logo.jpeg"
import "../Style/HomeHelper.css"

const Home = () => {
    const history = useHistory()
    const store = useSelector((store) => store)
    const [name, setName] = useState("")
    useEffect(() => {
        if (store.student.student.student.name) {
            setName(store.student.student.student.name)
        }
    }, [store.student.student.student.name])
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(newerChats(store.student.student.student.name))
        dispatch(previousChats(store.student.student.student.name))
    }, [store.student.newerChats.length])
    const logoutHandler = () => {
        dispatch(studentLogout())
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
                                    <button type="button" className="btn linkbtn"><Link to="/home"><li className='text-3xl text-white'>{name.toUpperCase()}</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn linkbtn"><Link to="/student/updateProfile"><li className='text-3xl text-white'>UPDATE PROFILE</li></Link></button>
                                </li>
                                <li className="nav-item dropdown text-3xl text-white">
                                    <a className="nav-link dropdown-toggle text-3xl text-white" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ACADEMIC </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        {/* <Link className="dropdown-item" to="/student/testPerformance">Test Performance</Link> */}
                                        <Link className="dropdown-item" to="/student/attendence">Attendance</Link>
                                        <Link className="dropdown-item" to="/student/getAllSubjects">Student Subject List</Link>
                                    </div>
                                </li>
                                {/* <li className="nav-item">
                                    <button type="button" className="btn linkbtn"><Link to="/studentDetails"><li className='text-3xl text-white'>STUDENTS</li></Link></button>
                                </li>
                                <li className="nav-item">
                                    <button type="button" className="btn linkbtn"><Link to="/studentDetails"><li className='text-3xl text-white'>NEW CONVERSATION ({store.student.newerChats.length})</li></Link></button>
                                </li> */}
                                <li className="nav-item">
                                    <button type="button" className="btn linkbtn"><Link to="/student/updatePassword"><li className='text-3xl text-white'>UPDATE PASSWORD</li></Link></button>
                                </li>
                               
                            </ul>
                           
                        </div>
                        <div>
                            <button style={{listStyle:"none"}} onClick={logoutHandler} type="button" className="btn linkbtn"><li className='text-3xl text-white'>LOGOUT</li></button>
                        </div>
                    </nav>
                </div>
          
    )
}

export default Home
