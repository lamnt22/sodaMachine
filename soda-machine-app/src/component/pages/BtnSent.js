const BtnSent = (props) => {
    const {lastPurchased, money} = props; 
		return (
			lastPurchased || money > 0 ? <button  className="btn btn-success" onClick={() => console.log(money)}>
				Get your {lastPurchased ? (lastPurchased).toLowerCase() : null} {lastPurchased && money > 0 ? 'and' : null } {money > 0 ? 'money' : null} 
			</button> : <button className="btn btn-success" disabled>Get your money</button>  
		)
}

export default BtnSent;