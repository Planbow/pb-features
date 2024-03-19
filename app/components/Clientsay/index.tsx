import Image from "next/image";

const Clientsay = () => {
    return (
        <div className="mx-auto max-w-2xl py-40 px-4s sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="bg-image-what">
                <h3 className='text-navyblue text-center text-4xl lg:text-6xl font-semibold'>Unlock Your Startup&apos;s Potential with Planbow&apos;s Strategic AI Solutions</h3>
                <h4 className="text-lg font-normal text-black text-center mt-4">Go fast with your ideation and validation,<br /> do more with Planbow</h4>

                <div className="lg:relative">
                    <Image src={'/assets/clientsay/startup.jpeg'} alt="avatar-image" width={800} height={250} className="hidden lg:block" mx-auto/>
                    <span className="lg:absolute lg:bottom-40 lg:left-80">
                        <div className="lg:inline-block bg-white rounded-2xl p-5 shadow-sm">
                        </div>
                    </span>

                </div>

            </div>
        </div>
    )
}

export default Clientsay;