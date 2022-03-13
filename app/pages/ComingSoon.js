
import React, { Component } from 'react';
import { Text, SafeAreaView, StyleSheet } from 'react-native';
import { strings } from '../utils/strings';
import { globalFonts } from '../utils/globalFonts';
import { Colors } from '../utils/colors';

class ComingSoon extends Component {

  constructor(props) {
    super(props)
    this.state = {
      data: [1, 2, 3]
    }
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {

    return (
      <SafeAreaView style={styles.containerStyle}>



        <Text style={styles.limitText}>{strings.comingSoon}</Text>


      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'

  },

  limitText: {
    fontSize: 14,
    fontFamily: globalFonts.MediumFont,
    color: Colors.black,
   

  },


});

export default ComingSoon;