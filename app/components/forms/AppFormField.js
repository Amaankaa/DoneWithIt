import React from 'react';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik';
import AppTextInput from '../AppTextInput';

function AppFormField({width, name, ...otherProps}) {

    const{setFieldTouched, handleChange, errors, touched} = useFormikContext();

    return (
        <>
            <AppTextInput
                        onBlur = {() => setFieldTouched(name)}
                        onChangeText = {handleChange(name)}
                        width = {width}
                        {...otherProps}
                    />
            <ErrorMessage visible={touched[name]} error={errors[name]}/>
        </>
    );
}

export default AppFormField;