import './LandingPage.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { NavLink } from "react-router-dom";
import { useState } from 'react';


const navigationListItem = [
    {
        id: 0,
        title: "Dashboard",
        to: "/",
        isActiveClass: true
    },
    {
        id: 1,
        title: "Riase & Bulk Collect Request",
        to: "/",
        isActiveClass: false
    },
    {
        id:2,
        title: "Bulk Refund",
        to: "/",
        isActiveClass: false
    },
    {
        id: 3,
        title: "Transaction Summary",
        to: "/",
        isActiveClass: false
    },
    {
        id: 4,
        title: "Chargeback Management",
        to: "/",
        isActiveClass: false
    },
    {
        id: 5,
        title: "Refund Summary",
        to: "/",
        isActiveClass: false
    },
    {
        id: 6,
        title: "Reports",
        to: "/",
        isActiveClass: false
    },
    {
        id: 7,
        title: "Manage User",
        to: "/",
        isActiveClass: false
    }
]
const LandingPage = () => {
    const [isActive, setIsActive] = useState(false)
    const [isActiveRouter, setIsActiveRouter] = useState()
    const [navigationList, setNavigationList] = useState(navigationListItem)

    const handleActiveClass = (id: any) => {
        console.log (id)
        // const match = navigationList.map((label) => {
        //     return console.log (id)
        // })
       const match = navigationList.map((label, index) => {
        const val = label.id[id]
            
       })
        console.log (match)
    }

    return (
        <div className="container-fluid" >
            <div className="row flex-nowrap" >
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0" >
                    <div className="d-flex flex-column align-items-center align-items-sm-start text-white" style={{ minHeight: "100vh", background: "#f8f9fa" }}>
                        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start align-items-sm-start" id="menu">

                            {navigationList.map((label) => {
                                return (
                                    <li className="nav-item" key={label.id} onClick={() => handleActiveClass(label.id)}>
                                        <NavLink to='/' className={label.isActiveClass ? 'active' : 'nav-link align-middle px-0'}>
                                            <i className="bi-alarm" style={{ color: "gray" }}></i> <span className="ms-1 d-none d-sm-inline" >{label.title}</span>
                                        </NavLink>
                                    </li>
                                )
                            })}
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