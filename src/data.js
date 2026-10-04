'use strict';

// Source: github.com/suphero/cv (english/ and turkish/ folders)

const links = {
  web: 'https://harunsokullu.com',
  github: 'https://github.com/suphero',
  linkedin: 'https://www.linkedin.com/in/suphero',
  x: 'https://x.com/suphero',
  email: 'harunsokullu@gmail.com',
};

const en = {
  name: 'Harun Sokullu',
  title: 'Backend Team Lead · Fintech Architect',
  location: 'Antalya, Türkiye',
  summary:
    'Backend architect and team lead specializing in regulation-grade fintech platforms and large-scale financial systems serving millions of users. 12+ years designing and leading high-availability, high-performance backend architectures for banking, fintech, and enterprise platforms.',
  highlights: [
    'Backend of a regulated wallet with 271K+ users (Ozan)',
    'Built Akbank\'s financial search: 12.8M+ users, ~50 ms responses',
    'Solo-shipped Swipd, WayOut, FixIt (250+ Shopify stores) and more',
  ],
  experience: [
    {
      role: 'Backend Team Lead · Superapp Backend',
      company: 'Ozan Elektronik Para',
      place: 'Remote',
      date: 'Aug 2023 – Present',
      bullets: [
        'Own the architecture and delivery of a regulation-grade fintech backend powering a digital wallet with 271,000+ active users.',
        'Lead a fully remote backend team; drive sprint planning, prioritization, and cross-team execution for payment and compliance systems.',
        'Designed a fault-tolerant microservices architecture (Java, Spring Boot, PostgreSQL) with strict data integrity under high transaction volumes.',
        'Final technical authority on critical backend design decisions; bridge between product, operations, and compliance.',
      ],
    },
    {
      role: 'Senior Software Developer · Superapp Backoffice',
      company: 'Ozan Elektronik Para',
      place: 'Remote',
      date: 'Dec 2022 – Aug 2023',
      bullets: [
        'Architected a BFF layer (Nest.js, GraphQL) for the backoffice used by compliance, support, and fraud teams.',
        'Cut backoffice data retrieval latency by ~50%, accelerating fraud investigation and compliance reviews.',
        'Set the architectural model later adopted for scaling internal operational tools company-wide.',
      ],
    },
    {
      role: 'Software Architect · Mobile Search & Chatbot',
      company: 'Akbank',
      place: 'Remote',
      date: 'Nov 2020 – Dec 2022',
      bullets: [
        'Led backend architecture of the chatbot and mobile financial search platform serving 12.8M+ users.',
        'Built a custom ETL and indexing pipeline: 6 months of transactions searchable in ~50 ms.',
        'Near real-time ingestion made new transactions searchable within 15 minutes, replacing overnight batches.',
        'Semantic search: "coffee" → Starbucks, "glasses" → optical retailers.',
      ],
    },
    {
      role: 'Senior Software Specialist · D-Filo, VDF Filo',
      company: 'Doğuş Teknoloji',
      place: 'Istanbul',
      date: 'Apr 2016 – Nov 2020',
      bullets: [
        'Built fleet-management modules (invoicing, operations, collections) with .NET Core and TypeScript.',
        'Led DevOps for the second project phase; hardened CI/CD and automated deployments.',
        'Co-designed the infrastructure and backend of a new fleet management platform from scratch.',
      ],
    },
    {
      role: 'Software Developer → Specialist · ERP & Media',
      company: 'Doğuş Teknoloji',
      place: 'Istanbul',
      date: 'Jul 2013 – Dec 2018',
      bullets: [
        'Full-stack features for a fleet rental ERP (.NET, MSSQL, JavaScript); ERP redesigns; media apps for NTV & NTV Spor.',
      ],
    },
  ],
  projects: [
    {
      name: 'Swipd',
      where: 'App Store & Google Play',
      date: '2026 –',
      text: 'Swipe-based affiliate shopping with pgvector-powered AI recommendations. Solo-shipped iOS (Swift), Android (Kotlin), Fastify backend, Next.js admin, and Puppeteer crawler.',
    },
    {
      name: 'WayOut',
      where: 'App Store',
      date: '2025 –',
      text: 'Cyberpunk-themed digital wellbeing app: "Walk to Earn" screen time. ScreenTime API, 4 app extensions, StoreKit 2, Live Activities, 9 languages.',
    },
    {
      name: 'FixIt',
      where: 'Shopify App Store',
      date: '2022',
      text: 'B2B Shopify app automating product data optimization and sales recommendations. Used by 250+ stores.',
    },
    {
      name: 'Messagine Bot',
      where: 'Telegram',
      date: '2021',
      text: 'Privacy-first anonymous chat bot with custom message routing. ~1,500 users, ~1,000 unique sessions.',
    },
  ],
  education: [
    {
      degree: 'M.Sc. · Telecommunication Engineering',
      school: 'Istanbul Technical University',
      date: '2011 – 2013',
      note: 'Coursework completed; GPA 3.5/4.0',
    },
    {
      degree: 'B.Sc. · Telecommunication Engineering',
      school: 'Istanbul Technical University',
      date: '2006 – 2011',
      note: 'GPA 3.45/4.0; ranked 7th of 70',
    },
  ],
  skills: [
    ['Backend', 'Java, Spring Boot, .NET Core, TypeScript, Nest.js, GraphQL, Microservices, BFF, Distributed & Fault-Tolerant Systems'],
    ['Data & Cloud', 'PostgreSQL, MSSQL, NoSQL, Redis, RabbitMQ, GCP, Azure, Docker, Kubernetes, CI/CD, Event-Driven, Data Pipelines'],
    ['Leadership', 'Mentorship, sprint planning, prioritization, stakeholder communication, coaching distributed teams'],
    ['Domain', 'Fintech compliance, data security, privacy-by-design, high-performance financial platforms'],
  ],
  labels: {
    summary: 'Summary',
    highlights: 'Highlights',
    experience: 'Experience',
    projects: 'Independent Products',
    education: 'Education',
    skills: 'Skills',
    contact: 'Contact',
    web: 'Web',
    hint: 'Try --all, --experience, --projects, --skills, --contact, --help',
    langHint: 'Türkçe için: --tr',
    opening: 'Opening',
  },
};

