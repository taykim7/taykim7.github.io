import type { ProjectItem } from "../../data/projects";

export default function ContentRenderer({ item }: { item: ProjectItem }) {
  const { type, src } = item.original;

  switch (type) {
    case "image":
      return (
        <img
          src={src}
          alt={item.title}
          className="w-full max-h-[80vh] object-contain rounded-lg"
        />
      );

    // case "html":
    //   return (
    //     <iframe
    //       src={src}
    //       className="w-full h-[70vh] rounded-lg border"
    //       title={item.title}
    //     />
    //   );

    // case "video":
    //   return (
    //     <video
    //       src={src}
    //       controls
    //       className="w-full max-h-[80vh] rounded-lg"
    //     />
    //   );

    default:
      return <p className="text-gray-400">알 수 없는 타입입니다: {type}</p>;
  }
}
