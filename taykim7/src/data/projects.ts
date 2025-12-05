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
    id: "project-01",
    title: "test1",
    description: "test",
    thumbnail: "/img/thumbnails/test-thumbnail.png",
    original: {
      type: "image",
      src: "/originals/blog-full.png"
    }
  }
];
