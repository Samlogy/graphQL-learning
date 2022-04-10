import React, { useEffect, useState } from 'react'
import { useQuery } from "@apollo/client";

import { PAGINATION_QUERY } from '../services'

export const LoadMore = () => {
  const [page, setPage] = useState(1)
  const [characters, setCharacters] = useState([])
  const { error, loading, data } = useQuery(PAGINATION_QUERY, {
    variables: { page }
  });

  useEffect(() => {
    if ( data ) {
        setCharacters(data.characters.results)
        if (data.characters.info.next > 2) setCharacters([...characters, ...data.characters.results])
    }
  }, [data])

  if (loading)
    return <div>Loading...</div>

  return (
    <div>  
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {characters?.map((character) => 
          <div style={{border: "1px solid", padding: '.25rem', margin: '.25rem', textAlign: 'center'}}> {character?.name} </div>
        )}
      </div>

      <button disabled={page === data.characters.info.pages} onClick={() => {
          setPage(prev => prev + 1)
          
      }}> Load More </button>         

      <div> page: {page} </div>
    </div>
  )
}

