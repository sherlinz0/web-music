import { Map } from "immutable";

import actionTypes from "./constants";

const defaultState = Map({
  sequence: 0, // 0 循环 1 随机 2 单曲

  playQueue: [
    {
      id: 167876,
      name: "有何不可",
      singer: {
        name: "许嵩",
      },
      pictureUrl:
        "https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
      duration: 241840,
    },
    {
      id: 167874,
      name: "有何不可",
      singer: {
        name: "许嵩",
      },
      pictureUrl:
        "https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
      duration: 241840,
    },
    {
      id: 167873,
      name: "有何不可",
      singer: {
        name: "许嵩",
      },
      pictureUrl:
        "https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
      duration: 241840,
    },
    {
      id: 167872,
      name: "有何不可",
      singer: {
        name: "许嵩",
      },
      pictureUrl:
        "https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
      duration: 241840,
    },
  ],
  currentSong: {
    id: 167876,
    name: "有何不可",
    singer: {
      name: "许嵩",
    },
    pictureUrl:
      "https://p1.music.126.net/Md3RLH0fe2a_3dMDnfqoQg==/18590542604286213.jpg",
    duration: 241840,
  },
  currentSongIndex: 0,

  lyric: [],
  currentLyricIndex: 0,
});

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence);

    case actionTypes.CHANGE_PLAY_QUEUE:
      return state.set("playQueue", action.playQueue);
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.currentSongIndex);

    case actionTypes.CHANGE_LYRIC:
      return state.set("lyric", action.lyric);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.currentLyricIndex);

    default:
      return state;
  }
};

export default reducer;
