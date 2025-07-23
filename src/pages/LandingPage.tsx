export default function LandingPage() {
  return (
    <main className="scroll-smooth">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8">
          Welcome to Our Landing Page
        </h1>
        <p className="text-lg text-center mb-4">
          This is a simple landing page built with React.
        </p>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
            Get Started
          </button>
        </div>
      </div>
    </main>
  );
}
