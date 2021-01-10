import React, {useState, useEffect} from "react"
import styled from "@emotion/styled"
import axios from "axios"
import image from "./cryptocurrencies.png"
import Form from "./components/Form"
import Price from "./components/Price"
import Spinner from "./components/Spinner"


const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media(min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &&::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
  }
`

const App = () => {

  const [currency, setCurrency] = useState("")
  const [crypto, setCrypto] = useState("")
  const [result, setResult] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {

    const quoteCrypto = async () => {
      // Avoid execution first time
      if(currency === "") return

      // Get price from API
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`

      const result = await axios.get(url)

      // Spinner loading
      setLoading(true)

      // Hide Spinner and show result
      setTimeout(() => {

        // Change Spinner State 
        setLoading(false)
        
        // Set the price result
        setResult(result.data.DISPLAY[crypto][currency])
      }, 2000)
    }
    quoteCrypto()
  }, [currency, crypto])

  // Show Spinner or result
  const component = loading ? <Spinner /> : <Price result={result} />

  return (
    <Container>
      <div>
        <Image 
          src={image}
          alt="Crypto Image"
        />
      </div>
      <div>
        <Heading>Cryto Prices</Heading>
        
        <Form 
          setCurrency={setCurrency}
          setCrypto={setCrypto}
        />

        {component}
      </div>
    </Container>
  )
}

export default App
