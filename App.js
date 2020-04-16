import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  FlatList,
} from 'react-native';
import Constants from 'expo-constants';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setcourseGoals] = useState([]);
  const [addMode, setAddMode] = useState(false);

  const addGoalHandler = enteredGoal => {
    if(enteredGoal == '')
      return;
    setcourseGoals(currentGoals => [
      ...currentGoals,
      { key: Math.random().toString(), value: enteredGoal },
    ]);
    setAddMode(false);
  };
  const onDelete = key => {
    setcourseGoals(currentGoals => {
      return courseGoals.filter(goal => goal.key !== key);
    });
  };
  const cancelHandler = () => {
    setAddMode(false)
  };


  return (
    <View style={styles.screen}>
    <Button title="ADD" onPress={() => setAddMode(true)}/>
      <GoalInput visible={addMode} addGoalHandler={addGoalHandler} cancelHandler={cancelHandler} />
      <FlatList
        data={courseGoals}
        renderItem={goal => <GoalItem goal={goal} onDelete={onDelete}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
