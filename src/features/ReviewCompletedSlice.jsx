import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import api from '../services/Axios'


//updating the user week details completed field so that the user can go to the next week
//will be called when clicking on the tick button when it
export const UpdateDetailsOfUser = createAsyncThunk('update_details_of_user',
    async (week_id) => {
        try {
            const request = await api.patch(`/weeks/${week_id}/`, { completed: true })
            const response = await request.data
        } catch (error) {
            console.log(error)
        }
    }
)



const initialState = {
    isLoading: true,
    data: [],
    msg: 'Still loading'
}

export const ReviewCompleteSlice = createSlice({
    name: 'reveiw_complete_slice',
    initialState,
    reducers: {

    },
    extraReducers: {
        //no need to add any action as it is only sending a patch request to the server
    }
})

export default ReviewCompleteSlice.reducer