import { View, Text , ScrollView, SafeAreaView} from 'react-native';
import React from 'react';
import ShowEmployees from '@/components/ShowEmployees';

const Index = () => {
  return (
    <ScrollView>
      <SafeAreaView>
        <ShowEmployees/>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Index;
