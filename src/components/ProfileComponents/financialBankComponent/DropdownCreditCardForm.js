import React from "react";

export default function DropdownCreditCardForm(params) {

    function save(event) {
        
    }

    function Kirim(event) {
        event.preventDefault();

    }
    return (
        <form method="post" className="card-box bill-form">
                        <div className="card-wrapper mb-4" />
                        <div className="form-group row">
                            <div className="col-md-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-user" /></span>
                                    </div>
                                    <input type="text" id="example-input1-group1" name="name" className="form-control" placeholder="Name" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="far fa-user" /></span>
                                    </div>
                                    <input type="text" id="example-input2-group2" name="surname" className="form-control" placeholder="Surname" />
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <div className="input-group">
                                    <input type="email" id="example-input3-group3" name="credit_card" className="form-control" placeholder="Credit Card Number" />
                                    <div className="input-group-append">
                                        <span className="input-group-text"><i className="fab fa-cc-visa" /></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-6">
                                <input type="text" placeholder="Exp Date" className="form-control" />
                            </div>
                            <div className="col-md-6">
                                <input type="number" placeholder="CVC" className="form-control" name="cvc" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <div className="col-md-12">
                                <button className="btn btn-primary btn-sm px-4 float-right mb-0" onClick={Kirim}>Save Changes</button>
                            </div>
                        </div>
                    </form>
    );
}