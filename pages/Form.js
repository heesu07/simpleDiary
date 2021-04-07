import React from 'react';
import Container from '../components/Container';
import Contents from '../components/Contents';
import Button from '../components/Button';
import styled from 'styled-components/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Input = styled.TextInput`
  width: 100%;
  border: 1px solid #666666;
  font-size: 20px;
  padding: 8px;
  margin-bottom: 12px;
`;
const Label = styled.Text`
  font-size: 20px;
  font_weight: bold;
  margin-bottom: 12px;
`;


const Form = ({navigation}) => {
  const [date, setDate] = React.useState('');
  const [text, setText] = React.useState('');

  const store = async () =>{
    if(date === '')return;
    if(text === '')return;

    let list = await AsyncStorage.getItem( 'list' )
    if(list === null){
      list=[];
    }
    else{
      list = JSON.parse(list);
    }

    list.push({
      date,
      text,
    });
    await AsyncStorage.setItem( 'list', JSON.stringify( list ))
    navigation.goBack();
  };

  return(
    <Container>
        <Contents>
          <Label>Date</Label>
          <Input 
            placeholder={'YYYY-MM-DD'}
            value={date}
            onChangeText={value => setDate(value)}
          />

          <Label>Content</Label>
          <Input 
            multiline={true} 
            style={{height: 200}} 
            value={text}
            onChangeText={value => setText(value)}
          />
        </Contents>
        <Button onPress={ store }>
          Save
        </Button>
      </Container>
  )
}

export default Form;