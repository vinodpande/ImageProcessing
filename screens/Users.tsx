import React,{useState} from "react";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  Image,
  ActivityIndicator } from "react-native";

// including axios network lib for API call
const axios = require('axios');

export const  Users =() =>{

  const [users, setUsers] = useState([{id:0}]);
  const [isUserLoading,setUserLoading]=useState(true);

  React.useEffect(() => {

    setUserLoading(true);
    
    axios.get('https://reqres.in/api/users?page=1')
    .then(function (response:any) {
      // handle success
      setUsers(response.data.data)
    })
    .catch(function (error:any) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
      setUserLoading(false);
    });
  },[]);
  
  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={isUserLoading}
        size="small" color="#0000ff" />
        <FlatList
          keyExtractor={ item => item.id.toString() }
          data={users}
          renderItem={({item}) => listRowlayout(item) }
          />
    </View>
  )    
}

const listRowlayout=(props:any)=>{
  const{id,email,first_name,last_name,avatar}=props;
  
  return(

    <View style={styles.listRow}>
      <Image
        style={styles.userIcon}
        source={{uri:avatar}}
        />
        <View style={styles.userContent}>
          <Text>{first_name} {last_name}</Text>
          <Text>{email}</Text>
        </View>
    </View>

    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    borderWidth: 1,flexDirection:"column"
  },
  listRow:{
    flexDirection:"row",
    borderBottomColor:"#CCCCCC",
    borderBottomWidth:1,
    borderTopColor:"#CCCCCC",
    borderTopWidth:0.5,
    marginTop:2
  },
  userIcon:{
    width:40,
    height:60,
    resizeMode:"stretch",
    margin:2
  },
  userContent:{
    flexDirection:"column",
    alignContent:"center",
    marginLeft:4
  }
});