import { useEffect, useState } from "react";
import Quotes from "./Quotes";
import './styles.css';
import { getQuotes } from "./helper";
const limit = 5;


//use as <Pagination />
const Pagination = function () {

    const [quotesData, setQuotesData] = useState([]);

    const [currPageNumber, setCurrPageNumber] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    useEffect(() => {
        (async () => {
            const data = await getQuotes(currPageNumber, limit);
            setQuotesData(data.quotes);
            setTotalCount(data.total);
        })()

    }, [currPageNumber]);

    const doesNextPageExist = (num: number) => (currPageNumber + num) < (totalCount / limit);
    const doesPrevPageExist = (num: number) => (currPageNumber + num) > 0;




    //event Delegation
    const handlePageNumber = (event: any) => {
        const target = event.target;
        if (target.tagName === "BUTTON") {
            const splitted = target.id && target.id.split('-');
            const pageNum = splitted.length > 1 && splitted[1];
            setCurrPageNumber(parseInt(pageNum));
        }
    }

    return <div>
        <Quotes quotesData={quotesData} />
        <div className="page-actions" onClick={handlePageNumber}>
            <button type="submit" className="active-page" id={`btn-${currPageNumber - 1}`} onClick={() => { }} disabled={currPageNumber < 1}> Prev </button>


            ...

            <div>
                {
                    doesPrevPageExist(-2) && <button type="submit" id={`btn-${currPageNumber - 2}`} className="page-no-button"> {currPageNumber - 2} </button>

                }
                {
                    doesPrevPageExist(-1) && <button type="submit" id={`btn-${currPageNumber - 1}`} className="page-no-button"> {currPageNumber - 1} </button>

                }
                <button type="submit" id={`btn-${currPageNumber}`} className="active-page page-no-button"> {currPageNumber} </button>



                {
                    doesNextPageExist(1) && <button type="submit" id={`btn-${currPageNumber + 1}`} className="page-no-button"> {currPageNumber + 1} </button>

                }
                {
                    doesNextPageExist(2) && <button type="submit" id={`btn-${currPageNumber + 2}`} className="page-no-button"> {currPageNumber + 2} </button>

                }
                {

                }

            </div>

            ...
            {(totalCount && currPageNumber < Math.floor(totalCount / limit)) && <button type="submit" id={`btn-${Math.floor(totalCount / limit)}`}> {Math.floor(totalCount / limit)} </button>
            }
            <button type="submit" id={`btn-${currPageNumber + 2}`} className="active-page" disabled={currPageNumber === Math.floor(totalCount / limit)}> Next</button>

        </div>
    </div>
}

export default Pagination;