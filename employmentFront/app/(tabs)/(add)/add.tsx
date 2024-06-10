  import { View, Text, ScrollView, SafeAreaView, Button, StyleSheet } from 'react-native'
  import React from 'react'
  import AddEmployee from '@/components/AddEmployee'
  import { useRouter } from 'expo-router'
  import {Stack, useNavigation} from 'expo-router'
  import { useEffect } from 'react'
  import { Link } from 'expo-router'

  const explore = () => {
    
    const router = useRouter();
    const navigation = useNavigation();

    useEffect(()=> {
      navigation.setOptions({headerShown: false});
    }, [navigation])


    return (
     <View style={{flex: 1, backgroundColor: 'dodgerblue'}}>
              <AddEmployee/>

              <View style={{alignItems: 'center'}}>
              <Link push href={"/delete"}>Remove Employee?</Link>
              </View>
     </View>
    )
  }

  const styles = StyleSheet.create({
    container:{
      backgroundColor: 'dodgerblue'
    },
    content:{
      
    }
  })


  export default explore