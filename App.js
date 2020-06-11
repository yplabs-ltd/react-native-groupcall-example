/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ marginLeft: 50, marginBottom: 4 }}>Username</Text>
          <TextInput style={{ paddingLeft: 15, height: 40, borderColor: 'gray', borderWidth: 1, marginLeft: 50, marginRight: 50, marginBottom: 10 }}/>
          <Text style={{ marginLeft: 50, marginBottom: 4 }}>ChannelId</Text>
          <TextInput style={{ paddingLeft: 15, height: 40, borderColor: 'gray', borderWidth: 1, marginLeft: 50, marginRight: 50, marginBottom: 15 }}/>
          <TouchableOpacity>
            <View style={{ height: 50, backgroundColor: 'gray', marginLeft: 50, marginRight: 50, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: 'white' }}>Connect to Channel</Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
