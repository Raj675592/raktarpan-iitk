# Firebase Setup Guide for RAKTARPAN

## 🔥 Firebase Database Setup

Follow these steps to set up Firebase Firestore for your blood camps data:

### Step 1: Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter project name: `raktarpan-iitk`
4. Enable Google Analytics (optional)
5. Click "Create project"

### Step 2: Enable Firestore Database

1. In your Firebase project console, click "Firestore Database"
2. Click "Create database"
3. Choose **"Start in test mode"** for development
4. Select a location closest to your users (e.g., `asia-south1` for India)
5. Click "Done"

### Step 3: Get Firebase Configuration

1. Go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click "Add app" and select Web (</>) 
4. Register app with name: `raktarpan-web`
5. Copy the Firebase configuration object

### Step 4: Update Configuration

Replace the configuration in `src/services/firebase.js`:

```javascript
const firebaseConfig = {
  apiKey: "your-actual-api-key-here",
  authDomain: "your-project-id.firebaseapp.com",
  projectId: "your-actual-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-actual-app-id"
};
```

### Step 5: Set Up Firestore Security Rules

In Firebase Console > Firestore Database > Rules, use these rules for development:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow read/write access to blood camps collection
    match /bloodCamps/{document} {
      allow read: if true;
      allow write: if true; // Change this for production
    }
    
    // For production, use more restrictive rules:
    // allow read: if true;
    // allow write: if request.auth != null;
  }
}
```

### Step 6: Migrate Existing Data

To upload your existing JSON data to Firebase:

1. Update the Firebase configuration in `src/services/firebase.js`
2. In your React component, import and call the migration function:

```javascript
import { migrateDataToFirebase } from '../services/dataMigration';

// Call this once to migrate data
const handleMigration = async () => {
  await migrateDataToFirebase();
  console.log('Data migration completed!');
};
```

### Step 7: Update Your Components

Replace your current BloodCamps component with the database-enabled version:

1. Rename `BloodCamps.js` to `BloodCampsOld.js` (backup)
2. Rename `BloodCampsWithDB.js` to `BloodCamps.js`
3. Update imports in `App.js` if needed

## 🚀 Usage Examples

### Basic Usage with Hook

```javascript
import { useBloodCamps } from '../hooks/useBloodCamps';

function MyComponent() {
  const { camps, loading, error, addCamp, updateCamp } = useBloodCamps();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {camps.map(camp => (
        <div key={camp.id}>
          <h3>{camp.title}</h3>
          <p>{camp.description}</p>
        </div>
      ))}
    </div>
  );
}
```

### Adding a New Camp

```javascript
const newCamp = {
  title: "New Year Blood Drive",
  date: "2026-01-01",
  time: "09:00 AM - 05:00 PM",
  location: "Community Center",
  organizer: "Raktarpan Team",
  status: "upcoming",
  description: "Start the new year by saving lives",
  requirements: ["Age 18-65", "Good health"],
  contact: "+91 98765 43210",
  registeredDonors: 0,
  targetDonors: 100
};

await addCamp(newCamp);
```

### Real-time Updates

```javascript
import { useBloodCampsRealtime } from '../hooks/useBloodCamps';

function RealtimeComponent() {
  const { camps, loading, error } = useBloodCampsRealtime();
  
  // Data updates automatically when database changes
  return (
    <div>
      {camps.map(camp => (
        <CampCard key={camp.id} camp={camp} />
      ))}
    </div>
  );
}
```

## 🔒 Production Security

For production deployment:

1. **Authentication**: Implement user authentication
2. **Security Rules**: Restrict write access to authenticated users
3. **Data Validation**: Add server-side validation using Cloud Functions
4. **API Keys**: Secure your API keys using environment variables

Example production security rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /bloodCamps/{document} {
      // Allow anyone to read camps
      allow read: if true;
      
      // Only authenticated users can write
      allow create, update: if request.auth != null 
        && request.auth.token.email_verified == true;
      
      // Only admin users can delete
      allow delete: if request.auth != null 
        && request.auth.token.admin == true;
    }
  }
}
```

## 📊 Database Structure

Your Firestore collection `bloodCamps` will have documents with this structure:

```json
{
  "title": "Annual Blood Donation Drive",
  "date": "2025-10-02",
  "time": "09:00 AM - 05:00 PM",
  "location": "Main Auditorium, IIT Kanpur",
  "organizer": "Raktarpan Team",
  "status": "upcoming",
  "description": "Join us for our biggest blood donation drive...",
  "requirements": ["Age: 18-65 years", "Weight: Above 50kg"],
  "contact": "+91 90248 92379",
  "registeredDonors": 45,
  "targetDonors": 100,
  "image": "https://images.unsplash.com/...",
  "createdAt": "2025-09-26T10:30:00Z",
  "updatedAt": "2025-09-26T10:30:00Z"
}
```

## 🔄 Alternative Database Options

If you prefer other databases:

### 1. **MongoDB with Node.js Backend**
- More complex setup but powerful
- Good for complex queries and relationships
- Requires backend server

### 2. **Supabase (PostgreSQL)**
- Open source Firebase alternative
- Real-time subscriptions
- Built-in authentication

### 3. **Airtable API**
- Easy to set up and manage
- Great for non-technical users
- Good for small to medium datasets

### 4. **Local JSON with GitHub Actions**
- Keep using JSON files
- Use GitHub Actions to deploy
- Good for static data that doesn't change often

## 📱 Next Steps

1. Set up Firebase project
2. Configure authentication (optional)
3. Migrate existing data
4. Test the database functionality
5. Deploy to production
6. Set up monitoring and analytics

## 🆘 Troubleshooting

**Common Issues:**

1. **"Permission denied" error**: Check Firestore security rules
2. **"Firebase not initialized"**: Verify configuration in firebase.js
3. **"Network error"**: Check internet connection and Firebase project status
4. **Data not updating**: Ensure you're calling the hook methods correctly

**Getting Help:**
- Check Firebase documentation
- Look at browser console for error messages
- Verify your Firebase project settings
- Test with simple read/write operations first