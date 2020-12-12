import * as React from "react"
import { Text, View, Button } from "react-native"

const Separator = () => (<View style={{height:10}} />);

export const  Home =(props:any)=> {
    const{navigation} = props;
    return (
        <View
            style={{
                padding:4,
                paddingLeft:10,
                paddingRight:10,
                flex:1,
                flexDirection:"column",
                alignContent:"center"
                }}>
                    <Text
                        style={{
                            padding:4,
                            margin:10,
                            textAlign:"center",
                            alignContent:"center"
                        }}>Home Screen 
                    </Text>

                    <Button
                        title="Login"
                        onPress={() =>
                            navigation.navigate('Login', { name: 'Login' })}
                        />

                    <Separator/>

                    <Button
                        title="Users"
                        onPress={() =>navigation.navigate('User', { name: 'User' })}
                        />

                    <Separator/>
                    
                    <Button
                        title="Edit Images"
                        onPress={() =>navigation.navigate('Process Images', { name: 'Process Images' })}
                        />
        </View>
    )
}