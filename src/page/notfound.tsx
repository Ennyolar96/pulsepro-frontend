export default function NotFound() {
  return (
    <main id="not-found">
      <div className="space-y-3 flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-base">
          Sorry, the page you're looking for doesn't exist.
        </p>
        <a href="/" className="text-blue hover:text-blue-700">
          Go back to Home
        </a>
      </div>
    </main>
  );
}
