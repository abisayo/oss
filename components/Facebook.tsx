import Card from './Card';
import { facebooks } from '@/constants/files';

const FacebookPage = () => {
    return (
        <div className=''>
            <h2 className='text-bawd dark:text-white  md:text-2xl text-[18px]'>
                Facebook Open Source Documentation
            </h2>
            <div className='grid lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-2 md:gap-8'>
                {facebooks.map((facebook) => (
                    <Card key={facebook.name} {...facebook} />
                ))}
            </div>
        </div>
    )
}

export default FacebookPage