import _ from '../Looping Arrays/underscore'
import {videoData} from '../Looping Arrays/Filter/filter'

console.log(_.filter(videoData, obj=> obj.present))

console.log(_.filter(videoData, obj => obj.present && (obj.name === 'Mr Brown') ))
