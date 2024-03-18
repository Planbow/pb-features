import Image from "next/image";

interface datatype {
    imgSrc: string;
    country: string;
    paragraph: string;
}

const Aboutdata: datatype[] = [
    {
        imgSrc: "/assets/network/Retail2.jpeg",
        country: "",
        paragraph: "With Planbow's AI powered canvas, expedite startup strategy development, enhancing decision-making and team collaboration."

    },
    {
        imgSrc: "/assets/network/Sales.jpeg",
        country: "",
        paragraph: "Utilize Planbow's strategic funnels to cascade your strategic vision down to every level of your organization, ensuring tangible results."

    },
    {
        imgSrc: "/assets/network/Marketing.jpeg",
        country: "",
        paragraph: 'Empower your team with Planbow to attain enduring clarity and elevate stakeholder confidence through data-driven insights into your endeavors and advancement.'

    },
    {
        imgSrc: "/assets/network/RealState2.jpeg",
        country: "",
        paragraph: 'Embrace Planbow data-driven approach to strategize your next business move with precision, steering away from guesswork and ensuring informed decisions that propel your million-dollar venture forward.'

    },
]

const Network = () => {
    return (
        <div className="bg-babyblue" id="project">
            <div className="mx-auto max-w-8xl py-20 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h3 className="text-4xl sm:text-6xl font-semibold text-center my-10 lh-81">Align your global teams <br /> strategically</h3>

                <Image src={'/assets/network/map.svg'} alt={"map-image"} width={1400} height={800} />

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-4 lg:gap-x-8'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='bg-white rounded-2xl p-5 shadow-xl'>
                            <div className="flex justify-start items-center gap-2">
                                <Image src={item.imgSrc} alt={item.imgSrc} width={555} height={555} className="mb-2" />
                                <h4 className="text-xl font-medium text-midnightblue">{item.country}</h4>
                            </div>
                            <hr />
                            <h4 className='text-lg font-normal text-bluegrey my-2'>{item.paragraph}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Network;
