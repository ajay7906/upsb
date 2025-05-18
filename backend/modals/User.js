import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Invalid email format']
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long'],
        select: false,
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default : 'admin'
    },
    lastLogin: Date,
    failedLoginAttempts: {
        type: Number,
        default: 0
    },
    accountLookedUntill: Date,
    createdAt: {
        type: Date,
        default: Date.now
    },
    //hash password
    
}, { timestamps: true });
//hash password before saving
userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        return next();
    }
    this.password = await bcrypt.hash(this.password, 12);
    next();
});
//account locking logic
userSchema.pre('save', async function(next){
    if(!this.isModified('failedLoginAttempts')){
        return next();
    }
    if(this.failedLoginAttempts >= 5){
        this.accountLockedUntil = Date.now() + 30 * 60 * 1000; // lock for 30 minutes
    }
    next();
})
//password  verification method
userSchema.methods.comparePassword = async function(candidatePassword){
    return await bcrypt.compare(candidatePassword, this.password);

}

export default mongoose.model('User', userSchema);