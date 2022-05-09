import AzureHeader from '../Common/Head'
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Login.module.css'
import { useRouter } from 'next/router';

const LuxStandards = () => {
    const router = useRouter()
    const body = () => {
        return(
            <>
                <div className={`container-fluid ` + styles.font}>
                    <div className="row">
                        <div className={`col-lg-12 text-center ` + styles.boxMargins}>
                            <h3>Azure Global Standards</h3>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const body2 = () => {
        return(
            <>
                <div className={`container-fluid ` + styles.font}>
                    <div className='row'>
                        <div className={`col-lg-3 text-center ` + styles.boxMargins}>
                            Naming Convention
                        </div>
                        <div className={`col-lg-3 text-center ` + styles.boxMargins}>
                            Enrollment
                        </div>
                        <div className={`col-lg-3 text-center ` + styles.boxMargins}>
                            Azure Regions
                        </div>
                        <div className={`col-lg-3 text-center ` + styles.boxMargins}>
                            Enrollment
                        </div>
                        <div className={`col-lg-3 text-center ` + styles.boxMargins}>
                            Application Master List
                        </div>
                        <div className={`col-lg-3 text-center ` + styles.boxMargins}>
                            Tagging and Costing
                        </div>
                        <div className={`col-lg-3 text-center ` + styles.boxMargins}>
                            Azure Security
                        </div>
                        <div className={`col-lg-3 text-center ` + styles.boxMargins}>
                            Azure Networking / NVA
                        </div>
                        <div className='col-lg-12'>
                            <button type="button" className={`float-end ` + styles.next} style={{width : '100px', marginRight: '50px'}} onClick={() => {router.back()}}>Back</button>
                            <button type="button" className={`float-end ` + styles.next} style={{width : '100px', marginRight: '20px'}} onClick={() => {router.push("/deployments")}}>Next</button>
                        </div>
                    </div>
                </div>
            </>
        )
    }

    return(
        <>
            <div style={{backgroundColor : '#0080FF', height : '100vh'}}>
                <AzureHeader />
                {body()}
                {body2()}
            </div>
        </>
    )
}

export default LuxStandards;