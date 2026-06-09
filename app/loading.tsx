export default function Loading() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="h-0.5 w-full overflow-hidden">
        <div className="h-full w-1/3 animate-[loading_1.5s_ease-in-out_infinite] bg-white" />
      </div>

      <div className="flex min-h-[calc(100vh-2px)] flex-col items-center justify-center px-6">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-white/20 border-t-white" />

        <p className="mt-6 text-lg text-white">
          Loading
        </p>

        <div className="mt-3 flex gap-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white [animation-delay:150ms]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
}