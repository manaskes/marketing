import React from 'react';
import Documentation from '../Page/Documentation';
import LoginPage from '../Page/LoginPage';

function Content() {
  return (
    <div className="ml-64 flex-1 overflow-y-scroll p-4 md:ml-64 lg:ml-64">
      <Documentation />
      <LoginPage />
    </div>
  );
}

export default Content;
