'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const DoctorDashboard = () => {
    const [doctor, setDoctor] = useState(null);
    const [assistants, setAssistants] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAddAssistant, setShowAddAssistant] = useState(false);
    const [editAssistant, setEditAssistant] = useState(null);
    const [newAssistant, setNewAssistant] = useState({
        name: '',
        email: '',
        phone: ''
    });
    const router = useRouter();

    useEffect(() => {
        const authCheck = async () => {
            const userData = JSON.parse(localStorage.getItem('user'));
            const token = localStorage.getItem('authToken');

            if (!token || !userData || userData.role !== 'doctor') {
                router.push('/auth/login');
                return;
            }

            setDoctor(userData);

            try {
                // Simulate fetching assistants
                const mockAssistants = [
                    { id: '1', name: 'Sarah Johnson', email: 'sarah@example.com', phone: '123-456-7890' },
                    { id: '2', name: 'Michael Chen', email: 'michael@example.com', phone: '987-654-3210' }
                ];
                setAssistants(mockAssistants);
            } catch (error) {
                console.error('Error fetching assistants:', error);
            } finally {
                setLoading(false);
            }
        };

        authCheck();
    }, [router]);

    const handleAddAssistant = async () => {
        try {
            // Simulate API call
            const addedAssistant = {
                id: Date.now().toString(),
                ...newAssistant
            };
            setAssistants([...assistants, addedAssistant]);
            setNewAssistant({ name: '', email: '', phone: '' });
            setShowAddAssistant(false);
        } catch (error) {
            console.error('Error adding assistant:', error);
        }
    };

    const handleUpdateAssistant = async () => {
        try {
            // Simulate API call
            setAssistants(assistants.map(a =>
                a.id === editAssistant.id ? editAssistant : a
            ));
            setEditAssistant(null);
        } catch (error) {
            console.error('Error updating assistant:', error);
        }
    };

    const handleDeleteAssistant = async (id) => {
        if (confirm('Are you sure you want to delete this assistant?')) {
            try {
                // Simulate API call
                setAssistants(assistants.filter(a => a.id !== id));
            } catch (error) {
                console.error('Error deleting assistant:', error);
            }
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const getDaysRemaining = (endDate) => {
        const end = new Date(endDate);
        const today = new Date();
        const diffTime = end - today;
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    };

    const daysRemaining = getDaysRemaining(doctor.subscription.endDate);

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">Welcome, {doctor.name}</h1>
                    <p className="text-gray-600">Last login: {new Date().toLocaleString()}</p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="font-semibold text-lg mb-2">Total Patients</h3>
                        <p className="text-3xl font-bold text-blue-600">142</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="font-semibold text-lg mb-2">Appointments Today</h3>
                        <p className="text-3xl font-bold text-green-600">8</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow">
                        <h3 className="font-semibold text-lg mb-2">Assistants</h3>
                        <p className="text-3xl font-bold text-purple-600">{assistants.length}</p>
                    </div>
                </div>

                {/* Subscription Status */}
                <div className="bg-white p-6 rounded-lg shadow mb-8">
                    <h2 className="text-xl font-semibold mb-4">Subscription Status</h2>
                    <div className="space-y-3">
                        <p className="flex justify-between">
                            <span className="text-gray-600">Plan:</span>
                            <span className="font-medium">Professional Plan</span>
                        </p>
                        <p className="flex justify-between">
                            <span className="text-gray-600">Status:</span>
                            <span className={`font-medium ${doctor.subscription.isActive ? 'text-green-600' : 'text-red-600'}`}>
                                {doctor.subscription.isActive ? 'Active' : 'Inactive'}
                            </span>
                        </p>
                        <p className="flex justify-between">
                            <span className="text-gray-600">Start Date:</span>
                            <span>{formatDate(doctor.subscription.startDate)}</span>
                        </p>
                        <p className="flex justify-between">
                            <span className="text-gray-600">End Date:</span>
                            <span>{formatDate(doctor.subscription.endDate)}</span>
                        </p>
                        <p className="flex justify-between">
                            <span className="text-gray-600">Days Remaining:</span>
                            <span className={daysRemaining <= 30 ? 'text-yellow-600' : 'text-green-600'}>
                                {daysRemaining} days
                            </span>
                        </p>
                    </div>
                </div>

                {/* Assistants Management */}
                <div className="bg-white p-6 rounded-lg shadow mb-8">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">My Assistants</h2>
                        <button
                            onClick={() => setShowAddAssistant(true)}
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                        >
                            Add Assistant
                        </button>
                    </div>

                    {showAddAssistant && (
                        <div className="mb-6 p-4 border rounded-lg">
                            <h3 className="font-medium mb-3">Add New Assistant</h3>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        value={newAssistant.name}
                                        onChange={(e) => setNewAssistant({ ...newAssistant, name: e.target.value })}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        value={newAssistant.email}
                                        onChange={(e) => setNewAssistant({ ...newAssistant, email: e.target.value })}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        value={newAssistant.phone}
                                        onChange={(e) => setNewAssistant({ ...newAssistant, phone: e.target.value })}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={handleAddAssistant}
                                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                                    >
                                        Save
                                    </button>
                                    <button
                                        onClick={() => setShowAddAssistant(false)}
                                        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {editAssistant && (
                        <div className="mb-6 p-4 border rounded-lg">
                            <h3 className="font-medium mb-3">Edit Assistant</h3>
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input
                                        type="text"
                                        value={editAssistant.name}
                                        onChange={(e) => setEditAssistant({ ...editAssistant, name: e.target.value })}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        value={editAssistant.email}
                                        onChange={(e) => setEditAssistant({ ...editAssistant, email: e.target.value })}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                    <input
                                        type="tel"
                                        value={editAssistant.phone}
                                        onChange={(e) => setEditAssistant({ ...editAssistant, phone: e.target.value })}
                                        className="w-full p-2 border rounded"
                                    />
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={handleUpdateAssistant}
                                        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => setEditAssistant(null)}
                                        className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {assistants.map((assistant) => (
                                    <tr key={assistant.id}>
                                        <td className="px-6 py-4 whitespace-nowrap">{assistant.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{assistant.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{assistant.phone}</td>
                                        <td className="px-6 py-4 whitespace-nowrap space-x-2">
                                            <button
                                                onClick={() => setEditAssistant(assistant)}
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDeleteAssistant(assistant.id)}
                                                className="text-red-600 hover:text-red-800"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Account Information */}
                <div className="bg-white p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Account Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-600">Email: {doctor.email}</p>
                            <p className="text-gray-600">Status: <span className="capitalize">{doctor.status}</span></p>
                            <p className="text-gray-600">Member Since: {formatDate(doctor.createdAt)}</p>
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

export default DoctorDashboard;