import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRouter } from 'next/router';
import styles from '../../styles/Login.module.css';
import Header from "../Common/Header";
const ContentHeader = () => {
    const router = useRouter();

    const azure = () => {
        router.push("/what-is-azure")
    }

    const view = () => {
        return(
            <>
                <div className={`container-fluid ` + styles.font}>
                    <div className="row">
                        <div className={`col-lg-6 text-center`} style={{backgroundColor : '#0080FF', color : 'white', 'height' : '100vh'}}>
                            <h3 style={{'marginTop' : '200px'}}>What is Azure?</h3>
                            <hr style={{'width' : '50%', 'margin' : 'auto'}}/>
                            <br />
                            <button className={styles.buttons} onClick={azure}>Learn more...</button>
                        </div>
                        <div className="col-lg-6 text-center" style={{'marginTop' : '150px', 'height' : '100vh'}}>
                            <img src={`https://reactdev8e71.blob.core.windows.net/brownbag/Azure%20Icon.png?sp=r&st=2022-05-09T08:08:15Z&se=2023-04-29T16:08:15Z&spr=https&sv=2020-08-04&sr=b&sig=kxK9eOXCMgZ0cEkQVPR7%2FAFu4Bq9c72EkJDuCkU9odY%3D`} className="img-fluid" style={{'width' : '30%', 'height' : 'auto'}}/>
                            <br />
                            <h3>Microsoft Azure</h3>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            {view()}
        </>
    )
}

export default ContentHeader;