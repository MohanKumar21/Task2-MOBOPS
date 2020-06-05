import React,{useState} from 'react';
import {Text,View,StyleSheet,Button,FlatList} from 'react-native';
import {openDatabase} from 'expo-sqlite';
var db=openDatabase('Database.db')

const screen3 =() =>{
const [list,setlist]=useState([])

    db.transaction(tx => {
        tx.executeSql("SELECT * FROM mohan;", [], (tx, results) => {
         

          for (let i = 0; i < results.rows.length; ++i) {
            setlist.push(results.rows.item(i));}

        

        
        
        })});
    return(
        <View>
            <FlatList data={list} renderItem={({item}) => {
                <Text>{item.name}</Text>
            }} />

        </View>
    )
}

export default screen3;