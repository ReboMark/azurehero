import AzureHeader from "../Common/Head";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Login.module.css'
import { useRouter } from "next/router"; 

const ARM = () => {
    const router = useRouter();
    const body = () => {
        return(
            <>
                <div className={`container-fluid ` + styles.font + ` `+ styles.boxMargins}>
                    <div className="row">
                        <div className="col-lg-12 text-center" style={{'marginTop' : '30px'}}>
                        <h4>Azure Azure Resource Manager (ARM) Template</h4>
                        <hr />
                        ARM templates are a form of infrastructure as code, a concept where you define the infrastructure that needs to be deployed. ARM templates use declarative syntax, meaning you define the resources for Azure to deploy without specifying how the resources are created.
                        
                        <p style={{marginTop: '30px'}}>For more info you can visit <a href="https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview?tabs=bicep">https://docs.microsoft.com/en-us/azure/azure-resource-manager/bicep/overview?tabs=bicep</a></p>
                        <br />
                        <button type="button" className={`float-end ` + styles.next} style={{width : '100px', marginRight: '90px'}} onClick={() => {router.back()}}>Back</button>
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

export default ARM;