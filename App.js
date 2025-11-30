// App.js
import React from 'react';
import { StyleSheet, View } from 'react-native';

// في الوقت الحالي، سنستخدم مكون View بسيط لتمثيل الشاشة الرئيسية
// لاحقًا سنستبدله بتهيئة التنقل (Navigation)
export default function App() {
  return (
    <View style={styles.container}>
      {/* هذا هو المكان الذي سنضع فيه نظام التنقل لاحقًا */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // سنستخدم هذا لضمان عدم تداخل المحتوى مع شريط الحالة
    paddingTop: 40,
  },
});
