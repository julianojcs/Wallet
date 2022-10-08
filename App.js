/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {
  Text,
  Switch,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const [balance, setBalance] = useState(0);
  const [value, setValue] = useState('');

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const handleWithdraw = () => {
    if (value) {
      const temp = parseFloat(value);
      if (temp < balance) {
        setBalance(prev => prev - temp);
        setValue(0.00);
      } else {
        alert('Insufficient balance');
      }
    } else {
      alert('Please enter amount');
    }
  };

  const handleDeposit = () => {
    if (value) {
      const temp = parseFloat(value);
      setBalance(balance + temp);
      setValue('');
    } else {
      alert('Please enter amount');
    }
  };

  return (
    <View style={sectionWrapper}>
      <Text>Digital Wallet</Text>
      <View style={sectionContainer}>
        <View style={sectionHeader}>
          <Text style={sectionHeaderText}>Your Balance:</Text>
          <Switch
            style={sectionSwitch}
            onValueChange={toggleSwitch}
            value={isEnabled}
            trackColor={{true: 'red', false: 'grey'}}
          />
        </View>
        {isEnabled ? (
          <Text style={sectionBalance}>$ {balance}</Text>
        ) : (
          <Text style={sectionBalance}>$ --</Text>
        )}
        <TextInput
          style={sectionInput}
          placeholder="0.00"
          value={value}
          onChangeText={text => setValue(text)}
          keyboardType="numeric"
        />
        <View style={sectionButtons}>
          <TouchableOpacity
            style={sectionButton}
            onPress={() => handleDeposit()}>
            <Text style={sectionButtonText}>Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={sectionButton}
            onPress={() => handleWithdraw()}>
            <Text style={sectionButtonText}>Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionWrapper: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: '#1976d2',
    borderRadius: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  sectionHeaderText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  sectionSwitch: {
    transform: [{scaleX: 1.2}, {scaleY: 1.2}],
  },
  sectionBalance: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  sectionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  sectionButton: {
    backgroundColor: '#01579b',
    justifyContent: 'center',
    width: 100,
    padding: 12,
    margin: 16,
    borderRadius: 8,
  },
  sectionButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#fff',
    textAlign: 'center',
  },
  sectionInput: {
    backgroundColor: '#fff',
    padding: 12,
    marginVertical: 16,
    borderRadius: 8,
    fontSize: 24,
  },
});

const sectionWrapper = StyleSheet.compose(styles.sectionWrapper);
const sectionContainer = StyleSheet.compose(styles.sectionContainer);
const sectionHeader = StyleSheet.compose(styles.sectionHeader);
const sectionHeaderText = StyleSheet.compose(styles.sectionHeaderText);
const sectionSwitch = StyleSheet.compose(styles.sectionSwitch);
const sectionBalance = StyleSheet.compose(styles.sectionBalance);
const sectionButton = StyleSheet.compose(styles.sectionButton);
const sectionButtons = StyleSheet.compose(styles.sectionButtons);
const sectionButtonText = StyleSheet.compose(styles.sectionButtonText);
const sectionInput = StyleSheet.compose(styles.sectionInput);

export default App;
