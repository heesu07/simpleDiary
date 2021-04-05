import React from 'react';
import {Button, Text, View} from 'react-native';


const Form = ({navigation}) => {
  return(
    <View>
        <Text>Form</Text>
        <Button 
          title="List Page"
          onPress={()=> navigation.goBack()}
        />
      </View>
  )
}

export default Form;