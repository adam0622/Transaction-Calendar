import React from 'react';
import Calendar, { LanguageProvider } from './components/Calendar';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="flex items-center justify-center min-h-screen p-4 font-sans text-gray-800 dark:text-gray-200">
        <div className="w-full">
          <Calendar />
        </div>
      </div>
    </Language-Provider>
  );
};

export default App;
