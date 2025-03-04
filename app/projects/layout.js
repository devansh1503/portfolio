import React from 'react'
import Sidebar from '../Components/Sidebar'

const objects = [
    {
        'head':"remote-code-execution-engine",
        'files':[
            {
                'title':'index.js',
                'link': '/projects/code-execution-engine'
            }
        ]
    },
    {
        'head':"devine.js-backend-framework",
        'files':[
            {
                'title':'index.js',
                'link': '/projects'
            }
        ]
    },
    {
        'head':"live-streaming-application",
        'files':[
            {
                'title':'index.js',
                'link': '/projects/video-streaming'
            }
        ]
    },
    {
        'head':"xazzweb-frontend-framework",
        'files':[
            {
                'title':'index.js',
                'link': '/projects'
            }
        ]
    },
    {
        'head':"todo-list-but-better",
        'files':[
            {
                'title':'index.js',
                'link': '/projects'
            }
        ]
    },
    {
        'head':"healthcare-system",
        'files':[
            {
                'title':'index.js',
                'link': '/projects'
            }
        ]
    },
    {
        'head':"pneumonia-detector",
        'files':[
            {
                'title':'index.js',
                'link': '/projects'
            }
        ]
    },
    {
        'head':"music-recommendation-engine",
        'files':[
            {
                'title':'index.js',
                'link': '/projects'
            }
        ]
    },
    
]

const layout = ({children}) => {
  return (
    <div style={{display:'flex'}}>
        <Sidebar objects={objects}/>
        {children}
    </div>
  )
}

export default layout