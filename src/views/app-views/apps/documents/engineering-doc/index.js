import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';


export const EngineeringDoc = () => {
  
  
<Routes>
  <Route path="*" element={<Navigate to="doc-eng-list" replace />} />
 </Routes>
  
}


export default EngineeringDoc;
