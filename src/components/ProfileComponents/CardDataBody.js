import React, { useContext } from 'react'
import { useRouteMatch, Link } from 'react-router-dom';
import { userContext } from '../../context';

export default function CardDataBody() {
    let dataProfile = useContext(userContext);

    let { url } = useRouteMatch();

    return (
        <div className="card-body met-pro-bg">
            <div className="met-profile">
                <div className="row">
                    <div className="col-lg-6 align-self-center mb-3 mb-lg-0">
                        <div className="met-profile-main">
                            <div className="met-profile-main-pic">
                                <img src="./assets/images/picture1.jpg" alt="" className="rounded-circle" width="128px" />
                                <span className="fro-profile_main-pic-change">
                                                    <i className="fas fa-camera" />
                                                </span>
                            </div>
                            <div className="met-profile_user-detail">
                                <h5 className="met-user-name" style={{float: 'left'}}>{dataProfile.name} </h5><span className="badge badge-success" style={{marginTop: '15px', marginLeft: '10px'}}><i className="fa fa-check" /> Verified</span>
                                <br />
                                <br />
                                <p className="mb-0 met-user-name-post" style={{float: 'left'}}>
                                    <label style={{float: 'left', width: '60px'}} className="mb-0">Email</label> : {dataProfile.email}</p>
                                <br />
                                <p className="mb-0 met-user-name-post" style={{float: 'left'}}>
                                    <label style={{float: 'left', width: '60px'}} className="mb-0">Country</label> : Indonesia</p>
                            </div>
                        </div>
                    </div>{/*end col*/}
                    <div className="col-lg-6">
                        <div className="mt-5" style={{float: 'right'}}>
                            <Link to={`${url}/editProfile`}>
                                <button className="btn btn-warning" type="button">
                                    <i className="fa fa-edit" /> 
                                    Edit Data
                                </button>
                            </Link>
                            <Link className="btn btn-success ml-2" to={`${url}/changePassword`}>
                                <i className="fa fa-edit" /> Change Password
                            </Link>
                        </div>
                    </div>{/*end col*/}
                </div>{/*end row*/}
            </div>{/*end f_profile*/}
        </div>/*end card-data-body*/
    )
}
