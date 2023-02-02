import './LandingPage.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from "react-router-dom";
import { useState } from 'react';



const LandingPage = () => {
    const [isActive, setIsActive] = useState(false)
    const navigationList = [
        {
            id : 1,
            title : "Dashboard",
            to: "/"
        }
        {
            id : 2,
            title : "Riase & Bulk Collect Request",
            to: "/"
        },
        {
            id : 3,
            title : "Bulk Refund",
            to: "/"
        },
        {
            id : 4,
            title : "Transaction Summary",
            to: "/"
        },
        {
            id : 5,
            title : "Chargeback Management",
            to: "/"
        },
        {
            id : 6,
            title : "Refund Summary",
            to: "/"
        },
        {
            id : 7,
            title : "Reports",
            to: "/"
        },
        {
            id : 8,
            title : "Manage User",
            to: "/"
        }
    ]
    return (
        <div className="container-fluid" >
            <div className="row flex-nowrap" >
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" >
                    <div className="d-flex flex-column align-items-center align-items-sm-start text-white" style={{ minHeight: "100vh", background: "#f8f9fa" }}>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start align-items-sm-start" id="menu">
                            <li className="nav-item active">
                                <NavLink to = '/' className= {({isActive}) => isActive ? "nav-link align-middle px-0" : 'active' }>
                                    <i className="bi-alarm" style = {{color: "gray"}}></i> <span className="ms-1 d-none d-sm-inline" >Dashboard</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to = '/' className= {({isActive}) => isActive ? "nav-link align-middle px-0" : 'active' }>
                                    <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Raise a Bulk Collect Request</span></NavLink>
                            </li>
                            <li>
                                <a href="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                                    <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Bulk Refund</span></a>
                            </li>

                            <li>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Transaction Summary</span> </a>
                            </li>

                            <li>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Refund Summary</span> </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Chargeback Management</span> </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Reports</span> </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">My Prfoile</span> </a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0 align-middle">
                                    <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Manage User</span> </a>
                            </li>
                        </ul>

                    </div>
                </div>
                <div className="col py-3" id="dashboard">
                    Dashboard
                </div>

            </div>
        </div>

    )
}

export default LandingPage;