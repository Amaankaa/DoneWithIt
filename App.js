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

export default function App() {

  return (

    <View style ={{
      backgroundColor: "#f8f4f4",
      padding: 20,
      paddingTop: 100,
    }}>

      <Card 
      title = "Red jacket for sale"
      subTitle = "$100"
      image = {require("./app/assets/jacket.jpg")}
      />

    </View>

  );
}