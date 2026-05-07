import type {ReactNode} from 'react';

export function Layout({children}: {children: ReactNode}) {
  return (
    <div className="min-h-screen bg-yellow-50 p-6">
      <div className="max-w-6x2 mx-auto bg-gray-100 rounded-xl shadow p-6">
        {children}
      </div>
    </div>
  );
}
