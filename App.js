import { 
  StyleSheet, 
  Text, 
  TouchableNativeFeedback, 
  TouchableWithoutFeedback, 
  View, 
  Image, 
  SafeAreaView, 
  TouchableOpacity,
  Button,
  Alert,
  Platform,
  Dimensions,
  StatusBar,
  useWindowDimensions
} from 'react-native';

import AppButton from './app/components/AppButton';
import WelcomeScreeen from './app/screens/WelcomeScreeen';

import Card from './app/components/Card';
import ListingDetailsScreen from './app/components/ListingDetailsScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import MessagesScreen from './app/screens/MessagesScreen';

export default function App() {

  return (

    <MessagesScreen />

  );
}