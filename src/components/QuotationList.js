import { View, Text, StyleSheet,ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React, { Fragment } from 'react'
import QuotationItems from './QuotationItems'

export default function QuotationList(props) {
  const daysQuery = props.filterDay
  return (
    <Fragment>
      <View style = {styles.container}>

        <TouchableOpacity 
        style = {styles.button}
        onPress={()=> daysQuery(7)}
        ><Text style = {styles.text}>7 D</Text></TouchableOpacity>

        <TouchableOpacity 
        style = {styles.button}
        onPress={()=> daysQuery(15)}
        ><Text style = {styles.text}>15 D</Text></TouchableOpacity>

        <TouchableOpacity 
        style = {styles.button}
        onPress={()=> daysQuery(30)}
        ><Text style = {styles.text}>1 M</Text></TouchableOpacity>

        <TouchableOpacity 
        style = {styles.button}
        onPress={()=> daysQuery(90)}
        ><Text style = {styles.text}>3 M</Text></TouchableOpacity>

        <TouchableOpacity 
        style = {styles.button}
        onPress={()=> daysQuery(180)}
        ><Text style = {styles.text}>6 M</Text></TouchableOpacity>
      </View>

      <ScrollView >
        <FlatList style={styles.scroll}
          data={props.listTransactions}
          renderItem={({item})=>{
            return<QuotationItems valor={item?.valor} data={item?.data}/>
          }}
        />
      </ScrollView>
    </Fragment>
  )
}

const styles = StyleSheet.create({
    container:{
        width:"100%",
        flexDirection:"row",
        paddingVertical:15,
        justifyContent:"space-evenly",
        height:50,
        borderRadius:10
    },
    button:{
      width:50,
      height:30,
      backgroundColor:"#f50d41",
      borderRadius:50,
      alignItems:"center",
      justifyContent:"center"
    },
    text:{
      color:"#ffffff",
      fontWeight:"bold",
      fontSize:14
    },
    scroll:{
      flexDirection:"column"
    }
})