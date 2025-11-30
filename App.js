// App.js
// الكود النهائي المدمج

import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList, 
  Dimensions 
} from 'react-native';

// 1. استيراد حزم التنقل الأساسية
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// نحصل على أبعاد الشاشة لاستخدامها في مكون الفيديو
const { width } = Dimensions.get('window');
const VIDEO_HEIGHT = width * 0.6; 

// ----------------------------------------------------------------------
// 2. المكون الداخلي: TrialCard (بطاقة المحاكمة)
// ----------------------------------------------------------------------
const TrialCard = ({ caseNumber, court, time, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardHeader}>
        <Text style={styles.caseNumber}>{caseNumber}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
      <Text style={styles.court}>{court}</Text>
      <Text style={styles.status}>مباشر الآن</Text>
    </TouchableOpacity>
  );
};

// ----------------------------------------------------------------------
// 3. الشاشة الأولى: HomeScreen
// ----------------------------------------------------------------------
const MOCK_TRIALS = [
  { id: '1', caseNumber: 'جنايات #452', court: 'محكمة الجنايات الكبرى - القاعة 1', time: '10:00 ص' },
  { id: '2', caseNumber: 'تجاري #88', court: 'محكمة البداية - الدائرة التجارية', time: '11:30 ص' },
  { id: '3', caseNumber: 'مدني #201', court: 'محكمة الصلح - القاعة 3', time: '01:00 م' },
  { id: '4', caseNumber: 'إداري #55', court: 'المحكمة الإدارية العليا', time: '02:30 م' },
];

const HomeScreen = ({ navigation }) => {
  
  const renderItem = ({ item }) => (
    <TrialCard 
      caseNumber={item.caseNumber} 
      court={item.court}
      time={item.time}
      // للانتقال إلى مسار 'LiveTrial' وتمرير البيانات
      onPress={() => navigation.navigate('LiveTrial', {
        caseNumber: item.caseNumber,
        court: item.court,
      })} 
    />
  );
  
  return (
    <View style={styles.homeContainer}>
      <Text style={styles.headerTitle}>المحاكمات المباشرة اليوم</Text>
      
      <FlatList
        data={MOCK_TRIALS}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>لا توجد محاكمات مباشرة حالياً.</Text>
        )}
      />
    </View>
  );
};

// ----------------------------------------------------------------------
// 4. الشاشة الثانية: LiveTrialScreen
// ----------------------------------------------------------------------
const LiveTrialScreen = ({ route }) => {
  // استقبال بيانات المحاكمة
  const { caseNumber, court } = route.params || { caseNumber: 'غير محدد', court: 'غير محدد' };

  return (
    <View style={styles.liveContainer}>
      {/* مساحة عرض الفيديو (المحاكي) */}
      <View style={styles.videoPlayer}>
        <Text style={styles.videoText}>بث المحاكمة المباشر هنا</Text>
      </View>
      
      {/* تفاصيل المحاكمة */}
      <View style={styles.detailsContainer}>
        <Text style={styles.detailHeader}>التفاصيل الحالية:</Text>
        <Text style={styles.detailText}>القضية: {caseNumber}</Text>
        <Text style={styles.detailText}>المحكمة: {court}</Text>
        <Text style={styles.detailStatus}>الحالة: جلسة علنية ومباشرة</Text>
      </View>

    </View>
  );
};

// ----------------------------------------------------------------------
// 5. إعداد نظام التنقل (AppNavigator)
// ----------------------------------------------------------------------
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: '#16213e' }, // لون الشريط
        headerTintColor: '#fff', // لون النص
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'E-Trial Viewer' }}
      />
      
      <Stack.Screen 
        name="LiveTrial" 
        component={LiveTrialScreen} 
        options={({ route }) => ({ 
            title: route.params?.caseNumber || 'المحاكمة المباشرة',
        })}
      />
    </Stack.Navigator>
  );
};

// ----------------------------------------------------------------------
// 6. المكون الرئيسي (App)
// ----------------------------------------------------------------------
export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}

// ----------------------------------------------------------------------
// 7. الأنماط المشتركة (Styles)
// ----------------------------------------------------------------------
const styles = StyleSheet.create({
  // أنماط الشاشة الرئيسية
  homeContainer: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 5,
    color: '#16213e',
    textAlign: 'right', 
  },
  listContainer: {
    paddingVertical: 10,
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 16,
    color: '#999',
  },
  
  // أنماط بطاقة المحاكمة (TrialCard)
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, 
    borderLeftWidth: 5, 
    borderLeftColor: '#00ddff', 
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  caseNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#16213e',
  },
  time: {
    fontSize: 14,
    color: 'gray',
  },
  court: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  status: {
    fontSize: 14,
    fontWeight: '600',
    color: '#00ddff',
  },

  // أنماط شاشة المحاكمة المباشرة (LiveTrialScreen)
  liveContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  videoPlayer: {
    width: width,
    height: VIDEO_HEIGHT,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoText: {
    color: '#fff',
    fontSize: 18,
  },
  detailsContainer: {
    padding: 15,
  },
  detailHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#16213e',
  },
  detailText: {
    fontSize: 16,
    marginBottom: 4,
    color: '#333',
  },
  detailStatus: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    color: 'green',
  },
});
