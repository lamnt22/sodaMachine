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

const Home = () => {
    
    let items = [
        {itemId: "a01", itemName: "Twix", itemPrice: 1, itemCount: 2, imgUrl: twix},
        {itemId: "a02", itemName: "Coke", itemPrice: 2.4, itemCount: 3, imgUrl: coke},
        {itemId: "a03", itemName: "Chocolate", itemPrice: 1.5, itemCount: 4, imgUrl: chocolate},
        {itemId: "a04", itemName: "Doritos", itemPrice: 1.40, itemCount: 1, imgUrl: doritos},
        {itemId: "b04", itemName: "Peanuts", itemPrice: 1, itemCount: 1, imgUrl: peanuts},
        {itemId: "b01", itemName: "Water", itemPrice: 0.95, itemCount: 2, imgUrl: water},
        {itemId: "b02", itemName: "Chewing gum", itemPrice: 1.25, itemCount: 3, imgUrl: chewingGum},
        {itemId: "b03", itemName: "Chips", itemPrice: 1.30, itemCount: 4, imgUrl: chips}
      ];
    return (
        <div className="App">
            <div className="container">
                <h1 className="text-center">Vending machine app</h1>
                <div className="alert alert-info text-center" role="alert">
                    <span className="glyphicon glyphicon-info-sign" aria-hidden="true"></span> Add virtual money, purchase by clicking on item - and have fun!</div>
                    <Product items={items}/>
                    <div className="row text-center p-relative mt-4">
                        <div className="coins"></div>
                        <NumberInput label={"Nhập giá tiền"} />
                        <BtnSent money={0} lastPurchased={""}/>
                    </div>
            </div>
        </div>

    )
}

export default Home;