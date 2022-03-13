import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { strings } from '../utils/strings';
import { Colors } from '../utils/colors';
import { globalFonts } from '../utils/globalFonts';
import CardNumber from './cardNumber';
import CardInfo from './cardInfo';

const card = (props) => {

    return (
        <View style={{ height: 280, width: '100%' }}>
            <View style={{ height: 140, width: '100%' }}></View>
            <View style={{ height: 140, width: '100%', backgroundColor: Colors.white, borderTopLeftRadius: 24, borderTopRightRadius: 24 }}></View>
            <View style={styles.cardStyle}>

                <View style={styles.topRow}>
                    <TouchableOpacity style={styles.numberToggle}
                        onPress={() => props.onChangeToggle()}>
                        <Image
                            style={styles.iconStyle}
                            source={props.isShowNumber?require('../../assets/images/eye.png'):require('../../assets/images/eye_closed.png')}
                        />
                        <Text style={styles.hideshowText}>{props.isShowNumber?strings.showCardNumber:strings.hideCardNumber}</Text>

                    </TouchableOpacity>
                </View>

                <View style={styles.mainCardTemp}>

                    <View style={styles.mainCard}>
                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.companyLogo}
                                source={require('../../assets/images/company_logo.png')} />
                        </View>

                        <View>

                            <Text style={styles.cardHolder}>{props.name}</Text>

                            <View style={{ flexDirection: 'row', marginTop: '10%' }}>
                            
                                <CardNumber isSecureEntry={props.isShowNumber} data={props.cardNumber.toString().slice(0, 4)} />
                                <CardNumber isSecureEntry={props.isShowNumber} data={props.cardNumber.toString().slice(4, 8)} />
                                <CardNumber isSecureEntry={props.isShowNumber} data={props.cardNumber.toString().slice(8, 12)} />
                                <CardNumber isSecureEntry={false} data={props.cardNumber.toString().slice(12, 16)} />

                            </View>

                            <View style={{ flexDirection: 'row', marginTop: '6%' }}>

                                <View >
                                    <CardInfo label={strings.expiry} data={props.expiry} />
                                </View>

                                <View style={{ flexDirection: 'row', marginLeft: '10%' }}>
                                    <CardInfo label={strings.cvv} data={props.isShowNumber?'***':props.cvv} />
                                </View>
                            </View>

                        </View>


                        <View style={styles.imageContainer}>
                            <Image
                                style={styles.cardType}
                                source={require('../../assets/images/card_type.png')}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    cardStyle: {
        width: '90%',
        marginHorizontal: '5%',
        height: 250,
        backgroundColor: Colors.darkBlue,
        justifyContent: "flex-start",
        position: 'absolute',
        top: 0
    },
    topRow: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%',
        height: 40,

        backgroundColor: Colors.darkBlue,
    },
    numberToggle: {
        height: 30,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 12,
        backgroundColor: Colors.white,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6
    },
    iconStyle: {
        width: 16,
        height: 16

    },
    companyLogo: {
        width: 74,
        height: 21,
    },
    cardType: {
        width: 59,
        height: 20

    },
    imageContainer: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',

    },
    hideshowText: {
        fontSize: 12,
        fontFamily: globalFonts.SemiBold,
        color: Colors.green,
        marginLeft: 6

    },
    mainCard: {

        height: 220,
        justifyContent: 'center',
        paddingHorizontal: 12,
        backgroundColor: Colors.green,
        borderRadius: 10,
        paddingHorizontal: '6.5%'

    },
    mainCardTemp: {
        height: 220,
        justifyContent: 'center',
        backgroundColor: Colors.white,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10



    },
    cardHolder: {
        fontSize: 22,
        fontFamily: globalFonts.BoldFont,
        color: Colors.white,
    },



});

export default card;