import { QuoteItem } from "./helper";
import './styles.css';

type Proptypes = {
    quoteData : QuoteItem
}

const Quote = function ({ quoteData } : Proptypes) {

    const {id, author, quote} = quoteData;

    return <div className="quote-card">
        <div className="id">{id}</div>
        <div className="name">
            {author}
        </div>
        <div className="quote">{quote}</div>
    </div>
}

export default Quote;