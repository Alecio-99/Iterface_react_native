import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Dot from '../../component/Dot';
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';

export default function Detail({navigation}) {
  navigation.setOptions({
    headerTitle: 'Nike Air Max Dia'
  })
 return (
   <ScrollView style={styles.container}>
       <Image
       source={require('../../assets/detail.jpg')}
       style={styles.image}
       resizeMode="cover"
       />  
       <View>
        <Text style={styles.title}>R$ 140,90</Text>
       </View>
       <View opacity={0.4}>
        <Text style={styles.title}>R$ Nike Air Max Dia </Text>
       </View>
       <View style={styles.dotContainer}>
        <Dot color="#2379f4"/>
        <Dot color="#fb6e53"/>
        <Dot color="#ddd"/>
        <Dot color="#000"/>
       </View>
       <View style={{flexDirection: 'row', width: '100%'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <SizeButton bgColor="#17181a" color="#FFF">40</SizeButton>
          <SizeButton>39</SizeButton>
          <SizeButton>38</SizeButton>
          <SizeButton>41</SizeButton>
        </ScrollView>
       </View>

        <View style={styles.textContent}>
          <Text style={styles.textContent}>
          Nike Air Max Dia
          </Text>
          <Text style={styles.textContent}>
            O Tênis é um tenis masculino, confortavel, serve para caminhadas e trilhas tambem, pra ir pra academia, etc...
          </Text>
          <Text style={styles.textList}>
            - Categoria: Amortecimento
          </Text>
          <Text style={styles.textList}>
            - Material: Mesh
          </Text>
        </View>

      <Button/>
      <View style={styles.line}/>
      <Footer/>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      width: '100%',
      backgroundColor: '#FFF'
  },
  image:{
    width: '100%'
  },
  title:{
    paddingHorizontal: '2%'
  },
  dotContainer:{
    flexDirection: 'row',
    marginVertical: '7%'
  },
  textContent:{
    fontSize: 22,
    lineHeight: 25,
    marginVertical: '2%',
    marginHorizontal: '2%'
  },
  textTitle:{
    fontSize: 22,
    marginVertical: '2%'
  },
  textList:{
    fontSize: 16,
    lineHeight: 25,
  },
  line:{
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%',
  }
  
})