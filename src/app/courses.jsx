import axios from 'axios';
import { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/courses')
      .then((response) => {
        setCourses(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  const colors = [
    { bg: '#e6f0ff', dot: '#007AFF', tag: '#d0e2ff' },
    { bg: '#fff0e6', dot: '#FF6B00', tag: '#ffd5b8' },
    { bg: '#e6f9e8', dot: '#34C759', tag: '#c6f0c8' },
    { bg: '#f3e8ff', dot: '#AF52DE', tag: '#e9d5ff' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa', padding: 20, paddingTop: 50 }}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 28, fontWeight: '800', color: '#1a1a1a' }}>Courses</Text>
        <Text style={{ fontSize: 14, color: '#888', marginTop: 4 }}>Choose your program</Text>
      </View>

      <FlatList
        data={courses}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 14, paddingBottom: 20 }}
        renderItem={({ item, index }) => {
          const c = colors[index % colors.length];
          return (
            <View
              style={{
                backgroundColor: 'white',
                borderRadius: 18,
                padding: 18,
                flexDirection: 'row',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOpacity: 0.05,
                shadowRadius: 10,
                shadowOffset: { width: 0, height: 4 },
                elevation: 3,
              }}
            >
              <View
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  backgroundColor: c.bg,
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 14,
                }}
              >
                <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: c.dot }} />
                <Text style={{ fontWeight: '800', color: c.dot, marginTop: 4, fontSize: 12 }}>{item.code.slice(0, 2)}</Text>
              </View>

              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                  <Text style={{ fontWeight: '800', fontSize: 16, color: '#1a1a1a' }}>{item.code}</Text>
                  <View style={{ backgroundColor: c.tag, paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20 }}>
                    <Text style={{ fontSize: 10, fontWeight: '700', color: c.dot }}>ACTIVE</Text>
                  </View>
                </View>
                <Text style={{ color: '#666', marginTop: 4, fontSize: 13, lineHeight: 18 }}>{item.name}</Text>
              </View>

              <Text style={{ color: '#ccc', fontSize: 18, fontWeight: '300' }}>›</Text>
            </View>
          );
        }}
      />
    </View>
  );
}
