import React, {useState, useEffect}from 'react'
import api from "../utility/api"

import SuggestionsCardComponent from '../component/SuggestionsCardComponent'

import "../style/SuggestionCardContainer.css"
import Pagination from 'react-js-pagination'

function SuggestionCardContainer() {
    let [suggestions, setSuggestions] = useState([])
    let [isLoading, setIsLoading] = useState(true)
    let [activePage, setActivePage] = useState(1)
    let [suggestionsCount, setSuggestionsCount] = useState(0)

    let fetchSuggestion = async(param) => {
        setIsLoading(true)
        try {
            let response = await api.getSuggestions(param)
            setSuggestions(response.data)
            setSuggestionsCount(response.count)
        } catch(e) {
            console.log(e)
        }    
        setIsLoading(false)    
    }

    useEffect(() => {
        fetchSuggestion({
            page: 0,
            limit : 10
        })
    },[])

    const onPageChange = (page) => {
        setActivePage(page)
        fetchSuggestion({
            page: page - 1,
            limit : 10
        })
    }

    return(
        isLoading ? <div>Fetching data</div> :
        suggestions.length < 1 ? <div>No feedback yet</div>:
        <div className="container">
            {suggestions.map((element, i) => {
                return(<SuggestionsCardComponent key={i} suggestion={element}/>)
                })
            }
            <Pagination activePage={activePage} totalItemsCount={suggestionsCount} 
                itemsCountPerPage={10}
                onChange={onPageChange}
                prevPageText="Previous"
                nextPageText="Next"
                pageRangeDisplayed={5}/>
        </div>
    )
}

export default SuggestionCardContainer