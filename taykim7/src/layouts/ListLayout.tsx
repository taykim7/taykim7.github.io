import { projects } from "../data/projects"

export default function MultipleSquares() {

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-0">
       {projects.map(item => (
        <div key={item.id} >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full aspect-square object-cover"
          />
        </div>
      ))}
    </div>
  );
}