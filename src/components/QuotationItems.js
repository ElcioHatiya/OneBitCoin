import { StyleSheet, View, Text ,Image} from 'react-native'
import React from 'react'

export default function QuotationItems(props) {
  return (
    <View style = {styles.container}>
        <View style = {styles.left}>
            <View style = {styles.logoBox}>
                <Image 
                style = {styles.logo}
                source={require("../img/BitCoin_icon.png")}/>
                <Text style = {styles.text}>{props.data}</Text>
            </View>
        </View> 
        <View style = {styles.right}>
            <Text style = {styles.price}>{props.valor}</Text>
        </View>       
    </View>
  )
}

const styles = StyleSheet.create({
    
    container:{
        width:"95%",
        height:"auto",
        backgroundColor:"#000000",
        marginLeft:"3%",
        marginBottom:15,
        borderRadius:10,
        flexDirection:"row",
        alignItems:"center",
        padding:10
    },
    left:{
        width:"36%",
        alignItems:"flex-start"
    },
    right:{
        width:"60%",
        alignItems:"flex-end"
    },
    text:{
        fontSize:16,
        paddingLeft:10,
        color:"#ffffff",
        fontWeight:"bold"
    },
    logoBox:{
        flexDirection:"row",
        alignItems:"center"
    },
    price:{
        fontSize:20,
        color:"#ffffff",
        fontWeight:"bold"
    },
    logo:{
        width:40,
        height:40
    }
})