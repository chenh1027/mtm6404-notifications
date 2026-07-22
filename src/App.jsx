import { useState } from 'react'
import notifications from './notifications'
import './App.css'

function Page({ children }) {
  return (
    <div className="page">
      {children}
    </div>
  )
}

function Notification({ notification, clearNotification }) {
  return (
    <div className="notification">
      <p>ID: {notification.id}</p>
      <h2>{notification.name}</h2>
      <p>{notification.message}</p>

      <button onClick={() => clearNotification(notification.id)}>
        Clear
      </button>
    </div>
  )
}

function App() {
  const [notificationList, setNotificationList] = useState(notifications)

  function clearNotification(id) {
    setNotificationList(
      notificationList.filter(notification => notification.id !== id)
    )
  }

  function clearAllNotifications() {
    setNotificationList([])
  }

  return (
    <Page>
      <h1>Notifications</h1>

      <p>Number of notifications: {notificationList.length}</p>

      <button onClick={clearAllNotifications}>
        Clear All
      </button>

      {notificationList.map(notification => (
        <Notification
          key={notification.id}
          notification={notification}
          clearNotification={clearNotification}
        />
      ))}
    </Page>
  )
}

export default App