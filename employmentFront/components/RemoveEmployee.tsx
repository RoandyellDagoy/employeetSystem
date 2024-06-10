import { View, Text, Button , TextInput, StyleSheet} from 'react-native'
import React, { useState } from 'react'
import axios from 'axios';
import { useNavigation } from 'expo-router';

const RemoveEmployee = () => {
    const navigation = useNavigation()

    const [id, setId] = useState('');

    const handleRemove = async() => {
        const parsedId = parseInt(id)

        try{
            const response  = await axios.delete(`/api/removeEmployee/${parsedId}`)
            if(response.status>=200 || response.status <= 300){
                console.log("deleted")

            setId('');
            }
        }catch(error:any){
            console.log(error.message)
        }
    };


  return (
    <View style={styles.container}>
      <View style={{width: "100%", borderColor: "gray", borderWidth: 1, alignItems: 'center', marginBottom: 30}}>
      <TextInput 
      placeholder='Enter ID to delete' 
      value={id} onChangeText={setId}/>
      </View>

      <View>
      <Button
      title='Remove Employee' 
      onPress={handleRemove}
      />
      </View>

    </View>

  )
}
export default RemoveEmployee

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 15,
    borderBlockEndColor: 'black',
    backgroundColor: 'dodgerblue'
  }
})