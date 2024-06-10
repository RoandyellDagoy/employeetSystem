import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const StackLayout = () => {
  return (
    <Stack>
        <Stack.Screen name='add' options={{ headerShown: false}} />
        <Stack.Screen name='delete' options={{ headerShown: false}} />
    </Stack>
  )
}

export default StackLayout