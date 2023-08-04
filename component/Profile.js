import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Avatar, Button } from 'react-native-paper'

export default function Profile() {
  return (
    <View style={styles.container}>
     <Avatar.Image 
      size={150}
      source={{uri: 'https://picsum.photos/id/12/200/300'}}
     />
     <Text style={styles.name}>John Doe</Text>
     <Text style={styles.bio}>Hello, I'm a software asoftware developer passionate about building cool app..!</Text>
   
      <Button mode='contained' style={styles.button}>Follow</Button>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  name:{
    fontSize:24,
    fontWeight:'bold',
    marginTop:10
  },
  bio:{
    margin:20,
    textAlign:'center',

  },
  button:{
    margin:10,
    width:200
  }

})

//install react native paper 