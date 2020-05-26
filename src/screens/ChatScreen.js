import React, { Component } from 'react';
import { StyleSheet, Text,TextInput ,View, ScrollView } from 'react-native';
 

export default class ChatScreen extends Component{

    constructor(props){
        super(props);
        this.state ={
          chatMessage: "",
          chatMessages: [],
          nickname : "",
          totalUser : 0,

    
        }
      }
      componentDidMount(){
          const {nickname} = this.props.route.params;
        this.setState({nickname :nickname })
        this.socket = io("http://192.168.0.106:3000"),
        this.socket.on("chat message", msg => {
          this.setState({ chatMessages: [...this.state.chatMessages, msg],
            totalUser : msg.users
           
          });
        });
      }
      submitChatMessage(){
        this.socket.emit("chat message", {
          "msg" : this.state.chatMessage,
          "userName" : this.state.nickname
        });
        this.setState({ chatMessage: "" });
      }

      render(){
        const chatMessages = this.state.chatMessages.map(chatMessage => (
        <Text  style={{marginBottom : 10}}>{chatMessage.userName}:{chatMessage.msg}  </Text>
        ));
      
        return (
           
                <View style={styles.container}>
              <Text>Total Users:  {this.state.totalUser}</Text>
              <ScrollView >
              {chatMessages}</ScrollView>
               <View style ={styles.bottom}>
               <TextInput
                  style={{ height: '100%', borderWidth: 1, marginBottom : 100,width: "100%",borderRadius:12 }}
                  autoCorrect={false}
                  value={this.state.chatMessage}
                  onSubmitEditing={() => this.submitChatMessage()}
                  onChangeText={chatMessage => {
                    this.setState({ chatMessage });
                  }}
                />
               </View>
                  
              </View>
        
          
          );
      }
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          marginRight : 10,
          marginLeft : 10,
        
        },
        bottom:{
            position : 'absolute',
            bottom : 0,
            height : 50,
            width : '90%',
            justifyContent :"center",
            marginLeft : 20
            
        }
       
      });    
