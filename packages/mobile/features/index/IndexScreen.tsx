import React from 'react';
import { Button, View } from 'react-native';
import i18nString, { Messages } from '@common/i18n';
import { RootStackParamList } from '@mobile/navigation/NavigationConstants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type IndexNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Index'
>;

interface IndexScreenProps {
  navigation: IndexNavigationProp;
}

function IndexScreen({ navigation }: IndexScreenProps): React.JSX.Element {
  const navigateToHome = () => {
    navigation.navigate('Home');
  };

  const navigateToCreateWorkout = () => {
    navigation.navigate('CreateWorkout');
  };

  return (
    <View>
      <Button onPress={navigateToHome} title={i18nString(Messages.Home)} />
      <Button
        onPress={navigateToCreateWorkout}
        title={i18nString(Messages.CreateWorkout)}
      />
    </View>
  );
}

export default IndexScreen;
