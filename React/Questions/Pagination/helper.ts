export interface QuoteItem {
    id : number | string,
    author : string,
    quote: string
}

export const getQuotes = async function(pageNumber:number, limit:number){
    try{
        const res = await fetch(`https://dummyjson.com/quotes?limit=${limit}&skip=${pageNumber * limit}`);
        const json = await res.json();
        return json;
    }
    catch(error){
        console.log(error)
    }
}



