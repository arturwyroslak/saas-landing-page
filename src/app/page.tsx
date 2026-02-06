import { Navbar } from '@/components/navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <h1 className="text-3xl font-bold underline">Welcome to SaaS Landing Page</h1>
      </main>
    </div>
  );
}