import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import AddEmployee from '@/components/AddEmployee'

const explore = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <AddEmployee/>
      </SafeAreaView>
    </ScrollView>
  )
}

export default explore