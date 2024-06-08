import { View, Text, StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import axios from 'axios'


export type employed = {
    id:number;
    birth_date:string;
    first_name:string;
    last_name:string;
    position:string;
    gender: 'M'| 'F';
    hire_date:string;
}


const ShowEmployees = () => {

    const [employes, setEmployees] = useState<employed[]>([]);
    useEffect(() =>  {
        fetchData();
    }, [])


    const fetchData = async () =>{
        try {
            const response = await axios.get('/api/employee');
            setEmployees(response.data);
        }catch(error){
            console.error('Error fetching data: ', error);
        }
    }
  return (
    <View style={{padding: 10,paddingTop: 35, backgroundColor: '#add8e6'}}>
      
      <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10,}}>Employees:</Text>
      {employes.map((employee: employed,index : number) =>(
       <View key={index} style={styles.box}>
         <Text>Id: {employee.id}</Text>
         <Text>Birthday: {employee.birth_date}</Text>
         <Text>First Name: {employee.first_name}</Text>
         <Text>Last Name: {employee.last_name}</Text>
         <Text>Position: {employee.position}</Text>
         <Text>Gender: {employee.gender}</Text>
         <Text>Hire Date: {employee.hire_date}</Text>
       </View>
      ))}
    
    </View>
  )
}
const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff', // White background for the box
    borderRadius: 5, // Rounded corners
    padding: 10, // Padding inside the box
    marginBottom: 10, // Margin below the box
    borderWidth: 1, // Optional: Border around the box
    borderColor: '#eee', // Optional: Light grey border color
    alignItems: 'center'
  },
  text: {
    marginBottom: 5, // Space between lines of text
  },
});


export default ShowEmployees;