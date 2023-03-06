import { createStore } from "redux";

const initialState = {
  postsArr: [
    {
      author: "@dart_vader",
      content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
      image: "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg",
      date: "27.02.2023 15:30",
      likes: 122,
      comments: 432,
      reposts: 18,
    },
    {
      author: "@jason_statham",
      content: "Wow...?",
      image: "https://onecms-res.cloudinary.com/image/upload/v1641029364/8days-migration/jason-statham-main-photo-data.jpg",
      date: "24.02.2023 09:18",
      likes: 232,
      comments: 32,
      reposts: 140,
    }
  ],
  usersArr: [
    {
      name: "Anakin skywalker",
      photo:
        "https://static.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      nickname: "@dart_vader",
    },
    {
      name: "Jason Statham",
      photo: "https://cdn.mos.cms.futurecdn.net/n9Y6P279e9iXhRPHU6TdNF.jpg",
      nickname: "@jason_statham",
    },
    {
      name: "Chuck Norris",
      photo:
        "https://images01.military.com/sites/default/files/styles/full/public/2021-04/chucknorris.jpeg.jpg",
      nickname: "@chuck_norris",
    },
    {
      name: "Jackie Chan",
      photo: "https://image.tmdb.org/t/p/w500/nraZoTzwJQPHspAVsKfgl3RXKKa.jpg",
      nickname: "@jackie_chan",
    },
  ],
};

function postListReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_NEW_POST": {
      return {
        postsArr: [action.payload, ...state.postsArr],
        usersArr: [...state.usersArr],
      };
    }
    default:
      return state;
  }
}
const store = createStore(postListReducer);

export default store;
