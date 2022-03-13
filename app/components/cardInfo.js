import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '../utils/colors';
import { globalFonts } from '../utils/globalFonts';

const cardInfo = (props) => {

    return (
        <View style={{ flexDirection: 'row' }}>
            <Text style={styles.cardDetails}>{props.label}</Text>
            <Text style={[styles.cardDetails, { marginLeft: 4 }]}>{props.data}</Text>
        </View>



    );
};

const styles = StyleSheet.create({

    cardDetails: {
        fontSize: 13,
        fontFamily: globalFonts.SemiBold,
        color: Colors.white,

    }
});

export default cardInfo;