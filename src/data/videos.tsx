
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
    src: "/nature.mp4",
    title: "Waterfall",
    poster: "/nature-image.png",
    width: 800,
    height: 450,
  },

    {
    id: 2,
    src: "/cherry-blossoms.mp4",
    title: "Cherry blossoms",
    poster: "/cherry-blossoms-image.png",
    width: 800,
    height: 450,
  },
]

export default videoList;