import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

const GoalItem = props => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.goal.item.key)}>
      <View style={styles.inputItem}>
        <Text>{props.goal.item.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  inputItem: {
    backgroundColor: '#E8E8E8',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 10,
    marginTop: 10,
  },
});
export default GoalItem;
