const ItemList = (props) => {
	const shoes = props.shoes;
	return(
		<div className="col-md-4">
				<img src={shoes.img} width="80%"/>
				<h4>{shoes.title}</h4>
				<p>{shoes.price}</p>
		</div>
	)
}

export default ItemList;