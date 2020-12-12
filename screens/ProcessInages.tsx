import React ,{useState } from "react"
import {
  Text,
  View,
  Image,
  TouchableOpacity
 } from "react-native";

import ImagePicker from 'react-native-image-crop-picker';
import {PESDK} from 'react-native-photoeditorsdk';

// import RNFetchBlob from 'rn-fetch-blob'
var RNFS = require('react-native-fs');

const saveFileinLocalStorage=(imageProcess:any)=>{
  var imageName=imageProcess.split("/");
  var dir=RNFS.ExternalStorageDirectoryPath + '/image_processing/';
  RNFS.mkdir(dir);
  var path = dir + imageName[imageName.length-1];
  // write the file
  
  RNFS.moveFile(imageProcess, path)
  .then((success:any) => {
    console.log('file moved!');
  })
  .catch((err:any) => {
    console.log("Error: " + err.message);
  });

  return dir;

}

export const  ProcessImage=()=> {

  const [image, setImage] = useState('');
  const [filePath, setFilePath] = useState('');

  const uploadAndProcessImage=()=>{

    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false
    }).then(image => {
      if(image.path){
        
        PESDK.openEditor(image.path).then(
          (result) => {
            
            setImage(result.image);
            setFilePath(saveFileinLocalStorage(result.image));
            // console.log(result);
          },
          (error) => {
            console.log(error);
          },);
      }
    });
  }
  
  return (
    <View style={{flex:1,flexDirection:"column"}}>
      <TouchableOpacity
        style={{flex:0.4,margin:0,marginTop:0}}
        onPress={() =>uploadAndProcessImage()}>
          <Text style={{
            color:"#000000",
            backgroundColor:"#f4511e",
            textAlignVertical:"center",
            textAlign:"center",
            padding:10,
            fontSize:18 }}>
              Upload & Process Image
          </Text>
      </TouchableOpacity>
      
      <Image
        style={{flex:4,resizeMode:"contain",margin:10}}
        source={{
          uri: image ,
        }}/>

      <Text
        style={{
          flex:0.2,
          color:"#000000",
          textAlignVertical:"center",
          textAlign:"center",
          padding:4,
          fontSize:18
        }}>
          {filePath}
      </Text>
    </View>
    )
  }