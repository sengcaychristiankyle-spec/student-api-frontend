import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function Sections() {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/sections')
      .then((response) => {
        setSections(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa', padding: 20 }}>
      <View style={{ marginTop: 40, marginBottom: 20 }}>
        <Text style={{ fontSize: 28, fontWeight: '800', color: '#1a1a1a' }}>Sections</Text>
        <Text style={{ fontSize: 14, color: '#888', marginTop: 4 }}>BSIT • Available sections</Text>
      </View>

      <View style={{ gap: 12 }}>
        {sections.map((item, index) => (
          <View
            key={item.id}
            style={{
              backgroundColor: 'white',
              borderRadius: 16,
              padding: 18,
              flexDirection: 'row',
              alignItems: 'center',
              shadowColor: '#000',
              shadowOpacity: 0.06,
              shadowRadius: 8,
              shadowOffset: { width: 0, height: 2 },
              elevation: 2,
              borderLeftWidth: 4,
              borderLeftColor: index % 3 === 0 ? '#007AFF' : index % 3 === 1 ? '#34C759' : '#FF9500',
            }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: index % 3 === 0 ? '#e6f0ff' : index % 3 === 1 ? '#e6f9e8' : '#fff3e0',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: 15,
              }}
            >
              <Text style={{ fontWeight: '800', color: index % 3 === 0 ? '#007AFF' : index % 3 === 1 ? '#34C759' : '#FF9500' }}>
                {item.name ? item.name.charAt(0) : 'S'}
              </Text>
            </View>

            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 16, fontWeight: '700', color: '#1a1a1a' }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 13, color: '#888', marginTop: 2 }}>
                Year Level {item.year_level} • ID: {item.id}
              </Text>
            </View>

            <View style={{ backgroundColor: '#f2f2f7', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 20 }}>
              <Text style={{ fontSize: 12, fontWeight: '600', color: '#555' }}>BSIT</Text>
            </View>
          </View>
        ))}

        <Text style={{ textAlign: 'center', color: '#aaa', marginTop: 20, fontSize: 12 }}>Total {sections.length} sections found</Text>
      </View>
    </View>
  );
}
