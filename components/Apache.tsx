import Card from './Card';
import { apaches } from '@/constants/files';

const ApachePage = () => {
    return (
        <div className='col-span-3'>
            <h2 className='text-bawd dark:text-white md:text-2xl text-[18px] mt-16 lg:mt-0'>Apache Software Open Source Documentation</h2>
            <div className='grid lg:grid-cols-2 xl:grid-cols-2 
            md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-2 md:gap-8'>
                {apaches.map((apache) => (
                    <Card key={apache.name} {...apache} />
                ))}
            </div>
        </div>
    )
}

export default ApachePage