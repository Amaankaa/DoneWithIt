import React from 'react';
import { Text } from 'react-native';
import defaultStyles from '../config/styles';
function AppText({children, style, ...otherPros}) {
    return (
        <Text style = {[defaultStyles.text, style]} {...otherPros}>{children}</Text>
    );
}

export default AppText;