const mongoose = require('mongoose');

module.exports = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_LOCAL_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    console.log(
      `Connected to MongoDB: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.error(`MongoDB Connection Error: ${err.message}`.red);
    process.exit(1);
  }
};
