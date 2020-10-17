exports.handler = async (event) => {
    // TODO implement
    if(event.httpMethod === 'GET') {
        
        if(event && event.queryStringParameters && event.queryStringParameters.keyword){
            let keyword = event.queryStringParameters.keyword
            let res = "Akshay Popli says " + keyword
            return {
                statusCode :200,
                body: JSON.stringify(res)
            }
        }else {
            return {
                 statusCode:400,
                 body:JSON.stringify({error:"Keyword is missing, Please add keyword"})
            }
        }
    }
};