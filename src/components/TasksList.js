import React from 'react'
import { FlatList, Image, TouchableOpacity, View, Text, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Feather"

import { ItemWrapper } from './ItemWrapper'
import trashIcon from '../assets/icons/trash.png'


export function TasksList({ myTasks, toggleTaskDone, removeTask , done}) {
  return (
    <FlatList
      data={myTasks}
      keyExtractor={item => item.id}
      contentContainerStyle={{ paddingBottom: 24, paddingTop: 30 }}
      showsVerticalScrollIndicator={false}
      renderItem={({ item, index }) => {
        return (
          <ItemWrapper index={index}>
            <View>
              <TouchableOpacity
                // testID={`button-${index}`}
                activeOpacity={0.7}
                style={styles.taskButton}
                onPress={() => toggleTaskDone(item.id, item.done)}
              >
                <View
                  // testID={`maker-${index}`}
                  style={item.done === false ? styles.taskText : styles.taskTextDone}
                >
                  {done && (
                    <Icon
                      name="check"
                      size={12}
                      color="#FFF"
                    />
                  )}

                </View>

                <Text
                  style={item.done === false ? styles.taskText : styles.taskTextDone}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{ paddingHorizontal: 24 }}
              onPress={() => removeTask(item.id) }
            >
              <Image
                source={trashIcon}
              />
            </TouchableOpacity>
          </ItemWrapper>
        )
      }}
    />

  )
}

const styles = StyleSheet.create({
  taskButton: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 15,
    marginBottom: 4,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: "center",
  },
  taskMarker: {
    height: 16,
    width: 16,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#B2B2B2',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  taskText: {
    color: '#666',
    fontFamily: 'Inter-Medium',
  },
  taskMarkerDone: {
    height: 16,
    width: 16,
    borderRadius: 4,
    backgroundColor: '#1DB863',
    marginRight: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskTextDone: {
    color: '#1DB863',
    textDecorationLine: 'line-through',
    fontFamily: 'Inter-Medium',
  }
})