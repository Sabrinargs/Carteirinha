import React, { useState } from "react";

const Home = () => {

    return (
        <div className="w-[414px] h-[896px] bg-gray-100 mx-auto shadow-2xl border rounded-xl overflow-hidden">
            <header className="bg-blue-500 text-white p-4 text-center text-xl font-bold">
                iPhone 11 Layout
            </header>
            <main className="p-4">
                <p className="text-gray-800">Conteúdo dentro da resolução do iPhone 11 (414x896px)</p>
            </main>
        </div>
    )
}

export default Home;