
import styled from '@emotion/styled'
import Form from './components/Form'
import Quote from './components/Quote'
import Spinner from './components/Spinner'

import CryptoImage from './img/crypto.png'
import { useState, useEffect } from 'react'

const Container = styled.div`
  max-width: 900px;
  margin:0 auto;
  width:90%;
  @media(min-width:992px){
    display:grid;
    grid-template-columns:repeat(2,1fr);
    column-gap:2rem;
  }
`

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin:100px auto 0 auto;
  display:block;
`

const Heading = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after{
    content:'';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {

  const [currencies, setCurrencies] = useState({})
  const [quote, setQuote] = useState({})
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    if (Object.keys(currencies).length > 0) {

      const checkCrypto = async () => {
        setLoading(true);
        setQuote({});


        const { currency, cryptoCurrencies } = currencies

        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCurrencies}&tsyms=${currency}`
        const response = await fetch(url)
        const result = await response.json()

        setQuote(result.DISPLAY[cryptoCurrencies][currency])
        setLoading(false);
      }
      checkCrypto();
    }
  }, [currencies])
  return (
    <Container>
      <Image
        src={CryptoImage}
        alt='Crypto image'
      />
      <div>
        <Heading>Check the price of Cryptocurrencies</Heading>
        <Form
          setCurrencies={setCurrencies}
        />
        {loading && <Spinner />}
        {quote.PRICE && <Quote quote={quote} />}
      </div>
    </Container>
  )
}

export default App
