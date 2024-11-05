const BtnSent = (props) => {
    const {lastPurchased, money} = props; 
		return (
			lastPurchased || money ? <button  className="btn btn-success">
				Get your {lastPurchased ? (lastPurchased).toLowerCase() : null} {lastPurchased && money ? 'and' : null } {money ? 'money' : null} 
			</button> : <button className="btn btn-success" disabled>Get your money</button>  
		)
}

export default BtnSent;