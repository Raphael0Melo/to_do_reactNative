import React from "react"
import { View, StyleSheet } from "react-native"
import LinearGradient from "react-native-linear-gradient"


export function ItemWrapper({ index, children }) {
  if (index % 2 === 0)
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['rgba(196,196,196,0.24)', 'rgba(196,196,196,0)']}
        style={{ flex: 1, flexDirection: "row", alignItems: "center", justifyContent: 'space-between', paddingHorizontal: 24 }}
      >
        {children}
      </LinearGradient>
    )
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24
  }
})