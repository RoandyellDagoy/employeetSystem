import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import RemoveEmployee from '@/components/RemoveEmployee'
import { router } from 'expo-router'

const DeleteScreen = () => {
  return (
    <View style={styles.container}>
        <View style={{marginBottom: 10}}>
            <Pressable onPress={() => router.back()}>
                <Text>Back</Text>
            </Pressable>
        </View>
        <RemoveEmployee />
    </View>
  )
}

export default DeleteScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: 'dodgerblue'
    }
})