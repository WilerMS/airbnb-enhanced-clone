import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CurrentLocationState {
  placeSelected?: string,
  startDate?: string,
  endDate?: string,
  guests?: {
    adults: number,
    kids: number,
    babies: number,
  }
}

const initialState: CurrentLocationState = {
  placeSelected: '',
  startDate: new Date().toISOString(),
  endDate: new Date().toISOString(),
  guests: {
    adults: 2,
    kids: 0,
    babies: 0,
  }
}

export const currentLocation = createSlice({
  name: 'currentLocation',
  initialState,
  reducers: {
    setCurrenLocation: (state, action: PayloadAction<CurrentLocationState>) => {
      state = {
        ...state,
        ...action.payload
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCurrenLocation } = currentLocation.actions

export default currentLocation.reducer