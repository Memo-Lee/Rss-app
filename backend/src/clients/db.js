  import mongoose from 'mongoose';
  mongoose.set("strictQuery", false);
  mongoose
    .connect("mongodb://localhost:27017", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB: Connectted'))
    .catch((err) => console.log(err.message));
