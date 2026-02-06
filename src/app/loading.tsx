import AppLayout from "@/layouts/app-layout";

export default function Loading() {
  return (
    <AppLayout>
      <div className="w-screen h-screen flex justify-center items-center bg-white">
        <h2 className="capitalize text-2xl text-black animate-pulse font-serif">
          loading...
        </h2>
      </div>
    </AppLayout>
  );
}