import { Link } from 'expo-router';
import { Text, View, TouchableOpacity } from 'react-native';

export default function Home() {
  const menus = [
    { href: '/student', num: '01', title: 'Single Student', sub: 'Object JSON', color: '#4F46E5', light: '#eef2ff', icon: '👤' },
    { href: '/students', num: '02', title: 'Students List', sub: 'Array JSON', color: '#059669', light: '#ecfdf5', icon: '👥' },
    { href: '/courses', num: '03', title: 'Courses', sub: 'BSIT / BSCS', color: '#DC2626', light: '#fef2f2', icon: '🎓' },
    { href: '/sections', num: '04', title: 'Sections', sub: 'Section F', color: '#D97706', light: '#fffbeb', icon: '📚' },
    { href: '/profile', num: '05', title: 'Profile', sub: 'Student Info', color: '#111827', light: '#f3f4f6', icon: '⭐' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa', padding: 20, paddingTop: 60 }}>
      <View style={{ marginBottom: 24 }}>
        <View style={{ backgroundColor: '#111827', alignSelf: 'flex-start', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, marginBottom: 12 }}>
          <Text style={{ color: 'white', fontSize: 11, fontWeight: '700', letterSpacing: 1 }}>MIDTERM PROJECT</Text>
        </View>
        <Text style={{ fontSize: 32, fontWeight: '900', color: '#111827', lineHeight: 34 }}>Midterm{'\n'}Project</Text>

        <View style={{ flexDirection: 'row', gap: 8, marginTop: 16 }}>
          <View style={{ backgroundColor: '#dcfce7', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20 }}>
            <Text style={{ color: '#15803d', fontSize: 11, fontWeight: '700' }}>● API Connected</Text>
          </View>
          <View style={{ backgroundColor: '#dbeafe', paddingHorizontal: 10, paddingVertical: 5, borderRadius: 20 }}>
            <Text style={{ color: '#1d4ed8', fontSize: 11, fontWeight: '700' }}>Expo Running</Text>
          </View>
        </View>
      </View>

      <View style={{ gap: 12 }}>
        {menus.map((m) => (
          <Link key={m.href} href={m.href} asChild>
            <TouchableOpacity
              style={{
                backgroundColor: 'white',
                borderRadius: 20,
                padding: 16,
                flexDirection: 'row',
                alignItems: 'center',
                shadowColor: '#000',
                shadowOpacity: 0.05,
                shadowRadius: 10,
                shadowOffset: { width: 0, height: 4 },
                elevation: 2,
              }}
            >
              <View style={{ width: 52, height: 52, borderRadius: 14, backgroundColor: m.light, justifyContent: 'center', alignItems: 'center', marginRight: 14 }}>
                <Text style={{ fontSize: 22 }}>{m.icon}</Text>
              </View>

              <View style={{ flex: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                  <Text style={{ fontSize: 11, fontWeight: '800', color: m.color, letterSpacing: 0.5 }}>{m.num}</Text>
                  <View style={{ width: 20, height: 1, backgroundColor: '#e5e7eb' }} />
                  <Text style={{ fontSize: 11, color: '#9ca3af', fontWeight: '600' }}>{m.sub}</Text>
                </View>
                <Text style={{ fontSize: 16, fontWeight: '700', color: '#111827', marginTop: 3 }}>{m.title}</Text>
              </View>

              <View style={{ width: 36, height: 36, borderRadius: 18, backgroundColor: m.color, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: 'white', fontSize: 16 }}>{'>'}</Text>
              </View>
            </TouchableOpacity>
          </Link>
        ))}
      </View>

      <View style={{ marginTop: 24, alignItems: 'center' }}>
        <Text style={{ color: '#bbb', fontSize: 11 }}>http://127.0.0.1:8000/api • Laravel API • JSON Only</Text>
      </View>
    </View>
  );
}
