import AzureHeader from "../Common/Head";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Login.module.css'
import { useRouter } from "next/router"; 

const AzureBicep = () => {
    const router = useRouter();
    const body = () => {
        return(
            <>
                <div className={`container-fluid ` + styles.font + ` `+ styles.boxMargins}>
                    <div className="row">
                        <div className="col-lg-12 text-center" style={{'marginTop' : '30px'}}>
                        <h4>Azure Bicep</h4>
                        <hr />
                        Bicep is a domain-specific language (DSL) that uses declarative syntax to deploy Azure resources. In a Bicep file, you define the infrastructure you want to deploy to Azure, and then use that file throughout the development lifecycle to repeatedly deploy your infrastructure.
                        
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

export default AzureBicep;