import React from "react";
import Swal from "sweetalert2";

export default function DropdownCryptoDigitalAsset() {
    let info={
        paypal_address:"",
        bitcoin_address:"",
        ethereum_address:"",
    };
    function save(event) {
        info[event.target.name]=event.target.value;
    }
    function Kirim(e) {
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
            //Proses cek paypal email
            if(info.hasOwnProperty("paypal_address")){
                if(/([\w].*[\@].*[\.])/g.test(info["paypal_address"])){
                    if(/[\<]|[\>]|[\`]|[\']/g.test(info["paypal_address"])){
                        throw new Error("Invalid paypal character, please check your input");
                    }else{
                        return true;
                    }
                }else{
                    throw new Error("invalid email");
                }
            }
        }).then(res=>{
            //Proses cek bitcoin address
            if(info.hasOwnProperty("bitcoin_address")){
                if(/([A-Z].*[a-z].*[0-9])/g.test(info["bitcoin_address"])){
                    if(/[\<]|[\>]|[\W]/g.test(info["bitcoin_address"])){
                        throw new Error("Invalid bitcoin character,  please checked you input");
                    }else{
                        return true;
                    }
                }else{
                    throw new Error("invalid bitcoin");
                }
            }
        }).then(res=>{
            //Proses cek ethereum_address
            if(info.hasOwnProperty("ethereum_address")){
                if(/([a-z].*[0-9])/g.test(info["ethereum_address"])){
                    if(/[\<]|[\>]|[\W]/g.test(info["ethereum_address"])){
                        throw new Error("Invalid ethereum character, please checked you input");
                    }else{
                        return true;
                    }
                }else{
                    throw new Error("invalid ethereum");
                }
            }
        }).then(res=>{
            alert(res)//axios
        }).catch(err=>{
            Swal.fire({
                icon:'error',
                title:err,
                showCancelButton:false,
                timer:0,
            })
        });
        /*
            if(/([\w].*[\@].*[\.])/g.test(info["reset_mail"])){
                    if(/[\<]|[\>]/g.test(info["reset_mail"])){
                        reject("Karakter dilarang");
                    }else{
                        resolve(true);
                    }
                }else{
                    reject("invalid email");
                }
        */
    }
    //16tgiU4YBhhLMzK1AUQePpJAWcDvxn1oHF  bitcoin address example
    //0xc257274276a4e539741ca11b590b9447b26a8051 Address Ethereum example
    return (
        <form method="post" className="card-box" required>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-user" /></span>
                                    </div>
                                    <input type="text" id="example-input4-group4" name="paypal_address" className="form-control" placeholder="Paypal Email" onChange={save} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-user" /></span>
                                    </div>
                                    <input type="text" id="example-input4-group4" name="bitcoin_address" className="form-control" placeholder="Address Bitcoin" onChange={save} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-user" /></span>
                                    </div>
                                    <input type="text" id="example-input4-group4" name="ethereum_address" className="form-control" placeholder="Address Ethereum" onChange={save} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <button className="btn btn-primary btn-sm px-4 mt-3 float-right mb-0" onClick={Kirim}>Save Changes</button>
                            </div>
                        </div>
                    </form>
    );
}