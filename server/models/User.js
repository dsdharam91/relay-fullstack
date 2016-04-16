import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const UserSchema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  website: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save', (next) => {
  const user = this;

  // break out if the password hasn't changed
  if (!user.isModified('password')) {
    return next();
  }

  // hash if password is changed
  bcrypt.gentSalt(5, (err, salt) => {
    if (err) {
      return next();
    }
    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

const User = mongoose.model('User', UserSchema);

export default User;
