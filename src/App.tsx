import './App.css'
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import RequireAuth from './components/RequireAuth';
import AuthContextProvider from './context/AuthProvider'
import MainLayout from './layouts/MainLayout';
import LoginLayout from './layouts/LoginLayout';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import StudentsPage from './pages/StudentsPage';
import StudentPage from './pages/StudentPage';
import RoomsPage from './pages/RoomsPage';
import DefaultPage from './pages/DefaultPage';

function App() {

  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<RequireAuth><MainLayout><MainPage /></MainLayout></RequireAuth>} />
          <Route path="/students" element={<RequireAuth role={['admin', 'user']} ><MainLayout><StudentsPage /></MainLayout></RequireAuth>} />
          <Route path="/rooms" element={<RequireAuth role={['admin', 'user']}><MainLayout><RoomsPage /></MainLayout></RequireAuth>} />
          <Route path="/students/:id" element={<RequireAuth role={['admin', 'user']}><MainLayout><StudentPage /></MainLayout></RequireAuth>} />
          <Route path="/login" element={<LoginLayout><LoginPage /></LoginLayout>} />
          <Route path="*" element={<DefaultPage />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  )
}



export default App
