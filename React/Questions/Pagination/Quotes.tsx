import Quote from "./Quote";
import { QuoteItem } from "./helper";
import './styles.css';

type Proptypes = {
    quotesData: QuoteItem[]
}

const Quotes = function ({ quotesData }: Proptypes) {
    const headerData : QuoteItem= {
        id : 'Sr. No.',
        author : 'Author Name',
        quote : 'Quote'
    }
    return <div className="quote-container">
        <div className="quotes-header">
            <Quote quoteData={headerData}/>
        </div>
        {quotesData.map((quote, index) => <Quote key={quote.id} quoteData={quote} />)}
    </div>
}

export default Quotes;