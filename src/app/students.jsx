import axios from 'axios';
import { useEffect, useState } from 'react';
import { Text, View, FlatList } from 'react-native';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/students')
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa', padding: 20, paddingTop: 50 }}>
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: 28, fontWeight: '800', color: '#111827' }}>Students</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 6, gap: 8 }}>
          <View style={{ backgroundColor: '#111827', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20 }}>
            <Text style={{ color: 'white', fontSize: 11, fontWeight: '700' }}>{students.length} TOTAL</Text>
          </View>
          <Text style={{ color: '#888', fontSize: 13 }}>BSIT & BSCS • 2026</Text>
        </View>
      </View>

      <FlatList
        data={students}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingBottom: 20 }}
        renderItem={({ item, index }) => (
          <View
            style={{
              backgroundColor: 'white',
              borderRadius: 18,
              padding: 16,
              flexDirection: 'row',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOpacity: 0.05,
              shadowRadius: 8,
              shadowOffset: { width: 0, height: 3 },
              elevation: 2,
            }}
          >
            <View
              style={{
                width: 56,
                height: 56,
                borderRadius: 16,
                backgroundColor: index % 2 === 0 ? '#eef2ff' : '#ecfdf5',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 14,
                borderWidth: 2,
                borderColor: index % 2 === 0 ? '#c7d2fe' : '#a7f3d0',
              }}
            >
              <Text style={{ fontWeight: '800', fontSize: 16, color: index % 2 === 0 ? '#4F46E5' : '#059669' }}>
                {item.name
                  .split(' ')
                  .map((namePart) => namePart[0])
                  .join('')}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: '700', fontSize: 15, color: '#111827' }}>{item.name}</Text>

              <View style={{ flexDirection: 'row', gap: 6, marginTop: 6 }}>
                <View style={{ backgroundColor: '#f3f4f6', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20 }}>
                  <Text style={{ fontSize: 11, fontWeight: '600', color: '#555' }}>{item.course}</Text>
                </View>
                <View style={{ backgroundColor: item.year_level === 3 ? '#eef2ff' : '#fef3c7', paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20 }}>
                  <Text style={{ fontSize: 11, fontWeight: '700', color: item.year_level === 3 ? '#4F46E5' : '#D97706' }}>
                    Year {item.year_level}
                  </Text>
                </View>
              </View>
            </View>

            <View style={{ width: 32, height: 32, borderRadius: 16, backgroundColor: '#f9fafb', justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ color: '#9ca3af' }}>›</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
