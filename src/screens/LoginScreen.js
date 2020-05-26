import React, { Component } from 'react';
import { View, Text,AsyncStorage,StyleSheet,TextInput } from 'react-native';

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        nickname:''
    };
  }

componentDidMount (){
    AsyncStorage.getItem("gamerrr")
        .then(value => {
            console.log(value)
          this.compare(value)
        })
        .done();

}

compare(value){
    if(value !== null){
        this.setState({ nickname: value });
        this.props.navigation.navigate("Chat",
        {
          nickname : this.state.nickname
         });
      }
}

onSubmit() {
    AsyncStorage.setItem("gamerrr",this.state.nickname )
    this.props.navigation.navigate("Chat",
        {
          nickname : this.state.nickname
         });

}

  render() {
    return (
      <View style ={styles.container}>
        <TextInput
                  style={{ height: 60, borderWidth: 1, borderRadius:12 }}
                  autoCorrect={false}
                  value={this.state.nickname}
                  onSubmitEditing={() => this.onSubmit()}
                  onChangeText={nickname => {
                    this.setState({ nickname });
                  }}
                />
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

   
   
  });   