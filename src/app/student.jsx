import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Link } from 'expo-router';

export default function Student() {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    // IMPORTANT:
    // - Emulator / Expo Go on same machine → 127.0.0.1 is OK
    // - Physical device → replace with your computer's local IP
    //   Example: http://192.168.1.10:8000/api/student
    axios
      .get('http://127.0.0.1:8000/api/student')
      .then((response) => {
        setStudent(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  // Loading state (matches the pattern in the picture)
  if (!student) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#f8f9fa',
        }}
      >
        <View
          style={{
            width: 60,
            height: 60,
            borderRadius: 30,
            backgroundColor: '#eef2ff',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#4F46E5', fontWeight: '800' }}>...</Text>
        </View>
        <Text style={{ marginTop: 12, color: '#999' }}>Loading student...</Text>
      </View>
    );
  }

  // Main UI – data is already in `student` object (same as picture)
  return (
    <View style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      {/* Header */}
      <View
        style={{
          backgroundColor: '#4F46E5',
          padding: 24,
          paddingTop: 50,
          paddingBottom: 50,
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
        }}
      >
        <Link href="/" asChild>
          <View
            style={{
              backgroundColor: 'rgba(255,255,255,0.2)',
              alignSelf: 'flex-start',
              paddingHorizontal: 14,
              paddingVertical: 6,
              borderRadius: 20,
              marginBottom: 16,
            }}
          >
            <Text style={{ color: 'white', fontWeight: '700', fontSize: 12 }}>
              {'<'} Back to Home
            </Text>
          </View>
        </Link>

        <View
          style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            alignSelf: 'flex-start',
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 20,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 10,
              fontWeight: '800',
              letterSpacing: 1,
            }}
          >
            STUDENT API
          </Text>
        </View>

        <Text style={{ color: 'white', fontSize: 24, fontWeight: '800' }}>
          Student Details
        </Text>
        <Text
          style={{
            color: 'rgba(255,255,255,0.7)',
            fontSize: 12,
            marginTop: 4,
          }}
        >
          http://127.0.0.1:8000/api/student
        </Text>
      </View>

      {/* Card */}
      <View
        style={{
          marginHorizontal: 20,
          marginTop: -30,
          backgroundColor: 'white',
          borderRadius: 24,
          padding: 24,
          shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowRadius: 15,
          elevation: 5,
        }}
      >
        {/* Avatar + Name */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 24,
          }}
        >
          <View
            style={{
              width: 64,
              height: 64,
              borderRadius: 18,
              backgroundColor: '#4F46E5',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 14,
            }}
          >
            <Text style={{ color: 'white', fontSize: 24, fontWeight: '900' }}>
              {student.name.charAt(0)}
            </Text>
          </View>

          <View style={{ flex: 1 }}>
            <Text
              style={{ fontSize: 18, fontWeight: '800', color: '#111827' }}
            >
              {student.name}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 6,
                marginTop: 4,
              }}
            >
              <View
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 3,
                  backgroundColor: '#22c55e',
                }}
              />
              <Text style={{ color: '#666', fontSize: 13 }}>
                Active • ID #{student.id || 1}
              </Text>
            </View>
          </View>
        </View>

        {/* Course / Year / Section */}
        <View style={{ gap: 14 }}>
          <View style={{ flexDirection: 'row', gap: 12 }}>
            <View
              style={{
                flex: 1,
                backgroundColor: '#f8f9fa',
                borderRadius: 16,
                padding: 14,
              }}
            >
              <Text style={{ color: '#888', fontSize: 11, fontWeight: '600' }}>
                COURSE
              </Text>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 14,
                  marginTop: 6,
                  color: '#111827',
                }}
              >
                {student.course}
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                backgroundColor: '#fffbeb',
                borderRadius: 16,
                padding: 14,
              }}
            >
              <Text style={{ color: '#b45309', fontSize: 11, fontWeight: '600' }}>
                YEAR
              </Text>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 14,
                  marginTop: 6,
                  color: '#111827',
                }}
              >
                Year {student.year_level}
              </Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: '#f3f4f6',
              borderRadius: 16,
              padding: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <View>
              <Text style={{ color: '#888', fontSize: 11, fontWeight: '600' }}>
                SECTION
              </Text>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 14,
                  marginTop: 4,
                  color: '#111827',
                }}
              >
                {student.section}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: '#111827',
                paddingHorizontal: 14,
                paddingVertical: 7,
                borderRadius: 20,
              }}
            >
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 12 }}>
                {student.section}
              </Text>
            </View>
          </View>

          {/* Progress bar */}
          <View
            style={{
              backgroundColor: '#eef2ff',
              borderRadius: 16,
              padding: 14,
            }}
          >
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 8,
              }}
            >
              <Text
                style={{ fontSize: 11, fontWeight: '600', color: '#4F46E5' }}
              >
                PROGRESS
              </Text>
              <Text
                style={{ fontSize: 11, fontWeight: '700', color: '#4F46E5' }}
              >
                {student.year_level * 25}%
              </Text>
            </View>
            <View
              style={{
                height: 6,
                backgroundColor: '#c7d2fe',
                borderRadius: 3,
              }}
            >
              <View
                style={{
                  width: `${student.year_level * 25}%`,
                  height: 6,
                  backgroundColor: '#4F46E5',
                  borderRadius: 3,
                }}
              />
            </View>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={{ alignItems: 'center', marginTop: 20, gap: 6 }}>
        <Text style={{ color: '#bbb', fontSize: 11 }}>
          Single object from Laravel API
        </Text>
        <View
          style={{
            backgroundColor: '#dcfce7',
            paddingHorizontal: 10,
            paddingVertical: 4,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: '#15803d', fontSize: 10, fontWeight: '700' }}>
            ✓ API Connected
          </Text>
        </View>
      </View>
    </View>
  );
}