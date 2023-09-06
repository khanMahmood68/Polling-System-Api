const mongoose = require('mongoose');

// Replace 'mongodb://localhost/mydatabase' with your MongoDB connection string
// const dbURI = ('mongodb://127.0.0.1:27017/Polling_System');
const dbURI = ('mongodb+srv://mahmood68:HsKmej0cQB7HQJ0p@cluster0.sl5apwz.mongodb.net/')

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
