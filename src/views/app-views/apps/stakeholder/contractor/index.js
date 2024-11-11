import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';


export const Contractor = () => {
  
  <Routes>
  <Route path="*" element={<Navigate to="contractor-list" replace />} />
 </Routes>
}


export default Contractor;
