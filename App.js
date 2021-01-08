import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, ScrollView} from 'react-native';
 
export default class App extends Component{
 

    constructor(){
        super();
        this.state={
            text:"",
        };
    }
    
    render(){
      
        return(
            <View style={{flex:1, padding:16}}>
                <Button title="fetch data from network" onPress={this.fetchData}></Button>
                <ScrollView style={styles.scroll}>
                    {/* Text에 보여줄 글씨는 바뀔 것이므로 state변수로 사용*/}
                    <Text style={styles.text}>{this.state.text}</Text> 
                </ScrollView>
            </View>
        );
    }//render method ..
 
    // network 작업을 하는 메소드
    fetchData=()=>{
        var request = new XMLHttpRequest();
      request.onreadystatechange = (e) =>{
        if(request.readyState !== 4){
          return;
        }
        if(request.status ===200){
          console.log('success',request.responseText);
          //여기서 값 옮겨서 화면단에다가 출력할수있는방안찾기
        }else{
          console.warn('error');
        }
      };
      request.open('GET','https://innovation.kfsco.com:1750/PRHwz6V8nHDCklqx2FTUqzOL4af0yBxA7Eu6bIHHgNvcNrOLLCw7WXZgTXo9IjSVxMyRvrMLT4saTsqGUrQmhZpo8Jj1CDu6yNfC=KFS');
      request.send();
    }// fetchDat method..
 
}//Main class..
 
const styles= StyleSheet.create({
    scroll:{marginTop:16, backgroundColor:'gray'},
    text:{padding:8, color:'white'}, 
});