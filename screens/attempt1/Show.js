import React from 'react';
import {Text,View,StyleSheet,FlatList} from 'react-native';
import {openDatabase} from 'expo-sqlite';


var db = openDatabase('Database.db')

export default class Show extends React.Component{
    constructor(props){
        super(props);
        this.state={
            List:[],
        }
        db.transaction(tx => {
            tx.executeSql("SELECT * FROM table1;", [], (tx, results) => {
              var temp = [];
              for (let i = 0; i < results.rows.length; ++i) {
                temp.push(results.rows.item(i));
              }
              this.setState({
                List: temp,
              });
            });
            <View><Text>hidcn</Text></View>
          });
     
    }
    render(){
        return(
            
        
            <View>
                <Text>Screen</Text>
                
                
                <FlatList data={this.state.List} 
                renderItem={({item}) => {
                    <View >
                        <Text>Name: {item.name}</Text>
                        <Text>Age :{item.age}</Text>
                    </View>

                }} />

            </View>
            
        )}
}
const styles= StyleSheet.create({
    textstyle:{
        fontSize:35
    }
});

