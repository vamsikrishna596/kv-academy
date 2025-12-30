import React, { createContext, useContext, useState, useEffect } from 'react';
import toast from 'react-hot-toast';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load user from local storage on mount
        const storedUser = localStorage.getItem('eduMartUser');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (email, password) => {
        // Dummy validation against localStorage users
        const users = JSON.parse(localStorage.getItem('eduMartUsers') || '[]');
        const foundUser = users.find(u => u.email === email && u.password === password);

        // Hardcoded Admin
        if (email === 'admin@edumart.com' && password === 'admin123') {
            const adminUser = { name: 'Admin', email, role: 'admin' };
            setUser(adminUser);
            localStorage.setItem('eduMartUser', JSON.stringify(adminUser));
            toast.success('Welcome back, Admin!');
            return true;
        }

        if (foundUser) {
            const { password, ...userWithoutPass } = foundUser;
            setUser(userWithoutPass);
            localStorage.setItem('eduMartUser', JSON.stringify(userWithoutPass));
            toast.success('Login successful!');
            return true;
        } else {
            toast.error('Invalid email or password');
            return false;
        }
    };

    const signup = (name, email, password) => {
        const users = JSON.parse(localStorage.getItem('eduMartUsers') || '[]');

        if (users.find(u => u.email === email)) {
            toast.error('Email already exists');
            return false;
        }

        const newUser = { id: Date.now(), name, email, password, role: 'student' };
        users.push(newUser);
        localStorage.setItem('eduMartUsers', JSON.stringify(users));
        toast.success('Signup successful! Please login.');
        return true;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('eduMartUser');
        toast.success('Logged out successfully');
    };

    const value = {
        user,
        login,
        signup,
        logout,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
};
