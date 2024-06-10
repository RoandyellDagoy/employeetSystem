import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import axios from 'axios';

interface Employee {
  birth_date?: string;
  first_name?: string;
  last_name?: string;
  position?: string;
  gender?: string;
  hire_date?:string;

}

const CallEmployee = () => {
  const [id, setEmployeeId] = useState('');
  const [employeeData, setEmployeeData] = useState<Employee | null>(null);

  useEffect(() => {
    // Reset employeeData whenever id changes
    setEmployeeData(null);
  }, [id]);

  const handleFetchIdDetails = async () => {
    try {
      const response = await axios.get(`/api/employ/${id}`);
      setEmployeeData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style= {{paddingTop: 35}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'gray', padding: 10, marginBottom: 20 }}>
        <TextInput
          placeholder="Enter Employee ID"
          value={id}
          onChangeText={setEmployeeId}
          style={{ flex: 1 }}
        />
        <TouchableOpacity onPress={handleFetchIdDetails}>
          <AntDesign name="search1" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {employeeData && (
        <View>
          <Text>Birthday: {employeeData.birth_date}</Text>
          <Text>First Name: {employeeData.first_name}</Text>
          <Text>Last Name: {employeeData.last_name}</Text>
          <Text>Position: {employeeData.position}</Text>
          <Text>Gender: {employeeData.gender}</Text>
          <Text>Hire Date: {employeeData.hire_date}</Text>
        </View>
      )}
    </View>
  );
};

export default CallEmployee;
