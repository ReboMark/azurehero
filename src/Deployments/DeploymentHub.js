import AzureHeader from "../Common/Head";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Login.module.css'
import { useRouter } from 'next/router';

const DeploymentDashboard = () => {
    const router = useRouter();
    const body = () => {
        return(
            <>
                <div className={`container-fluid text-center ` + styles.font}>
                    <div className="row">
                        <div className={`col-lg-12 ` + styles.boxMargins}>
                            <h4>Azure Deployment Options</h4>
                        </div>
                        <div className={`col-lg-3 ` + styles.boxMargins} style={{cursor: 'pointer'}} onClick={()=>{router.push("/azure-cli")}}>
                            Azure CLI
                        </div>
                        <div className={`col-lg-3 ` + styles.boxMargins} style={{cursor: 'pointer'}} onClick={()=> {router.push("/azure-powershell")}}>
                            Azure PowerShell
                        </div>
                        <div className={`col-lg-3 ` + styles.boxMargins} style={{cursor: 'pointer'}} onClick={() => {router.push("/azure-bicep")}}>
                            Azure Bicep
                        </div>
                        <div className={`col-lg-3 ` + styles.boxMargins} style={{cursor: 'pointer'}} onClick={() => {router.push("/azure-arm-templates")}}>
                            Azure ARM Templates
                        </div>
                        <div className="col-lg-12">
                            <button type="button" className={`float-end ` + styles.next} style={{width : '100px', marginRight: '30px'}} onClick={() => {router.back()}}>Back</button>
                            <button type="button" className={`float-end ` + styles.next} style={{width : '100px', marginRight: '20px'}} onClick={() => {router.push("/azure-kubernetes")}}>Next</button>
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

export default DeploymentDashboard;