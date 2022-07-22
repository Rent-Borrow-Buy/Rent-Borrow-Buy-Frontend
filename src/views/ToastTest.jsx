import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast.success('Here is your toast.');

export default function ToastTest() {
  return (
    <div>
      ToastTest
      <div>
        <button onClick={notify}>Toast me</button>
        <Toaster
          toastOptions={{
            success: {
              duration: 1000,
              icon: '	✅',
            },
            error: {
              duration: 1000,
              icon: '❌',
            },
          }}
        />
      </div>
    </div>
  );
}
