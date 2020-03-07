import React from 'react';
export default function EditProfileForm (props) {

  return (
    <React.StrictMode>
      <div className="page-wrapper">
          <div className="page-content">
              <div className="container-fluid">
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
                              <h4 className="page-title">Edit Profile</h4>
                          </div>{/*end page-title-box*/}
                      </div>{/*end col*/}
                  </div>{/*end row*/}


                  <div className="row">
                      <div className="col-12">
                          <div className="row">
                              <div className="col-lg-12" style={{margin: 0, padding: '8px'}}>
                                  <div className="card">
                                      <div className="card-body col-lg-8 mx-auto">
                                          <h3 className="mb-4" align="center">Edit Profile</h3>

                                          <form className="card-box" onSubmit={props.Kirim}>
                                              <div className="form-group row">
                                                  <div className="col-md-12">
                                                      <input type="file" name="files" id="input-file-now-custom-1" className="dropify" data-default-file="../assets/images/no_picture.jpg" onChange={props.Save} />
                                                  </div>
                                              </div>
                                              <div className="form-group row">
                                                  <div className="col-md-12">
                                                      <div className="input-group">
                                                          <div className="input-group-prepend">
                                                              <span className="input-group-text"><i className="far fa-user" /></span>
                                                          </div>
                                                          <input type="text" id="example-input1-group1" name="name" className="form-control" placeholder="Full Name" onChange={props.Save} />
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="form-group row">
                                                  <div className="col-md-12">
                                                      <div className="input-group">
                                                          <div className="input-group-prepend">
                                                              <span className="input-group-text"><i className="far fa-envelope" /></span>
                                                          </div>
                                                          <input type="email" id="example-input2-group2" name="email" className="form-control" placeholder="Email" onChange={props.Save} />
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="form-group row">
                                                  <div className="col-md-12">
                                                      <select className="form-control" name="country" onChange={props.Save}>
                                                          <option value>Country</option>
                                                          <option value="Indonesia">Indonesia</option>
                                                          <option value="Singapore">Singapore</option>
                                                          <option value="Malaysia">Malaysia</option>
                                                          <option value="Thailand">Thailand</option>
                                                      </select>
                                                  </div>
                                              </div>
                                              <div className="form-group row">
                                                  <div className="col-md-12">
                                                      <button type="submit" className="btn btn-primary btn-sm px-4 mt-3 float-right mb-0">Save Changes</button>
                                                  </div>
                                              </div>
                                          </form>
                                      </div>
                                  </div>
                              </div> {/*end col*/}
                          </div>{/*end row*/}
                      </div>{/*end col*/}
                  </div>{/*end row*/}
              </div>{/* container */}
          </div>
      </div>
    </React.StrictMode>
  );

};
