import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';


export const Users = () => {
  
  <Routes>
  <Route path="*" element={<Navigate to="owner-list" replace />} />
 </Routes>
}


export default Users;
