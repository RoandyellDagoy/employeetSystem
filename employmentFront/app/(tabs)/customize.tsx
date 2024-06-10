import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import UpdateEmployee from '@/components/UpdateEmployee'

const customize = () => {
  return (
    <ScrollView style={{ paddingTop: 50 , backgroundColor: 'dodgerblue'}}>
        <UpdateEmployee/>
    </ScrollView>
  )
}

export default customize