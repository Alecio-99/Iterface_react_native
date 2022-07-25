import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import {useNavigation} from '@react-navigation/native'


import Shoes from '../../component/Shoes'

export default function Home() {
    const navigation = useNavigation();

 return (
     <View style={style.container}>
        <View style={style.header}>
            <Image
            source={require('../../assets/banner.jpg')}
            style={style.image}
            />
         <View style={style.textContainer}>
            <Text style={style.text}>TÊNIS</Text>
            <Text style={[style.text, {color: '#CECECF'}]}>-</Text>
            <Text style={[style.text, {color: '#CECECF'}]}>MASCULINO</Text>
            <TouchableOpacity style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
                <MaterialIcons  
                name="filter-list"
                size={24}
                color="#000"
                />

            </TouchableOpacity>
         </View>
        </View>
        
        <View style={style.line}/>

        <ScrollView>
            <Text style={style.text}>LANÇAMENTO</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
               <Shoes img={require('../../assets/1.jpg')} cost="140,90" onClick={()=> navigation.navigate('Detail')}>
                   Nike Air Max Dia
               </Shoes>
               <Shoes img={require('../../assets/2.jpg')} cost="150,90" onClick={()=> navigation.navigate('Detail')}>
                   Nike Air Max 
               </Shoes>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
               <Shoes img={require('../../assets/3.jpg')} cost="200,90" onClick={()=> alert('CLICOU')}>
                   Nike Tentacle
               </Shoes>
               <Shoes img={require('../../assets/4.jpg')} cost="190,90" onClick={()=> alert('CLICOU')}>
                   Nike Epic
               </Shoes>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
               <Shoes img={require('../../assets/5.jpg')} cost="190,90" onClick={()=> alert('CLICOU')}>
                   Nike Max Dia
               </Shoes>
               <Shoes img={require('../../assets/6.jpg')} cost="170,90" onClick={()=> alert('CLICOU')}>
                    Air Max 
               </Shoes>
            </View>
        </ScrollView>

     </View>
  )
}

const style = StyleSheet.create({
    container:{
      flex:1,
      width: '100%',
      backgroundColor: '#FFF'
    },
    header:{
        marginBottom: 8
    },
    image:{
        width: '100%'
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '5%',
        marginHorizontal: '5%'
    },
    line:{
        borderBottomColor: '#D8d8d8',
        borderBottomWidth: 2,
    }
    
    
})