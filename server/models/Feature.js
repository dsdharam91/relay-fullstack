import mongoose from 'mongoose';

const FeatureSchema = new mongoose.Schema({
  name: {
    type: String
  },
  description: {
    type: String
  },
  url: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Feature = mongoose.model('Feature', FeatureSchema);

export default Feature;