const tr = {
  ...en,
  title: 'Backend Takım Lideri · Fintech Mimarı',
  summary:
    'Milyonlarca kullanıcıya hizmet veren regülasyonlu fintech platformları ve büyük ölçekli finansal sistemler konusunda uzmanlaşmış backend mimarı ve takım lideri. Bankacılık, fintech ve kurumsal platformlar için yüksek erişilebilirlikte, yüksek performanslı backend mimarileri tasarlama ve yönetmede 12+ yıllık deneyim.',
  highlights: [
    '271 bin+ aktif kullanıcılı, regülasyonlu dijital cüzdanın backend\'i (Ozan)',
    'Akbank finansal arama: 12,8 milyon+ kullanıcı, ~50 ms yanıt süresi',
    'Swipd, WayOut, FixIt (250+ Shopify mağazası) ve fazlası, tek başına',
  ],
  experience: [
    {
      role: 'Backend Takım Lideri · Superapp Backend',
      company: 'Ozan Elektronik Para',
      place: 'Uzaktan',
      date: 'Ağu 2023 – Devam',
      bullets: [
        '271.000+ aktif kullanıcılı dijital cüzdanın regülasyon seviyesinde backend mimarisinin ve teslimatının sahibiyim.',
        'Tamamen uzaktan çalışan backend ekibini yönetiyor; sprint planlama, önceliklendirme ve ödeme/uyum sistemlerinin teslimatını yürütüyorum.',
        'Java, Spring Boot ve PostgreSQL ile yüksek işlem hacminde veri bütünlüğünü garanti eden hata toleranslı mikroservis mimarisini tasarladım.',
        'Kritik mimari kararlarda son teknik otorite; ürün, operasyon ve uyum ekipleri arasında teknik köprü.',
      ],
    },
    {
      role: 'Kıdemli Yazılım Geliştirici · Superapp Backoffice',
      company: 'Ozan Elektronik Para',
      place: 'Uzaktan',
      date: 'Ara 2022 – Ağu 2023',
      bullets: [
        'Uyum, destek ve fraud ekiplerinin kullandığı backoffice için BFF katmanı (Nest.js, GraphQL) tasarladım.',
        'Backoffice veri erişim sürelerini ~%50 azaltarak fraud inceleme ve uyum süreçlerini hızlandırdım.',
        'Şirket genelinde operasyonel araçların ölçeklenmesinde standart olan mimari modeli oluşturdum.',
      ],
    },
    {
      role: 'Yazılım Mimarı · Mobil Arama ve Chatbot',
      company: 'Akbank',
      place: 'Uzaktan',
      date: 'Kas 2020 – Ara 2022',
      bullets: [
        '12,8 milyon+ kullanıcılı chatbot ve mobil finansal arama platformunun backend mimarisine liderlik ettim.',
        '6 aylık hesap/kart hareketlerini ~50 ms\'de aranabilir kılan özel ETL ve indeksleme altyapısını kurdum.',
        'Yeni işlemleri 15 dakika içinde aranabilir yapan near-real-time ingestion ile gece batch\'lerini kaldırdım.',
        'Semantik arama: "kahve" → Starbucks, "gözlük" → optik mağazaları.',
      ],
    },
    {
      role: 'Kıdemli Yazılım Uzmanı · D-Filo, VDF Filo',
      company: 'Doğuş Teknoloji',
      place: 'İstanbul',
      date: 'Nis 2016 – Kas 2020',
      bullets: [
        '.NET Core ve TypeScript ile faturalama, operasyon ve tahsilat modüllerini geliştirdim.',
        'İkinci fazda DevOps\'u yönettim; CI/CD\'yi olgunlaştırıp dağıtımları otomatikleştirdim.',
        'Yeni filo yönetimi platformunun altyapı ve backend\'ini sıfırdan birlikte tasarladım.',
      ],
    },
    {
      role: 'Yazılım Geliştirici → Uzman · ERP ve Medya',
      company: 'Doğuş Teknoloji',
      place: 'İstanbul',
      date: 'Tem 2013 – Ara 2018',
      bullets: [
        'Araç kiralama ERP\'si için uçtan uca özellikler (.NET, MSSQL, JavaScript); ERP yenilemeleri; NTV ve NTV Spor uygulamaları.',
      ],
    },
  ],
  projects: [
    {
      name: 'Swipd',
      where: 'App Store & Google Play',
      date: '2026 –',
      text: 'pgvector tabanlı yapay zeka önerileriyle kaydırmalı affiliate alışveriş. iOS (Swift), Android (Kotlin), Fastify backend, Next.js admin ve Puppeteer crawler; tek başına.',
    },
    {
      name: 'WayOut',
      where: 'App Store',
      date: '2025 –',
      text: 'Cyberpunk temalı dijital wellbeing: yürüyerek ekran süresi kazan. ScreenTime API, 4 app extension, StoreKit 2, Live Activities, 9 dil.',
    },
    {
      name: 'FixIt',
      where: 'Shopify App Store',
      date: '2022',
      text: 'Ürün verisi optimizasyonu ve satış önerileri sunan B2B Shopify uygulaması. 250+ mağaza kullanıyor.',
    },
    {
      name: 'Messagine Bot',
      where: 'Telegram',
      date: '2021',
      text: 'Gizlilik odaklı anonim sohbet botu, özel mesaj yönlendirme mimarisi. ~1.500 kullanıcı, ~1.000 oturum.',
    },
  ],
  education: [
    {
      degree: 'Yüksek Lisans · Telekomünikasyon Mühendisliği',
      school: 'İstanbul Teknik Üniversitesi',
      date: '2011 – 2013',
      note: 'Dersler tamamlandı; ortalama 3,5/4,0',
    },
    {
      degree: 'Lisans · Telekomünikasyon Mühendisliği',
      school: 'İstanbul Teknik Üniversitesi',
      date: '2006 – 2011',
      note: 'Ortalama 3,45/4,0; 70 kişide 7.',
    },
  ],
  skills: [
    ['Backend', 'Java, Spring Boot, .NET Core, TypeScript, Nest.js, GraphQL, Mikroservisler, BFF, Dağıtık ve Hata Toleranslı Sistemler'],
    ['Veri & Bulut', 'PostgreSQL, MSSQL, NoSQL, Redis, RabbitMQ, GCP, Azure, Docker, Kubernetes, CI/CD, Event-Driven, Veri Hatları'],
    ['Liderlik', 'Mentorluk, sprint planlama, önceliklendirme, paydaş iletişimi, dağıtık ekip koçluğu'],
    ['Alan', 'Fintech regülasyonları, veri güvenliği, privacy-by-design, yüksek performanslı finansal platformlar'],
  ],
  labels: {
    summary: 'Özet',
    highlights: 'Öne Çıkanlar',
    experience: 'Deneyim',
    projects: 'Bağımsız Ürünler',
    education: 'Eğitim',
    skills: 'Yetenekler',
    contact: 'İletişim',
    web: 'Web',
    hint: 'Dene: --all, --experience, --projects, --skills, --contact, --help',
    langHint: 'For English: --en',
    opening: 'Açılıyor',
  },
};

module.exports = { links, en, tr };
