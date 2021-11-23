import React from 'react';
import ReactDOM from 'react-dom';
import Login from './components/Login';
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Dashboard from '@/components/Dashboard/Dashboard';
import { RequireAuth } from '@/components/RequireAuth/RequireAuth';

ReactDOM.render(
  <>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  </>,
  document.getElementById('root')
);
