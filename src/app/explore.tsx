import axios from 'axios';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

type ProfileData = {
  id?: number;
  name?: string;
  course?: string;
  year_level?: number;
  section?: string;
  status?: string;
};

export default function Explore() {
  const [students, setStudents] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([]);
  const [sections, setSections] = useState<any[]>([]);
  const [profile, setProfile] = useState<ProfileData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      axios.get('http://127.0.0.1:8000/api/students'),
      axios.get('http://127.0.0.1:8000/api/courses'),
      axios.get('http://127.0.0.1:8000/api/sections'),
      axios.get('http://127.0.0.1:8000/api/profile'),
    ])
      .then(([studentsResponse, coursesResponse, sectionsResponse, profileResponse]) => {
        setStudents(studentsResponse.data || []);
        setCourses(coursesResponse.data || []);
        setSections(sectionsResponse.data || []);
        setProfile({ ...(profileResponse.data || {}), status: 'Active' });
      })
      .catch((error) => {
        console.log(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const currentName = profile?.name ?? 'Student';
  const currentCourse = profile?.course ?? 'BSIT';
  const currentYear = profile?.year_level ?? 3;

  const overview = [
    { label: 'Students', value: students.length.toString(), accent: '#4F46E5', tint: '#eef2ff' },
    { label: 'Courses', value: courses.length.toString(), accent: '#DC2626', tint: '#fef2f2' },
    { label: 'Sections', value: sections.length.toString(), accent: '#D97706', tint: '#fffbeb' },
    { label: 'Status', value: profile?.status || 'Active', accent: '#059669', tint: '#ecfdf5' },
  ];

  if (loading || !profile) {
    return (
      <View style={styles.loadingBox}>
        <Text style={styles.loadingText}>Loading API data...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.screen} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <Text style={styles.kicker}>MIDTERM PROJECT</Text>
        <Text style={styles.title}>Explore</Text>
        <Text style={styles.subtitle}>Live student directory overview powered by the Laravel API.</Text>
      </View>

      <View style={styles.statsGrid}>
        {overview.map((item) => (
          <View key={item.label} style={[styles.statCard, { backgroundColor: item.tint }]}> 
            <View style={[styles.dot, { backgroundColor: item.accent }]} />
            <Text style={[styles.statLabel, { color: item.accent }]}>{item.label}</Text>
            <Text style={styles.statValue}>{item.value}</Text>
          </View>
        ))}
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Current Student</Text>
        <View style={styles.studentRow}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>{currentName.charAt(0)}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>{currentName}</Text>
            <Text style={styles.meta}>{currentCourse} • Year {currentYear}</Text>
          </View>
        </View>
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Highlights</Text>
        <View style={styles.highlightList}>
          <Text style={styles.highlight}>• Live Laravel API calls</Text>
          <Text style={styles.highlight}>• Axios-based data flow</Text>
          <Text style={styles.highlight}>• Consistent screen layout</Text>
          <Text style={styles.highlight}>• Mobile-first design</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  content: {
    padding: 20,
    paddingTop: 60,
    gap: 18,
  },
  headerCard: {
    backgroundColor: '#111827',
    borderRadius: 24,
    padding: 20,
  },
  kicker: {
    color: '#fff',
    fontSize: 11,
    fontWeight: '800',
    letterSpacing: 1,
  },
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '900',
    marginTop: 8,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.75)',
    fontSize: 13,
    marginTop: 8,
    lineHeight: 20,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    width: '47%',
    borderRadius: 18,
    padding: 16,
    minHeight: 110,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginBottom: 12,
  },
  statLabel: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  statValue: {
    marginTop: 12,
    fontSize: 24,
    fontWeight: '800',
    color: '#111827',
  },
  panel: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 10,
    elevation: 2,
  },
  panelTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111827',
    marginBottom: 12,
  },
  studentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: 16,
    backgroundColor: '#eef2ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarText: {
    color: '#4F46E5',
    fontWeight: '900',
    fontSize: 20,
  },
  name: {
    fontSize: 17,
    fontWeight: '800',
    color: '#111827',
  },
  meta: {
    color: '#666',
    marginTop: 4,
    fontSize: 12,
  },
  highlightList: {
    gap: 8,
  },
  highlight: {
    color: '#444',
    fontSize: 14,
    fontWeight: '600',
  },
  loadingBox: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '700',
  },
});
