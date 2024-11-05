import React from "react";
import './app.css'

const SignUp = () => {
    return (
        <main class="d-flex w-100">
            <div class="container d-flex flex-column">
                <div class="row vh-100">
                    <div class="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                        <div class="d-table-cell align-middle">

                            <div class="text-center mt-4">
                                <h1 class="h2">Register to your Account</h1>
                                {/* <!-- <p class="lead">
                                    Start creating the best possible user experience for you customers.
                                </p> --> */}
                            </div>

                            <div class="card mt-4">
                                <div class="card-body">
                                    <div class="m-sm-4">
                                        <form class="form-signin" enctype="text/plain">
                                            <div class="mb-3">
                                                <label class="form-label">User name: </label>
                                                <input class="form-control form-control-lg" type="text" id="username" name="username" placeholder="User Name" required minlength="5" autofocus />
                                                
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Email</label>
                                                <input class="form-control form-control-lg" type="email" id="email" name="email" placeholder="Enter your email" required email />
                                                
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Password</label>
                                                <input class="form-control form-control-lg" type="password" id="password" name="password" placeholder="Password" required />
                                                
                                            </div>
                                            <div class="mb-3">
                                                <label class="form-label">Confirm Password</label>
                                                <input class="form-control form-control-lg" type="password" id="confirmPassword" name="confirmPassword" placeholder="confirmPassword required" />
                                                
                                            </div>
                                            <div class="text-center mt-3">
                                                <button class="btn btn-lg btn-primary btn-block" type="submit" >Register</button>
                                                {/* <!-- <button type="submit" class="btn btn-lg btn-primary">Sign up</button> --> */}
                                            </div>
                                        </form>
                                    </div >
                                </div >
                            </div >

                        </div >
                    </div >
                </div >
            </div >
        </main >
    )
}

export default SignUp;