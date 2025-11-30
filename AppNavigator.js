// navigation/AppNavigator.js
import React from 'react';
// استيراد وظيفة إنشاء Stack Navigator
import { createStackNavigator } from '@react-navigation/stack';

// استيراد الشاشات التي أنشأناها
import HomeScreen from '../screens/HomeScreen';

// إنشاء الكائن (Stack)
const Stack = createStackNavigator();

// تعريف المكون الخاص بالتنقل
const AppNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Home" // تحديد الشاشة التي سيبدأ بها التطبيق
      screenOptions={{
        headerStyle: { backgroundColor: '#16213e' }, // خلفية شريط العنوان
        headerTintColor: '#fff', // لون نص شريط العنوان
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      {/* تعريف الشاشة الرئيسية */}
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'E-Trial Viewer' }} // عنوان يظهر في شريط التنقل
      />
      
      {/* هنا سيتم إضافة شاشات أخرى مثل (LiveTrialScreen) لاحقًا */}
      
    </Stack.Navigator>
  );
};

export default AppNavigator;
