'use client';
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  return (
    <div className="p-4 text-center">
      <p className="mb-2">Something went wrong.</p>
      <button className="underline" onClick={reset}>Try again</button>
    </div>
  );
}
