import { useParams } from "react-router-dom";

const Detail = (props) => {
    const shoes = props.shoes;
    let {id} = useParams();
    // url로 전달받은 id와 data내의 id와 같아야 물건 sorting되었을때도 같다.
    let getUrl = shoes.find(v => v.id === Number(id));
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <img src={`https://codingapple1.github.io/shop/shoes${getUrl.id + 1}.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{getUrl.title}</h4>
                    <p>{getUrl.content}</p>
                    <p>{getUrl.price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                </div>
            </div>
        </div> 
    )
}

export default Detail;