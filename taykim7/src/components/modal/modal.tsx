interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, children }: ModalProps) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-0 sm:p-10 md:p-20 lg:p-30"
      // onClick={onClose}
    >
      <div
        className="bg-white rounded-xl p-4 max-w-3xl w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ㅇㅋ
        </button>

        {children}
      </div>
    </div>
  );
}
