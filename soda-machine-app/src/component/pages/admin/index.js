import { Link } from "react-router-dom";
import Header from "../../layout/header";
import NavBar from "../../layout/navbar";

const Admin = () => {
    return (
        <div class="wrapper">
            <NavBar />
            <div class="main">
                <Header />
                <main class="content">
                    <div class="container-fluid p-0">

                        <div class="mb-3">
                            <h1 class="h3 d-inline align-middle">Product</h1>
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-body">
                                        <div id="datatables-fixed-header_wrapper" class="dataTables_wrapper dt-bootstrap5 no-footer">
                                            <div class="row">
                                                <div class="col-sm-12 col-md-6">
                                                    <div class="dataTables_length" id="datatables-fixed-header_length">
                                                        <a routerLink="/admin/productCreate" class="btn btn-primary">Insert product</a>
                                                    </div></div>
                                                <div class="col-sm-12 col-md-6">
                                                    <div id="datatables-fixed-header_filter" class="dataTables_filter">
                                                        <label>Search:
                                                            <input type="search" class="form-control form-control-sm" placeholder="" aria-controls="datatables-fixed-header" />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-sm-12">
                                                    <br />

                                                        <table id="datatables-fixed-header" class="table table-striped dataTable no-footer" style={{ width: "100%" }} aria-describedby="datatables-fixed-header_info"><thead>
                                                            <tr>
                                                                <th class="sorting sorting_asc" tabindex="0" rowspan="1" colspan="1" aria-label="Name: activate to sort column descending" style={{ width: "171.288px" }}>Product Id</th>
                                                                <th tabindex="0" rowspan="1" colspan="1" style={{ width: "160.875px" }}>Name</th>
                                                                <th tabindex="0" rowspan="1" colspan="1" style={{ width: "55.825px" }} >Price</th>
                                                                <th tabindex="0" rowspan="1" colspan="1" style={{ width: "97.7875px" }}>Image</th>
                                                                <th tabindex="0" rowspan="1" colspan="1" style={{ width: "97.7875px" }} >Status</th>
                                                                <th>#</th>
                                                            </tr>
                                                        </thead>

                                                            <tbody>
                                                                <tr >
                                                                    <td><a class="btn btn-sm btn-success"><i class="fa fa-pen-to-square"></i></a></td>
                                                                    <td><a href="javascript:void()" onclick="return confirm('Ban co chac muon xoa ko?')" class="btn btn-sm btn-danger"><i class="fa fa-trash"></i></a></td>
                                                                </tr>
                                                            </tbody>
                                                        </table></div></div><div class="row">
                                                <div class="col-sm-12 col-md-5">
                                                    <div class="dataTables_info" id="datatables-fixed-header_info" role="status" aria-live="polite">Showing 1 to 25 of 57 entries</div>
                                                </div>
                                                <div class="d-flex justify-content-center">
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>

                </main>
            </div >
        </div >
    )
}

export default Admin;