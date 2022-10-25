export default function TableDashboard({guest}) {
    return (
        <div className='rounded-xl shadow-md border mt-3 p-2 h-[60vh] overflow-y-auto'>
            <div className='rounded-sm flex p-2'>
                <p className='w-1/2 font-bold text-slate-500'>Nama Tamu</p>
                <p className='w-1/3 font-bold text-slate-500'>Status Kehadiran</p>
                <p className='font-bold text-slate-500'>Jumlah</p>
            </div>

            {
                guest.map((data, idx) => {
                    return (
                        <div className='rounded-sm flex p-2 border-b' key={idx}>
                            <p className='w-1/2 text-slate-500 text-sm'>{data.name}</p>
                            <p className='w-1/3 text-slate-500 text-sm'>{data.konfirmasi}</p>
                            <p className=' text-slate-500 text-sm text-center'>{data.jumlah}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}