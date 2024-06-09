import { View, Text , ScrollView, SafeAreaView, TextInput, Button} from 'react-native';
import React from 'react';
import ShowEmployees from '@/components/ShowEmployees';
import CallEmployee from '@/components/CallEmployee';

const Index = () => {
  return (
    <ScrollView style={{backgroundColor: 'dodgerblue'}}>

      <SafeAreaView>
        <CallEmployee/>
        <ShowEmployees/>
      </SafeAreaView>

    </ScrollView>
  );
};

export default Index;
