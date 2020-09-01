// import React from 'react'

// import { ExampleComponent } from 'democomponents'
// import 'democomponents/dist/index.css'

// const App = () => {
//   return <ExampleComponent text="Create React Library Example 😄" />
// }

// export default App
import React, { Component } from 'react'
import {ColoredHeadingOne, ColoredHeadingTwo} from 'democomponents'

export default class App extends Component {
  render() {
    return (
      <div>
        <ColoredHeadingOne
        text='Hello desde mi primer component'
        color={'red'}
        />

      <ColoredHeadingTwo
        text='Hello gps'
        color={'#FFFF99'}
        />
      </div>
    );
  }
}