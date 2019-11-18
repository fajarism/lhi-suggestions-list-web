import Axios from "axios";

const BASE_URL = "https://lhiapps.tech/api/suggestions"

const api = {
    getSuggestions : async (param) => {
        let apiParam = param || {}
        let {page, limit} = apiParam
        try {
            let response = await Axios.get(`${BASE_URL}?count=${limit||10}&page=${page||0}`)
            let getSuggestionPromise = new Promise((resolve, reject) => {
                if(response.data.code === "200") resolve(response.data)    

                else reject(response.data)
            })

            return getSuggestionPromise
        } catch(e) {
            console.log(e) 
        }
    }
}

export default api