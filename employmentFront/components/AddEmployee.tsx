import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigation } from "@react-navigation/native";
import RemoveEmployee from './RemoveEmployee';

const AddEmployee = () => {
  const [birthDate, setBirthDate] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [position, setPosition] = useState('');
  const [gender, setGender] = useState('');
  const [hireDate, setHireDate] = useState('');

  const navigation = useNavigation();
  const handleSubmit = () => {
    axios.post('/api/makeEmployee', {
      birth_date: birthDate,
      first_name: firstName,
      last_name: lastName,
      position: position,
      gender: gender,
      hire_date: hireDate,
    })
     .then((response) => {
        console.log('Employee added to list: ', response.data);

        // Reset form fields
        setBirthDate('');
        setFirstName('');
        setLastName('');
        setPosition('');
        setGender('');
        setHireDate('');
      })
     .catch((error) => {
        console.error('Error adding employee: ', error);
      });
  };

  return (
    <View style={{ padding: 10, paddingTop: 35 }}>
      <Text style={{ marginBottom: 5 }}>Birthday:</Text>
      <TextInput
        value={birthDate}
        onChangeText={(text) => setBirthDate(text)}
        placeholder="MM/DD/YYYY"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />
      
      <Text style={{ marginTop: 10, marginBottom: 5 }}>First Name:</Text>
      <TextInput
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />

      <Text style={{ marginTop: 10, marginBottom: 5 }}>Last Name:</Text>
      <TextInput
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />

      <Text style={{ marginTop: 10, marginBottom: 5 }}>Position:</Text>
      <TextInput
        value={position}
        onChangeText={(text) => setPosition(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />

      <Text style={{ marginTop: 10, marginBottom: 5 }}>Gender:</Text>
      <TextInput
        value={gender}
        onChangeText={(text) => setGender(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      />

      <Text style={{ marginTop: 10, marginBottom: 5 }}>Hire Date:</Text>
      <TextInput
        value={hireDate}
        onChangeText={(text) => setHireDate(text)}
        placeholder="MM/DD/YYYY"
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 , marginBottom: 30}}
      />

      <TouchableOpacity
        style={{
          backgroundColor: '#007AFF', 
          borderRadius: 5, 
          paddingVertical: 10, 
          paddingHorizontal: 20, 
          alignItems: 'center', 
          justifyContent: 'center', 
          marginVertical: 10, 
        }}
        activeOpacity={0.7} 
        onPress={handleSubmit}
      >
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddEmployee;
