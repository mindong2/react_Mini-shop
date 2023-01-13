import { Link } from "react-router-dom";

const ItemList = (props) => {
	const shoes = props.shoes;
	return(
		<div className="col-md-4" style={{cursor : "pointer"}}>
			<Link to={`/detail/${shoes.id}`} style={{color:"#000", textDecoration: "none"}}>
				<img src={shoes.img} width="80%" style={{userDrag:"none"}} />
				<h4>{shoes.title}</h4>
				<p>{shoes.price}</p>
			</Link>
		</div>
	)
}

export default ItemList;