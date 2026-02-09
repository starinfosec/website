export const SERVICE_SLUGS = {
  CYBERSECURITY_CONSULTATION: 'cybersecurity-consultation',
  EMPLOYEE_SECURITY_TRAINING: 'employee-security-training',
  WEBSITE_SECURITY_HARDENING: 'website-security-hardening',
  CYBERSECURITY_WORKSHOPS: 'cybersecurity-workshops',
  INTERNSHIP_COURSES: 'internship-courses',
} as const;

export type ServiceSlugType = typeof SERVICE_SLUGS[keyof typeof SERVICE_SLUGS];

export const SERVICE_NAMES: Record<ServiceSlugType, string> = {
  'cybersecurity-consultation': 'Cybersecurity Consultation',
  'employee-security-training': 'Employee Security Awareness Training',
  'website-security-hardening': 'Website Security & Hardening',
  'cybersecurity-workshops': 'Cybersecurity Training & Workshops',
  'internship-courses': 'Cybersecurity Internship + Courses',
};
