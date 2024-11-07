import Item from "./item";

const Product = (props) => {
    const { purchaseItem, items } = props;
    const allItems = items.map((item, i) => {
        return (
            <Item item={item} purchaseItem={purchaseItem} key={item.id} i={i} />
        )
    })
    return (
        <div className="row items-container mt-4">
            {allItems}
        </div>
    )
}

export default Product;