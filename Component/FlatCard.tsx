//rnfs Shortcut
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Card</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>🤍</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>🤍</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>🤍</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100, // can be in '10%'
    height: 100,
    borderRadius: 8,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#d62839',
  },
  cardTwo: {
    backgroundColor: '#039963',
  },
  cardThree: {
    backgroundColor: '#1461fa',
  },
});
