import Markdown from 'https://esm.sh/react-markdown@9'

import React from 'react'
import {createRoot} from 'react-dom/client'
import Markdown from 'react-markdown'

const markdown = '# Hi, *Pluto*!'
function Markdown() {
    return (
        <>
        <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
        </>
      
    );
  }
  
  export default Markdown;
  

