import { useState } from "react";
import Header from "../../layout/header";
import NavBar from "../../layout/navbar";
import { useFormik } from "formik";
import $ from 'jquery';
import * as Yup from "yup";
import ProductService from "../../service";
import { useNavigate } from "react-router-dom";
import { NumericFormat } from "react-number-format";

const initialValues = {
    name: "",
    price: 0,
    quantity: 0,
    image: ""
}

const CreateProduct = () => {

    // const [errorsValidate, setErrorsValidate] = useState([]);
    // const [error, setError] = useState(null);
    const [value, setValue] = useState('');

    const handleValueChange = (values) => {
        // Lấy giá trị đã được định dạng
        setValue(values.value);
        formik.setFieldValue("price",values.value)
    };

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues,
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Tên sản phẩm không được bỏ trống'),
            price: Yup.number().required('Giá sản phẩm không được bỏ trống'),
            quantity: Yup.number().required('Sô lượng sản phẩm không được bỏ trống'),
            image: Yup.string().required('Hình ảnh không được bỏ trống')
        }),
        onSubmit: async data => {
            let res = await ProductService.addProduct(data);
            if (res.status === 200) {
                navigate('/admin');
                alert('Insert product successfull!')
            }
        }
    })

    function getBase64(event) {
        let file = event.target.files[0];
        var reader = new FileReader();
        reader.readAsDataURL(file);
        if (file.size < 10000000) {
            if (file.type === "image/jpeg" || file.type === "image/jpg" || file.type === "image/png" || file.type === "image/gif" || file.type === "svg" || file.type === "image/tiff" || file.type === "image/bmp" || file.type === "image/webp") {
                reader.onload = (e) => {
                    let img = e.target.result;
                    formik.setFieldValue("image", img);
                }
            } else {
                $.alert({
                    title: 'Thông báo',
                    content: 'Định dạng ảnh không hợp lệ (vd: image.jpg, image.png, ...)'

                });
            }

        } else {
            $.alert({
                title: 'Thông báo',
                content: 'Size ảnh không được quá 10mb '

            });
        }
    }


    return (
        <div class="wrapper">
            <NavBar />
            <div class="main">
                <Header />
                <main class="content">
                    <div class="container-fluid p-0">

                        <div class="mb-3">
                            <h1 class="h3 d-inline align-middle">Insert product</h1>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                            {/* {
                                ((formik.errors.name && formik.touched.name) || 
                                    (formik.errors.price && formik.touched.price) || 
                                    (formik.errors.quantity && formik.touched.quantity) || 
                                    (formik.errors.image && formik.touched.image))&&
                                <div className="alert alert-warning" role="alert">
                                    <p className="m-0 p-0">{formik.errors.name}</p>
                                    <p className="m-0 p-0">{formik.errors.price}</p>
                                    <p className="m-0 p-0">{formik.errors.quantity}</p>
                                    <p className="m-0 p-0">{formik.errors.image}</p>
                                </div>
                            } */}

                                <form onSubmit={formik.handleSubmit}>

                                    <div class="mb-3">
                                        <label class="form-label">Product Name:</label>
                                        <input type="text" class="form-control" name="name" placeholder="Product name" onChange={formik.handleChange} />

                                    </div>
                                    <div class="row">
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label" for="inputEmail4">Price:</label>
                                            {/* <input type="number" class="form-control" name="price" placeholder="Price" onChange={formik.handleChange} /> */}
                                            <NumericFormat
                                                class="form-control"
                                                name="price" 
                                                placeholder="Price"
                                                value={value}
                                                onValueChange={handleValueChange}
                                                prefix="₫"                 // Tiền tố là VNĐ
                                                thousandSeparator={true}  // Ngăn cách hàng nghìn
                                                decimalScale={0}          // Không hiển thị số thập phân
                                                fixedDecimalScale={false} // Không cần hiển thị số thập phân mặc định
                                                allowNegative={false}
                                            />
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label" for="inputPassword4">Quantity:</label>
                                            <input type="number" class="form-control" name="quantity" placeholder="Quantity" onChange={formik.handleChange} />

                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label w-100">Image:</label>
                                        <input type="file" name="file" id="file" onChange={(e) => getBase64(e)} />
                                        {
                                            formik.values.image &&
                                            <img id="blah" src={formik.values.image} alt="avt" className="profileviewImage mt-2 mb-2" />
                                        }
                                        
                                    </div>
                                    {/* <img src={{imageProduct}} width="100px" height="100px" />  */}
                                    <button type="submit" class="btn btn-primary">Save</button>
                                    <button type="button" class="btn btn-danger m-4" onClick={() => navigate('/admin')}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </main>
            </div >
        </div >
    )
}

export default CreateProduct;