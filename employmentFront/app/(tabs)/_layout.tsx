import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { MaterialIcons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Employees',
          tabBarIcon: ({ color, focused }) => (
            <Foundation name="torso-business" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          title: 'Add',
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons name="person-add" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="customize"
        options={{
          title: 'Department',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="business-sharp" size={24} color="black" />
          ),
        }}
      />
      
      
    </Tabs>
  );
}
