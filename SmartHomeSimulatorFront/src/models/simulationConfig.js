import produce from 'immer'

const initialState = {
  currentSimulationProfile: null,
  simulationProfiles: [],
}

const simulationConfig = produce((state, action) => {
  const {type, payload} = action
  switch (type) {
    case 'SET_SIMULATION_PROFILES':
      state.simulationProfiles = payload
      return state
    case 'SET_CURRENT_SIMULATION_PROFILE':
      state.currentSimulationProfile = payload
      return state
    case 'SET_SIMULATION_CONFIG_STATE':
      state = payload
      return state
    default: return state
  }
}, {...initialState})

export default simulationConfig
