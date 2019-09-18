import React from 'react';
import { View, Text, Image } from 'react-native';

const GopayFeature = props => {
  const { img, title } = props;
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Image source={img} />
      <Text
        style={{
          fontSize: 13,
          fontWeight: 'bold',
          color: 'white',
          marginTop: 15,
        }}
      >
        {title}
      </Text>
    </View>
  );
};

export default GopayFeature;
