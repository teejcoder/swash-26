'use client'

export default function Error() {
    return ( 
        <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
            <h1 className="text-6xl font-bold mb-4">Error</h1>
            <p className="text-xl mb-8">Sorry, babe! <br/>Something went wrong.</p>
            <a href="/" className="text-blue-500 underline">Go back to Home</a>
        </div>
    )
};