import React from 'react'

export const DropdownBankAccount = () => {
    return(
        <div className="card border mb-0 shadow-none">
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
                    <form method="post" className="card-box">
                        <div className="form-group row">
                            <div className="col-md-4">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-credit-card" /></span>
                                    </div>
                                    <input type="text" id="example-input1-group1" name="bank_name" className="form-control" placeholder="Bank Name" />
                                </div>
                            </div>
                            <div className="col-md-4">
                                <select className="form-control">
                                    <option value>Country</option>
                                    <option value={1}>Indonesia</option>
                                    <option value={2}>Singapore</option>
                                    <option value={3}>Malaysia</option>
                                    <option value={4}>Thailand</option>
                                </select>
                            </div>
                            <div className="col-md-4">
                                <input type="text" placeholder="Swift Code" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-user" /></span>
                                    </div>
                                    <input type="text" id="example-input2-group2" name="account_holder_name" className="form-control" placeholder="Account Holder Name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <input type="text" placeholder="Account Number" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <button className="btn btn-primary btn-sm px-4 mt-3 float-right mb-0">Save Changes</button>
                            </div>
                        </div>
                    </form>
                    <p />
                </div>
            </div>
        </div>
    )
}

export const DropdownCreditCard = () => {

}

export const DropdownCryptoDigitalAsset = () => {

}