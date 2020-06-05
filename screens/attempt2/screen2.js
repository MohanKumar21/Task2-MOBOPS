import React,{useState} from 'react';
import {Text,View,StyleSheet,Button,TextInput, ImagePropTypes} from 'react-native';
import {openDatabase} from 'expo-sqlite';
import screen1 from './screen1';
var db=openDatabase('Database.db')

const screen2 =(props) =>{
    const [name,setname]=useState('');
    const [age,setage]=useState(null);
    return(
        <View>
        <TextInput placeholder='Enter your name' onChangeText={text => setname(text)} value={name} />
        <TextInput placeholder='Enter your age' onChangeText={age => setage(age)} value={age} />
        <Button title='Save' onPress={() => {
            var db=openDatabase('Database.db')
            db.transaction(tx => {
                tx.executeSql(
                  `INSERT INTO mohan (name,age) VALUES (?, ?);`,
                  [name,age]),(tx,results)=>{
                      console.log(results,'hi')
                  }})
            console.log('hi')
            props.navigation.navigate('screen1')      
        }} />
        </View>
    )
}

export default screen2;