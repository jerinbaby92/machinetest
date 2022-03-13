
import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, FlatList, Image, StatusBar } from 'react-native';
import { strings } from '../utils/strings';
import Card from '../components/card';
import { globalFonts } from '../utils/globalFonts';
import CardOptions from '../components/cardOptions';
import CurrencyInfo from '../components/currencyInfo';
import { Colors } from '../utils/colors';
import { ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { getDebitCard } from '../redux/actions/cardAction';
import AppLoader from '../components/appLoader'
import CardLimit from '../components/cardLimit';
class DebitCard extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isShowNumber: false,
      isShowSpendingLimit:false,
      optionsList: [{ "id": 1, "title": strings.topupTitle, "desc": strings.topupDesc, "imageType": 1, "isToggleAvailable": false, "clickEnabled": false },
      { "id": 2, "title": strings.spendingTitle, "desc": strings.spendingDesc, "imageType": 2, "isToggleAvailable": true, "clickEnabled": true },
      { "id": 3, "title": strings.freezeTitle, "desc": strings.freezeDesc, "imageType": 3, "isToggleAvailable": true, "clickEnabled": false },
      { "id": 4, "title": strings.newcardTitle, "desc": strings.newcardDesc, "imageType": 4, "isToggleAvailable": false, "clickEnabled": false },
      { "id": 5, "title": strings.deactivateTitle, "desc": strings.deactivateDesc, "imageType": 5, "isToggleAvailable": false, "clickEnabled": false }]

    }
  }

  componentDidMount() {
    this.props.getDebitCard()
  }

  componentWillUnmount() {

  }

  gotoSpendingLimit() {
    this.props.navigation.navigate(
      'SpendingLimit'
    );

  }

  onChangeToggle() {
    this.setState({ isShowNumber: !this.state.isShowNumber })
  }

  render() {

    this.state.data = this.props.store.cardReducer.debitcard
    if (this.props.store.cardReducer.loading) {
      return <AppLoader />
    }

    return (
      <SafeAreaView style={styles.containerStyle}>
        <StatusBar
          animated={true}
          backgroundColor={Colors.darkBlue}
          barStyle={'light-content'} />

        <View style={styles.subContainer}>
          <View style={styles.logoFrame}>
            <Image style={styles.logoImage} source={require('../../assets/images/logo.png')} />
          </View>

          <Text style={styles.cardType}>{strings.debitCard}</Text>

          <Text style={styles.balanceText}>{strings.balance}</Text>

          <View style={{ flexDirection: 'row', marginTop: 10, alignItems: 'center' }}>

            <CurrencyInfo data={this.state.data[0].availablebalance} color={Colors.white} />

          </View>

        </View>

        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}
          bounces={false}>

          <View style={{ height: 173 }} />
          <View style={{ width: '100%', alignItems: 'center', }}>
            <Card
              name={this.state.data[0].name}
              cardNumber={this.state.data[0].cardnumber}
              expiry={this.state.data[0].expiredate}
              cvv={this.state.data[0].cvv}
              isShowNumber={this.state.isShowNumber}
              onChangeToggle={() => this.onChangeToggle()} />
          </View>



          {this.state.isShowSpendingLimit?(<View style={{ width: '100%', backgroundColor: 'white', paddingTop: 26 }}>
            <CardLimit 
            spended={this.state.data[0].spended}
            totalSpendLimit={this.state.data[0].spendlimt}/>
          </View>):null}

          <View style={{ width: '100%', backgroundColor: Colors.white, }}>

            <View style={{ width: '90%', marginHorizontal: '5%', paddingBottom: 100 }}>

              <FlatList
                data={this.state.optionsList}
                extraData={this.state}
                scrollEnabled={false}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item, index) => (item.key = index.toString())}
                renderItem={({ item }) => {


                  return (
                    <View style={{ marginTop: 32, width: '100%' }}>
                      <CardOptions
                        title={item.title}
                        desc={item.desc}
                        imageType={item.imageType}
                        isToggleAvailable={item.isToggleAvailable}
                        clickEnabled={item.clickEnabled}
                        onClickCardOption={() => this.gotoSpendingLimit()} />
                    </View>
                  );
                }}
              />
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.darkBlue,
  },
  subContainer: {
    width: '90%',
    justifyContent: 'center',
    marginHorizontal: '5%',
    position: 'absolute',
    zIndex: -1,
    top: 36
  },
  logoImage: {
    width: 26,
    height: 25

  },
  logoFrame: {
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 36
  },
  cardType: {
    fontSize: 24,
    fontFamily: globalFonts.BoldFont,
    color: Colors.white,
  },
  balanceText: {
    fontSize: 14,
    fontFamily: globalFonts.MediumFont,
    color: Colors.white,
    marginTop: 24
  },

  statusbarStyle: {
    height: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darkBlue,
  },


});



const mapStateToProps = state => ({
  store: state,
});

export default connect(mapStateToProps, {
  getDebitCard,
})(DebitCard);