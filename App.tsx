import React, {useState,useEffect} from 'react'
import {Platform, SafeAreaView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native'
import CurrentPrice from './src/components/CurrentPrice'
import HistoryGraphic from './src/components/HistoryGraphic'
import QuotationList from './src/components/QuotationList'

//https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-10-10&end=2013-10-15

//https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarPeriodo(dataInicial=@dataInicial,dataFinalCotacao=@dataFinalCotacao)?@dataInicial=%2711-11-2000%27&@dataFinalCotacao=%2711-17-2000%27&$top=100&$format=json

function addZero(number){  
  if(number <= 9){
    return "0" + number
  }
  return number
}

function url(qtyDays){
  const date = new Date()
  const listLastDays = qtyDays
  const endDate = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDate())}`
  date.setDate(date.getDate()-listLastDays)
  const startDate = `${date.getFullYear()}-${addZero(date.getMonth()+1)}-${addZero(date.getDay())}`
  //return `https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`
  return `https://api.coindesk.com/v1/bpi/historical/close.json?start=2013-10-10&end=2013-10-15`
}

async function getListBitCoins(url){
  let response = await fetch(url)
  let returnApi = await response.json()
  let sekectListQuotation = returnApi.bpi
  const queryBitCoinList = Object.keys(sekectListQuotation).map((key)=>{
    return{
      data: key.split("-").reverse().join("/"),
      valor: sekectListQuotation[key]
    }
  })
  let data = queryBitCoinList.reverse()
  return data
  //return console.log(data)
} 

async function graphic(url){
  let responseG = await fetch(url)
  let returnApiG = await responseG.json()
  let sekectListQuotationG = returnApiG.bpi
  const queryBitCoinList = Object.keys(sekectListQuotationG).map((key)=>{
      sekectListQuotationG[key]
  })
  let dataG = queryBitCoinList
  return dataG
  //return console.log(dataG)
} 

function App(): JSX.Element {

  const [coinList, setCoinList] = useState([])
  const [coinsGraphicList, setCoinsList] = useState([0])
  const [days, setDays] = useState(30)
  const [updateData, setUpdateData] = useState(true)
  const [price, setPrice] = useState()

  function updateDays(number){
    setDays(number)
    setUpdateData(true)
  }

  function priceCotation(){
    setPrice(coinList.pop())
  }

  useEffect(()=>{

    getListBitCoins(url(days)).then((data)=>{
      setCoinList(data)
    })

    graphic(url(days)).then((dataG)=>{
      setCoinList(dataG)
    })
    priceCotation()
    if(updateData){
      setUpdateData(false)
    }

  },[updateData])

  return (
    <SafeAreaView style= {styles.sectionContainer}>
      <StatusBar
      backgroundColor="#f50d41"
      barStyle="light-content"
      />
      
      <HistoryGraphic infoDataGraphic={coinsGraphicList}/>
      <QuotationList
        filterDay = {updateDays} listTransactions={coinList}/>
    </SafeAreaView>
  )
}

//<CurrentPrice lastCotation={price}/>

const styles = StyleSheet.create({
  sectionContainer: {
    flex:1,
    backgroundColor:"#000000",
    alignItems:'center',
    paddingTop: Platform.OS === "android" ? 40:0
  }  
})

export default App
