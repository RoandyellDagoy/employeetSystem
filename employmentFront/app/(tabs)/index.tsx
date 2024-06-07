import React, { useEffect, useState } from 'react';
import { Animated, View, Text, Easing } from 'react-native';

const index = () => {
  const [fadeAnim] = useState(new Animated.Value(0)); // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true, // Add this line to enable shouldAnimateNativeProps
        easing: Easing.ease,
      }
    ).start();
  }, [fadeAnim]);

  return (
    <Animated.View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: fadeAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['#F0F8FF', '#ADD8E6'], // Change colors here if needed
      }),
    }}>
      
      <Text style={{ fontSize: 20 }}>index</Text>
    </Animated.View>
    
  );
};

export default index;
