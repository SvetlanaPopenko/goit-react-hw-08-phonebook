// import ContactForm from './ContactForm';
// import ContactList from './ContactList';
// import Filter from './Filter';
// import { Container } from './App.styled';
import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { selectError, selectIsLoading } from 'redux/selectors';
// import { fetchContacts } from 'redux/operations';
// import { Toaster } from 'react-hot-toast';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { useAuth } from 'hooks';
import { refreshhUser } from 'redux/auth/auth-operations';

const Home = lazy(() => import('../pages/Home'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshhUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />} end>
        <Route index element={<Home />} />
       
          <Route path="/register" element={<Register />} />
           <Route path="/login" element={<Login />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );

  //   return (<div
  //       style={{
  //         marginTop: '50px',
  //         display: 'flex',
  //         justifyContent: 'center',
  //         alignItems: 'center',
  //         flexDirection: 'column',
  //         fontSize: 40,
  //         color: '#eeedf8',
  //       }}
  //     >
  // <AppBar/>
  //     <Routes>
  //       <Route path="/" element={<Layout />} end>
  //         <Route index element={<Home />} />
  //         <Route path="/login" element={<Login />} />
  //         <Route path="/register" element={<Register />}/>
  //         <Route path="/contacts" element={<Contacts />} />
  //         <Route path="*" element={<Navigate to="/" replace />} />
  //       </Route>
  //     </Routes>
  //     </div>
};
