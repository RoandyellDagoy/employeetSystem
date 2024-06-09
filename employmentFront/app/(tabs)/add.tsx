import { View, Text, ScrollView, SafeAreaView, Button, StyleSheet } from 'react-native'
import React from 'react'
import AddEmployee from '@/components/AddEmployee'
const explore = () => {
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView style={styles.content}>
        <AddEmployee/>
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'dodgerblue'
  },
  content:{
    backgroundColor: ''
  }
})


export default explore