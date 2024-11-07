import Product from "./product";
import './index.css'

import { useEffect, useState } from "react";
import ProductService from "../service/index";
import { NumericFormat } from "react-number-format";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Home = () => {

    const [product, setProduct] = useState([]);

    const [value, setValue] = useState('');
    const [productName, setproductName] = useState('');
    const [change, setChange] = useState(0);

    const [total, setTotal] = useState(0);
    // const [change, setChange] = useState(null);
    const [bill, setBill] = useState(null);

    const validNotes = [10000, 20000, 50000, 100000, 200000];

    const handleValueChange = (values) => {
        // Lấy giá trị đã được định dạng
        setValue(values.value);
    };


    const getAllProduct = async () => {
        const res = await ProductService.listProduct();
        if (res.status === 200) {
            setProduct(res.data);

        }
    }

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
        }).format(amount);
      };

    useEffect(() => {
        getAllProduct();
    }, [])

    const [itemPrice, setItemPrice] = useState(0)
    const [productId, setProductId] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [imgae, setImage] = useState('')
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
      };
    
      const closeModal = () => {
        setTotal(0);
        setproductName('');
        setIsOpen(false);
      };
    function purchaseItem(e) {
        e.preventDefault();
        const currentState = product.slice(0);
        const index = e.target.getAttribute('data-value');
        setProductId(currentState[index].id);
        setproductName(currentState[index].name);
        setItemPrice(currentState[index].price);
        setQuantity(currentState[index].quantity);
        setImage(currentState[index].image);
    }

    const handleTransaction = async () => {
        if (total >= itemPrice) {
            const newChange = total - itemPrice;
            let res = await ProductService.productDetail(productId);
            if (res.status === 200) {
                const dataUpadate = {
                name: res.data.name,
                price: res.data.price,
                image: res.data.image,
                quantity: quantity - 1
            }
            const response = await ProductService.updateProduct(productId, dataUpadate);
            if (response.status === 200) {
                setBill(`Bạn đã mua nước thành công với giá ${itemPrice} VND`);
                setChange(newChange);
                getAllProduct();
                openModal();
            }
            }
            
        } else {
            alert('Không đủ tiền để thực hiện giao dịch.');
        }
    };

    const handleAddMoney = () => {
        const parsedValue = parseInt(value, 10);
        if (validNotes.includes(parsedValue)) {
            setTotal((prevTotal) => prevTotal + parsedValue);
            setValue('');
            
        } else {
            alert('Vui lòng nhập mệnh giá hợp lệ: 10.000, 20.000, 50.000, 100.000 hoặc 200.000 VND.');
        }
    };

    return (
        <div className="App">
            <div className="container">
                <h1 className="text-center">Vending machine app</h1>
                <div className="alert alert-info text-center" role="alert">
                    <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Add virtual money, purchase by clicking on item - and have fun!</div>
                <Product items={product} purchaseItem={purchaseItem} />
                <div className="row text-center p-relative mt-4">
                    <h3>Enter price:</h3>
                    <div style={{ marginBottom: '20px' }}>
                        <NumericFormat
                            value={value}
                            onValueChange={handleValueChange}
                            prefix="₫"                 // Tiền tố là VNĐ
                            thousandSeparator={true}  // Ngăn cách hàng nghìn
                            decimalScale={0}          // Không hiển thị số thập phân
                            fixedDecimalScale={false} // Không cần hiển thị số thập phân mặc định
                            allowNegative={false}     // Không cho phép nhập số âm
                        />
                        
                        {
                            productName || total ? <button onClick={handleTransaction} className="btn btn-success">
                            Get your {productName ? (productName).toLowerCase() : null} {productName && total ? 'and' : null } {total ? 'money' : null} 
                            </button> : <button className="btn btn-success" disabled>Get your money</button>  
                        }
                        <button onClick={handleAddMoney}>Add money</button>
                    </div>
                    <h2>Total amount entered: {formatCurrency(total)}</h2>
                    {/* <button onClick={handleTransaction}>Mua hàng</button>
                        {bill && <p>{bill}</p>} */}
                    {/* {change !== null && <p>Change: {change} VND</p>} */}

                </div>
            </div>
            <Modal
                isOpen={isOpen}
                onRequestClose={closeModal}
                contentLabel="Bill"
                style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                },
                }}
            >
                <h2>Bill</h2>
                <table id="datatables-fixed-header" className="table table-striped dataTable no-footer">
                    <thead>
                        <th  style={{ width: "97.7875px" }}>Product Id</th>
                        <th style={{ width: "97.7875px" }}>Name</th>
                        <th style={{ width: "97.7875px" }} >Price</th>
                        <th style={{ width: "55.825px" }}>Quantity</th>
                        <th style={{ width: "150px", textAlign: 'center' }}>Image</th>
                    </thead>
                    <tbody>
                        <td>{productId}</td>
                        <td>{productName}</td>
                        <td>{itemPrice}</td>
                        <td>{quantity}</td>
                        <td><img src={imgae}></img></td>
                    </tbody>
                </table>
                <p><strong>Total amount entered:</strong> {formatCurrency(total)}</p>
                <p><strong>Change:</strong> {formatCurrency(change)}</p>
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>

    )
}

export default Home;