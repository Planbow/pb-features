import Image from 'next/image';

interface cardDataType {
    imgSrc: string;
    heading: string;
    subheading: string;
}

const cardData: cardDataType[] = [
    {
        imgSrc: '/assets/buyers/canvass.jpeg',
        heading: "First Business Canvas with AI",
        subheading: "Clear visualisatin of your strategies",
    },
    {
        imgSrc: '/assets/buyers/actions.jpeg',
        heading: "AI Generated Action Items",
        subheading: "Execute better with AI",
    },
    {
        imgSrc: '/assets/buyers/team.jpeg',
        heading: "Effective Alignment within Teams",
        subheading: "Holistic visibility of details",
    },
    {
        imgSrc: '/assets/buyers/unlimited.jpeg',
        heading: "Unlimited Contextual Components",
        subheading: "Find everything to strategise",
    }

]

const Buyers = () => {
    return (
        <div className='mx-auto max-w-7xl py-16 px-6'>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5'>
                {cardData.map((items, i) => (
                    <div className='flex flex-col justify-center items-center' key={i}>
                        <div className='flex justify-center border border-border  p-2 w-50 rounded-lg'>
                            <Image src={items.imgSrc} alt={items.imgSrc} width={180} height={180} />
                        </div>
                        <h3 className='text-2xl text-black font-semibold text-center lg:mt-6'>{items.heading}</h3>
                        <p className='text-lg font-normal text-black text-center text-opacity-50 mt-2'>{items.subheading}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Buyers;