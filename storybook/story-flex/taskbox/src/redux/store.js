// A simple redux store/actions/reducer implementation.
// A true app would be more complex and separated into different files.
import { createStore } from 'redux';
import { reducer } from './reducers';
import { defaultTasks } from '../services/data';

export default createStore(reducer, { tasks: defaultTasks });