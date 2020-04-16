import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Modal } from 'react-native';

const GoalInput = props => {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = enteredText => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.addGoalHandler(enteredGoal);
    setEnteredGoal('');
  };
  return (
    <Modal visible={props.visible}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttons}>
        <Button title="ADD" onPress={addGoalHandler} />
        <Button title="CANCEL" onPress={props.cancelHandler} color="red"/>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    padding: 10,
    margin: 10,
    borderColor: 'black',
    borderWidth: 1,
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  buttons : {
    flexDirection : 'row',
    justifyContent : 'space-between',
    alignItems : 'left'
  }
});
export default GoalInput;
