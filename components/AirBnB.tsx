import Card from './Card';
import { airbnbs } from '@/constants/files';

const AirBnBPage = () => {
    return (
        <div className='col-span-2'>
            <h2 className='text-bawd dark:text-white md:text-2xl text-[18px]'>Airbnb Open Source Documentation</h2>
            <div className='grid lg:grid-cols-23 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-2 gap-2 md:gap-8'>
                    {airbnbs.map((airbnb) => (
                        <Card key={airbnb.name} {...airbnb} />
                    ))}
                </div>
        </div>
    )
}

export default AirBnBPage