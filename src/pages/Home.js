import React, { useState } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Header } from '../components/Header'
import { Input } from '../components/Input'
import { TasksList } from '../components/TasksList'


export function Home() {
  const [newTasks, setNewTasks] = useState('')
  // const [done, setDone] = useState(false)
  const [myTasks, setMyTasks] = useState([])

  function handleNewStaks() {
    const data = {
      id: myTasks.length + 1,
      name: newTasks,
      done: false,
    }

    setMyTasks(allTasks => [...allTasks, data])
    setNewTasks("")
  }

  function handleToggleTaskDone(id, done) {

    let newTasks = [...myTasks]

   for(let i in newTasks) {
     if(newTasks[i].id === id) {
       newTasks[i].done = !done;
     }
   }
   setMyTasks(newTasks)
   
  }

  function handleRemovetasks(id) {
    setMyTasks(allTasks => allTasks.filter( 
      task => task.id !== id ))
  }


  return (
    <>
      <View style={styles.container}>
        <Header taskCounter={myTasks.length} />

        <Input
          addTasks={setNewTasks}
          handleNewStaks={handleNewStaks}
        />
        

        <TasksList
          myTasks={myTasks}
          toggleTaskDone={handleToggleTaskDone}
          removeTask={handleRemovetasks}
          
        />


      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EBEBEB",
  }
}) 
