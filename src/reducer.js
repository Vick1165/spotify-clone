export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // remove after dev phase
  // token:
  //   "BQDnuU5eW9hoeCeYYc9G6uJH-IRXoj5wtUa_pbRxjl2ZX2BGIIzBGW946VfPiwxUxB9TV0pbzIQevxg9Cri_ofGb4QiGmNhq_C-MJBcUR_U9-PlsKae4OkGj2JuWPE8-EpSwCC9NFWIFUMTG3iEVGDWdujNLers-WFYvLW00cVtOx6vN",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
