import Image from "next/image";

export const Header = () => {
    const icons = [
        {
            title: 'spark',
            icon: './images/spark.svg'
        },
        {
            title: 'storm',
            icon: './images/storm.svg'
        },
        {
            title: 'stream',
            icon: './images/stream.svg'
        },
        {
            title: 'stats',
            icon: './images/stats.svg'
        },
        {
            title: 'scribe',
            icon: './images/scribe.svg'
        },
    ]

    return (
        <header
            className={'w-full mx-auto px-2 xs:px-7.5 bg-linear-to-b from-secondary to-background shadow-[0_8px_16px_0_rgba(0,0,0,0.15)] rounded-b-sm'}>
            <div className={'w-full h-full flex justify-between'}>
                <button className={'cursor-pointer shrink-0'}>
                    <Image src={'./images/logo.svg'} alt={''} width={189} height={55} className={'hidden md:block'}/>
                    <Image src={'./images/logo-sm.svg'} alt={''} width={79} height={44} className={'md:hidden'}/>
                </button>

                <div className={'flex items-center gap-3 md:gap-6'}>
                    {icons.map((item, index) => (
                        <button key={index} className={'flex items-center gap-1 flex-col cursor-pointer'}>
                            <Image src={item.icon} alt={item.title} width={40} height={40} className={'size-7 md:size-10'}/>
                            <span className={'hidden md:block text-[16px]/[30px]'}>{item.title}</span>
                        </button>
                    ))}
                </div>
            </div>
        </header>
    )
}
