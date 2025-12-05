import { projects } from "../data/projects"

export default function MultipleSquares() {
  // const items = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <div className="w-full h-full grid grid-cols-3 gap-4 p-4">
       {projects.map(item => (
        <div key={item.id} className="p-4 bg-white rounded shadow">
          <img
            src={item.thumbnail}
            alt={item.title}
            className="aspect-square object-cover rounded"
          />
        </div>
      ))}
    </div>
  );
}