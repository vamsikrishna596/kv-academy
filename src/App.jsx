import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import Upload from './pages/Upload';
import AdminDashboard from './pages/AdminDashboard';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
    return (
        <AuthProvider>
            <CartProvider>
                <div className="min-h-screen flex flex-col font-sans">
                    <Navbar />
                    <main className="flex-grow container mx-auto px-4 py-8">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/product/:id" element={<ProductDetails />} />

                            {/* Protected Routes */}
                            <Route path="/cart" element={
                                <ProtectedRoute>
                                    <Cart />
                                </ProtectedRoute>
                            } />
                            <Route path="/checkout" element={
                                <ProtectedRoute>
                                    <Checkout />
                                </ProtectedRoute>
                            } />
                            <Route path="/success" element={
                                <ProtectedRoute>
                                    <Success />
                                </ProtectedRoute>
                            } />
                            <Route path="/upload" element={
                                <ProtectedRoute>
                                    <Upload />
                                </ProtectedRoute>
                            } />
                            <Route path="/admin" element={
                                <ProtectedRoute adminOnly={true}>
                                    <AdminDashboard />
                                </ProtectedRoute>
                            } />
                        </Routes>
                    </main>
                    <Toaster position="bottom-right" />
                </div>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;
