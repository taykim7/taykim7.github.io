export default function ImageView({ src }: { src: string }) {
  return (
    <img
      src={src}
      className="w-full max-h-[80vh] object-contain rounded-lg mb-4"
    />
  );
}