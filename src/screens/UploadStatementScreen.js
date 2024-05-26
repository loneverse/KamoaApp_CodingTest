import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import CustomButton from '../components/CustomButton';

const UploadStatementScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/kamoa_logo.png')} style={styles.logo} />
      <Text style={styles.title}>Upload a 6 month M-Pesa Statement</Text>
      <Image source={require('../assets/upload_statement.png')} style={styles.image} />
      <Text style={styles.text}>
        <Text style={styles.boldText}>Unlock the power of Kamoa with your M-Pesa</Text>
      </Text>
      <Text style={styles.subText}>
        Get access to the marketplace and help lenders see the real you by uploading a six month m-pesa statement
      </Text>
      <View style={styles.separator} />
      <Text style={styles.text}>
        <Text style={styles.boldText}>Get insights on your spending habits</Text>
      </Text>
      <Text style={styles.subText}>
        Kamoa helps you understand your spending and track your finances every time you upload a statement
      </Text>
      <View style={styles.separator} />
      <Text style={styles.text}>
        <Text style={styles.boldText}>Secure a higher loan limit</Text>
      </Text>
      <Text style={styles.subText}>
        Users that share more information get access to higher loan limits with flexible payments and low interest rates
      </Text>
      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>Step 1/3</Text>
        <View style={styles.progressBar}>
          <View style={[styles.progressGreen, { width: '33.33%' }]}></View>
          <View style={[styles.progressOrange, { width: '66.67%' }]}></View>
        </View>
      </View>
      <CustomButton
        title="NEXT"
        onPress={() => navigation.navigate('HowToUpload')}
        style={styles.button}
      />
      <TouchableOpacity onPress={() => navigation.navigate('HowToUpload')}>
              <Text style={styles.backText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF5E5',
  },
  logo: {
    width: 200,
    height: 50,
    marginVertical: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Roboto',
    marginVertical: 5,
  },
  subText: {
    fontSize: 12,
    textAlign: 'center',
    marginVertical: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  separator: {
    width: '80%',
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  progressContainer: {
    alignItems: 'center',
    marginVertical: 10,
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
  progressOrange: {
    backgroundColor: '#ECB64D',
  },
  button: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  backText: {
    color: '#000000',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default UploadStatementScreen;
