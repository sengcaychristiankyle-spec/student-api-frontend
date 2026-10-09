import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

export default function Profile() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/profile')
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  if (!profile) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9fa' }}>
        <View style={{ width: 60, height: 60, borderRadius: 30, backgroundColor: '#eef2ff', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: '#4F46E5', fontWeight: '800' }}>...</Text>
        </View>
        <Text style={{ marginTop: 12, color: '#999' }}>Loading profile...</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <View style={{ backgroundColor: '#111827', padding: 20, paddingTop: 60, paddingBottom: 70, borderBottomLeftRadius: 32, borderBottomRightRadius: 32 }}>
        <Text style={{ color: '#9ca3af', fontSize: 11, fontWeight: '800', letterSpacing: 1.5 }}>STUDENT PROFILE</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, gap: 8 }}>
          <View style={{ backgroundColor: '#34d399', width: 8, height: 8, borderRadius: 4 }} />
          <Text style={{ color: '#34d399', fontSize: 12, fontWeight: '600' }}>Verified • Active</Text>
        </View>
      </View>

      <View style={{ alignItems: 'center', marginTop: -50, marginBottom: 16 }}>
        <View style={{ width: 110, height: 110, borderRadius: 36, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.1, shadowRadius: 15, elevation: 5, padding: 4 }}>
          <View style={{ width: 96, height: 96, borderRadius: 30, backgroundColor: '#4F46E5', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 36, fontWeight: '900' }}>{profile.name.charAt(0)}</Text>
          </View>
        </View>
        <Text style={{ fontSize: 22, fontWeight: '800', marginTop: 14, color: '#111827' }}>{profile.name}</Text>
        <View style={{ backgroundColor: '#eef2ff', paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20, marginTop: 8 }}>
          <Text style={{ color: '#4F46E5', fontSize: 12, fontWeight: '700' }}>{profile.course}</Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', gap: 12, paddingHorizontal: 20, marginBottom: 20 }}>
        <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 16, padding: 14, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 8, elevation: 2 }}>
          <Text style={{ fontSize: 20, fontWeight: '800', color: '#111827' }}>#{profile.id}</Text>
          <Text style={{ fontSize: 11, color: '#888', marginTop: 2 }}>STUDENT ID</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 16, padding: 14, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 8, elevation: 2 }}>
          <Text style={{ fontSize: 20, fontWeight: '800', color: '#111827' }}>{profile.year_level || '3'}</Text>
          <Text style={{ fontSize: 11, color: '#888', marginTop: 2 }}>YEAR LEVEL</Text>
        </View>
        <View style={{ flex: 1, backgroundColor: 'white', borderRadius: 16, padding: 14, alignItems: 'center', shadowColor: '#000', shadowOpacity: 0.04, shadowRadius: 8, elevation: 2 }}>
          <Text style={{ fontSize: 20, fontWeight: '800', color: '#111827' }}>A+</Text>
          <Text style={{ fontSize: 11, color: '#888', marginTop: 2 }}>STATUS</Text>
        </View>
      </View>

      <View style={{ backgroundColor: 'white', marginHorizontal: 20, borderRadius: 20, padding: 20, shadowColor: '#000', shadowOpacity: 0.05, shadowRadius: 10, elevation: 3 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <View style={{ width: 32, height: 32, borderRadius: 10, backgroundColor: '#f3f4f6', justifyContent: 'center', alignItems: 'center' }}><Text>🎓</Text></View>
            <Text style={{ color: '#888', fontSize: 13 }}>Course</Text>
          </View>
          <Text style={{ fontWeight: '700', color: '#111827' }}>{profile.course}</Text>
        </View>
        <View style={{ height: 1, backgroundColor: '#f3f4f6' }} />

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 14 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
            <View style={{ width: 32, height: 32, borderRadius: 10, backgroundColor: '#fffbeb', justifyContent: 'center', alignItems: 'center' }}><Text>📚</Text></View>
            <Text style={{ color: '#888', fontSize: 13 }}>Section</Text>
          </View>
          <View style={{ backgroundColor: '#111827', paddingHorizontal: 12, paddingVertical: 5, borderRadius: 20 }}>
            <Text style={{ fontWeight: '700', color: 'white', fontSize: 12 }}>{profile.section}</Text>
          </View>
        </View>
      </View>

      <View style={{ alignItems: 'center', marginTop: 20 }}>
        <Text style={{ color: '#bbb', fontSize: 11 }}>API: http://127.0.0.1:8000/api/profile • JSON Direct</Text>
      </View>
    </View>
  );
}
