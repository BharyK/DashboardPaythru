import './LandingPage.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink} from "react-router-dom";
import {  useState } from 'react';
import { Routers } from '../../Routers';


const navigationList = [
    {
        id: 0,
        title: "Dashboard",
        to: "/dashboard",
    },
    {
        id: 1,
        title: "Riase & Bulk Collect Request",
        to: "/BulkCollectRequest"
    },
    {
        id: 2,
        title: "Bulk Refund",
        to: "/",
    },
    {
        id: 3,
        title: "Transaction Summary",
        to: "/TransactionSummary",
    },
    {
        id: 4,
        title: "Chargeback Management",
        to: "/",
    },
    {
        id: 5,
        title: "Refund Summary",
        to: "/",
    },
    {
        id: 6,
        title: "Reports",
        to: "/",
    },
    {
        id: 7,
        title: "Manage User",
        to: "/",
    }
]
const LandingPage = () => {
    const [isActive, setIsActive] = useState(0)
    const handleActiveClass = (id: number) => {
        setIsActive(id)
    } 

    return (
        <div className="container-fluid" >
            <div className="row flex-nowrap" >
                <div className="col-auto col-md-3 col-xl-2 px-sm-0 px-0" >
                    <div className="d-flex flex-column align-items-center align-items-sm-start text-white" style={{ minHeight: "100vh", background: "#f8f9fa" }}>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start align-items-sm-start " id="menu">
                            {navigationList.map((label, index) => {
                                return (
                                    <li className={index === isActive ? 'activeClass' : "nav-item "} key={label.id} onClick={() => handleActiveClass(label.id)}>
                                        <NavLink to={label.to} className='nav-link align-middle px-0 px-sm-0'>
                                            <i className="bi-alarm" style={{ color: "gray" }}></i> <span className="ms-1 d-none d-sm-inline mb-5" >{label.title}</span>
                                        </NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="col py-3" id="dashboard">
                    <Routers/>
                </div>
            </div>
        </div>

    )
}

export default LandingPage;