import { useEffect } from "react";


const Watch = () => {
    let watched_items = JSON.parse(localStorage.getItem('watched'));
	
    useEffect(() => {
        if(watched_items === null){
            localStorage.setItem('watched', JSON.stringify([]))
        }
	    else {
            watched_items = JSON.parse(localStorage.getItem('watched'))
        };
    })
    return(
        <div className='watched'>
            <h2>최근 본 상품</h2>
            <ul>
                { watched_items && watched_items.map((v ,i) => {
                    return(
                        <li key={i}>{ v }</li>
                    )
                }) }
            </ul>
        </div>
    )
}

export default Watch;