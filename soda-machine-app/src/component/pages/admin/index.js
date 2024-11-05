import { Link, useNavigate } from "react-router-dom";
import Header from "../../layout/header";
import NavBar from "../../layout/navbar";
import { useEffect, useState } from "react";
import ProductService from "../../service";

const Admin = () => {

    const [product, setProduct] = useState([]);
    const navigate = useNavigate();
    
    const getAllProduct = async () => {
        const res = await ProductService.listProduct();
        if(res.status === 200){
            setProduct(res.data);

        }
    }

    
    const deleteProduct = async (id) => {
        alert("Bạn có chắc muốn xóa không?");
        await ProductService.deleteProduct(id);
    }

    const searchDataProduct = async (keyword) => {
        
        const res = await ProductService.searchProduct(keyword);
        if(res.status === 200){
            setProduct(res.data);
        }
    }

    useEffect(() => {
        getAllProduct();
    }, []);

    return (
        <div className="wrapper">
            <NavBar />
            <div className="main">
                <Header />
                <main className="content">
                    <div className="container-fluid p-0">

                        <div className="mb-3">
                            <h1 className="h3 d-inline align-middle">Product</h1>
                        </div>

                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div id="datatables-fixed-header_wrapper" className="dataTables_wrapper dt-bootstrap5 no-footer">
                                            <div className="row">
                                                <div className="col-sm-12 col-md-6">
                                                    <div className="dataTables_length" id="datatables-fixed-header_length">
                                                        <Link to="/admin/create" className="btn btn-primary">Insert product</Link>
                                                    </div></div>
                                                <div className="col-sm-12 col-md-6">
                                                    <div id="datatables-fixed-header_filter" className="dataTables_filter">
                                                        <label>Search:
                                                            <input type="search" className="form-control form-control-sm" placeholder="" aria-controls="datatables-fixed-header" onChange={(e) =>  {searchDataProduct(e.target.value) }} />
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm-12">
                                                    <br />

                                                        <table id="datatables-fixed-header" className="table table-striped dataTable no-footer" style={{ width: "100%" }} aria-describedby="datatables-fixed-header_info">
                                                            <thead>
                                                                <tr>
                                                                    <th className="sorting sorting_asc" rowSpan="1" colSpan="1" style={{ width: "97.7875px" }}>Product Id</th>
                                                                    <th rowSpan="1" colSpan="1" style={{ width: "171.288px" }}>Name</th>
                                                                    <th rowSpan="1" colSpan="1" style={{ width: "97.7875px" }} >Price</th>
                                                                    <th rowSpan="1" colSpan="1" style={{ width: "55.825px" }} >Quantity</th>
                                                                    <th rowSpan="1" colSpan="1" style={{ width: "150px" }}>Image</th>
                                                                    <th >#</th>
                                                                </tr>
                                                            </thead>

                                                            <tbody>
                                                                {
                                                                    product.map((pro, index) => {
                                                                        return (
                                                                            <tr key={pro.id}>
                                                                                <td className="text-center">{index + 1}</td>
                                                                                <td>{pro.name}</td>
                                                                                <td>{pro.price}</td>
                                                                                <td>{pro.quantity}</td>
                                                                                <td><img src={pro.image} width={150}></img></td>
                                                                                <td style={{width: 150}}><a onClick={() => navigate(`/admin/edit/${pro.id}`)}>Sửa</a></td>
                                                                                <td><a onClick={deleteProduct}>Xóa</a></td>
                                                                            </tr>
                                                                        )
                                                                    })
                                                                }
                                                            </tbody>
                                                        </table></div></div><div className="row">
                                                <div className="col-sm-12 col-md-5">
                                                    <div className="dataTables_info" id="datatables-fixed-header_info" role="status" aria-live="polite">Showing 1 to 25 of 57 entries</div>
                                                </div>
                                                <div className="d-flex justify-content-center">
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