import React, { useState } from 'react'
import { useQuery } from "@apollo/client";

import { PAGINATION_QUERY } from '../services'

export const Pagination = () => {
  const [page, setPage] = useState(1)
  const { error, loading, data, fetchMore } = useQuery(PAGINATION_QUERY, {
    variables: { page: page }
  });


  if (loading)
    return <div>Loading...</div>;

  // if (error)
  //   return <div>{JSON.stringify(error, null, 2)}</div>;

    console.log(data.characters.info)
    {/* fetchMore({ variables: { offset: data.characters.info.next } }) */}

  return (
    <div>  
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {data.characters.results.map((character) => 
          <div style={{border: "1px solid", padding: '.25rem', margin: '.25rem', textAlign: 'center'}}> {character?.name} </div>
        )}
      </div>

      <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '1rem'}}>
        <button disabled={page === 1} onClick={() => setPage(1) }> First </button>
        <button disabled={page === 1} onClick={() => setPage(prev => prev - 1)}> Prev </button>   

        <div style={{margin: '0 1rem'}}>
          { [page, page+1, page+2].map(p => {
            if (p < data.characters.info.pages) return <button  onClick={() => setPage(p)} style={{ margin: '0 .25rem'}}> {p} </button>
          })
          }
        </div>

        <button disabled={page === data.characters.info.pages} onClick={() => setPage(prev => prev + 1) }> Next </button>
        <button disabled={page === data.characters.info.pages} onClick={() => setPage(data.characters.info.pages) }> Last </button>
      </div>

      <div> page: {page} </div>
    </div>
  )
}

