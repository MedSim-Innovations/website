export default function Footer() {
  return (
    <footer className="w-full">
      <div className="mx-auto max-w-8xl grid grid-cols-1 md:grid-cols-2 px-6 py-4">
        <div className="flex md:justify-start justify-center items-center">
          <p className="text-black font-serif text-sm text-center md:text-left">
            &copy; 2026{" "}
            <a href="https://www.medsiminnovations.com"
              className="font-bold underline">
              MedSim Innovations
            </a>{" "}- All rights reserved
          </p>
        </div>

        <div className="flex flex-row gap-4 md:justify-end justify-center items-center">
          <a href="#" className="text-black font-serif text-sm hover:underline text-center">Privacy Policy</a>
          <a href="#" className="text-black font-serif text-sm hover:underline text-center">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}