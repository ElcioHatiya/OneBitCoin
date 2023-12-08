import React from 'react'
import {StyleSheet,Text,View} from 'react-native'

export default function CurrentPrice(props){

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.currentPrice}>$ {props.lastCotation}</Text>
      <Text style={styles.text}>Última Cotação</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    width:"100%",
    height:"auto",
    alignItems:"center"
  },
  text:{
    color:"#ffffff",
    fontSize:22
  },
  currentPrice:{
    color:"#f50d41",
    fontSize:40,
    fontWeight:"bold"
  }  
})
