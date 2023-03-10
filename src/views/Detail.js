import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap"
import { addItem } from "../store"
import { useDispatch } from "react-redux";
// import { Context1 } from "./../App"
// import styled from 'styled-components';

// let YellowBtn = styled.button`
//     background : ${props => props.bg};
//     color : ${props => props.bg == 'blue' ? 'white' : 'black'};
//     padding : 10px;
// `;

const Detail = ({shoes}) => {
    let dispatch = useDispatch();
    // let {listItem} = useContext(Context1); //Context 사용

    let {id} = useParams();
    // url로 전달받은 id와 data내의 id와 같아야 물건 sorting되었을때도 같다.
    let getUrl = shoes.find(v => v.id === Number(id));
    let [alertEvent, setAlertEvent] = useState(true);
    let [tabNum, setTabNum] = useState(0);
    let [pageTran,setPageTran] = useState('');
    

    // mount, update시 실행 (렌더링 후 실행)
    useEffect(()=> {
        let timer = setTimeout(() => setAlertEvent(false) , 600000);
        
        return () =>{
            clearTimeout(timer);  // -> useEffect 동작 전에 실행되는 함수 안넣으면 타이머가 너무 많이 생길 수 있다.
        }
    }, []) //dependency가 비어있을땐 mount 시에만 실행된다 (state가 들어있으면 해당 state update시에도 실행)

    useEffect(() => {
        let pageTransform = setTimeout(() => setPageTran('end'), 100)
        
        return() => {
            clearTimeout(pageTransform)
            setPageTran('')
        }
    },[])

    useEffect(() => {
        let get_watched = localStorage.getItem('watched');
        
        get_watched === null ? get_watched = [] : get_watched = JSON.parse(get_watched);
        get_watched.push(getUrl.title);
        get_watched = [...new Set(get_watched)];
        localStorage.setItem('watched', JSON.stringify(get_watched));

    },[])

    return(
        <div className={`container start ${pageTran}`}>
            {
                alertEvent ? <div className="alert alert-warning">10분이내 구매시 할인</div> : null
            }
            <div className="row">
                <div className="col-md-6">
                    <img src={getUrl.id + 1 < 8 ? `https://codingapple1.github.io/shop/shoes${getUrl.id + 1}.jpg` : `https://codingapple1.github.io/shop/shoes5.jpg`} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{getUrl.title}</h4>
                    <p>{getUrl.content}</p>
                    <p>{getUrl.price}</p>
                    <button className="btn btn-danger" onClick={() => {
                        dispatch(addItem(getUrl));
                    }}>주문하기</button> 
                </div>
            </div>

            <Nav variant="tabs"  defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={()=> setTabNum(0)}>버튼0</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={()=> setTabNum(1)}>버튼1</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={()=> setTabNum(2)}>버튼2</Nav.Link>
                </Nav.Item>

            </Nav>

            <TabCont tabNumber = {tabNum}></TabCont>

        </div> 
    )
}

const TabCont = ({tabNumber}) => {
    let [fade, setFade] = useState('');
    useEffect(() => {
        let fade_event = setTimeout(() => {setFade('end')}, 100)
        return ()=>{
            clearTimeout(fade_event)
            setFade('')
        }
    }, [tabNumber])
    return (
        <div className = {'start ' + fade}>
            {[<div>내용0</div>, <div>내용1</div>,<div>내용2</div>][tabNumber]}
        </div>
        )
}
export default Detail;