import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { Colors } from '../utils/colors';
import { globalFonts } from '../utils/globalFonts';

const cardOptions = (props) => {

    function getImage(imageType) {

        switch (imageType) {
            case 1: return <Image style={styles.optionImage} source={require('../../assets/images/topup.png')} />
            case 2: return <Image style={styles.optionImage} source={require('../../assets/images/spend_limit.png')} />
            case 3: return <Image style={styles.optionImage} source={require('../../assets/images/freeze.png')} />
            case 4: return <Image style={styles.optionImage} source={require('../../assets/images/new_card.png')} />
            case 5: return <Image style={styles.optionImage} source={require('../../assets/images/deactivate.png')} />
        }
    }

    return (
        <TouchableOpacity style={styles.mainCard}
            disabled={!props.clickEnabled}
            onPress={() => props.onClickCardOption()}>
            <View style={{}}>
                {getImage(props.imageType)}
            </View>
            <View style={{ flex: 1, marginHorizontal: '3%' }}>
                <Text style={styles.optionTitle}>{props.title}</Text>
                <Text style={styles.optionDetails}>{props.desc}</Text>
            </View>

            <View>
                {props.isToggleAvailable ? <Image style={styles.toggleImage} source={require('../../assets/images/toggle.png')} /> :
                    <View style={styles.toggleImage}></View>}
            </View>
        </TouchableOpacity>



    );
};

const styles = StyleSheet.create({
    mainCard: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        minHeight: 42,
        backgroundColor: Colors.white
    },
    optionTitle: {
        fontSize: 14,
        fontFamily: globalFonts.MediumFont,
        color: Colors.mainTextColor,

    },
    optionDetails: {
        fontSize: 13,
        fontFamily: globalFonts.RegularFont,
        color: Colors.lightGray,
        opacity: 0.4,
        marginTop: 2
    },
    optionImage: {
        width: 32,
        height: 32
    },
    toggleImage: {
        width: 34,
        height: 20

    },
});

export default cardOptions;