export default function CardDashboard({count}) {
    return (
        <div className='rounded-xl bg-yellow-500 shadow-md border'>
            <div className='flex px-2 py-5 justify-between gap-1'>
                <div className='text-center w-1/3 border rounded-lg bg-slate-100 shadow-sm py-2 text-slate-600'>
                    <span className='block'>{count.hadir}</span>
                    <span className='font-bold'>Hadir</span>
                </div>
                <div className='text-center w-1/3 border rounded-lg bg-slate-100 shadow-sm py-2 text-slate-600'>
                    <span className='block'>{count.ragu}</span>
                    <span className='font-bold'>Ragu-ragu</span>
                </div>
                <div className='text-center w-1/3 border rounded-lg bg-slate-100 shadow-sm py-2 text-slate-600'>
                    <span className='block'>{count.tidakHadir}</span>
                    <span className='font-bold'>Tidak Hadir</span>
                </div>
            </div>
        </div>
    )
}