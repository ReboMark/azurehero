import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import styles from '../../styles/Login.module.css';
import { useRouter } from 'next/router';
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import moment from "moment";

const ScheduleBook = () => {
    const router = useRouter();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const [place, setPlace] = useState("");

    const handleChange = (e) => {
        setPlace(e.target.value)
    }
    const searchBooking = (e) => {
        console.log(moment(startDate).format("MMDDYYYY"));
        let start = moment(startDate).format("MMDDYYYY");
        let end = moment(endDate).format("MMDDYYYY");
        if (start.length != 0) {
            router.push({
                pathname: `/search`,
                query: { "checkIn": start, "checkOut": end, "location": place }
            });
        }
    }

    useEffect(() => {

    },[])

    return(
        <>
            <div className="container-fluid" style={{marginTop: '50px'}}>
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8 text-center">
                        <h3>Plan your vacation</h3>
                        <hr />
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <button className="btn btn-outline-secondary" type="button"><i className="fa fa-search"></i></button>
                            </div>
                            <input type="text" className="form-control" placeholder="Search Destination" aria-label="" aria-describedby="basic-addon1" onChange={handleChange} />
                        </div>
                        
                    </div>
                    <div className="col-lg-2"></div>
                    
                    <div className="col-lg-2"></div>
                    <div className="col" >
                        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} className="form-control" placeholderText="From"/>
                    </div>
                    <div className="col">
                        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} className="form-control" placeholderText="To"/>
                    </div>
                    <div className="col-lg-2"></div>

                    <div className="col-lg-12"></div>
                    <div className="col-lg-4"></div>
                    <div className="col text-center">
                        <br />
                        <button type="button" className={styles.buttons} onClick={searchBooking}>Search</button>
                    </div>
                    <div className="col-lg-4"></div>
                </div>
            </div>
            
        </>
    )
}

export default ScheduleBook;