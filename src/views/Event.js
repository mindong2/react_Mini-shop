import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom";
const Event = () => {
    return(
        <div>
            <h1>오늘의 선물 받기</h1>
            <Link to="/event/one">첫번째 </Link> | 
            <Link to="/event/two"> 두번째</Link> 
            <Outlet></Outlet>
        </div>
    )
}

export default Event;