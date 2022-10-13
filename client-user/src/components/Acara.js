export default function Acara() {
    return (
        <div className='container-fluid' id="acara" style={{ "height": "100vh" }}>
            <div className="container-acara">
                <img src='./asset/bungaUp.png' className='bungaUpAcara' />
                <img src='./asset/bungaDown.png' className='bungaDownAcara' />
                <div className="text-center">
                    <p className='header'>Acara</p>
                    <p>Countdown</p>
                    <div className="border card-countdown justify-content-between mx-auto">
                        <div>
                            <p className="mb-0">00</p>
                            <p className="text-countdown">Hari</p>
                        </div>
                        <div>
                            <p className="mb-0">00</p>
                            <p className="text-countdown">Jam</p>
                        </div>
                        <div>
                            <p className="mb-0">00</p>
                            <p className="text-countdown">Menit</p>
                        </div>
                        <div>
                            <p className="mb-0">00</p>
                            <p className="text-countdown">Detik</p>
                        </div>
                    </div>
                    <p className="mt-4 mb-0"><span className="headerName goldColor">Lokasi</span><br/>Pemberkatan dan Resepsi</p>
                    <div className="card p-2">
                        <p className="text-dark">GBI Sungai Yordan Roxy Mas, pusat perniagaan roxy mas blok c1 no 32 gambir, jakarta pusat, jakarta</p>
                        <a href="https://www.google.com/maps/dir/-6.1668107,106.8060391/gbi+sungai+yordan+roxy+mas+map/@-6.1677732,106.804335,18z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x2e69f66537f38c7d:0xfab8354a4f66dc6b!2m2!1d106.8053813!2d-6.1681403" target="_blank" className="btn btn-dark w-50 mx-auto mt-2">Klik Map</a>
                    </div>
                        <p className="p-3">❝ Kami memohon do'a restu agar proses pernikahan kami berjalan lancar dan menjadi berkat buat banyak orang ❞</p>
                        <img src="./asset/border_bottom.png" style={{ "width": "100px"}} />
                </div>
            </div>
        </div>
    )
}