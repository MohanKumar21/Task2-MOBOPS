import React,{useState} from 'react';
import {Text,View,StyleSheet,TextInput, Button,Alert} from 'react-native';
import {openDatabase} from 'expo-sqlite';
import insertPlace from './db'
var db=openDatabase({name:'Database.db'})

export default class enter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name:"",
            age:null,
        };
    }
   
    
    register_user = () => {
      var that = this;
      const { name } = this.state;
      const { age } = this.state;
      
              db.transaction(function(tx) {
                tx.executeSql(
                  'INSERT INTO table1 (age,name) VALUES (?,?);',
                  [age,name],
                  (tx, results) => {
                    var len=results.rowsAffected
                    
                    if (len > 0) {
                      Alert.alert(
                       
                        'You are Registered Successfully',
                        [
                          {
                            text: 'Ok',
                            onPress: () =>
                              that.props.navigation.navigate('Home'),
                          },
                        ])
                      }
                    }
                )})
    }
    render(){
        return(
            <View>
                <Text>Enter Name:</Text>
                <TextInput placeholder='Enter your name' onChangeText={text => this.setState({name: text})} value={this.state.name} />
                <Text>Enter Age:</Text>
                <TextInput placeholder='Enter your age' onChangeText={text => this.setState({age: text})} value={this.state.age} />
                  <Text>{this.state.name}</Text>
                <Button title='save' onPress={() => {this.register_user.bind(this)
                 }} />
 
            </View>
        )
    }
  }


  const styles= StyleSheet.create({
    textstyle:{
        fontSize:35
    }
});


