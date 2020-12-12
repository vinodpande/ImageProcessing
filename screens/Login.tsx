import * as React from "react"
import { Text, View, TouchableOpacity,ActivityIndicator, StyleSheet } from "react-native"
import { TextInput } from "react-native-gesture-handler";

const axios = require('axios');

const goToUserList =(navigation:any)=>{

  navigation.navigate('User', { name: 'User' });

}

export const  Login =(props:any)=> {

  const {navigation} = props;

  const [userName, onChangeUserName] = React.useState('');
  const [userPassword, onChangeUserPassword] = React.useState('');
  const [error, onError] = React.useState('');
  const [isUserValidating, setUserValidating] = React.useState(false);
  
  const onPressLogin = () => {

    setUserValidating(true);
    
    if((userName!==null && userName !=='') &&
    (userPassword!==null && userPassword!=='')){
      
      onError('');
      validateUserOnServer();

    }else{
      
      onError('User name and password required');
      setUserValidating(false);    }

    };
  
  const validateUserOnServer=()=>{
    const params = JSON.stringify({
      "email": userName,
      "password": userPassword,
    });
    
    axios.post(
      'https://reqres.in/api/login',
      params,
      {
        "headers": {
          "content-type": "application/json",
        },
      })
      .then(function (response:any) {

        // handle success
        if(response.status===200){
          goToUserList(navigation);
        }

      })
      .catch(function (error:any) {

        // handle error
        onError("User name and password not matched");
        console.log(error);

      })
      .then(function () {

        // always executed
        setUserValidating(false);

      });
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.loginView}>
        <Text
          style={styles.errorView}
          >
            {error}
        </Text>
        
        <TextInput
          style={styles.inputView}
          onChangeText={userName => onChangeUserName(userName)}
          value={userName}/>
        
        <TextInput
          style={styles.inputView}
          onChangeText={userName => onChangeUserPassword(userName)}
          value={userPassword}/>
        
        <ActivityIndicator
          animating={isUserValidating}
          size="small" color="#0000ff" />
        
        <TouchableOpacity
          style={styles.buttonView}
          onPress={onPressLogin}
          >
            <Text>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
    )
  }

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:"row",
    alignContent:"center",
    alignItems:"center",
    backgroundColor:"#FFFFFF",
  },
  loginView:{
    flex:1,
    margin:2,
    alignSelf:"center",
    alignContent:"space-around"
  },
  errorView:{
    height: 20,
    margin:2,
    marginLeft:4,
    textAlignVertical:"center",
    color:"red"
  },
  inputView:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin:4,
    alignItems:"center",
  },
  buttonView:{
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    margin:4,
  }
});