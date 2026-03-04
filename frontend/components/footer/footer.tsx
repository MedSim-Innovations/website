export default function Footer() {
    return (
        <div className="relative bg-white h-auto flex sm:flex-row flex-col py-4 gap-4 px-8 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
            <div className="w-auto flex justify-center items-center sm:mr-auto max-sm:mx-auto">
                <p className="text-black font-serif text-sm text-center">&copy; 2026 <a href="#" className="hover:underline">MedSim Innovations</a> - All Rights Reserved.</p>
            </div>

            <div className="w-auto flex sm:flex-row flex-col justify-center items-center sm:ml-auto max-sm:mx-auto gap-4">
                <a href="#" className="text-black font-serif text-sm text-center capitalize hover:underline">privacy policy</a>
                <a href="#" className="text-black font-serif text-sm text-center capitalize hover:underline">terms of service</a>
            </div>
        </div>
    )
}