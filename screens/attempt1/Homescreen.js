import React from 'react';
import {Text,View,StyleSheet,Button} from 'react-native';
import {openDatabase} from 'expo-sqlite';


var db=openDatabase('Database.db')


export default class Homescreen extends React.Component{
    constructor(props){
        super(props)
        db.transaction(function(tx){
            tx.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name='table1;",[],
            function(tx,result){
                if(result.rows.length==0){
                    tx.executeSql("DROP TABLE IF EXISTS table1;",[]);
                    tx.executeSql("CREATE TABLE IF NOT EXISTS table1(age INTEGER , name TEXT);",[]);
                    
                }
            })
        })
    };
    render(){
        console.log('hi')
        return(
            <View>
                <Text>hi</Text>
                <Button title='Enter data' onPress={() => {this.init();
                    this.props.navigation.navigate('Enter')}}/>
                <Button title='Show data' onPress={() => {this.props.navigation.navigate('Show')}}/>
            </View>
        )
    }
}
const styles= StyleSheet.create({
    textstyle:{
        fontSize:35
    }
});
