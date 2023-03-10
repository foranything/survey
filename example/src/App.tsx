import React from 'react'

import { Survey } from 'survey'
import 'survey/dist/index.css'

const App = () => {

  const items: any = [
    {
      text: 'Text1',
      getter: (value: boolean) => {console.log(value)},
      options: [
        { text: 'option1' },
        { text: 'option2' },
        { text: 'option3' }
      ]
    },
    { text: 'Text2', getter: (value: boolean) => {console.log(value)} }
  ];

  return <Survey title={'Title'} items={items}/>
}

export default App
