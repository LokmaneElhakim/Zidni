import { MessageCircle } from "lucide-react";

function openButton({ isWaiting, setIsOpen }) {
  return (
    <button
      onClick={() => {
        setIsOpen((prev) => !prev);
      }}
      className="z-[100] fixed bottom-5 right-5 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-14 h-14 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
      disabled={isWaiting}
    >
      <MessageCircle />
    </button>
  );
}

export default openButton;
