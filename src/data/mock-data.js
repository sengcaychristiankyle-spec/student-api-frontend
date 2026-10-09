export const studentProfile = {
  id: 2024001,
  name: 'Maria Santos',
  course: 'BSIT',
  year_level: 3,
  section: 'Section F',
  status: 'Active',
};

export const students = [
  { id: 1, name: 'Maria Santos', course: 'BSIT', year_level: 3, section: 'Section F' },
  { id: 2, name: 'Carlos Reyes', course: 'BSCS', year_level: 2, section: 'Section B' },
  { id: 3, name: 'Alyssa Gomez', course: 'BSIT', year_level: 4, section: 'Section A' },
  { id: 4, name: 'Daniel Cruz', course: 'BSCS', year_level: 3, section: 'Section D' },
  { id: 5, name: 'Rina Dela Cruz', course: 'BSIT', year_level: 2, section: 'Section C' },
  { id: 6, name: 'Ethan Lim', course: 'BSCS', year_level: 1, section: 'Section E' },
];

export const courses = [
  { id: 1, code: 'IT101', name: 'Introduction to Information Technology' },
  { id: 2, code: 'CS201', name: 'Data Structures and Algorithms' },
  { id: 3, code: 'WEB210', name: 'Web Development Fundamentals' },
  { id: 4, code: 'DB302', name: 'Database Management Systems' },
  { id: 5, code: 'NET220', name: 'Computer Networks' },
  { id: 6, code: 'AI310', name: 'Artificial Intelligence Basics' },
];

export const sections = [
  { id: 1, name: 'A', year_level: 1 },
  { id: 2, name: 'B', year_level: 2 },
  { id: 3, name: 'C', year_level: 2 },
  { id: 4, name: 'D', year_level: 3 },
  { id: 5, name: 'E', year_level: 3 },
  { id: 6, name: 'F', year_level: 4 },
];

export const profile = {
  ...studentProfile,
  email: 'maria.santos@school.edu',
  advisor: 'Prof. James Rivera',
};
