const Notification = ({ notification }) => {
    if (notification === null) {
      return null
    }
  
    return (
      <div className={ notification.type === "error" ? 'error' : 'notification'}>
        {notification.message}
      </div>
    )
  }
  
  export default Notification