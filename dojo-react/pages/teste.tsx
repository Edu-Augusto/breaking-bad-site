import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import axios from 'axios'

interface IPokemon {
  name: string,
  url: string,
};

interface IResponse {
  count: number,
  next: string,
  previous: any,
  results: Array<IPokemon>
}

const Home: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [apiResponse, setApiResponse] = useState<Array<IResponse>>();
  const [allPokemon, setAllPokemon] = useState<Array<IPokemon>>([]);

  useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon')
      .then((response: any) => {
        console.log('response', response)
        setApiResponse(response);
        setAllPokemon(response?.results);
      })
      .finally(() => {
        console.log(apiResponse)
        console.log(allPokemon)
        setLoading(false);
      })
  }, [])

  return (
    <>
      {
        loading && <h1>dudu</h1>
      }
    </>
  )
}

export default Home