const Item = (props) => {
    const { purchaseItem, item, i } = props;
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
          style: 'currency',
          currency: 'VND',
        }).format(amount);
      };
    return (
        <div className="col-xs-6 col-sm-3">
            {item.quantity > 0 ?
                <div className="items-left bg-success">Available items: {item.quantity}</div> :
                <div className="items-left bg-danger">Out of stock</div>
            }
            <img className="img-responsive center-block img-max-150" src={item.image} alt=".." />
            <div className="item bg-warning">{item.name}</div>
            <div className="item-price bg-info">Price: {formatCurrency(item.price)}</div>
            {item.quantity > 0 &&
                <a onClick={purchaseItem} data-value={i} className="btn-purchase" href="#"></a>
            }
            
        </div>
    )
}

export default Item;