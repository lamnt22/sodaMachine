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
            name: Yup.string().required('Product name cannot be left blank'),
            price: Yup.number().required('Product price cannot be left blank').moreThan(1000, "Price must be greater than 1000"),
            quantity: Yup.number().required('Product quantity cannot be left blank').moreThan(0, "Price must be greater than 0"),
            image: Yup.string().required('Image cannot be left blank')
        }),
        enableReinitialize: true,
        onSubmit: async data => {
            let res = await ProductService.updateProduct(param.id, data);
            if (res.status === 200) {
                navigate('/admin');
                alert('Edit product successfull')
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
                            <h1 class="h3 d-inline align-middle">Edit product</h1>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-body">
                                <form onSubmit={formik.handleSubmit}>

                                    <div class="mb-3">
                                        <label class="form-label">Product Name:</label>
                                        <input type="text" class="form-control" name="name" placeholder="Product name" defaultValue={product.name} onChange={formik.handleChange} />
                                        {
                                            formik.errors.name && formik.touched.name &&
                                            <p className="text-danger">{formik.errors.name}</p>
                                        }
                                    </div>
                                    <div class="row">
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label" for="inputEmail4">Price:</label>
                                            <NumericFormat
                                                class="form-control"
                                                name="price"
                                                placeholder="Price"
                                                value={value}
                                                onValueChange={handleValueChange}
                                                prefix="₫"                
                                                thousandSeparator={true}  
                                                decimalScale={0}         
                                                fixedDecimalScale={false}
                                                allowNegative={false}
                                            />
                                             {
                                                formik.errors.price && formik.touched.price &&
                                                <p className="text-danger">{formik.errors.price}</p>
                                            }
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label" for="inputPassword4">Quantity:</label>
                                            <input type="number" class="form-control" name="quantity" placeholder="Quantity" defaultValue={valueQuantity} onChange={formik.handleChange} />
                                            {
                                                formik.errors.quantity && formik.touched.quantity &&
                                                <p className="text-danger">{formik.errors.quantity}</p>
                                            }
                                        </div>
                                    </div>
                                    <div class="mb-3">
                                        <label class="form-label w-100">Image:</label>
                                        <input type="file" name="file" id="file" onChange={(e) => getBase64(e)} />
                                        <img id="blah" src={product.image ? product.image : formik.values.image} alt="avt" className="profileviewImage mt-2 mb-2" />
                                        {
                                            formik.errors.image && formik.touched.image &&
                                            <p className="text-danger">{formik.errors.image}</p>
                                        }
                                    </div>
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

export default EditProduct;