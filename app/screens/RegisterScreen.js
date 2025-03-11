import React from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
    AppForm, 
    AppFormField,
    AppFormPicker,
    SubmitButton
} from '../components/forms'
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().min(6).label("Name"),
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().required().min(4).label("Password")
})

function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{
                    name: "",
                    email: "",
                    password: ""
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
             >
                <AppFormField 
                    icon = "account"
                    name= "name"
                    placeholder = "Name"
                />
                <AppFormField 
                    autoCorrect = {false}
                    autoCapitalize = "none"
                    keyboardType = "email-address"
                    textContentType = "emailAddress"
                    icon = "email"
                    name= "email"
                    placeholder = "Email"
                />
                <AppFormField 
                    autoCapitalize = "none"
                    autoCorrect = {false}
                    icon = "lock"
                    secureTextEntry
                    name= "password"
                    placeholder = "Password"
                    textContentType = "password"
                />
                <SubmitButton title="Register" />
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
})

export default RegisterScreen;