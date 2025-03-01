import React from 'react'
import Sidebar from '../Components/Sidebar'

const objects = [
    {
        'head':"bio",
        'files':[
            {
                'title':'bio',
                'link': '/about'
            }
        ]
    },
    {
        'head':"skills",
        'files':[
            {
                'title':'programming-languages',
                'link': '/about/languages'
            },
            {
                'title':'frameworks',
                'link': '/about/frameworks'
            },
            {
                'title':'tools-and-others',
                'link': '/about/tools'
            },
        ]
    },
    {
        'head':"interests",
        'files':[
            {
                'title':'interests',
                'link': '/about/interests'
            }
        ]
    }
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