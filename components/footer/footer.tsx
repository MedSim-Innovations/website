export default function Footer() {
    return (
        <div className="relative bg-white text-black h-auto flex sm:flex-row flex-col py-4 gap-4 px-8">
            <div className="w-auto flex justify-center items-center sm:mr-auto max-sm:mx-auto">
                <p className="font-serif text-sm text-center">&copy; 2026 <a href="#" className="hover:underline">MedSim Innovations</a> - All Rights Reserved.</p>
            </div>

            <div className="w-auto flex sm:flex-row flex-col justify-center items-center sm:ml-auto max-sm:mx-auto gap-4">
                <a href="#" className="font-serif text-sm text-center capitalize hover:underline">privacy policy</a>
                <a href="#" className="font-serif text-sm text-center capitalize hover:underline">terms of service</a>
            </div>
        </div>
    )
}