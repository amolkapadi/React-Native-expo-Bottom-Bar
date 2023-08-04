import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'
import React from 'react'
import Carousel from 'react-native-snap-carousel';
import data from '../data';
export default function Home() {

  const { width:screenWidth } = Dimensions.get('window')

  const sliderWidth = screenWidth;
  const itemWidth = screenWidth * 0.8;

  const renderItem = ({item}) =>(
    <View style={styles.itemContainer}>
      <Image source={{uri:item.imgUrl}} style={styles.itemImg} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemBody}>{item.body}</Text>
    </View>
  )

  return (
    <Carousel 
    layout='default'
    data={data}
    renderItem={renderItem}
    sliderWidth={sliderWidth}
    itemWidth={itemWidth}
    />
  )
}

const styles = StyleSheet.create({
  itemContainer:{
    marginTop:20,
    backgroundColor:'white',
    borderRadius:8,
    padding:20,
    alignItems:'center',
    justifyContent:'center',
    height:350
  },
  itemImg:{
    width:150,
    height:150,
    borderRadius:75,
    marginBottom:10
  },
  itemTitle:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:5
  }
})
//install npm i react-native-snap-carousel on terminal