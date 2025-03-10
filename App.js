import { Switch, Text, TextInput } from 'react-native';
import Screen from './app/components/Screen';
import { useState } from 'react';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

const categories = [
  {
    label: "Furniture",
    value: 1
  },
  {
    label: "Clothing",
    value: 2
  },
  {
    label: "Cameras",
    value: 3
  },
]

export default function App() {

  const [isNew, setIsNew] = useState(false);

  return (
    <Screen>
      <AppPicker items = {categories} icon = "apps" placeholder={'Category'}/>
      <AppTextInput icon= "email" placeholder='Email'/>
    </Screen>
  );
}