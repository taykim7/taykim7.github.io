import { useEffect } from "react";
import type { ProjectItem } from "../../data/projects";
import ModalContent from "./modalContent";
interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ProjectItem | null;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  useEffect(()=>{
    // 스크롤 막기
    if(open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  })

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-0 sm:p-10 md:p-20 lg:p-30"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-4 max-w-3xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black bg-black/100"
          onClick={onClose}
        >
          ㅇㅋ
        </button>

        {( children && (
          <>
            {/* 타입별 렌더링 */}
            <ModalContent item={children} />

            {/* 텍스트 */}
            <h2 className="text-xl font-bold">{children.title}</h2>
            <p className="text-gray-600 mt-1">{children.description}</p>
          </>
        ))}
      </div>
    </div>
  );
}
