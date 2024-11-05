import { useNavigate, useParams } from "react-router-dom";
import Header from "../../layout/header";
import NavBar from "../../layout/navbar";
import ProductService from "../../service";
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import $ from 'jquery';
import { NumericFormat } from "react-number-format";

const EditProduct = () => {

    const param = useParams();
    const navigate = useNavigate();
    const [value, setValue] = useState('');
    const [valueQuantity, setValueQuantity] = useState('');

    const handleValueChange = (values) => {
        // Lấy giá trị đã được định dạng
        setValue(values.value);
        formik.setFieldValue("price",values.value)
    };

    const [product, setProduct] = useState({
        name: "",
        price: 0,
        quantity: 0,
        image: ""
    })

    const getProductById = async () => {
        let res = await ProductService.productDetail(param.id);
        if (res.status === 200) {
            setProduct(res.data);
            setValue(res.data.price);
            setValueQuantity(res.data.quantity)
        }
    }

    const formik = useFormik({
        initialValues: product,
        validationSchema: Yup.object().shape({
            name: Yup.string().required('Tên sản phẩm không được bỏ trống'),
            price: Yup.number().required('Giá sản phẩm không được bỏ trống'),
            quantity: Yup.number().required('Sô lượng sản phẩm không được bỏ trống'),
            image: Yup.string()
        }),
        enableReinitialize: true,
        onSubmit: async data => {
            console.log("Data add: ", data);

            let res = await ProductService.updateProduct(param.id, data);
            if (res.status === 200) {
                navigate('/admin');
                alert('chỉnh sửa sản phẩm thành công')
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

    useEffect(() => {
        getProductById();
    }, []);

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
                            {
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
                            }
                                <form onSubmit={formik.handleSubmit}>

                                    <div class="mb-3">
                                        <label class="form-label">Product Name:</label>
                                        <input type="text" class="form-control" name="name" placeholder="Product name" defaultValue={product.name} onChange={formik.handleChange} />

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
                                            <input type="number" class="form-control" name="quantity" placeholder="Quantity" defaultValue={valueQuantity} onChange={formik.handleChange} />

                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label w-100">Image:</label>
                                        <input type="file" name="file" id="file" onChange={(e) => getBase64(e)} />
                                        <img id="blah" src={product.image} alt="avt" className="profileviewImage mt-2 mb-2" />
                                        
                                    </div>
                                    {/* <img src={{imageProduct}} width="100px" height="100px" />  */}
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </main>
            </div >
        </div >
    )
}

export default EditProduct;