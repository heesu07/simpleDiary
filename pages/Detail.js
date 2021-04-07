import React from 'react';
import Container from '../components/Container';
import styled from 'styled-components/native';
import Contents from '../components/Contents';
import { DrawerLayoutAndroidComponent } from 'react-native';

const Text = styled.Text`
  font-size: 20px;
  line-height: 28px;
`;


const Detail = ({navigation}) => {
  return(
      <Container>
        <Contents>
          <Text>{`Lorem Insum fdjkf jfjakfi a jajlkjl`}</Text>
        </Contents>
      </Container>
    )
}

export default Detail;