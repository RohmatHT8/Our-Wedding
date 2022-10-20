import { GiBigDiamondRing } from 'react-icons/gi'
import { FaMapMarkedAlt } from 'react-icons/fa'
import { VscMailRead } from 'react-icons/vsc'
export default function Event() {
    return (
        <>
            <section id="event" className="bg-dark relative">
                <div className="container py-10 text-center mx-auto">
                    <h1 className="font-tangarine text-5xl md:text-7xl font-bold relative z-10 text-slate-100 mb-5">Counting Days</h1>
                    <img src="https://ik.imagekit.io/kthsx9hzg/render/IMG_8484_em4Rbl8cX.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1666165670516" className="w-1/2 rounded-lg mx-auto md:w-1/4" alt='image'/>
                    <p className="mt-5 text-sm text-slate-50 max-w-md mx-auto">"Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia." <br /><span className="uppercase">~ Matius 19 : 6 ~</span></p>
                    {/* Countdown */}
                    <div className="mt-5 flex justify-evenly max-w-sm mx-auto md:mt-10">
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

                    {/* card Event  */}
                    <div className='flex flex-wrap justify-center gap-2'>
                        <div className="card-event">
                            <img src="../foral.jpg" className="img-bg-card" alt='foral'/>
                            <div className='relative z-10'>
                                <GiBigDiamondRing className='mx-auto text-6xl text-yellow-800' />
                                <p className='text-header-card'>Pemberkatan</p>
                                <p className='mt-2 text-xl font-semibold'>Sabtu, 03 Desember 2022 <br /> 09.00 s/d 10.30 wib <br /> Hotel Balcony Sukabumi</p>
                                <a href='https://www.google.com/maps/place/Hotel+Balcony/@-6.9084752,106.9339156,17z/data=!3m1!4b1!4m8!3m7!1s0x2e6849b58cbe0be3:0x399a386e1916002a!5m2!4m1!1i2!8m2!3d-6.9084726!4d106.9360761' target={"_blank"}><button className='button-card transition duration-500'><FaMapMarkedAlt className='inline text-slate-50 text-xl mb-1 mr-2' />Google Maps</button></a>
                            </div>
                        </div>

                        <div className="card-event">
                            <img src="../foral.jpg" className="img-bg-card" alt='foral'/>
                            <div className='relative z-10'>
                                <img src='../resepsi.png' className='w-1/5 mx-auto' alt='resepsi'/>
                                <p className='text-header-card'>Resepsi</p>
                                <p className='mt-2 text-xl font-semibold'>Sabtu, 03 Desember 2022 <br /> 12.00 s/d 02.00 wib <br /> Hotel Balcony Sukabumi</p>
                                <a href='https://www.google.com/maps/place/Hotel+Balcony/@-6.9084752,106.9339156,17z/data=!3m1!4b1!4m8!3m7!1s0x2e6849b58cbe0be3:0x399a386e1916002a!5m2!4m1!1i2!8m2!3d-6.9084726!4d106.9360761' target={"_blank"}><button className='button-card transition duration-500'><FaMapMarkedAlt className='inline text-slate-50 text-xl mb-1 mr-2' />Google Maps</button></a>
                            </div>
                        </div>
                    </div>

                    {/* card RSVS */}

                    <div className='w-72 sm:w-96 lg:w-4/5 bg-white px-10 py-5 mt-10 mb-10 sm:mb-20 md:mb-32 lg:mb-44 mx-auto rounded-2xl relative overflow-hidden'>
                        <img src="../foralkiriatas.jpg" className='absolute top-0 left-0 opacity-50' alt='resepsi'/>
                        <div className='relative z-10'>
                            <p className=' text-yellow-700 font-tangarine text-5xl font-bold mb-2'>RSVP</p>
                            <form>
                                <label>
                                    <p className='text-left font-semibold font-inter text-sm text-slate-700 mb-1'>Nama Tamu</p>
                                    <input type={"text"} className="w-full border border-yellow-700 rounded-lg p-2" placeholder='Nama Tamu' />
                                </label>
                                <label>
                                    <p className='text-left font-semibold font-inter text-sm text-slate-700 mb-1 mt-3'>Konfirmasi Kehadiran</p>
                                    <select className='border border-yellow-700 rounded-lg p-2 w-full'>
                                        <option>Ya, saya akan hadir</option>
                                        <option>Masih ragu-ragu</option>
                                        <option>Maaf, saya tidak bisa hadir</option>
                                    </select>
                                </label>
                                <label>
                                    <p className='text-left font-semibold font-inter text-sm text-slate-700 mb-1 mt-3'>Jumlah Kehadiran</p>
                                    <input type={"number"} className="w-full border border-yellow-700 rounded-lg p-2" placeholder='Masukan Jumlah' />
                                </label>
                                <button className='button-card transition duration-500 mb-4'><VscMailRead className='inline mb-1 mr-2 text-xl' />Submit RSVP</button>
                            </form>
                        </div>
                    </div>

                </div>

                <div className="absolute bottom-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="1" d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
                <div className="absolute bottom-0 w-full">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fff" fill-opacity="0.3" d="M0,224L48,240C96,256,192,288,288,272C384,256,480,192,576,170.7C672,149,768,171,864,165.3C960,160,1056,128,1152,128C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                </div>
            </section>
        </>
    )
}