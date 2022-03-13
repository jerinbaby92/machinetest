import React from 'react';
import { StyleSheet,Text, TouchableOpacity } from 'react-native';
import { strings } from '../utils/strings';
import { Colors } from '../utils/colors';
import { globalFonts } from '../utils/globalFonts';

const buttonCard = (props) => {

    return (

        <TouchableOpacity style={styles.currencyFrame}
        onPress={()=>props.onClickAmount()}>
            <Text style={styles.currencyText}>{strings.currency} {props.data}</Text>
        </TouchableOpacity>




    );
};

const styles = StyleSheet.create({
    currencyText: {
        fontSize: 12,
        fontFamily: globalFonts.SemiBold,
        color: Colors.green,
    },
    currencyFrame: {
        width: '100%',
        flex: 1,
        height: 40,
        backgroundColor: '#e3ffee',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal:20

    },


});

export default buttonCard;