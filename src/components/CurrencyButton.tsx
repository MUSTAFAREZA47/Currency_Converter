import {StyleSheet, Text, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};

export default CurrencyButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: '#FFFFFF',
    // margin: 8,
    // paddingHorizontal: 20,
    // paddingVertical: 10,
    borderRadius: 12, // Rounded corners
    shadowColor: '#000', // Shadow for iOS
    shadowOffset: {width: 0, height: 2}, // Shadow offset
    shadowOpacity: 0.2, // Shadow transparency
    shadowRadius: 5, // Shadow blur radius
    elevation: 5, // Shadow for Android
    borderWidth: 1,
    borderColor: '#E1E8EB',
  },
  flag: {
    fontSize: 28, // Larger font size for the flag
    // marginBottom: 5,
  },
  text: {
    fontWeight: '600', // Slightly bolder text
    fontSize: 16, // Slightly larger font size
    color: '#34495E', // Darker color for better readability
  },
});
