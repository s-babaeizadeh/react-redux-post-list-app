const initialState = {
  posts: [
    {
      id: "1",
      title: "Lorem ipsum dolor",
      body: "laboriosam nostrum tenetur iure quia",
    },
    {
      id: "2",
      title: "sit amet consectetur",
      body: "illum officiis blanditiis beatae eveniet",
    },
    {
      id: "3",
      title: "Consequatur vero aliquam",
      body: "expedita provident similique",
    },
    {
      id: "4",
      title: "deleniti dicta omnis voluptate laudantium maxime",
      body: "cupiditate numquam aspernatur ab dolor",
    },
    {
      id: "5",
      title: "dolores alias quasi error distinctio",
      body: "aspernatur ab dolor earum voluptatibus",
    },
    {
      id: "6",
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      body: "deleniti dicta omnis voluptate laudantium maxime",
    },
  ],
}


const rootReducer = (state = initialState, action) => {
  if (action.type === "DELETE_POST") {
    let newPosts = state.posts.filter((post) => {
      return post.id !== action.id
    })
    return {
      ...state,
      posts: newPosts,
    }
  }
  return state
}

export default rootReducer
