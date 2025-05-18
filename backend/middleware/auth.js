import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const adminProtect = async (req, res, next) => {
  let token;
  
  if (req.headers.authorization?.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).json({ 
      success: false,
      message: 'Not authorized to access this route'
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const currentUser = await User.findById(decoded.id);

    if (!currentUser || currentUser.role !== 'admin') {
      return res.status(401).json({
        success: false,
        message: 'Invalid admin privileges'
      });
    }

    if (currentUser.accountLockedUntil && currentUser.accountLockedUntil > Date.now()) {
      const remainingTime = Math.ceil(
        (currentUser.accountLockedUntil - Date.now()) / 60000
      );
      return res.status(403).json({
        success: false,
        message: `Account locked. Try again in ${remainingTime} minutes`
      });
    }

    req.user = currentUser;
    next();
  } catch (err) {
    return res.status(401).json({
      success: false,
      message: 'Invalid or expired token'
    });
  }
};

export const checkAccountStatus = async (req, res, next) => {
  const user = await User.findById(req.user.id);
  
  if (user?.accountLockedUntil && user.accountLockedUntil > Date.now()) {
    return res.status(403).json({
      success: false,
      message: 'Account temporarily locked due to security policy'
    });
  }
  
  next();
};