/* eslint-disable global-require */
import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';

import GopayFeature from 'src/components/moleculs/GopayFeature';
import MainFeature from 'src/components/moleculs/MainFeature';
import SearchFeature from 'src/components/moleculs/SearchFeature';
import GoInfo from 'src/components/moleculs/GoInfo';
import GoBanner from 'src/components/moleculs/GoBanner';
import GoNews from 'src/components/moleculs/GoNews';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        {/* Search Bar */}
        <SearchFeature />
        {/* Gopay */}
        <View style={{ marginHorizontal: 17, marginTop: 8 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              backgroundColor: '#2C5FB8',
              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,
              padding: 14,
            }}
          >
            <Image source={require('./icon/gopay.png')} />
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: 'white' }}>Rp 50.000</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingTop: 20,
              paddingBottom: 14,
              backgroundColor: '#2F65BD',
              borderBottomLeftRadius: 4,
              borderBottomRightRadius: 4,
            }}
          >
            <GopayFeature img={require('./icon/pay.png')} title="Pay" />
            <GopayFeature img={require('./icon/pay.png')} title="Near By" />
            <GopayFeature img={require('./icon/pay.png')} title="Top Up" />
            <GopayFeature img={require('./icon/more.png')} title="More" />
          </View>
        </View>
        {/* Main Feature */}
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 18 }}>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              width: '100%',
              marginBottom: 18,
              flexWrap: 'wrap',
            }}
          >
            <MainFeature img={require('./icon/go-ride.png')} title="Go Ride" />
            <MainFeature img={require('./icon/go-car.png')} title="Go Car" />
            <MainFeature img={require('./icon/go-bluebird.png')} title="Go BlueBird" />
            <MainFeature img={require('./icon/go-send.png')} title="Go Send" />
          </View>
        </View>
        <View style={{ height: 1, backgroundColor: '#F2F2F4', marginTop: 20 }} />
        {/* News Section */}
        <GoNews />
        {/* Internal Information Section */}
        <GoInfo />
        {/* Go Food Banner */}
        <GoBanner />
        {/* Nearby GO-FOOD */}
        <View>
          <View style={{ height: 15, width: 60, marginLeft: 16 }}>
            <Image
              source={require('./icon/logo/go-food.png')}
              style={{ width: undefined, height: undefined, resizeMode: 'contain', flex: 1 }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 16,
              paddingHorizontal: 16,
            }}
          >
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1C1C1C' }}>
              Nearby Restaurant
            </Text>
            <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#61A756' }}>See All</Text>
          </View>
          <ScrollView horizontal style={{ flexDirection: 'row', paddingLeft: 16 }}>
            <View style={{ marginRight: 16 }}>
              <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                <Image
                  source={require('./icon/dummy/go-food-kfc.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    flex: 1,
                    borderRadius: 4,
                  }}
                />
              </View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12 }}>
                KFC Aeon Mall
              </Text>
            </View>
            <View style={{ marginRight: 16 }}>
              <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                <Image
                  source={require('./icon/dummy/go-food-gm.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    flex: 1,
                    borderRadius: 4,
                  }}
                />
              </View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12 }}>
                Bakmi GM Aeon Mall
              </Text>
            </View>
            <View style={{ marginRight: 16 }}>
              <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                <Image
                  source={require('./icon/dummy/go-food-orins.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    flex: 1,
                    borderRadius: 4,
                  }}
                />
              </View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12 }}>
                Martabak Origin
              </Text>
            </View>
            <View style={{ marginRight: 16 }}>
              <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                <Image
                  source={require('./icon/dummy/go-food-banka.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    flex: 1,
                    borderRadius: 4,
                  }}
                />
              </View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12 }}>
                Martabak Banka
              </Text>
            </View>
            <View style={{ marginRight: 16 }}>
              <View style={{ width: 150, height: 150, borderRadius: 10 }}>
                <Image
                  source={require('./icon/dummy/go-food-pak-boss.jpg')}
                  style={{
                    width: undefined,
                    height: undefined,
                    resizeMode: 'cover',
                    flex: 1,
                    borderRadius: 4,
                  }}
                />
              </View>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12 }}>
                Ayam Bakar Pak Boss
              </Text>
            </View>
          </ScrollView>
          <View
            style={{
              borderBottomColor: '#E8E9ED',
              borderBottomWidth: 1,
              marginTop: 16,
              marginHorizontal: 16,
              marginBottom: 20,
            }}
          />
        </View>
      </ScrollView>

      <View style={{ height: 54, flexDirection: 'row' }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image style={{ height: 26, width: 26 }} source={require('./icon/home.png')} />
          <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Home</Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image style={{ height: 26, width: 26 }} source={require('./icon/home.png')} />
          <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Orders</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image style={{ height: 26, width: 26 }} source={require('./icon/home.png')} />
          <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Help</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image style={{ height: 26, width: 26 }} source={require('./icon/home.png')} />
          <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Inbox</Text>
        </View>

        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image style={{ height: 26, width: 26 }} source={require('./icon/home.png')} />
          <Text style={{ fontSize: 10, color: '#545454', marginTop: 4 }}>Account</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'red',
  },
});

export default App;
