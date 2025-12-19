import type { ProjectItem } from "../../data/projects";
import ImageView from "./ImageView";
import LottieView from "./LottieView";

export default function ContentRenderer({ item }: { item: ProjectItem }) {
  const { type, src } = item.original;

  if (type === "image") {
    return <ImageView src={src} />;
  }

  if (type === "lottie") {
    console.log('Lottie 호출')
    return <LottieView src={src} />;
  }

  return null;
}
