import React from 'react'
import CardDataBody from '../components/ProfileComponents/CardDataBody';
import SummaryDetail from '../components/ProfileComponents/SummaryDetail';
import FADetail from '../components/ProfileComponents/FADetail';
import FinancialBankDetail from '../components/ProfileComponents/FinancialBankDetail';
import KYCDocumentDetail from '../components/ProfileComponents/KYCDocumentDetail';

function Profile(){
    return (
        <div>
            <div className="page-wrapper">
                {/* Page Content*/}
                <div className="page-content">
                    <div className="container-fluid">
                        {/* Page-Title */}
                        
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="page-title-box">
                                    <div className="float-right">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="javascript:void(0);">Dashboard</a></li>
                                            <li className="breadcrumb-item"><a href="javascript:void(0);">User</a></li>
                                            <li className="breadcrumb-item active">Profile</li>
                                        </ol>{/*end breadcrumb*/}
                                    </div>{/*end /div*/}
                                    <h4 className="page-title">Profile</h4>
                                </div>{/*end page-title-box*/}
                            </div>{/*end col*/}
                        </div>{/*end row*/} {/* end page title end breadcrumb */}
                        
                        <CardData />

                        <CardDataContent />
                        
                    </div>{/* container */}
                </div>
                {/* end page content */}
            </div>
            {/* end page-wrapper */}
        </div>
    );
}

const CardData = (props) => {
    return(
        <div className="row">
            <div className="col-12">
                <div className="card">
                
                    <CardDataBody/>

                    <CardDataNavigation/>

                </div>
            </div>
        </div>
    )
}

const CardDataNavigation = (props) => {
    return (
        <div className="card-body">
            <ul className="nav nav-pills mb-0" id="pills-tab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="summary_detail_tab" data-toggle="pill" href="#summary_detail">Summary</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="general_detail_tab" data-toggle="pill" href="#general_detail">KYC Document</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="financial_detail_tab" data-toggle="pill" href="#financial_detail">Financial &amp; Bank</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="fa_detail_tab" data-toggle="pill" href="#fa_detail">2 FA</a>
                </li>
            </ul>
        </div>

        
    )
}

const CardDataContent = (props) => {
    return(
        <div className="row">
            <div className="col-12">
                <div className="tab-content detail-list" id="pills-tabContent">

                    <SummaryDetail />

                    <KYCDocumentDetail />
                    
                    <FinancialBankDetail />

                    <FADetail />

                </div>
            </div>
        </div>
    )
}

export default Profile;