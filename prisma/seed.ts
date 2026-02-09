import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  // Create services (matching existing StarInfoSec services)
  const services = await Promise.all([
    prisma.service.create({
      data: {
        name: 'Cybersecurity Consultation',
        slug: 'cybersecurity-consultation',
        description: 'Expert cybersecurity consultation to protect your business',
        isActive: true,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Employee Security Awareness Training',
        slug: 'employee-security-training',
        description: 'Training employees on cybersecurity best practices',
        isActive: true,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Website Security & Hardening',
        slug: 'website-security-hardening',
        description: 'Protect your website from cyber attacks',
        isActive: true,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Cybersecurity Training & Workshops',
        slug: 'cybersecurity-workshops',
        description: 'Hands-on workshops to upskill your technical teams',
        isActive: true,
      },
    }),
    prisma.service.create({
      data: {
        name: 'Cybersecurity Internship + Courses',
        slug: 'internship-courses',
        description: 'Professional training programs and internships',
        isActive: true,
      },
    }),
  ]);

  console.log('Created services:', services.length);

  // Create admin user
  const adminPassword = await hash('admin123', 12);
  const admin = await prisma.user.create({
    data: {
      email: 'admin@starinfosec.com',
      name: 'Admin User',
      passwordHash: adminPassword,
      role: 'ADMIN',
      isActive: true,
    },
  });

  console.log('Created admin user');

  // Create sales managers (one per service)
  const managers = [];
  for (let i = 0; i < services.length; i++) {
    const password = await hash('manager123', 12);
    const manager = await prisma.user.create({
      data: {
        email: `manager${i + 1}@starinfosec.com`,
        name: `${services[i].name} Manager`,
        passwordHash: password,
        role: 'SALES_MANAGER',
        serviceId: services[i].id,
        isActive: true,
      },
    });
    managers.push(manager);
  }

  console.log('Created sales managers:', managers.length);

  // Create sales executives (5 per service)
  const executives = [];
  for (let i = 0; i < services.length; i++) {
    for (let j = 0; j < 5; j++) {
      const password = await hash('exec123', 12);
      const executive = await prisma.user.create({
        data: {
          email: `exec${i * 5 + j + 1}@starinfosec.com`,
          name: `Sales Executive ${i * 5 + j + 1}`,
          passwordHash: password,
          role: 'SALES_EXECUTIVE',
          serviceId: services[i].id,
          isActive: true,
        },
      });
      executives.push(executive);
    }
  }

  console.log('Created sales executives:', executives.length);

  // Create sample leads
  const leadStages = ['NEW_LEAD', 'QUALIFIED', 'PROPOSAL_SENT', 'NEGOTIATION', 'CLOSED_WON', 'CLOSED_LOST'];
  const leadSources = ['WEBSITE', 'INSTAGRAM', 'LINKEDIN', 'REFERRAL', 'OTHER'];
  const organizations = [
    'Tech Corp', 'Digital Solutions', 'SecureBank', 'HealthCare Inc',
    'EduTech Systems', 'FinanceHub', 'CloudServices Ltd', 'DataProtect Co'
  ];

  const leads = [];
  for (let i = 0; i < 50; i++) {
    const service = services[i % services.length];
    const executive = executives.filter(e => e.serviceId === service.id)[i % 5];
    
    const lead = await prisma.lead.create({
      data: {
        clientName: `Client ${i + 1}`,
        organization: organizations[i % organizations.length],
        email: `client${i + 1}@example.com`,
        phone: `+1-555-${String(i).padStart(4, '0')}`,
        stage: leadStages[i % leadStages.length] as any,
        serviceId: service.id,
        source: leadSources[i % leadSources.length] as any,
        assignedToId: executive.id,
        notes: `Initial contact made. Interested in ${service.name}`,
        nextFollowUp: i % 3 === 0 ? new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) : null,
      },
    });
    leads.push(lead);
  }

  console.log('Created leads:', leads.length);

  // Create sample deals
  const dealStages = ['DISCOVERY', 'PROPOSAL', 'NEGOTIATION', 'CONTRACT_SENT', 'CLOSED_WON', 'CLOSED_LOST'];
  const deals = [];
  
  for (let i = 0; i < 30; i++) {
    const lead = leads[i];
    const stage = dealStages[i % dealStages.length] as any;
    const value = Math.floor(Math.random() * 50000) + 10000;
    
    const deal = await prisma.deal.create({
      data: {
        leadId: lead.id,
        title: `${lead.organization} - ${services[i % services.length].name}`,
        value: value,
        stage: stage,
        serviceId: lead.serviceId,
        assignedToId: lead.assignedToId,
        expectedCloseDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        closedAt: stage === 'CLOSED_WON' || stage === 'CLOSED_LOST' ? new Date() : null,
      },
    });
    deals.push(deal);
  }

  console.log('Created deals:', deals.length);

  // Create sales targets for all users
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth() + 1;
  
  for (const user of [...managers, ...executives]) {
    await prisma.salesTarget.create({
      data: {
        userId: user.id,
        month: currentMonth,
        year: currentYear,
        targetAmount: user.role === 'SALES_MANAGER' ? 100000 : 20000,
      },
    });
  }

  console.log('Created sales targets');

  // Create training batches for training services
  const trainingServices = services.filter(s => 
    s.slug === 'cybersecurity-workshops' || s.slug === 'internship-courses'
  );

  for (const service of trainingServices) {
    const mentor = managers.find(m => m.serviceId === service.id);
    
    await prisma.trainingBatch.create({
      data: {
        serviceId: service.id,
        batchName: `${service.name} - Batch 1`,
        startDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
        endDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        mentorId: mentor?.id,
        maxEnrollments: 30,
        status: 'UPCOMING',
      },
    });
  }

  console.log('Created training batches');

  // Create sample notifications
  const allUsers = [admin, ...managers, ...executives];
  for (let i = 0; i < 10; i++) {
    const user = allUsers[i % allUsers.length];
    await prisma.notification.create({
      data: {
        userId: user.id,
        title: 'Follow-up Reminder',
        message: `You have a follow-up scheduled with Client ${i + 1}`,
        type: 'FOLLOW_UP',
        isRead: false,
      },
    });
  }

  console.log('Created notifications');

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
