import { Outlet } from "react-router-dom";

const about = () => {
    return(
        <div className="app">
            about
            <Outlet></Outlet>
        </div>
    )
}

export default about;