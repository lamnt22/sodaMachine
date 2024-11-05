import Item from "./item";

const Product = (props) => {
    const { items } = props;
    const allItems = items.map((item, i) => {
        return (
            <Item item={item} key={item.itemId} i={i} />
        )
    })
    return (
        <div className="row items-container mt-4">
            {allItems}
        </div>
    )
}

export default Product;