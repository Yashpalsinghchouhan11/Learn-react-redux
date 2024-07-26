import { configureStore } from '@reduxjs/toolkit'
import taskreducer from '../../features/taskSlice'

const store = configureStore({
    reducer: {
        tasks: taskreducer
    }
})

export default store;