export default function Event() {
    return (
        <>
            <section className="event bg-dark">
                <div className="container py-10 text-center mx-auto">
                    <h1 className="font-tangarine text-5xl md:text-7xl font-bold relative z-10 text-slate-100 mb-5">Counting Days</h1>
                    <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8484_em4Rbl8cX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165670516" className="w-1/2 rounded-lg mx-auto md:w-1/4"/>
                    <p className="mt-5 text-sm text-slate-50 max-w-md mx-auto">"Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia." <br /><span className="uppercase">~ Matius 19 : 6 ~</span></p>

                    <div className="mt-5 flex justify-between max-w-sm mx-auto md:mt-10">
                        <div>
                            <p className="py-1 px-3 bg-slate-200 inline-block rounded-sm">0</p>
                            <p className="text-slate-200 font-popper">Hari</p>
                        </div>
                        <div>
                            <p className="py-1 px-3 bg-slate-200 inline-block rounded-sm">0</p>
                            <p className="text-slate-200 font-popper">Jam</p>
                        </div>
                        <div>
                            <p className="py-1 px-3 bg-slate-200 inline-block rounded-sm">0</p>
                            <p className="text-slate-200 font-popper">Menit</p>
                        </div>
                        <div>
                            <p className="py-1 px-3 bg-slate-200 inline-block rounded-sm">0</p>
                            <p className="text-slate-200 font-popper">Detik</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}