import AzureHeader from "../Common/Head";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Login.module.css'
import { useRouter } from "next/router"; 
const AzureCli = () => {
    const router = useRouter();
    const body = () => {
        return(
            <>
                <div className={`container-fluid ` + styles.font + ` `+ styles.boxMargins}>
                    <div className="row">
                        <div className="col-lg-6 text-center" style={{'marginTop' : '30px'}}>
                        <h4>Azure CLI</h4>
                        <hr />
                        The Azure command-line interface (Azure CLI) is a set of commands used to create and manage Azure resources. The Azure CLI is available across Azure services and is designed to get you working quickly with Azure, with an emphasis on automation.
                        </div>
                        <div className="col-lg-6" style={{'marginTop' : '30px'}}>
                            <h4>Samples:</h4>
                            <p>az login - uses to login to Microsoft Azure Active Directory</p>
                            <p>az group create -l/--location -n/--name - uses to create resource groups</p>
                            <p>For more info you can visit <a href="https://docs.microsoft.com/en-us/cli/azure/">https://docs.microsoft.com/en-us/cli/azure/</a></p>
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

export default AzureCli;