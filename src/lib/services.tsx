'use client';
import {
  Briefcase,
  Users,
  GlobeLock,
  Presentation,
  GraduationCap,
} from 'lucide-react';
import React from 'react';

export const services = [
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: 'Cybersecurity Consultation',
    slug: 'cybersecurity-consultation',
    imageId: 'service-cybersecurity-consultation',
    description: 'We provide expert cybersecurity consultation to protect your business.',
    details:
      'We provide expert cybersecurity consultation to protect your business. We check your systems for security gaps, identify risks, and build a simple security plan that matches your business goals.',
    points: [
      'Create and improve your company’s security system',
      'Meet security rules and legal requirements',
      'Strategic Security Roadmap',
      'Protect your business as it grows'
    ]
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: 'Employee Security Awareness Training',
    slug: 'employee-security-training',
    imageId: 'service-employee-training',
    description: 'Our training teaches employees how to stay safe online and avoid common cyber attacks like fake emails and harmful links.',
    details:
      "Our training teaches employees how to stay safe online and avoid common cyber attacks like fake emails and harmful links.",
    points: [
        'Hands-On Practice',
        'Interactive Training Modules',
        'Customized Content',
        'Prevention-Focused Training'
    ]
  },
  {
    icon: <GlobeLock className="h-8 w-8 text-primary" />,
    title: 'Website Security & Hardening',
    slug: 'website-security-hardening',
    imageId: 'service-website-hardening',
    description: "We protect your website from cyber attacks and data leaks, keeping it safe and running smoothly.",
    details:
      "We protect your website from cyber attacks and data leaks. Our team checks for security gaps and strengthens your web application to keep it safe and running smoothly.",
    points: [
      'Find Common Web Attacks',
      'Test Login and User Access',
      'Detect Configuration Mistakes',
      'Fix Problems Before Hackers Do'
    ]
  },
  {
    icon: <Presentation className="h-8 w-8 text-primary" />,
    title: 'Cybersecurity Training & Workshops',
    slug: 'cybersecurity-workshops',
    imageId: 'service-cybersecurity-workshops',
    description: 'Hands-on workshops to upskill your technical teams in security practices.',
    details:
      "We train your IT and development teams with hands-on security workshops. Our experts teach secure coding, ethical hacking, and cloud security to help your team build safe and reliable products.",
    points: ['Security Fundamentals', 'Build and Maintain Secure Systems', 'Web Security Skills', 'Custom Corporate Training']
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    title: 'Cybersecurity Internship + Courses',
    slug: 'internship-courses',
    imageId: 'service-internship-courses',
    description: 'We help students and professionals learn cybersecurity and get ready for jobs in this field.',
    details:
      "We help students and professionals learn cybersecurity and get ready for jobs in this field.",
    points: [
      'Real-world Project Experience',
      'Mentorship from Experts',
      'Gain experience through practical assignments',
      'Career Support'
    ]
  },
];

export type Service = (typeof services)[0];
