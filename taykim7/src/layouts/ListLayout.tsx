import { projects, type ProjectItem } from "../data/projects"
import ModalView from "../components/modal/modal";
import { useState } from "react";

export default function MultipleSquares() {
  const [selected, setSelected] = useState<ProjectItem | null>(null);
  
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-0">
      {projects.map(item => (
        <div key={item.id}
          onClick={() => setSelected(item)}
        >
          <img
            src={item.thumbnail}
            alt={item.title}
            className="w-full h-full aspect-square object-cover"
          />
        </div>
      ))}

      <ModalView
        open={!!selected}
        onClose={() => setSelected(null)}
      >
        {selected}
      </ModalView>
    </div>
  );
}