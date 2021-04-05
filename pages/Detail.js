import React from 'react';
import {Text, View, Button} from 'react-native';

const Detail = ({navigation}) => {
  return(
      <View>
        <Text>Detail</Text>
        <Button 
          title="List Page"
          onPress={()=> navigation.goBack()}
        />
      </View>
    )
}

export default Detail;