import React from 'react';
import { View, Text, Image } from 'react-native';

const MainFeature = props => {
  const { img, title } = props;
  return (
    <View style={{ width: '25%', alignItems: 'center' }}>
      <View
        style={{
          width: 58,
          height: 58,
          borderWidth: 1,
          borderColor: '#EFEFEF',
          borderRadius: 18,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image source={img} />
      </View>
      <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 6 }}>
        {title}
      </Text>
    </View>
  );
};

export default MainFeature;
