import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../../styles/Login.module.css';

const AzureHeader = () => {
    return(
        <>
            <div className={`container-fluid ` + styles.font} style={{'backgroundColor' : '#0080FF'}}>
                <div className="row">
                    <div className="col-lg-12 text-center" style={{'marginTop' : '50px'}}>
                        <h3 style={{'color' : 'white' }}>Azure Cloud</h3>
                        <br />
                        <hr style={{'width' : '50%', 'margin' : 'auto', 'backgroundColor' : 'white'}} />
                    </div>
                    <br />
                </div>
            </div>
        </>
    )
}

export default AzureHeader;