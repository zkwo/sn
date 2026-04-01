import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [status, setStatus] = useState('idle'); // idle, lulus, gagal
  const [data, setData] = useState({ nama: '', nomor: '' });

  const handleCheck = (type) => {
    if (!data.nama || !data.nomor) return alert('Isi data dulu bro!');
    setStatus(type);
  };

  return (
    <div className="relative min-h-screen w-full bg-[#030303] flex items-center justify-center p-6 overflow-hidden text-white">
      {/* Liquid Background Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-blob"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-blob animation-delay-2000"></div>
      <div className="absolute top-[40%] left-[30%] w-64 h-64 bg-pink-600 rounded-full mix-blend-multiply filter blur-[80px] opacity-30 animate-blob animation-delay-4000"></div>

      <AnimatePresence mode="wait">
        {status === 'idle' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }}
            className="relative z-10 w-full max-w-md p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-2xl shadow-2xl"
          >
            <div className="flex flex-col items-center mb-8">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Logotype_Satu_Data_Indonesia.png" className="h-16 mb-4" alt="logo" />
              <h1 className="text-2xl font-bold tracking-tight">SNBP 2026</h1>
              <p className="text-gray-400 text-sm">Pusat Data Seleksi Nasional</p>
            </div>

            <div className="space-y-4">
              <input 
                type="text" placeholder="Nama Lengkap"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all"
                onChange={(e) => setData({...data, nama: e.target.value})}
              />
              <input 
                type="number" placeholder="Nomor Pendaftaran"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:border-blue-500 outline-none transition-all"
                onChange={(e) => setData({...data, nomor: e.target.value})}
              />
              <div className="grid grid-cols-2 gap-3 pt-4">
                <button onClick={() => handleCheck('lulus')} className="bg-blue-600 hover:bg-blue-700 py-3 rounded-xl font-semibold transition-all">Cek Lulus</button>
                <button onClick={() => handleCheck('gagal')} className="bg-white/10 hover:bg-white/20 py-3 rounded-xl font-semibold transition-all border border-white/10">Cek Gagal</button>
              </div>
            </div>
          </motion.div>
        )}

        {status !== 'idle' && (
          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }} animate={{ opacity: 1, scale: 1 }}
            className={`relative z-10 w-full max-w-2xl p-1 rounded-[2.5rem] shadow-2xl ${status === 'lulus' ? 'bg-green-500' : 'bg-red-500'}`}
          >
            <div className="bg-[#0a0a0a] rounded-[2.4rem] p-8 md:p-12 text-center border border-white/10">
              <h2 className="text-3xl md:text-5xl font-black mb-6 italic tracking-tighter uppercase">
                {status === 'lulus' ? 'Selamat! Anda Lulus' : 'Mohon Maaf...'}
              </h2>
              
              <div className="text-left bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3 mb-8">
                <p className="text-gray-400">NAMA: <span className="text-white font-bold block text-xl">{data.nama.toUpperCase()}</span></p>
                <p className="text-gray-400">NOMOR PESERTA: <span className="text-white font-bold block text-xl">{data.nomor}</span></p>
                {status === 'lulus' && <p className="text-blue-400 font-medium">Diterima di: <span className="text-white block font-bold italic">INSTITUT TEKNOLOGI BANDUNG - TEKNIK INFORMATIKA</span></p>}
              </div>

              <button onClick={() => setStatus('idle')} className="text-sm opacity-50 hover:opacity-100 transition-opacity">Kembali ke Beranda</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
