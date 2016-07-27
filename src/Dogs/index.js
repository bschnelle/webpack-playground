import React from 'react'
import classes from './classes.scss'
import { Button } from 'react-toolbox/lib/button'

export default class Dogs extends React.Component {

  getBreed ({ breed }) { // <-- destructuring...so nice
    return <li key={breed}>{breed}</li>
  }

  render () {
    const dogs = [
      { breed: 'Husky' },
      { breed: 'Poodle' },
      { breed: 'Greyhound' },
      { breed: 'Great Dane' }
    ]
    const dogElements = []
    for (let dog of dogs) { // <-- cool new iterator! (also for...in for objects)
      dogElements.push(this.getBreed(dog))
    }

    console.log('classes', classes)

    return (
      <div className={classes.dogList}>
        <h4>My Favorite Dogs</h4>
        <ul>{dogElements}</ul>
      </div>
    )
  }
}
