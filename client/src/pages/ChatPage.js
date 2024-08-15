import React from 'react';
import Chat from '../components/Chat';

function ChatPage() {
  return (
    <div className="chat-page w-screen h-screen overflow-hidden flex flex-wrap items-start justify-start">
      <h1 className='text-4xl text-violet-500 font-bold flex items-center justify-start px-4 w-screen h-[10vh]'>Clases En Vivo</h1>
      <div className='videoContainer min-w-[70vw] max-w-[70vw] overflow-hidden aspect-video p-4 rounded'>
        <iframe 
          width="100" 
          height="100" 
          src="https://www.youtube.com/embed/aMW917FoLp0?si=g6g7eMYBEruC0Dm2" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; muted" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen
          className='w-full h-full object-contain rounded-xl'
        ></iframe>
      </div>
      <div className="chatContainer min-w-[30vw] max-w-[30vw] h-[90vh] px-4 py-4">
        <Chat />
      </div>
    </div>
  );
}

export default ChatPage;
