import React from 'react'

export default function AuthLayout({ children } : {
        children: React.ReactNode;
}) {
        return (
                <div className='min-h-screen flex items-center justify-center'>
                        <div className='abslute inset-0 bg-black/20' />
                        <div className='relative mx-w-md w-full'>{children}</div>
                </div>
        )
}

