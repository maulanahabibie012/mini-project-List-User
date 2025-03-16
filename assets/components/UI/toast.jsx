import React, { useEffect } from 'react';
import { CheckCircle, XCircle, X } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const icons = {
        success: <CheckCircle className="w-5 h-5 text-green-500" />,
        error: <XCircle className="w-5 h-5 text-red-500" />
    };

    const styles = {
        success: 'border-blue-200 bg-blue-100',
        error: 'border-blue-200 bg-blue-100'
    };

    return (
        <div className={`fixed top-4 right-4 flex items-center p-4 gap-4 border rounded-lg shadow-lg ${styles[type]}`}>
            <div className="flex items-center gap-3">
                {icons[type]}
                <span className="text-sm font-medium">{message}</span>
            </div>
            <button onClick={onClose} className="ml-auto text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
            </button>
        </div>
    );
};

export default Toast;