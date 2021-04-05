import React from 'react';
import {Text, View, Button} from 'react-native';

// 구조분해할당, Destructuring Assignment
const List = ({navigation}) => {
  return(
    <View>
      <Text>List</Text>
      <Button 
          title="Detail Page"
          onPress={()=> navigation.navigate("Detail")}
      />
      <Button 
          title="Write Page"
          onPress={()=> navigation.navigate("Form")}
      />
    </View>
  )
}

export default List;