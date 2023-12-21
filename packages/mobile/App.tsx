import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import testFunction from '@common/components/testFunction';
import { mobileFunction } from '@mobile/mobileFunction';

const handleOnPress = () => {
  console.log('Button pressed');
  testFunction();
  mobileFunction();
};

const Home = (): React.JSX.Element => {
  return (
    <View>
      <Text style={styles.textTitle}>Home</Text>
      <Pressable onPress={handleOnPress}>
        <View style={{ backgroundColor: 'blue' }}>
          <Text style={{ color: 'white' }}>Pressable Text</Text>
        </View>
      </Pressable>
      {/* <Button onPress={handleOnPress} title="Button Text" /> */}
    </View>
  );
};

const Details = (): React.JSX.Element => {
  return (
    <View>
      <Text style={styles.textTitle}>Details Screen</Text>
    </View>
  );
};

const App = (): React.JSX.Element => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  textTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;