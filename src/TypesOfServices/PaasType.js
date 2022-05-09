import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Login.module.css'
import { useRouter } from 'next/router';
import AzureHeader from "../Common/Head";

const PaasDefinition = () => {
    const router = useRouter();
    const body = () => {
        return(
            <>
                <div className={`container ` + styles.font}>
                    <div className="row">
                        <div className={`col-lg-12 text-center ` + styles.boxMargins}>
                            <h3>Platform as a Service</h3>
                            <img src={`https://reactdev8e71.blob.core.windows.net/brownbag/paas.PNG?sp=r&st=2022-05-09T11:20:58Z&se=2023-02-27T19:20:58Z&spr=https&sv=2020-08-04&sr=b&sig=2k8RAUicthb6INDA4ycUeCwucDb%2BIvaICr444wZY6gM%3D`} className="img-fluid" />
                            
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

export default PaasDefinition;