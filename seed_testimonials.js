import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp } from 'firebase/firestore';
import dotenv from 'dotenv';
dotenv.config();

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const testimonials = [
  {
    initial: 'S',
    church: "St. Mary's Forane Church",
    location: 'Thrissur',
    service: 'Chapel Pews',
    text: '"The pews JJC crafted for our church are absolutely magnificent. They perfectly blend with the heritage architecture of our century-old parish."',
    author: 'Fr. Sebastian Mathew',
    title: 'Parish Priest',
    year: '2023',
    rating: 5,
    status: 'approved'
  },
  {
    initial: 'G',
    church: 'Grace Fellowship Church',
    location: 'Kochi',
    service: 'Full Interior',
    text: '"From the first consultation to the final installation JJC was professional, respectful, and delivered exceptional quality woodwork."',
    author: 'Pastor David Emmanuel',
    title: 'Senior Pastor',
    year: '2022',
    rating: 5,
    status: 'approved'
  },
  {
    initial: 'S',
    church: "St. Joseph's Cathedral",
    location: 'Kozhikode',
    service: 'Altar Furniture',
    text: '"The altar JJC built for us is the centrepiece of our cathedral. The intricate carving detail is a testament to their devotion to the craft."',
    author: 'Fr. Joseph Kurien',
    title: 'Cathedral Rector',
    year: '2023',
    rating: 5,
    status: 'approved'
  },
  {
    initial: 'H',
    church: 'Holy Redeemer Chapel',
    location: 'Palakkad',
    service: 'Pulpit Design',
    text: '"Our new pulpit is a masterpiece. The hand-carved panels tell a story, and the finish is exquisite."',
    author: 'Sr. Theresa George',
    title: 'Chapel Administrator',
    year: '2021',
    rating: 5,
    status: 'approved'
  },
  {
    initial: 'S',
    church: "St. Peter's Church",
    location: 'Kannur',
    service: 'Church Seating',
    text: '"We replaced all our old chairs with JJC custom seating. The congregation immediately noticed the superior comfort and beautiful aesthetics."',
    author: 'Deacon Philip Varghese',
    title: 'Church Administrator',
    year: '2022',
    rating: 5,
    status: 'approved'
  },
  {
    initial: 'C',
    church: 'Christ Church',
    location: 'Trivandrum',
    service: 'Custom Woodwork',
    text: '"JJC built our confessional and sacristy cabinets. The attention to detail and reverence for the sacred space was deeply appreciated."',
    author: 'Fr. Anthony Fernandez',
    title: 'Parish Priest',
    year: '2023',
    rating: 5,
    status: 'approved'
  }
];

async function seed() {
  console.log('Seeding testimonials...');
  const ref = collection(db, 'testimonials');
  for (const t of testimonials) {
    await addDoc(ref, {
      ...t,
      createdAt: serverTimestamp()
    });
    console.log(`Added ${t.author}`);
  }
  console.log('Done.');
  process.exit(0);
}

seed();
