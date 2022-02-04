import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
} from 'react-native';
import TaskList from '../../components/molecules/tasklist/index';

const Task = () => {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const onChange = (text) => {
    setTask(text);
  }

  const addTask = () => {
    setTaskList([...taskList, {id: Math.random(), task}]);
    setTask('');
    
  }

  const deleteTask = (id) =>{
    setTaskList(taskList.filter(task => task.id !== id));
  }

  //console.warn(taskList);

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput 
          autoFocus
          style={styles.textInput} 
          placeholder='name a tasks' 
          onChangeText={(text) => onChange(text)}
          value={task} 
        />
        <Button 
          onPress={() => addTask()}
          title='Send' 
          color='#9191E9'
          disabled={task.trim().length === 0}
        />
      </View >
        <View style={styles.taskListContainer}>
          <Text style={styles.taskListTitle}>Task List</Text>
          {taskList.length > 0 ? (
            <FlatList
              keyExtractor={(item) => item.id.toString()}
              refreshing={true}
              data={taskList}
              renderItem={({item}) => <TaskList task={item} deleteTask={deleteTask}/>}
            
            />
          ):(
            <Text>No tasks yet</Text>
          )}
        </View>
    </SafeAreaView> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
  },

  formContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent:'space-around',
    alignItems:'center',
  },

  textInput : {
    flex: 0.8,
    borderBottomWidth:1,
    boderBottomColor:'#cccccc'
  },

  taskListTitle : {
    fontSize: 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  taskListContainer :{ 
   paddingHorizontal: 40,
   marginTop: 20,   
  },
  delete : {
    backgroundColor: 'red',
    alignItems:'center',
    width:20,
    height:20,
    marginHorizontal:10,
    margin:10,
    color:'#ffffff',
  }

});

export default Task;
