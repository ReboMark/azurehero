import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Login.module.css'
import { useRouter } from 'next/router';
import AzureHeader from "../Common/Head";

const SaasDefinition = () => {
    const router = useRouter();
    const body = () => {
        return(
            <>
                <div className={`container ` + styles.font}>
                    <div className="row">
                        <div className={`col-lg-12 text-center ` + styles.boxMargins}>
                            <h3>Software as a Service</h3>
                            <img src={`https://reactdev8e71.blob.core.windows.net/brownbag/saas.PNG?sp=r&st=2022-05-09T11:25:06Z&se=2023-05-29T19:25:06Z&spr=https&sv=2020-08-04&sr=b&sig=qCdkg%2BM6kInFO6X5JcaGLOHymOXuYXX2aztG%2FSmtpRU%3D`} className="img-fluid" />
                            
                            <button type="button" className={`float-end ` + styles.next} style={{width : '100px', marginRight: '50px'}} onClick={() => {router.back()}}>Back</button>
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
            </div>
        </>
    )
}

export default SaasDefinition;