import { View, Text, StyleSheet , Image, TextInput} from 'react-native'
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
    }, [employes])


    const fetchData = async () =>{
        try {
            const response = await axios.get('/api/employee');
            setEmployees(response.data);
        }catch(error){
            console.error('Error fetching data: ', error);
        }
    }
  return (
    <View style={{padding: 10,paddingTop: 35}}>

      {employes.map((employee: employed,index : number) =>(

       <View key={index} style={styles.box}>
        <Image source={require('@/assets/images/employeeIcon.png')} style={styles.logo} />

        <View style={styles.textContainer}> 
          <Text>ID: {employee.id}</Text>

          <View style={{flexDirection: 'row'}}>
          <Text>Name: {employee.first_name}</Text>
          <Text> {employee.last_name}</Text>
          </View>

         <Text>Position: {employee.position}</Text>

         </View>

       </View>
      ))}
    
    </View>
  )
}
const styles = StyleSheet.create({
  logo:{
    width: 100, 
    height: 100, 
    alignSelf: 'flex-start', 
    marginTop: 0,
    borderRadius: 50,
  },
  textContainer: {
    flex: 1,
    marginLeft: 20
  },
  box: {
    backgroundColor: 'deepskyblue', 
    borderRadius: 5,
    padding: 10, 
    marginBottom: 10, 
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    marginBottom: 5, // Space between lines of text
  },
});


export default ShowEmployees;