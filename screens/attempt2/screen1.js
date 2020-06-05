import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import {openDatabase} from 'expo-sqlite';



const screen1= (props) =>{
   
    return(
        <View>
            <Button title='Enter' onPress={() => {
                var db=openDatabase('Database1.db')
                db.transaction(tx => {
                    tx.executeSql(
                      'CREATE TABLE IF NOT EXISTS mohan (id INTEGER PRIMARY KEY NOT NULL AUTOINCREMENT, name TEXT NOT NULL, age REAL NOT NULL);',
                      [],(tx,results)=>{
                          console.log('Home')
                      })})
                props.navigation.navigate('screen2')
                console.log('hi')
            }}/>
            <Button title='Show' onPress={() => {
                props.navigation.navigate('screen3')
            }}/>
        </View>
    )
}

export default screen1;