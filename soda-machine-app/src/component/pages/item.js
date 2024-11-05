const Item = (props) => {
    const { item } = props;
    return (
        <div className="col-xs-6 col-sm-3">
            {item.quantity ?
                <div className="items-left bg-success">Available items: {item.quantity}</div> :
                <div className="items-left bg-danger">Out of stock</div>
            }
            <img className="img-responsive center-block img-max-150" src={item.image} alt=".." />
            <div className="item bg-warning">{item.name}</div>
            <div className="item-price bg-info">Price: đ{item.price}</div>
            {/* <a onClick={purchaseItem} data-value={i} className="btn-purchase" href="#"></a> */}
        </div>
    )
}

export default Item;