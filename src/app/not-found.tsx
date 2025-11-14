export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Sorry, babe! <br/>The page you're looking for doesn't exist.</p>
      <a href="/" className="text-blue-500 underline">Go back to Home</a>
    </div>
  );
}
