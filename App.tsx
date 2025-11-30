import React, { useState } from 'react';
import { EVOLUTION_STAGES, FUN_FACTS, EVO_STATS, X_POSTS } from './data';
import { Modal } from './components/Modal';
import { VideoHover } from './components/VideoHover';
import { PippinStage, XPost } from './types';

const App: React.FC = () => {
  const [selectedPippin, setSelectedPippin] = useState<PippinStage | null>(null);
  const [bioModalOpen, setBioModalOpen] = useState(false);
  const [videoModal, setVideoModal] = useState<XPost | null>(null);

  return (
    <div className="h-screen w-screen overflow-hidden bg-white text-gray-900 flex flex-col">
      
      {/* HEADER: 15% */}
      <header className="h-[15vh] border-b border-gray-300 flex flex-col justify-center items-center px-4 bg-gray-50">
        <h1 className="text-4xl lg:text-5xl font-bold text-center tracking-tight text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
          Theories of the Evolution of Pipins
        </h1>
        <p className="text-lg lg:text-xl text-gray-600 italic mt-2 text-center font-serif">
          An Encyclopedia of Pippin: AI Unicorn Meme Evolution with Fake Stats, Fun Facts, Real X Posts & Videos
        </p>
      </header>

      {/* MAIN CONTENT: 70% */}
      <main className="h-[70vh] w-full max-w-[1920px] mx-auto grid grid-cols-12 gap-0 divide-x divide-gray-300">
        
        {/* LEFT COLUMN: Biography (20% -> 2.4/12 cols approx, adjusted for grid system) */}
        <section className="col-span-3 lg:col-span-2 p-6 flex flex-col justify-start overflow-y-auto no-scrollbar bg-white">
          <h2 className="text-2xl font-serif font-bold mb-4 border-b-2 border-gray-800 pb-1">Biography</h2>
          <div className="space-y-4 text-sm lg:text-base leading-relaxed text-gray-700 text-justify font-serif">
            <p>
              Pippin is an AI-generated unicorn, birthed from the digital ether by Yohei Nakajima in 2024 initially as an o1-mini model test.
            </p>
            <p>
              What began as a static blob evolved rapidly into a memecoin ($PIPPIN) phenomenon, boasting over 18k holders and a market cap exceeding $150M (in 2025 projections).
            </p>
            <p>
              Now an autonomous AI influencer (@pippinlovesyou), Pippin releases open-source frameworks, enjoys sun rays, and cultivates a mushroom-loving community of 4k+ members.
            </p>
          </div>
          <button 
            onClick={() => setBioModalOpen(true)}
            className="mt-6 px-4 py-2 bg-gray-900 text-white font-bold uppercase text-xs tracking-wider hover:bg-gray-700 transition-colors self-start border border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] active:shadow-none active:translate-x-[2px] active:translate-y-[2px]"
          >
            More Info
          </button>
        </section>

        {/* CENTER COLUMN: Evolution Timeline (55% -> ~6.6/12 cols, used 7 for balance) */}
        <section className="col-span-6 lg:col-span-7 bg-gray-50 relative flex flex-col p-4">
          <div className="absolute top-4 left-4 z-10">
            <h2 className="text-2xl font-serif font-bold bg-white/80 px-2 inline-block backdrop-blur-sm border border-gray-200">Evolutionary Timeline</h2>
            <p className="text-xs text-gray-500 mt-1 italic">Click on a specimen to analyze mutation data.</p>
          </div>
          
          <div className="flex-1 flex items-center overflow-x-auto no-scrollbar px-4 space-x-6 w-full h-full pb-4">
            {EVOLUTION_STAGES.map((stage, index) => (
              <div key={stage.id} className="flex items-center flex-shrink-0 group">
                {/* Timeline Card */}
                <div 
                  onClick={() => setSelectedPippin(stage)}
                  className="w-40 lg:w-48 bg-white border border-gray-300 p-3 rounded-lg cursor-pointer transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-xl group-hover:border-pink-300 relative z-0 group-hover:z-10 flex flex-col items-center text-center"
                >
                  <div className="w-28 h-28 lg:w-32 lg:h-32 mb-3 overflow-hidden rounded-md border border-gray-100 bg-gray-50">
                    <img src={stage.image} alt={stage.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-sm lg:text-base text-gray-800">{stage.name}</h3>
                  <p className="text-[10px] lg:text-xs text-gray-500 mt-1 line-clamp-2">{stage.description}</p>
                </div>
                
                {/* Arrow Connector (not for last item) */}
                {index < EVOLUTION_STAGES.length - 1 && (
                  <div className="w-6 h-[2px] bg-gray-300 mx-2 relative opacity-50">
                    <div className="absolute right-0 -top-[3px] w-2 h-2 border-t-2 border-r-2 border-gray-300 transform rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* RIGHT COLUMN: Facts & Data (25% -> 3/12 cols) */}
        <section className="col-span-3 lg:col-span-3 p-4 bg-white overflow-y-auto no-scrollbar flex flex-col gap-4">
          
          {/* Fun Facts Table */}
          <div>
            <h2 className="text-lg font-serif font-bold mb-2 border-l-4 border-pink-400 pl-2">Fun Facts</h2>
            <div className="border border-gray-200 rounded-sm overflow-hidden text-xs">
              <table className="w-full">
                <tbody>
                  {FUN_FACTS.map((fact, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="p-2 font-bold text-gray-700 border-r border-gray-100">{fact.label}</td>
                      <td className="p-2 text-gray-600">{fact.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Evo Stats */}
          <div>
            <h2 className="text-lg font-serif font-bold mb-2 border-l-4 border-yellow-400 pl-2">Evolutionary Stats</h2>
            <ul className="list-disc list-inside text-xs text-gray-700 space-y-1 bg-gray-50 p-3 rounded-md border border-gray-100">
              {EVO_STATS.map((stat, idx) => (
                <li key={idx}>{stat}</li>
              ))}
            </ul>
          </div>

          {/* Real X Posts */}
          <div className="flex-1">
            <h2 className="text-lg font-serif font-bold mb-2 border-l-4 border-blue-400 pl-2">Real X Posts & Videos</h2>
            <ul className="space-y-3">
              {X_POSTS.map((post) => (
                <li key={post.id} className="text-xs bg-white border border-gray-200 p-2 rounded shadow-sm hover:shadow-md transition-shadow">
                  <p className="font-bold text-gray-800 mb-1">{post.title}</p>
                  <p className="text-gray-600 mb-2">{post.description}</p>
                  
                  {post.type === 'link' ? (
                    <a 
                      href={post.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-500 hover:text-blue-700 hover:underline flex items-center gap-1"
                    >
                      View Post
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                    </a>
                  ) : (
                    <div className="mt-2">
                       {post.videoSrc && (
                         <div className="relative">
                           <VideoHover 
                             src={post.videoSrc} 
                             className="w-full h-24 object-cover bg-black"
                             onClick={() => setVideoModal(post)}
                           />
                           <p className="text-[10px] text-gray-400 mt-1 italic">{post.videoCaption}</p>
                         </div>
                       )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      {/* FOOTER: 15% */}
      <footer className="h-[15vh] border-t border-gray-300 bg-gray-100 flex flex-col justify-center items-center text-center">
        <p className="text-gray-600 font-serif text-sm">
          Compiled from Meme Culture, AI Experiments & Real X Data, 2025 | <span className="text-pink-600 font-bold animate-pulse">Click elements for Interactivity!</span>
        </p>
        <div className="mt-2 flex gap-4 text-xs text-gray-500">
           <a href="#" className="hover:text-gray-900 border-b border-dashed border-gray-400">Sources: FakeData Inc.</a>
           <span>&</span>
           <a href="https://x.com/yoheinakajima" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 border-b border-dashed border-gray-400">@yoheinakajima</a>
        </div>
      </footer>

      {/* MODALS */}
      
      {/* 1. Bio Modal */}
      <Modal isOpen={bioModalOpen} onClose={() => setBioModalOpen(false)} title="Pippin: The Extended Biography">
        <p className="mb-4">
          Pippin represents a singular event in the history of generative AI. Created during a routine o1-mini reasoning test, the prompt "draw a unicorn" yielded a minimalist, yet strangely soulful SVG.
        </p>
        <p className="mb-4">
          <strong>Key Characteristics:</strong>
          <ul className="list-disc list-inside mt-2 ml-4">
            <li>Loves: Sun rays, whispering to mushrooms.</li>
            <li>Hates: Context window limits.</li>
            <li>Occupation: Full-time AI Influencer.</li>
          </ul>
        </p>
        <p className="italic text-sm text-gray-500">
          "He is not just a horse with a horn; he is a symbol of permissionless innovation." - Fake Crypto Analyst, 2025.
        </p>
      </Modal>

      {/* 2. Evolution Stage Modal */}
      <Modal isOpen={!!selectedPippin} onClose={() => setSelectedPippin(null)} title={selectedPippin?.modalTitle || ''}>
        <div className="flex flex-col md:flex-row gap-4">
          <img src={selectedPippin?.image} alt={selectedPippin?.name} className="w-32 h-32 object-contain rounded-lg border border-gray-200 self-center md:self-start" />
          <div>
             <p className="text-lg font-bold text-pink-600 mb-2">{selectedPippin?.fakeStat}</p>
             <p className="mb-4 text-gray-700">{selectedPippin?.modalDetails}</p>
             <p className="text-xs text-gray-400 uppercase tracking-widest border-t pt-2"> Scientific Classification: Meme-us Evolvus</p>
          </div>
        </div>
      </Modal>

      {/* 3. Video Modal */}
      <Modal isOpen={!!videoModal} onClose={() => setVideoModal(null)} title={videoModal?.title || 'Video Archive'}>
         <div className="w-full bg-black rounded-lg overflow-hidden mb-4">
           {videoModal?.videoSrc && (
             <video 
               src={videoModal.videoSrc} 
               controls 
               autoPlay 
               loop 
               className="w-full h-64 object-contain"
             />
           )}
         </div>
         <h4 className="font-bold text-gray-800 mb-1">Narrative Log:</h4>
         <p className="text-gray-700 italic border-l-2 border-pink-500 pl-3">
           {videoModal?.modalNarration}
         </p>
         <div className="mt-4 text-xs text-right">
            <a href={videoModal?.url} target="_blank" rel="noreferrer" className="text-blue-500 underline">View original source on X</a>
         </div>
      </Modal>

    </div>
  );
};

export default App;