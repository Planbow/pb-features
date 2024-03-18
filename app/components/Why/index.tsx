import Image from "next/image";

interface whydata {
    heading: string;
    subheading: string;
}

const whydata: whydata[] = [
    {
        heading: "Don't lose sight on 'What's happening?'",
        subheading: "Collaborate with teams to cascade strategies to the last mile",
    },
    {
        heading: "Ensure Impactful Results",
        subheading: "Remain impactful throughout the execution",
    },
    {
        heading: "Context-Sensitive Strategies",
        subheading: "Remain conctextual everytime with Planbow AI",
    },
    {
        heading: "Drive Time Optimization",
        subheading: "No 'figuring-out' anymore, Planbow AI is right here",
    },
    {
        heading: "Foster a Culture of Strategic Thinking",
        subheading: "Transform Every Team Member into a Strategic Thinker",
    }


]


const Why = () => {
    return (
        <div id="about">

            <div className='mx-auto max-w-7xl px-4 my-20 sm:py-20 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>

                    {/* COLUMN-1 */}
                    <div className="lg:-ml-32">
                        <Image src="/assets/why/Why.svg" alt="iPad-image" width={1000} height={450} />
                    </div>

                    {/* COLUMN-2 */}
                    <div>
                        <h3 className="text-4xl lg:text-5xl pt-4 font-semibold sm:leading-tight mt-5 text-center lg:text-start">Why Planbow?</h3>
                        <h4 className="text-lg pt-4 font-normal sm:leading-tight text-center text-beach lg:text-start">Strategic Collaboration and Impactful Results with Planbow

</h4>

                        <div className="mt-10">
                            {whydata.map((items, i) => (
                                <div className="flex mt-4" key={i}>
                                    <div className="rounded-full h-10 w-12 flex items-center justify-center bg-circlebg">
                                        <Image src="/assets/why/check.svg" alt="check-image" width={24} height={24} />
                                    </div>
                                    <div className="ml-5">
                                        <h4 className="text-2xl font-semibold">{items.heading}</h4>
                                        <h5 className="text-lg text-beach font-normal mt-2">{items.subheading}</h5>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Why;
