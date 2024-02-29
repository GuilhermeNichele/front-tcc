import React from 'react';
import {View,Text, StyleSheet, TouchableOpacity,} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

function Header({screen}){
 const navigation = useNavigation();
  return(
<View style={headerStyles.container}>
<TouchableOpacity onPress={() => navigation.navigate('profile')}>
<Entypo name="menu" size={24} color="black" />
</TouchableOpacity>
<View>
<Text>{screen}</Text>
</View>
</View>
  )
}

const headerStyles=StyleSheet.create({
   container:{
       
       
       left:0,
       width:'100%',
       backgroundColor:'#65D8DA',
       elevation:5,
       height:100,
       display:'flex',
       flexDirection:'row',
       paddingHorizontal:20,
       alignItems:'center',
       justifyContent:'space-between'
   }
   
});

export default Header;