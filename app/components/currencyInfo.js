import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { strings } from '../utils/strings';
import { Colors } from '../utils/colors';
import { globalFonts } from '../utils/globalFonts';

const currencyInfo = (props) => {

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
            <View style={styles.currencyFrame}>
                <Text style={styles.currencyText}>{strings.currency}</Text>
            </View>

            <View style={{ marginLeft: '2.7%' }}>
                <Text style={[styles.amount,{color:props.color}]}>{props.data!=null?parseInt(props.data).toLocaleString():''}</Text>
            </View>

        </View>


    );
};

const styles = StyleSheet.create({
    currencyText: {
        fontSize: 12,
        fontFamily: globalFonts.BoldFont,
        color: Colors.white,
    },
    currencyFrame: {
        height: 22,
        backgroundColor: Colors.green,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 13
    },
    amount: {
        fontSize: 24,
        fontFamily: globalFonts.BoldFont,
        color: Colors.white,
    },

});

export default currencyInfo;