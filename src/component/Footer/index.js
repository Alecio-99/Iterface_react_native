import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import Shoes from '../Shoes'

export default function Footer() {
 return (
   <View>
    <Text style={styles.title}>VOCÊ TAMBEM PODE GOSTAR</Text>
    <View style={{flexDirection: 'row'}}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={{marginHorizontal: 10}}>
                <Shoes img={require('../../assets/1.jpg')} cost="110;90">
                    NIkE AIR MAX 
                </Shoes>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Shoes img={require('../../assets/5.jpg')} cost="300;90">
                    NIkE MAX 
                </Shoes>
            </View>
            <View style={{marginHorizontal: 10}}>
                <Shoes img={require('../../assets/3.jpg')} cost="120;90">
                   AIR MAX  
                </Shoes>
            </View>
        </ScrollView>
    </View>
   </View>
  );
}
const styles  = StyleSheet.create({
    title:{
        fontSize: 24,
        marginVertical: '2%',
        paddingHorizontal: '2%',
    }

})