export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <section className="max-w-2xl text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-semibold">
          Guitar & Piano Lessons in Ashkelon
        </h1>
        <p className="text-lg text-neutral-600">
          Friendly, structured lessons. Hebrew & English. Book a trial today.
        </p>
        <div className="mt-6 flex gap-3 justify-center">
          <a href="/contact" className="rounded-xl px-4 py-2 bg-black text-white">
            Book a Lesson
          </a>
          <a href="/lessons" className="rounded-xl px-4 py-2 border">
            See Lessons
          </a>
        </div>
      </section>
    </main>
  );
}