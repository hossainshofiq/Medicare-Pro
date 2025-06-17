'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const AdminDashboard = () => {
    const [admin, setAdmin] = useState(null);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState({
        totalDoctors: 0,
        activeSubscriptions: 0,
        pendingApprovals: 0,
        expiredSubscriptions: 0
    });
    const [doctors, setDoctors] = useState([]);
    const [filter, setFilter] = useState('all');
    const [sortOrder, setSortOrder] = useState('desc');
    const [showAddDoctor, setShowAddDoctor] = useState(false);
    const [newDoctor, setNewDoctor] = useState({
        name: '',
        email: '',
        password: '',
        specialization: ''
    });
    const router = useRouter();

    useEffect(() => {
        const authCheck = async () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            const token = localStorage.getItem('authToken');

            if (!token || !userData || userData.role !== 'super_admin') {
                router.push('/auth/login');
                return;
            }

            setAdmin(userData);
            fetchDashboardData();
        };

        const fetchDashboardData = async () => {
            try {
                // Simulated data - replace with actual API calls
                setStats({
                    totalDoctors: 42,
                    activeSubscriptions: 36,
                    pendingApprovals: 5,
                    expiredSubscriptions: 3
                });

                const mockDoctors = [
                    {
                        _id: '1',
                        name: 'Dr. Sarah Johnson',
                        email: 'sarah@example.com',
                        specialization: 'Cardiology',
                        subscription: {
                            startDate: '2025-01-15T00:00:00.000Z',
                            endDate: '2026-01-15T00:00:00.000Z',
                            isActive: true
                        }
                    },
                    {
                        _id: '2',
                        name: 'Dr. Michael Chen',
                        email: 'michael@example.com',
                        specialization: 'Neurology',
                        subscription: {
                            startDate: '2024-06-01T00:00:00.000Z',
                            endDate: '2025-05-30T00:00:00.000Z',
                            isActive: false
                        }
                    },
                    {
                        _id: '3',
                        name: 'Dr. Lisa Rodriguez',
                        email: 'lisa@example.com',
                        specialization: 'Pediatrics',
                        subscription: {
                            startDate: '2025-03-10T00:00:00.000Z',
                            endDate: '2025-12-10T00:00:00.000Z',
                            isActive: true
                        }
                    }
                ];
                setDoctors(mockDoctors);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        authCheck();
    }, [router]);

    const getSubscriptionStatus = (endDate) => {
        const today = new Date();
        const end = new Date(endDate);
        const diffTime = end - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays < 0) return 'expired';
        if (diffDays <= 30) return 'expiring';
        return 'active';
    };

    const handleAddDoctor = async () => {
        try {
            // Simulate API call
            const addedDoctor = {
                _id: Date.now().toString(),
                ...newDoctor,
                subscription: {
                    startDate: new Date().toISOString(),
                    endDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString(),
                    isActive: true
                }
            };
            setDoctors([...doctors, addedDoctor]);
            setNewDoctor({ name: '', email: '', password: '', specialization: '' });
            setShowAddDoctor(false);
            setStats(prev => ({
                ...prev,
                totalDoctors: prev.totalDoctors + 1,
                activeSubscriptions: prev.activeSubscriptions + 1
            }));
        } catch (error) {
            console.error('Error adding doctor:', error);
        }
    };

    const filteredDoctors = doctors.filter(doctor => {
        const status = getSubscriptionStatus(doctor.subscription.endDate);
        if (filter === 'all') return true;
        if (filter === 'active') return status === 'active';
        if (filter === 'expiring') return status === 'expiring';
        if (filter === 'expired') return status === 'expired';
        if (filter === '7days') {
            const end = new Date(doctor.subscription.endDate);
            const today = new Date();
            const diffTime = end - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays <= 7 && diffDays >= 0;
        }
        if (filter === '15days') {
            const end = new Date(doctor.subscription.endDate);
            const today = new Date();
            const diffTime = end - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays <= 15 && diffDays >= 0;
        }
        if (filter === '30days') {
            const end = new Date(doctor.subscription.endDate);
            const today = new Date();
            const diffTime = end - today;
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays <= 30 && diffDays >= 0;
        }
        return true;
    });

    const sortedDoctors = [...filteredDoctors].sort((a, b) => {
        const dateA = new Date(a.subscription.endDate);
        const dateB = new Date(b.subscription.endDate);
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    });

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Welcome, {admin.name}</h1>
                    <p className="text-gray-600">Last login: {new Date().toLocaleString()}</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="font-semibold text-lg mb-2">Total Doctors</h3>
                        <p className="text-3xl font-bold text-blue-600">{stats.totalDoctors}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="font-semibold text-lg mb-2">Active Subscriptions</h3>
                        <p className="text-3xl font-bold text-green-600">{stats.activeSubscriptions}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="font-semibold text-lg mb-2">Pending Approvals</h3>
                        <p className="text-3xl font-bold text-yellow-600">{stats.pendingApprovals}</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="font-semibold text-lg mb-2">Expired Subscriptions</h3>
                        <p className="text-3xl font-bold text-red-600">{stats.expiredSubscriptions}</p>
                    </div>
                </div>

                {/* Doctor Management Section */}
                <div className="bg-white p-6 rounded-lg shadow mb-8">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-semibold">Doctor Management</h2>
                        <button
                            onClick={() => setShowAddDoctor(true)}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Add Doctor
                        </button>
                    </div>

                    {showAddDoctor && (
                        <div className="mb-6 p-4 border rounded-lg">
                            <h3 className="font-medium mb-3">Add New Doctor</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        value={newDoctor.name}
                                        onChange={(e) => setNewDoctor({ ...newDoctor, name: e.target.value })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Dr. John Smith"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        value={newDoctor.email}
                                        onChange={(e) => setNewDoctor({ ...newDoctor, email: e.target.value })}
                                        className="w-full p-2 border rounded"
                                        placeholder="doctor@example.com"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                                    <input
                                        type="password"
                                        value={newDoctor.password}
                                        onChange={(e) => setNewDoctor({ ...newDoctor, password: e.target.value })}
                                        className="w-full p-2 border rounded"
                                        placeholder="••••••••"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Specialization</label>
                                    <input
                                        type="text"
                                        value={newDoctor.specialization}
                                        onChange={(e) => setNewDoctor({ ...newDoctor, specialization: e.target.value })}
                                        className="w-full p-2 border rounded"
                                        placeholder="Cardiology"
                                    />
                                </div>
                            </div>
                            <div className="flex space-x-2">
                                <button
                                    onClick={handleAddDoctor}
                                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                                >
                                    Save Doctor
                                </button>
                                <button
                                    onClick={() => setShowAddDoctor(false)}
                                    className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Filter and Sort Controls */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                        <div className="flex items-center space-x-2">
                            <label className="text-sm font-medium">Filter:</label>
                            <select
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="p-2 border rounded"
                            >
                                <option value="all">All Doctors</option>
                                <option value="active">Active</option>
                                <option value="expiring">Expiring Soon</option>
                                <option value="expired">Expired</option>
                                <option value="7days">Expiring in 7 days</option>
                                <option value="15days">Expiring in 15 days</option>
                                <option value="30days">Expiring in 30 days</option>
                            </select>
                        </div>
                        <div className="flex items-center space-x-2">
                            <label className="text-sm font-medium">Sort by Expiry:</label>
                            <select
                                value={sortOrder}
                                onChange={(e) => setSortOrder(e.target.value)}
                                className="p-2 border rounded"
                            >
                                <option value="asc">Oldest First</option>
                                <option value="desc">Newest First</option>
                            </select>
                        </div>
                    </div>

                    {/* Doctors Table */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specialization</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subscription Start</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subscription End</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {sortedDoctors.map((doctor) => {
                                    const status = getSubscriptionStatus(doctor.subscription.endDate);
                                    const statusColors = {
                                        active: 'bg-green-100 text-green-800',
                                        expiring: 'bg-yellow-100 text-yellow-800',
                                        expired: 'bg-red-100 text-red-800'
                                    };
                                    return (
                                        <tr key={doctor._id}>
                                            <td className="px-6 py-4 whitespace-nowrap">{doctor.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{doctor.email}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{doctor.specialization}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{formatDate(doctor.subscription.startDate)}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">{formatDate(doctor.subscription.endDate)}</td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
                                                    {status === 'expiring' ? 'Expiring Soon' : status}
                                                </span>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Account Information */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Account Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-600">Email: {admin.email}</p>
                            <p className="text-gray-600">Role: Super Admin</p>
                            <p className="text-gray-600">Member Since: {formatDate(admin.createdAt)}</p>
                        </div>
                        <div className="text-right">
                            <button
                                onClick={() => {
                                    localStorage.removeItem('authToken');
                                    localStorage.removeItem('user');
                                    router.push('/api/v1/auth/login');
                                }}
                                className="text-red-600 hover:text-red-800 font-medium btn"
                            >
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;