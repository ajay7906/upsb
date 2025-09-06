import User from '../modals/User.js';
import jwt from 'jsonwebtoken';

const MAX_ATTEMPTS = 5;
const LOCK_TIME = 30 * 60 * 1000; // 30 minutes

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email })
      .select('+password +failedLoginAttempts +accountLockedUntil');

    // Account lock check
    if (user?.accountLockedUntil && user.accountLockedUntil > Date.now()) {
      const remainingTime = Math.ceil(
        (user.accountLockedUntil - Date.now()) / 60000
      );
      return res.status(403).json({
        success: false,
        message: `Account locked. Try again in ${remainingTime} minutes`
      });
    }

    // Credential validation
    if (!user || !(await user.comparePassword(password))) {
      if (user) {
        user.failedLoginAttempts += 1;
        
        if (user.failedLoginAttempts >= MAX_ATTEMPTS) {
          user.accountLockedUntil = Date.now() + LOCK_TIME;
          await user.save();
          return res.status(403).json({
            success: false,
            message: 'Account locked for 30 minutes due to multiple failed attempts'
          });
        }
        
        await user.save();
      }
      
      return res.status(401).json({
        success: false,
        message: `Invalid credentials (${MAX_ATTEMPTS - (user?.failedLoginAttempts || 0)} attempts remaining)`
      });
    }

    // Reset counters on success
    user.failedLoginAttempts = 0;
   
    user.accountLookedUntill = null;
    user.lastLogin = Date.now();
    await user.save();

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN }
    );

    res.status(200).json({
      success: true,
      token,
      expiresIn: process.env.JWT_EXPIRES_IN
    });

  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const logout = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Logged out successfully'
  });
};


export const sendMail = async (req, res) => {
  
}