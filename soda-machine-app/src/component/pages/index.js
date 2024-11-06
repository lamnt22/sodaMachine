import Product from "./product";
import './index.css'

import logo from '../img/react.png';
import twix from '../img/twix.jpg';
import coke from '../img/coca-cola.jpg';
import chocolate from '../img/chocolate.jpg';
import doritos from '../img/doritos.jpg';
import peanuts from '../img/peanuts.jpg';
import water from '../img/water.gif';
import chewingGum from '../img/chewing-gum.jpg';
import chips from '../img/chips.jpg';
import NumberInput from "./numberInput";
import BtnSent from "./BtnSent";
import { useEffect, useState } from "react";
import ProductService from "../service/index";
import { NumericFormat } from "react-number-format";

const Home = () => {

    const [product, setProduct] = useState([]);

    const [value, setValue] = useState('');
    const [productName, setproductName] = useState('');
    const [change, setChange] = useState(0);

    const handleValueChange = (values) => {
        // Lấy giá trị đã được định dạng
        setValue(values.value);
    };


    const getAllProduct = async () => {
        const res = await ProductService.listProduct();
        if(res.status === 200){
            setProduct(res.data);

        }
    }
    
    let items = [
        {itemId: "a01", itemName: "Twix", itemPrice: 10000, itemCount: 2, imgUrl: twix},
        {itemId: "a02", itemName: "Coke", itemPrice: 20000, itemCount: 3, imgUrl: coke},
        {itemId: "a03", itemName: "Chocolate", itemPrice: 100000, itemCount: 4, imgUrl: chocolate},
        {itemId: "a04", itemName: "Doritos", itemPrice: 100000, itemCount: 1, imgUrl: doritos},
        {itemId: "b04", itemName: "Peanuts", itemPrice: 10000, itemCount: 1, imgUrl: peanuts},
        {itemId: "b01", itemName: "Water", itemPrice: 50000, itemCount: 2, imgUrl: water},
        {itemId: "b02", itemName: "Chewing gum", itemPrice: 100000, itemCount: 3, imgUrl: chewingGum},
        {itemId: "b03", itemName: "Chips", itemPrice: 10000, itemCount: 4, imgUrl: chips}
      ];

    useEffect(() => {
        // getAllProduct();
    })

    function purchaseItem(e){
        e.preventDefault();
        const currentState = items.slice(0);
        const isPurchaseAlowed = true;
        let currentMoney = Number.parseInt(value);
        const justPurchased = "";
        const index = e.target.getAttribute('data-value');
        const howMany = currentState[index].itemCount;
        const whichItem = currentState[index].itemName;
        const itemPrice = currentState[index].itemPrice;
    
        if (howMany > 0 && isPurchaseAlowed && itemPrice > currentMoney) {
          alert("It looks like you don't have enough money. Insert some coins.");
        } 
    
        if(!isPurchaseAlowed){
          alert(`One item at a time please. Collect your ${justPurchased.toLowerCase()} first, and then make new purchase.`);
        }
    
         if( isPurchaseAlowed && howMany < 1){
          alert("Out of stock. Would you like something else?");
        }
    
        if(isPurchaseAlowed && howMany > 0 && currentState[index].itemCount > 0 && itemPrice <= currentMoney){       
          currentState[index].itemCount -= 1;    
          currentMoney -= itemPrice;
          setChange(currentMoney -= itemPrice)
          setproductName(whichItem);
        // //   this.setState({
        //     items= currentState,
        //     money= parseFloat(currentMoney.toFixed(2), 10),
        //     isPurchaseAlowed= !isPurchaseAlowed,
            // justPurchased= whichItem 
        //   });
        }
      }
    return (
        <div className="App">
            <div className="container">
                <h1 className="text-center">Vending machine app</h1>
                <div className="alert alert-info text-center" role="alert">
                    <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Add virtual money, purchase by clicking on item - and have fun!</div>
                    <Product items={items} purchaseItem={purchaseItem}/>
                    <div className="row text-center p-relative mt-4">
                        <h3>Nhập giá tiền:</h3>
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
                            <BtnSent money={change} lastPurchased={productName}/>
                        </div>
                        
                       {/* <BtnSent money={0} lastPurchased={""}/> */}
                    </div>
                    {/* <BtnSent money={0} lastPurchased={""}/> */}
            </div>
        </div>

    )
}

export default Home;