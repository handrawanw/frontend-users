import React, { useContext } from 'react'
import {Link} from 'react-router-dom';
import Swal from "sweetalert2";
import axios from 'axios';
import {urlContext} from "../context";

function Recover(){
    const baseUrl=useContext(urlContext);
    let info={
        reset_mail:""
    };
    function save(event) {
        info[event.target.name]=event.target.value;
    }

    function Kirim(e){
        e.preventDefault();
    let prosesCek=new Promise((resolve,reject)=>{
        if(info.hasOwnProperty("reset_mail")){
            if(info["reset_mail"]===""){
                reject("Input is empty");
            }else{
                if(/([\w].*[\@].*[\.])/g.test(info["reset_mail"])){
                    if(/[\<]|[\>]/g.test(info["reset_mail"])){
                        reject("Character is prohibited");
                    }else{
                        resolve(true);
                    }
                }else{
                    reject("invalid email");
                }
            }
        }
    });

    prosesCek.then(res=>{
      axios.post(`${baseUrl}/users/forgotPassword`,{
        email:info.reset_mail
      }).then(res=>{
          Swal.fire({
            icon:'success',
            title:`${res.data.message}`,
            showCloseButton:true,
            timer:0,
        });
      }).catch(err=>{
    let msg="";
    if(typeof err.response==="undefined"){
        msg="Bad internet connections";
    }else{
        msg=err.response.data.message;
    }
        Swal.fire({
            icon:'error',
            title:msg,
            showCloseButton:true,
            timer:0,
        });
    });

    }).catch(err=>{
        Swal.fire({
            icon:'error',
            title:err,
            showCloseButton:true,
            timer:0,
        });
    });
    
    }
    return (
        <div className="account-body accountbg">
            {/* Log In page */}
            <div className="row vh-100  bg-city">
                <div className="col-12 align-self-center">
                    <div className="auth-page">
                        <div className="card auth-card shadow-lg">
                            <div className="card-body">
                                <div className="px-3">
                                    <div className="auth-logo-box">
                                        <Link to="/" className="logo logo-admin"><img src="./assets/images/logo_codeo.png" height={55} alt="logo" className="auth-logo" /></Link>
                                    </div>
                                    {/*end auth-logo-box*/}
                                    <div className="text-center auth-logo-text">
                                        <h4 className="mt-0 mb-3 mt-5">Reset Password For Codeo</h4>
                                        <p className="text-muted mb-0">Enter your Email and instructions will be sent to you!</p>
                                    </div>
                                    {/*end auth-logo-text*/}
                                    <form method="post" encType="multipart/form-data" className="form-horizontal auth-form my-4">
                                        <div className="form-group">
                                            <label htmlFor="useremail">Email</label>
                                            <div className="input-group mb-3">
                                                <span className="auth-form-icon">
                                                    <i className="dripicons-mail" /> 
                                                </span>
                                                <input type="email" name="reset_mail" className="form-control" id="useremail" placeholder="Enter Email" onChange={save} />
                                            </div>
                                        </div>
                                        {/*end form-group*/}
                                        <div className="form-group mb-0 row">
                                            <div className="col-12 mt-2">
                                                <button className="btn btn-primary btn-round btn-block waves-effect waves-light" type="submit" onClick={Kirim}>Reset <i className="fas fa-sign-in-alt ml-1" /></button>
                                            </div>
                                            {/*end col*/}
                                        </div>
                                        {/*end form-group*/}
                                    </form>
                                    {/*end form*/}
                                </div>
                                {/*end /div*/}
                                <div className="m-3 text-center text-muted">
                                    <p className>Remember It ? <Link to="/" className="text-primary ml-2">Sign in here</Link></p>
                                </div>
                            </div>
                            {/*end card-body*/}
                        </div>
                        {/*end card*/}
                    </div>
                    {/*end auth-page*/}
                    <div align="center" style={{width: '100%'}}>
                        <span align="center">
                        ©2020 Five Angel Investment Limited - BVI
                        </span>
                    </div>
                </div>
                {/*end col*/}
            </div>
            {/*end row*/} {/* End Log In page */}
        </div>
    );
}

export default Recover;