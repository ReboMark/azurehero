import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Login.module.css';
import NavGlobal from "../Common/Navbar";
import ScheduleBook from "./Schedule";

const Landing = () => {
    return(
        <>
            <div className={`${styles.font}`+" container-fluid"}>
                <div className="row">
                    <NavGlobal />
                    <ScheduleBook />
                </div>
            </div>
        </>
    )
}

export default Landing;