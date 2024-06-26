import React,{useContext} from 'react';
import { StyleSheet, TouchableOpacity, Text, View, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemeContext } from '../components/ThemeContext';

const HomeScreen = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <SafeAreaView style={styles.HomeScreen}>
      <View style={styles.profileContainer}>
        <View style={styles.profileSection}>
          <Image source={require('../assets/profile.png')} style={styles.profile} />
          <View style={styles.textSelection}>
            <Text style={styles.welcome}>Welcome Back,</Text>
            <Text style={styles.cole}>Cole World</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.search}>
          <Ionicons name="search" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <Image source={require('../assets/Card.png')} style={styles.Card} />
      <View style={styles.activity}>
        <TouchableOpacity><Image source={require('../assets/send.png')} style={styles.send} /><Text style={styles.sent}>Sent</Text></TouchableOpacity>
        <TouchableOpacity><Image source={require('../assets/recieve.png')} style={styles.recieve} /><Text style={styles.recieve}>Receive</Text></TouchableOpacity>
        <TouchableOpacity><Image source={require('../assets/loan.png')} style={styles.loan} /><Text style={styles.sent}>Loan</Text></TouchableOpacity>
        <TouchableOpacity><Image source={require('../assets/topUp.png')} style={styles.topup} /><Text style={styles.sent}>Topup</Text></TouchableOpacity>
      </View>
      <View style={styles.transactionHeader}>
        <TouchableOpacity><Text style={styles.Transaction}>Transaction</Text></TouchableOpacity>
        <TouchableOpacity><Text style={styles.SeelAll}>Sell All</Text></TouchableOpacity>
      </View>
      <View style={styles.transactions}>
        <Image source={require("../assets/apple.png")} style={styles.iconCircle} />
        <View>
          <Text style={styles.Name}>Apple Store</Text>
          <Text style={styles.deatils}>Entertainment</Text>
        </View>
        <Text style={styles.amount}>-$5,99</Text>
      </View>
      <View style={styles.transactions}>
        <Image source={require("../assets/spotify.png")} style={styles.iconCircle} />
        <View>
          <Text style={styles.Name}>Spotify </Text>
          <Text style={styles.deatils}>Music</Text>
        </View>
        <Text style={styles.amount}>-$12,99</Text>
      </View>
      <View style={styles.transactions}>
        <Image source={require("../assets/moneyTransfer.png")} style={styles.iconCircle} />
        <View>
          <Text style={styles.Name}>Money Transfer</Text>
          <Text style={styles.deatils}>Transaction</Text>
        </View>
        <Text style={styles.amount300}>$3,00</Text>
      </View>
      <View style={styles.transactions}>
        <Image source={require("../assets/grocery.png")} style={styles.iconCircle} />
        <View>
          <Text style={styles.Name}>Grocery</Text>
          <Text style={styles.deatils}>Shopping</Text>
        </View>
        <Text style={styles.amount}>-$88</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  HomeScreen: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'white',
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginHorizontal: -100,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSelection: {
    flexDirection: 'column',
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  welcome: {
    fontSize: 16,
    color: '#7e7e7e',
  },
  cole: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  search: {
    backgroundColor: '#f1f1f1',
    padding: 8,
    borderRadius: 20,
  },
  Card: {
    backgroundColor: '#1f1f2e',
    borderRadius: 12,
    padding: 16,
    marginVertical: 16,
    alignItems: 'center',
  },
  activity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  send: {
    backgroundColor: '#f1f1f1',
    height: 20,
    borderRadius: 20,
  },
  recieve: {
    backgroundColor: '#f1f1f1',
    height: 20,
    borderRadius: 20,
  },
  loan: {
    backgroundColor: '#f1f1f1',
    borderRadius: 40,
    width: 10,
    padding: 13,
  },
  topup: {
    backgroundColor: '#f1f1f1',
    borderRadius: 30,
    width: 10,
    padding: 13,
  },
  Transaction: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  SeelAll: {
    color: "blue",
  },
  transactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  iconCircle: {
    backgroundColor: '#f1f1f1',
    padding: 10,
    size: 24,
    borderRadius: 25,
  },
  Name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 87,
  },
  deatils: {
    color: 'gray',
    marginRight: 87,
  },
  amount: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount300: {
    color: "blue",
  },
});

export default HomeScreen;
