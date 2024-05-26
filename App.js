import * as React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import UploadStatementScreen from './src/screens/UploadStatementScreen';
import HowToUploadScreen from './src/screens/HowToUploadScreen';
import AcceptPermissionsScreen from './src/screens/AcceptPermissionsScreen';
import FinalScreen from './src/screens/FinalScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UploadStatement">
        <Stack.Screen
          name="UploadStatement"
          component={UploadStatementScreen}
        />
        <Stack.Screen name="HowToUpload" component={HowToUploadScreen} />
        <Stack.Screen
          name="AcceptPermissions"
          component={AcceptPermissionsScreen}
        />
        <Stack.Screen name="Final" component={FinalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
