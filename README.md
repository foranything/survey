# k-survey

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/k-survey.svg)](https://www.npmjs.com/package/k-survey) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save k-survey
```

## Usage

```tsx
import React, { Component } from 'react'

import Survey from 'k-survey'

class Example extends Component {

  const items = [
    {
      text: 'Text1',
      options: [
        { text: 'option1' },
        { text: 'option2' },
        { text: 'option3' }
      ]
    },
  ];

  render() {
    return <Survey title={'title'} items={items} />
  }
}
```

## License

MIT © [foranything](https://github.com/foranything)
