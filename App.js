import * as React from "react";
import { FontAwesome5 } from '@expo/vector-icons'; 
import AddEntry from './components/AddEntry'
import { View, Text } from "react-native";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Universal React with Expo</Text>
      <AddEntry />
    </View>
  );
}
