import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import CustomButton from '../components/CustomButton';

const AcceptPermissionsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/kamoa_logo.png')} style={styles.logo} />
      <Text style={styles.title}>Accept permissions</Text>
      <Image source={require('../assets/permissions.png')} style={styles.image} />

      <View style={styles.textBlock}>
        <Text style={styles.boldText}>Personal info</Text>
        <Text style={styles.text}>We collect personal info to prevent fraud and also protect you from it. i.e. Phone number, email, name</Text>
      </View>
      <View style={styles.separator} />

      <View style={styles.textBlock}>
        <Text style={styles.boldText}>Approximate location</Text>
        <Text style={styles.text}>We look at the approximate location to help us show you relevant information.</Text>
      </View>
      <View style={styles.separator} />

      <View style={styles.textBlock}>
        <Text style={styles.boldText}>App info and performance</Text>
        <Text style={styles.text}>Our app runs in many devices and this helps us optimize for every type of device.</Text>
      </View>
      <TouchableOpacity onPress={() => Linking.openURL('https://play.google.com')}>
        <Text style={styles.linkText}>Get more info from Google Play</Text>
      </TouchableOpacity>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>Step 3/3</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressGreen, { width: '100%' }]}></View>
        </View>
      </View>

      <CustomButton
        title="ACCEPT & CONTINUE"
        onPress={() => navigation.navigate('Final', { success: true })}
        style={styles.button}
      />
      <TouchableOpacity onPress={() => navigation.navigate('HowToUpload')}>
        <Text style={styles.backText}>Deny Access</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF5E5',
    justifyContent: 'center',
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    marginTop: -15,
    fontFamily: 'Roboto'
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginVertical: 10,
  },
  textBlock: {
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    textAlign: 'left',
    marginVertical: 5,
    lineHeight: 20,
    fontFamily: 'Roboto'
  },
  boldText: {
    fontWeight: 'bold',
    textAlign: 'left',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 5,
    width: '100%',
  },
  linkText: {
    color: '#000',
    textAlign: 'left',
    textDecorationLine: 'underline',
    marginVertical: 5,
  },
  button: {
    marginTop: 10,
  },
  logo: {
    width: 200,
    height: 50,
    marginVertical: 10,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  progressContainer: {
    alignItems: 'center',
    marginVertical: 5,
  },
  progressLabel: {
    fontSize: 12,
    color: '#000',
    marginBottom: 5,
  },
  progressBar: {
    flexDirection: 'row',
    width: '40%',
    height: 10,
    borderRadius: 5,
    backgroundColor: '#E0E0E0',
    overflow: 'hidden',
  },
  progressGreen: {
    backgroundColor: '#5eb784',
  },
  backText: {
    color: '#000000',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default AcceptPermissionsScreen;
