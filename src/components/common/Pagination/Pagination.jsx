import React, {useEffect} from "react";
import style from './Pagination.module.css';


const Pagination = ({totalItemsCount, pageSize, currentPage, onPageChanged, portionSize}) => {
    let pagesCount = Math.ceil(totalItemsCount/pageSize);
    let pages = [];
    for(let i=1; i<=pagesCount; i++) {
        pages.push(i);
    }

    useEffect(() => setPortionNumber(Math.ceil(currentPage/portionSize)), [currentPage, portionSize]);

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = React.useState(1);
    let letPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rigthPortionPageNumber = portionNumber * portionSize; 

    return (
        <div className={style.pagination}>
            { portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber-1)}}>prev</button> }
            {
                pages
                .filter(p => p >= letPortionPageNumber && p<= rigthPortionPageNumber)
                .map( (p) => {
                    return <span key={p} className={currentPage === p ? style.selectedPage + " " + style.pageNumber : style.pageNumber}
                    onClick={ (e) => {onPageChanged(p)} }>{p}</span>
                })
            }
            { portionCount > portionNumber && <button onClick={() => { setPortionNumber(portionNumber+1)}}>next</button>}
        </div>
        
    )
}

export default Pagination;