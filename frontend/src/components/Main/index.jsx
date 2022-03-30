import styles from './styles.modules.css';

const Main = () => {

  const handleLogout = () => {

    localStorage.clear();
        window.location.href = '/';

  }

  return (
     <div className={styles.main_container}>
      <nav className={styles.navbar}>
         <h1>fakebook</h1>
         <button className={styles.white_btn} onClick={handleLogout} >
           Logout
         </button>
      </nav>
    </div>
     )
     };

     export default Main 