export const en = {
  common: {
    whatsapp: "WhatsApp",
    call: "Phone call",
    bookLesson: "Book a lesson",
  },
  header: {
    brand: "Doron — Guitar/Piano Lessons",
    topNavAria: "Top navigation",
    nav: {
      lessons: "Lessons",
      prices: "Prices",
      faq: "FAQ",
      contact: "Contact",
    },
    back: "← Back",
    backAria: "Back to previous page",
    logoAlt: "Logo",
    language: {
      switchToEn: "Switch language to English",
      switchToHe: "Switch language to Hebrew",
    },
    menu: {
      open: "Open menu",
      close: "Close menu",
      label: "Menu",
    },
  },
  home: {
    hero: {
      title: "Guitar and Piano Lessons in Ashkelon",
      subtitle: "Personalized lessons in a friendly, professional atmosphere.",
      ctaBooking: "Book a lesson",
      ctaWhatsapp: "WhatsApp",
      ctaLessons: "About the lessons",
      ariaBookTrial: "Book a trial lesson",
      ariaWhatsapp: "Send a WhatsApp message",
    },
    fitFor: {
      title: "Who it's for",
      items: [
        "Kids, teens and adults at all levels",
        "Beginners from scratch or returning players",
        "Advanced learners who want technique, rhythm and theory",
      ],
    },
    whatYouGet: {
      title: "What you get",
      items: [
        "Personalized learning plan",
        "Practice materials and favorite songs",
        "Progress tracking and home practice guidance",
      ],
    },
    howItWorks: {
      title: "How it works",
      steps: [
        "Short intro call to define goals",
        "Trial lesson (60 minutes)",
        "Personal learning plan and scheduling",
      ],
    },
    mobileCta: {
      ready: "Ready to start?",
    },
    testimonials: {
      title: "What students say",
      regionAria: "Reviews",
      empty: "No reviews to show yet",
      readMore: "Read more",
      readLess: "Show less",
      ratingSr: "Rating: {rating} out of 5",
      slideAria: "Review {index} of {total}",
      dotsAria: "Reviews slider controls",
      prev: "Previous slide",
      next: "Next slide",
    },
  },
  lessons: {
    title: "Lessons",
    instruments: {
      title: "Instruments and topics",
      items: [
        "Acoustic / Electric / Classical Guitar",
        "Piano",
        "Theory, rhythm, improvisation, accompaniment, basic notation",
      ],
    },
    formats: {
      title: "Lesson formats",
      items: [
        "Private 1:1 — tailored to your pace",
        "Group 2–4 — collaboration and motivation",
        "School programs — including post-hospital frameworks",
      ],
    },
    equipment: {
      title: "Home lesson equipment",
      items: [
        "Piano: acoustic/digital piano or keyboard with 61+ keys",
        "Guitar: personal instrument in good condition",
        "Notebook and binder for practice sheets",
      ],
    },
  },
  prices: {
    title: "Prices",
    items: [
      { label: "Studio — 60 minutes", price: "₪120" },
      { label: "At student's home (Ashkelon) — 60 minutes", price: "₪150" },
      { label: "Group 2–4", price: "Contact for price" },
    ],
    cancellation: "Cancellations: please notify at least 24 hours in advance.",
  },
  faq: {
    title: "FAQ",
    items: [
      { q: "Do I need an instrument at home?", a: "Highly recommended. Piano/keyboard or personal guitar." },
      { q: "How long should I practice?", a: "At least 15–30 minutes daily for beginners." },
      { q: "Do you offer online lessons?", a: "Yes, video lessons are available if needed." },
      { q: "Can we learn favorite songs?", a: "Of course, while building strong foundations." },
      { q: "Suitable for kids?", a: "Yes, extensive experience with kids and teens." },
      { q: "Lessons in English?", a: "Yes, available in English, Hebrew or Spanish." },
    ],
  },
  booking: {
    title: "Book a lesson",
    bullets: [
      "Focused trial lesson to define goals",
      "Gear guidance and home practice",
      "Flexible scheduling and location",
    ],
    todo: "TODO: integrate Calendly",
    linkPrices: "Go to prices",
    wantPrices: "Want to know prices?",
  },
  terms: {
    title: "Terms of Service",
    body: "General information about payments, cancellations (24h) and lesson conduct.",
  },
  accessibility: {
    title: "Accessibility Statement",
    body: "Includes skip link, proper headings, visible focus and labeled links. If you hit an issue, call or WhatsApp us.",
  },
  contact: {
    title: "Contact us",
    subtitle: "We'll get back to you to schedule a lesson",
    form: {
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      namePlaceholder: "Full name",
      emailPlaceholder: "your.email@example.com",
      messagePlaceholder: "Tell us about your musical goals...",
      submit: "Send message",
      sending: "Sending...",
      nameRequired: "Name is required",
      emailRequired: "Email is required",
      emailInvalid: "Please enter a valid email address",
      messageRequired: "Message is required",
      messageTooShort: "Message must be at least 10 characters",
    },
    successTitle: "Message sent!",
    successBody: "We'll get back to you soon.",
    errorTitle: "Sending failed",
    errorBody: "Please try again later.",
    phoneLabel: "Phone: 053-524-7393",
    whatsappLabel: "WhatsApp",
    emailLabel: "Email",
    backHome: "Back to home",
    aria: {
      call: "Dial phone",
      whatsapp: "Send WhatsApp message",
      email: "Send email",
    },
  },
  footer: {
    about: {
      title: "About the lessons",
      body: "Private and group lessons in the Ashkelon area. Guitar and piano for all levels.",
    },
    links: {
      title: "Quick links",
      home: "Home",
      lessons: "Lessons",
      prices: "Prices",
      faq: "FAQ",
      booking: "Booking",
      contact: "Contact",
    },
    contact: {
      title: "Contact",
      whatsapp: "WhatsApp",
      phone: "Phone: 053-524-7393",
      email: "Email: doron.c@live.com",
    },
    aria: {
      whatsappOpen: "Open WhatsApp",
      phoneDial: "Dial phone",
      emailSend: "Send email",
    },
    copyright: "© {year} Doron Music Lessons",
  },
  a11y: {
    skipToContent: "Skip to content",
  },
};

export type EnglishDictionary = typeof en;


