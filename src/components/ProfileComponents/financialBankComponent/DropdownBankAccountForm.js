import React,{useState,useReducer} from "react";
import {DropdownBankAccountFunction} from "./DropdownBankAccountFunction";
import BlockXSS from "../BlockXSS";
import Swal from 'sweetalert2';
let status=false;let msg="";

export default function DropdownBankAccountFunc(){
let info={
"bank_name":"",
"Country":"",
"SwiftCode":"",
"account_holder_name":"",
"AccountNumber":"",
};


function save(event){
    info[event.target.name]=event.target.value;
}

function Kirim(e){
    e.preventDefault();
    let prosesCek=new Promise((resolve,reject)=>{
        
        for (let x of Object.keys(info)) {
            for (let y of Object.values(info)) {
                if(info.hasOwnProperty(x)){
                    if(y===""){
                        reject("input is empty");
                    }
                }
            }
        }
           resolve(true);
    
    });
    
    prosesCek.then(res=>{
        //bank name checked
    if(info.hasOwnProperty("bank_name")){
        if(info['bank_name']==="none"){
            throw('Bank name not selected');
        }else{
            return true;
        }
    }
    
    }).then(res=>{

        if(info.hasOwnProperty("Country")){
            if(info['Country']==="none"){
                throw('County not selected');
            }else{
                return true;
            }
        }
    
    }).then(res=>{

        if(info.hasOwnProperty("Swiftcode")){
            if(info['Country']==="none"){
                throw('Country not selected');
            }else{
                return true;
            }
        }

    }).then(res=>{

        if(info.hasOwnProperty("account_holder_name")){
            if(info['account_holder_name']==="none"){
                throw('Account holder not selected');
            }else{
                return true;
            }
        }

    }).catch(err=>{
        Swal.fire({
            icon:'error',
            title:err,
            showConfirmButton:false,
            timer:1500,
        });
    });
}

return (
<form method="post" className="card-box">
                        <div className="form-group row">
                            <div className="col-md-4">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-credit-card" /></span>
                                    </div>
                                    <select className="form-control" name="bank_name" onChange={save} required>
                                    <option value="none">BANK NAME</option>
                                    <option value="BCA">BANK Central Asia (BCA)</option>
                                    <option value="Mandiri">Mandiri</option>
                                </select>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <select className="form-control" name="Country" onChange={save} required>
                                    <option value="none">Country</option>
                                    <option value="Indonesia">Indonesia</option>
                                    <option value="Singapore">Singapore</option>
                                    <option value="Malaysia">Malaysia</option>
                                    <option value="Thailand">Thailand</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <input type="text" placeholder="Swift Code" name="SwiftCode" onChange={save} className="form-control" required onChange={save} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-user" /></span>
                                    </div>
                                    <input type="text" id="example-input2-group2" name="account_holder_name" className="form-control" placeholder="Account Holder Name" onChange={save} required />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <input type="text" placeholder="Account Number" name="AccountNumber" className="form-control" onChange={save} required />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <input type="submit" className="btn btn-primary btn-sm px-4 mt-3 float-right mb-0" value="Save Changes" onClick={Kirim} />
                            </div>
                        </div>
                    </form>
);
}
