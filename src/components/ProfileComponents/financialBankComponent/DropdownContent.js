import React,{useState} from 'react';

import DropdownBankAccountForm from "./DropdownBankAccountForm";
import DropdownCryptoDigitalAssetForm from "./DropdownCryptoDigitalAssetForm";  
import DropdownCreditCardForm from "./DropdownCreditCardForm";

export const DropdownBankAccount = () => {
    
    return(
        <div className="card border mb-0">
            <div className="card-header p-0" id="headingOne">
                <h5 style={{margin: '15px'}}>
                            <label style={{color: '#FFF', width: '100%'}} className="mb-0">
                            <input type="radio" id="r11" name="occupation" defaultValue={1} required className="btn btn-link text-dark collapsed" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" /> Bank Account <img src="../assets/images/bank/bca.png" width="30px" /> <img src="../assets/images/bank/mandiri.png" width="30px" />
                            </label>
                        </h5>
            </div>
            <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body col-lg-6 mx-auto">
                    <p className="mb-0 text-muted">
                    </p>
                    <h3 align="center">Bank Account</h3>
                    <DropdownBankAccountForm />
                    <p />
                </div>
            </div>
        </div>
    )
}

export const DropdownCreditCard = () => {
    return(
        <div className="card mb-0 border shadow-none">
            <div className="card-header p-0" id="headingTwo">
                <h5 style={{margin: '15px'}}>
                            <label style={{color: '#FFF', width: '100%'}} className="mb-0">
                            <input type="radio" id="r11" name="occupation" defaultValue={1} required className="btn btn-link text-dark collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseOne" /> Credit Card <img src="../assets/images/bank/mastercard.png" width="30px" /> <img src="../assets/images/bank/visa.png" width="30px" />
                            </label>
                        </h5>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div className="card-body col-lg-6 mx-auto">
                    <p className="mb-0 text-muted">
                    </p>
                    <h3 align="center">Credit Card</h3>
                        <DropdownCreditCardForm />
                    <p />
                </div>
            </div>
        </div>
    )
}

export const DropdownCryptoDigitalAsset = () => {
   
    return(
        <div className="card mb-0 border shadow-none">
            <div className="card-header p-0" id="headingThree">
                <h5 style={{margin: '15px'}}>
                            <label style={{color: '#FFF', width: '100%'}} className="mb-0">
                            <input type="radio" id="r11" name="occupation" defaultValue={1} required className="btn btn-link text-dark collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseOne" /> Crypto / Digital Asset  <img src="../assets/images/bank/bitcoin.png" width="20px" />  <img src="../assets/images/bank/paypal.png" width="20px" />  <img src="../assets/images/bank/ethereum.png" width="20px" />
                            </label>
                        </h5>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div className="card-body col-lg-6 mx-auto">
                    <p className="mb-0 text-muted">
                    </p>
                    <h3 align="center">Crypto / Digital Asset</h3>
                        <DropdownCryptoDigitalAssetForm />
                    <p />
                </div>
            </div>
        </div>
    )
}

/*
<form className="card-box">
                        <div className="form-group row">
                            <div className="col-md-12">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-user" /></span>
                                    </div>
                                    <input type="text" id="example-input4-group4" name="bitcoin1" className="form-control" placeholder="Paypal Email" onChange={save} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-user" /></span>
                                    </div>
                                    <input type="text" id="example-input4-group4" name="bitcoin2" className="form-control" placeholder="Address Bitcoin" onChange={save} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-user" /></span>
                                    </div>
                                    <input type="text" id="example-input4-group4" name="bitcoin3" className="form-control" placeholder="Address Ethereum" onChange={save} />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <button className="btn btn-primary btn-sm px-4 mt-3 float-right mb-0" onClick={Kirim}>Save Changes</button>
                            </div>
                        </div>
                    </form>
*/