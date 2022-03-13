
import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Image, FlatList } from 'react-native';
import { strings } from '../utils/strings';
import { globalFonts } from '../utils/globalFonts';
import CurrencyInfo from '../components/currencyInfo';
import { Colors } from '../utils/colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ButtonCard from '../components/buttonCard';
import { connect } from 'react-redux';
import { getSpendingLimit } from '../redux/actions/cardAction';
import AppLoader from '../components/appLoader';


class SpendingLimit extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [],
      currencyData: null,
    }
  }

  componentDidMount() {
    this.props.getSpendingLimit()
  }

  componentWillUnmount() {

  }

  goBack() {
    this.props.navigation.goBack()
  }

  onClickAmount(amount) {
    this.setState({ currencyData: amount })
  }
  onClickSave() {

    this.props.navigation.goBack();
  }
  render() {

    this.state.data = this.props.store.cardReducer.spendinglimit
    if (this.props.store.cardReducer.loading) {
      return <AppLoader />
    }

    return (
      <View style={styles.containerStyle} >

        <SafeAreaView style={styles.subContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <TouchableOpacity style={{ width: 40, justifyContent: 'flex-start', alignItems: 'flex-start' }}
              onPress={() => this.goBack()}>
              <Image style={styles.logoImage} source={require('../../assets/images/arrow_back.png')} />
            </TouchableOpacity>

            <View style={styles.logoFrame}>
              <Image style={styles.logoImage} source={require('../../assets/images/logo.png')} />
            </View>
          </View>
          <Text style={styles.cardType}>{strings.spendingLimit}</Text>

        </SafeAreaView>



        <View style={{ width: '100%', backgroundColor: Colors.white, flex: 1, borderTopLeftRadius: 24, borderTopRightRadius: 24, paddingHorizontal: 24 }}>

          <View style={{ flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', marginTop: 32, }}>

            <Image style={styles.limitIcon} source={require('../../assets/images/limit_icon.png')} />
            <Text style={styles.limitText}>{strings.weeklyLimitDesc}</Text>
          </View>

          <View style={{ marginTop: 17 }}>
            <CurrencyInfo data={this.state.currencyData} color={Colors.black} />
          </View>

          <View style={{ borderBottomColor: Colors.grey, borderBottomWidth: 0.5, marginTop: 15 }} />


          <Text style={styles.spendingDesc}>{strings.spendingDesc}</Text>

          <FlatList
            contentContainerStyle={{ flexGrow: 1 ,marginTop:32}}
            horizontal={true}
            data={this.state.data}
            extraData={this.state}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => (item.key = index.toString())}
            renderItem={({ item, index }) => {


              return (

                <View style={{ height: 40,marginRight:20 }}>
                  <ButtonCard
                    data={item.amount}
                    onClickAmount={() => this.onClickAmount(item.amount)} />
                </View>

              );
            }}
          />

          <TouchableOpacity style={[styles.buttonStyle, { backgroundColor: this.state.currencyData != null ? Colors.green : Colors.grey,marginBottom:24}]}
            disabled={this.state.currencyData != null ? false : true}
            onPress={() => this.onClickSave()}>
            <Text style={styles.buttonText}>{strings.save}</Text>
          </TouchableOpacity>

        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: Colors.darkBlue,
    justifyContent: 'center',
    alignItems: 'center'


  },
  subContainer: {
    width: '90%',
    height: 133,
    justifyContent: 'flex-start',
    marginHorizontal: '5%',

  },
  logoImage: {
    width: 26,
    height: 25

  },
  logoFrame: {
    //flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    //marginTop: 20
  },
  limitIcon: {
    width: 16,
    height: 16

  },

  cardType: {
    fontSize: 24,
    fontFamily: globalFonts.BoldFont,
    color: Colors.white,
    marginTop: 19
  },
  limitText: {
    fontSize: 14,
    fontFamily: globalFonts.MediumFont,
    color: Colors.lightGray,
    marginLeft: 12

  },
  buttonStyle: {
    width: '70%',
    height: 56,
    backgroundColor: Colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '15%',
    borderRadius: 30
  },
  buttonText: {
    fontSize: 16,
    fontFamily: globalFonts.SemiBold,
    color: Colors.white,
  },
  spendingDesc: {
    fontSize: 13,
    fontFamily: globalFonts.RegularFont,
    color: Colors.grey,
    marginTop:15,
    textAlign:'left'
  }

});


const mapStateToProps = state => ({
  store: state,
});

export default connect(mapStateToProps, {
  getSpendingLimit,
})(SpendingLimit);