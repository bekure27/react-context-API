
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';  

function Home() {
  const { user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();  

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff' }}>
      {user ? (
        <div>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <p>Please log in</p>
      )}

    {
user ?(
  <div>
  <p>chang theme here</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
  </div>
):null
    }
      
    </div>
  );
}

export default Home;
