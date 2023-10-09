import React, { useState } from 'react';
import {IoMdNotificationsOutline} from 'react-icons/io'

const Notification = () => {
  const [unreadCount, setUnreadCount] = useState(2); // Initial unread count
  const [showNotifications, setShowNotifications] = useState(false); // Toggle to show/hide notifications

  const clearNotifications = () => {
    setUnreadCount(0);
  };

  const notifications = [
    { id: 1, text: 'Portes ouvertes' },
    { id: 2, text: 'Emploi de temps changeé' },
    // Add more notifications as needed
  ];

  return (
    <div className="notification relative">
      <button
        onClick={() => setShowNotifications(!showNotifications)}
        className="notification-button relative"
      >
       <IoMdNotificationsOutline />
        {unreadCount > 0 && (
          <span className="badge bg-red-500 text-white rounded-full px-2 py-1">
            {unreadCount}
          </span>
        )}
      </button>
      {showNotifications && (
        <div className="notification-dropdown absolute right-0 mt-2 w-64 bg-white border border-gray-300 shadow-lg rounded">
          <div className="p-2">
            <div className='flex flex-row justify-between'>
            <h3 className="text-lg font-semibold mb-2">Notifications</h3>
            <button className="text-lg font-semibold mb-2" onClick={clearNotifications}>X</button></div>
            {notifications.map((notification) => (
              <div key={notification.id} className="mb-2">
                {notification.text}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Notification;
