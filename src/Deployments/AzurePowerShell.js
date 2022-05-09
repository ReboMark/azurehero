import AzureHeader from "../Common/Head";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Login.module.css'
import { useRouter } from "next/router"; 

const AzurePowerShell = () => {
    const router = useRouter();
    const body = () => {
        return(
            <>
                <div className={`container-fluid ` + styles.font + ` `+ styles.boxMargins}>
                    <div className="row">
                        <div className="col-lg-6 text-center" style={{'marginTop' : '30px'}}>
                        <h4>Azure PowerShell</h4>
                        <hr />
                        Azure PowerShell is a set of cmdlets for managing Azure resources directly from PowerShell. Azure PowerShell is designed to make it easy to learn and get started with, but provides powerful features for automation.
                        </div>
                        <div className="col-lg-6" style={{'marginTop' : '30px'}}>
                            <h4>Samples:</h4>
                            <p>Connect-AzAccount - uses to login to Microsoft Azure Active Directory</p>
                            <p>New-AzResourceGroup -Name -Location - uses to create resource groups</p>
                            <p>For more info you can visit <a href="https://docs.microsoft.com/en-us/powershell/azure/what-is-azure-powershell?view=azps-7.5.0">https://docs.microsoft.com/en-us/powershell/azure/what-is-azure-powershell?view=azps-7.5.0.</a></p>
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

export default AzurePowerShell;