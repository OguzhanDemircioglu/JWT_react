import './App.css';
import { NavBar } from './Components/nav-bar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home/home.page';
import { LoginPage } from './pages/login/login.page';
import { RegisterPage } from './pages/register/register.page';
import { ProfilePage } from './pages/profile/profile.page';
import { AdminPage } from './pages/admin/admin.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { UnAuthorized } from './pages/unauthrized/unauthorized.page';

// import { AuthGuard } from './guards/auth.guard';
// import { Role } from './models/role';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <div className="container">
        <Routes>
        
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/*" element={<UnAuthorized />} />
        
        </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
