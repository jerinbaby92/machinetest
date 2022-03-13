import React from 'react';
import { StyleSheet, View, TextInput } from 'react-native';
import { Colors } from '../utils/colors';
import { globalFonts } from '../utils/globalFonts';

const cardNumber = (props) => {

    return (
        <View>
            <TextInput
                style={[styles.cardNumber, { marginRight: '3.5%' }]}
                editable={false}
                secureTextEntry={props.isSecureEntry}>{props.data}</TextInput>
        </View>


    );
};

const styles = StyleSheet.create({

    cardNumber: {
        fontSize: 15,
        fontFamily: globalFonts.SemiBold,
        color: Colors.white,
    },

});

export default cardNumber;