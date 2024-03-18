import Image from "next/image";



const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-10 pb-10 banner-image">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
                            AI powered strategies <br /> for your business
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-bluegray">

                        Launch into strategy building and execution instantly with Planbow—bypass endless meetings and dive straight into action. <br/>Accelerate your strategy implementation with Planbow NOW !!!
                        </p>
                    </div>
{/* 

                    <div className="text-center mt-5">
                        <button type="button" className='text-15px text-white font-medium bg-blue py-5 px-9 mt-2 leafbutton'>
Early Access                        </button>
                        <button type="button" className='text-15px ml-4 mt-2 text-blue transition duration-150 ease-in-out hover:text-white hover:bg-blue font-medium py-5 px-16 border border-lightgrey leafbutton'>
Watch Video                        </button>
                        
                    </div>
*/}

                    <Image src={'/assets/banner/banner.png'} alt="banner-image" width={1200} height={598} />
                </div>
            </div>
        </main>
    )
}

export default Banner;
