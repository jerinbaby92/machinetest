import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '../utils/colors';
import { globalFonts } from '../utils/globalFonts';
import { strings } from '../utils/strings';

const cardLimit = (props) => {

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row' }}>

                <Text style={[styles.limitDesc, { flex: 1 }]}>{strings.limitdesc}</Text>

                <View style={{ justifyContent: 'space-evenly', flexDirection: 'row' }}>
                    <View style={{ width: undefined, borderRightWidth: 0.5, borderRightColor: Colors.grey, paddingRight: 10 }}>
                        <Text style={[styles.limitDesc, { color: Colors.green, fontFamily: globalFonts.SemiBold }]}>{'$' + props.spended}</Text>
                    </View>
                    <View style={{ width: undefined, borderLeftWidth: 0.5, borderLeftColor: Colors.grey, paddingLeft: 10 }}>
                        <Text style={styles.limitDesc}>{'$' + props.totalSpendLimit}</Text>
                    </View>
                </View>


            </View>
            <View style={{ width: '100%', height: 15, borderRadius: 30, backgroundColor: '#e3ffee', marginTop: 6 }}>
                <View style={{ width: (((props.spended) / (props.totalSpendLimit)) * 100), height: '100%', borderRadius: 30, backgroundColor: Colors.green }} />
            </View>
        </View>


    );
};

const styles = StyleSheet.create({

    container: {
        width: '90%',
        height: 41,
        justifyContent: 'flex-start',
        marginHorizontal: '5%'

    },
    limitDesc: {
        fontSize: 13,
        fontFamily: globalFonts.MediumFont,
        color: Colors.lightGray,

    },
    count: {

    }
});

export default cardLimit;