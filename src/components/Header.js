import React from 'react'
import {View,Text,StyleSheet, Image} from 'react-native'

import logoImg from "../assets/logo/logo.png"


export function Header({taskCounter}) {
  return (
    <View style={styles.container}>
      <Image source={logoImg}/>

      <View style={styles.tasks}>
        <Text styles={styles.tasksCounter}> Você tem</Text>
        <Text style={styles.tasksCounterBold}> {taskCounter ? taskCounter : "0"} {taskCounter === 1 ? "tarefa" : "tarefas"} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
container: {
  paddingTop: 60,
  paddingHorizontal: 24,
  paddingBottom: 60,
  backgroundColor: "#8257E5",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row"
},
tasks: {
alignItems: "center",
flexDirection: "row",
},
tasksCounter: {
  fontSize: 15,
  color: '#FFF',
  fontFamily: "Inter-Regular"
},
tasksCounterBold: {
  fontSize: 15,
  color: "#FFF",
  fontFamily: "Inter-Bold"
}

})