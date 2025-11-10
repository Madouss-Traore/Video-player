
export type VideoItem={
    id:number;
    src: string;
    title?: string;
    poster?: string;
    width: number;
    height:number;
}

const videoList: VideoItem[]=[
    {
    id: 1,
    src: "/nature-video.mp4",
    title: "Waterfall",
    poster: "/nature-image.png",
    width: 800,
    height: 450,
  },

    {
    id: 2,
    src: "/cherry-blossoms-video.mp4",
    title: "Cherry blossoms",
    poster: "/cherry-blossoms-image.png",
    width: 800,
    height: 450,
  },

    {
    id: 3,
    src: "/giraffe-video.mp4",
    title: "Giraffe",
    poster: "/giraffe-image.png",
    width: 800,
    height: 450,
  },

       {
    id: 4,
    src: "/christmas-video.mp4",
    title: "Christmas Vibes",
    poster: "/christmas-image.png",
    width: 800,
    height: 450,
  },

]

export default videoList;