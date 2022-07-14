import { useEffect, useState } from 'react'
import {Container, ContainerLinks} from './styles'
import Card from '../card/Card'
import {ResponseRequest} from '../../types/ResponseRequest'
import Pagination from '@mui/material/Pagination';
import axios from 'axios';


const Wrapper = () => {

  const [page, setPage] = useState(1);
  const [data, setData] = useState<Array<ResponseRequest>>([])
  const [loading, setLoading] = useState<Boolean>(false)
  const [cards, setCards] = useState<Array<ResponseRequest>>([])
  const [numberLinks, setNumberLinks] = useState<number>(0)


  useEffect(()=>{
      axios.get('https://breakingbadapi.com/api/characters')
        .then((response:any) =>{
          setData(response?.data)
        })
        .then(()=>{
          setCards(data.slice((10 * page)-10, (page*10)))
        })
        .finally(()=>{
          if(data.length % 10 === 0){
            setNumberLinks(data.length/10)
          } else {
            setNumberLinks(Math.ceil(data.length/10))
          }
          setLoading(true)
        })
  },[])


  useEffect(()=>{
    setCards(data.slice((10 * page)-10, (page*10)))
  },[page])

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <>
        <Container>
        {
          loading && cards.map((el, index) => <Card apelido={el.nickname} ator={el.portrayed} name={el.name} img={el.img} key={index}/>)
        }
        </Container>
        {
          loading && (
            <ContainerLinks>
              <Pagination count={numberLinks} page={page} onChange={handleChange} />
            </ContainerLinks>
          )
        }
    </>
  )
}

export default Wrapper