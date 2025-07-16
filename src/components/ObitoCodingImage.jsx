import { motion } from 'framer-motion';

export default function ObitoCodingImage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 p-4">
      <motion.img
        src="/obito.png"
        alt="Obito Coding at Night"
         style={{
      height: '550px',
      width: '450px',
      borderRadius: '35px'
    }}
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 30px rgba(0, 255, 247, 0.28)",
        }}
        className="rounded-2xl shadow-xl max-w-xl w-full border-2 border-red-500"
      />
    </div>
  );
}
