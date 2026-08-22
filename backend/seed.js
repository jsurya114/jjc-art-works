require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Admin = require('./models/Admin');

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');

    // Check if admin already exists
    let admin = await Admin.findOne({ email: 'jjcartwork2212@gmail.com' });
    
    if (admin) {
      console.log('Admin user already exists');
      process.exit();
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('jjcthuruthy2227', salt);

    admin = new Admin({
      email: 'jjcartwork2212@gmail.com',
      password: hashedPassword
    });

    await admin.save();
    console.log('Admin user seeded successfully');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedAdmin();
