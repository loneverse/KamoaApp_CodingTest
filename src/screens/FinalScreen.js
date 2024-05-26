import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomButton from '../components/CustomButton';

const FinalScreen = ({route, navigation}) => {
  const {success} = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{success ? 'Success' : 'Failure'}</Text>
      <Text style={styles.text}>
        {success
          ? 'You have successfully completed the process.'
          : 'There was an error in completing the process.'}
      </Text>
      <CustomButton
        title="Back to Start"
        onPress={() => navigation.navigate('UploadStatement')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#FFF5E5'
  },
  title: {fontSize: 24, fontWeight: 'bold'},
  text: {fontSize: 16, textAlign: 'center', marginVertical: 10},
});

export default FinalScreen;
