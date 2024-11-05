import React from "react";
import './app.css'
import { Link } from "react-router-dom";

const Login = () => {

    return (
        <main className="d-flex w-100">
            <div className="container d-flex flex-column">
                <div className="row vh-100">
                    <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                        <div className="d-table-cell align-middle">

                            <div className="text-center mt-4">
                                <h1 className="h2">Welcome to my admin</h1>
                                <p className="lead">
                                    Sign in to your account to continue
                                </p>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                    <div className="m-sm-4">
                                        <div className="text-center">
                                            <img src="assets/img/avatars/images.jpg" alt="Charles Hall"
                                                className="img-fluid rounded-circle" width="132" height="132" />
                                        </div>
                                        <form className="form-signin" enctype="multipart/form-data application/x-www-form-urlencoded">
                                            <div className="alert alert-danger">
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Email</label>
                                                <input className="form-control form-control-lg" type="email"
                                                    placeholder="User Name"
                                                    required />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">Password</label>
                                                <input className="form-control form-control-lg" type="password"
                                                    placeholder="Password"
                                                    required />
                                            </div>
                                            <div className="mb-3">
                                                <h4>
                                                    <Link to={"#"}>Create account</Link>
                                                </h4>
                                            </div>
                                            <div className="text-center mt-3">
                                                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                                                {/* <!-- <button type="submit" className="btn btn-lg btn-primary">Sign in</button> --> */}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </main >
    )
}

export default Login;