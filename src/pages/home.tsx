import Cleiton from '../assets/img/cleiton.jpg';

const Home = () => {

    return (
        <div className="w-[414px] h-[896px] bg-gray-300 mx-auto shadow-2xl border rounded-xl overflow-hidden">
            <div className="bg-[#88005a]  w-full h-130">
                <div className="relative top-20 left-37 w-30 h-30 overflow-hidden rounded-full border-2 border-[white]">
                    <img
                        src={Cleiton}
                        alt="Imagem arredondada"
                        className="w-full h-full object-cover"
                    />
                </div>
                <h1 className="text-white  relative top-25 left-25 font-bold text-lg">CLEITON DA SILVA BIANO</h1>
                <h1 className="text-white  relative top-28 left-25 font-bold text-lg">cleitonsilbiano@gmail.com</h1>
                <h1 className="text-white  relative top-28 left-31 font-bold text-lg">+55 19 99478-0213</h1>
                <h1 className="text-white  relative top-38 left-31 text-lg">Sistema de Informação</h1>
            </div>
            <div className="relative bottom-30 left-4 w-95 h-50 bg-[rgba(255,255,255,0.5)] border-2 border-[white] rounded-xl ">
                <div className="relative top-30 left-5 text-lg">Matrícula</div>
                <div className="relative top-30 left-5 text-lg">2022 2365 8745 5694</div>
                <div className="relative top-16 left-60 text-lg">Validade</div>
                <div className="relative top-16 left-60 text-lg">Jul 2025</div>
            </div>
            <div className="flex justify-center items-center">Acessar carteirinha</div>
            <nav className="bg-white p-4 text-white flex justify-between items-center">
                <div className="text-xl font-bold">
                    MinhaLogo
                </div>
                <ul className="flex space-x-6">
                    <li><a href="#" className="hover:underline">Home</a></li>
                    <li><a href="#" className="hover:underline">Sobre</a></li>
                    <li><a href="#" className="hover:underline">Serviços</a></li>
                    <li><a href="#" className="hover:underline">Contato</a></li>
                </ul>
            </nav>

        </div>
    )
}

export default Home;