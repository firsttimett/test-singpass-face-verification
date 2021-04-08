import React from 'react';
import {WebView} from 'react-native-webview';

export const WebViewComponent = () => {
  // Substitute this uri with the iProov Web demo
  const uri = 'http://localhost:8080';
  // const uri = 'https://codepen.io/christopherkade/pen/vYYeRgv';
  return <WebView source={{uri}} />;
};
