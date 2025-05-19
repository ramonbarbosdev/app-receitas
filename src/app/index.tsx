import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/homescreen';

export type RootStackParamList = {
  Home: undefined;

};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <Stack.Navigator initialRouteName="Home"  /*screenOptions={{ headerShown: false }}*/>
      <Stack.Screen name="Home" component={HomeScreen}   options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
