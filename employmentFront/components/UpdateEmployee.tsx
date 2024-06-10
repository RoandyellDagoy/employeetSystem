import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'

const UpdateEmployee = () => {
    const [id , setID] = useState<string>("");
    const parsedID = parseInt(id);
    const [birthDate , setBirthDate] = useState<string>("");
    const [firstName , setFirstName] = useState<string>("");
    const [lastName , setLastName] = useState<string>("");
    const [position , setPosition] = useState<string>("");
    const [gender , setGender] = useState<string>("");
    const [hireDate , setHireDate] = useState<string>("");

    const updateData = async () => {
        try {
            const response = await axios.put(`/api/updateEmployee/${parsedID}`,{
                birth_date: birthDate,
                first_name: firstName,
                last_name: lastName,
                position: position,
                gender: gender,
                hire_date: hireDate    
            });
            console.log(response.data);

            setID('');
            setBirthDate('');
            setFirstName('');
            setLastName('');
            setPosition('');
            setGender('');
            setHireDate('')

        }   catch(error){
            console.error('Error updating data: ', error);
        }
    }
  return (
    <View>
      <TextInput value={id} onChangeText={(setID)} placeholder="ID"/>
      <TextInput value={birthDate} onChangeText={(setBirthDate)} placeholder="Birth Date"/>
      <TextInput value={firstName} onChangeText={(setFirstName)} placeholder="First Name"/>
      <TextInput value={lastName} onChangeText={(setLastName)} placeholder="Last Name"/>
      <TextInput value={position} onChangeText={(setPosition)} placeholder="Position"/>
      <TextInput value={gender} onChangeText={(setGender)} placeholder="Gender"/>
      <TextInput value={hireDate} onChangeText={(setHireDate)} placeholder="Hire Date"/>

      <Button title="Update Employee" onPress={(updateData)} />
    </View>
  )
}

export default UpdateEmployee