export type MediaType = "image" | "gif" | "html";

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;   // import 경로
  original: {
    type: MediaType;
    src: string;       // png/gif/html 링크 모두 지원
  };
}

export const projects: ProjectItem[] = [
  {
    id: "project-06",
    title: "test1",
    description: "test",
    thumbnail: "/img/thumbnails/test-thumbnail.png",
    original: {
      type: "image",
      src: "/originals/blog-full.png"
    }
  },
  {
    id: "project-05",
    title: "test1",
    description: "test",
    thumbnail: "/img/thumbnails/5.png",
    original: {
      type: "image",
      src: "/originals/blog-full.png"
    }
  },
  {
    id: "project-04",
    title: "test1",
    description: "test",
    thumbnail: "/img/thumbnails/4.png",
    original: {
      type: "image",
      src: "/originals/blog-full.png"
    }
  },
  {
    id: "project-03",
    title: "test1",
    description: "test",
    thumbnail: "/img/thumbnails/3.png",
    original: {
      type: "image",
      src: "/originals/blog-full.png"
    }
  },
  {
    id: "project-02",
    title: "test1",
    description: "test",
    thumbnail: "/img/thumbnails/2.png",
    original: {
      type: "image",
      src: "/originals/blog-full.png"
    }
  },
  {
    id: "project-01",
    title: "test1",
    description: "test",
    thumbnail: "/img/thumbnails/1.png",
    original: {
      type: "image",
      src: "/originals/blog-full.png"
    }
  },
];
