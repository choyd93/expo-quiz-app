import React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';
import { SafeAreaView } from 'react-native-safe-area-context';

const deviceHeight = (Dimensions.get('window').height);
const deviceWidth = Dimensions.get('window').width;
export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <WebView
            style={styles.webview}
            source={{ uri: 'https://main.d3dku69za6fcxq.amplifyapp.com/' }}
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
      paddingTop: '10%',
  },
    webview: {
        flex: 1,
        width: deviceWidth,
        height: deviceHeight,
    },
});
