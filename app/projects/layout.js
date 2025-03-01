import React from 'react'
import Sidebar from '../Components/Sidebar'

const objects = [
    {
        'head':"remote-code-execution-engine",
        'files':[
            {
                'title':'index.js',
                'link': '/project'
            }
        ]
    },
    {
        'head':"devine.js-backend-framework",
        'files':[
            {
                'title':'index.js',
                'link': '/project'
            }
        ]
    },
    {
        'head':"live-streaming-application",
        'files':[
            {
                'title':'index.js',
                'link': '/project'
            }
        ]
    },
    {
        'head':"xazzweb-frontend-framework",
        'files':[
            {
                'title':'index.js',
                'link': '/project'
            }
        ]
    },
    {
        'head':"todo-list-but-better",
        'files':[
            {
                'title':'index.js',
                'link': '/project'
            }
        ]
    },
    {
        'head':"healthcare-system",
        'files':[
            {
                'title':'index.js',
                'link': '/project'
            }
        ]
    },
    {
        'head':"pneumonia-detector",
        'files':[
            {
                'title':'index.js',
                'link': '/project'
            }
        ]
    },
    {
        'head':"music-recommendation-engine",
        'files':[
            {
                'title':'index.js',
                'link': '/project'
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