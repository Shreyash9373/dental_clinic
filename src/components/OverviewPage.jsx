import React from 'react';

const OverviewPage = () => {
  const keyMetrics = {
    totalPatients: 50,
    appointmentsToday: 15,
    revenue: 3400, // Example revenue in dollars
    pendingPayments: 500, // Pending payments in rupees
    activeDentists: 5,
    clinicStatus: 'Open', // Can also be 'Closed'
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h2 className="text-blue-800 text-3xl font-bold mb-4">
            Clinic Overview
          </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Object.entries(keyMetrics).map(([key, value]) => (
          <div
            key={key}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <h2 className="text-xl font-semibold text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h2>
            <div className="text-2xl font-bold mt-2">
              {key === 'revenue' ? `₹${value}` : key === 'pendingPayments' ? `₹${value}` : value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewPage;
