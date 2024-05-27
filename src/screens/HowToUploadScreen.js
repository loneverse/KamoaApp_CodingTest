import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import CustomButton from '../components/CustomButton';

const HowToUploadScreen = ({ navigation }) => {
  const [code, setCode] = useState('');

  const handleFileSelect = () => {
    // Logic to select file from phone
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require('../assets/kamoa_logo.png')} style={styles.logo} />
      <Text style={styles.title}>How to upload your M-Pesa Statement</Text>

      <View style={styles.frame}>
        <Text style={styles.text}>
          . Dial *334#
          {'\n'}. Select 7 - My Account
          {'\n'}. Select 3 - M-PESA Statement
          {'\n'}. Select 1 - M-PESA Statement
          {'\n'}. Select 1 - Request Statement
          {'\n'}. Select 1 - Full Statement
          {'\n'}. Select 4 - 6 Months Statement
          {'\n'}. Select 1 - Enter e-mail address
          {'\n'}. Enter your M-PESA Pin to receive your statement
        </Text>

        <View style={styles.uploadFrame}>
          <Image source={require('../assets/upload_icon.png')} style={styles.uploadIcon} />
          <Text style={styles.uploadText}>Upload M-pesa Statement</Text>
          <Text style={styles.uploadSubText}>Select the M-pesa statement from your phone</Text>
          <TouchableOpacity onPress={handleFileSelect} style={styles.smallSelectButton}>
            <Text style={styles.smallSelectButtonText}>Select</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.codeText}>Enter the code you received</Text>
        <View style={styles.codeInputContainer}>
          <TextInput
            placeholder="123456"
            value={code}
            onChangeText={setCode}
            keyboardType="numeric"
            style={styles.codeInput}
            placeholderTextColor="#999"
          />
        </View>
      </View>

      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>Step 2/3</Text>
        <View style={styles.progressBar}>
          <View style={styles.progressGreen}></View>
          <View style={styles.progressOrange}></View>
        </View>
      </View>
      <CustomButton
        title="UPLOAD M-PESA STATEMENT"
        onPress={() => navigation.navigate('AcceptPermissions')}
        style={[styles.button, { backgroundColor: '#5eb784' }]}
        textStyle={{ color: '#FFF', fontWeight: 'bold' }}
      />
      <TouchableOpacity onPress={() => navigation.navigate('HowToUpload')}>
        <Text style={styles.backText}>Back to Login</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#FFF5E5'
  },
  title: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    marginTop: -15,
    fontFamily: 'Roboto'
  },
  logo: {
    width: 200,
    height: 50,
    marginVertical: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  frame: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: '#ECB64D',
    borderWidth: 2,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Roboto',
    textAlign: 'left',
    lineHeight: 24,
  },
  codeText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  codeInputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#CCC',
  },
  codeInput: {
    height: 40,
    fontSize: 16,
    textAlign: 'left',
  },
  uploadFrame: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  uploadIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  uploadText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  uploadSubText: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  smallSelectButton: {
    backgroundColor: '#ECB64D',
    padding: 8,
    borderRadius: 10,
    marginTop: 10,
  },
  smallSelectButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
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
    width: '70%',
    backgroundColor: '#5eb784',
  },
  progressOrange: {
    width: '30%',
    backgroundColor: '#ECB64D',
  },
  button: {
    marginTop: 20,
  },
  backText: {
    color: '#000000',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default HowToUploadScreen;
