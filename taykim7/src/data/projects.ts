export type MediaType = "image" | "gif" | "html" | "video";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  original: {
    type: MediaType;
    src: string;
  };
}

export const projects: ProjectItem[] = [
  {
    id: "project-06",
    title: "test6",
    description: "test6입니다",
    thumbnail: "/img/thumbnails/test-thumbnail.png",
    original: {
      type: "image",
      src: "/img/thumbnails/test-thumbnail.png"
    }
  },
  {
    id: "project-05",
    title: "test5",
    description: "test5입니다",
    thumbnail: "/img/thumbnails/5.png",
    original: {
      type: "image",
      src: "/img/thumbnails/5.png"
    }
  },
  {
    id: "project-04",
    title: "test4",
    description: "test4입니다",
    thumbnail: "/img/thumbnails/4.png",
    original: {
      type: "image",
      src: "/img/thumbnails/4.png"
    }
  },
  {
    id: "project-03",
    title: "test3",
    description: "test3입니다",
    thumbnail: "/img/thumbnails/3.png",
    original: {
      type: "image",
      src: "/img/thumbnails/3.png"
    }
  },
  {
    id: "project-02",
    title: "test2",
    description: "test2입니다",
    thumbnail: "/img/thumbnails/2.png",
    original: {
      type: "image",
      src: "/img/thumbnails/2.png"
    }
  },
  {
    id: "project-01",
    title: "test1",
    description: "test1입니다",
    thumbnail: "/img/thumbnails/1.png",
    original: {
      type: "image",
      src: "/img/thumbnails/1.png"
    }
  },
];
