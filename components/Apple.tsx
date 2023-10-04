import Card from './Card';
import { apples } from '@/constants/files';

const ApplePage = () => {
    return (
        <div className=''>
            <h2 className='text-bawd md:text-2xl text-[18px]'>
                    Apple Open Source Documentation
                </h2>
                <div className='grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2 md:gap-8'>
                    {apples.map((apple) => (
                        <Card key={apple.name} {...apple} />
                    ))}
                </div>
        </div>
    )
}

export default ApplePage