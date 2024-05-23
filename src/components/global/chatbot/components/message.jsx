import PropTypes from "prop-types";

Message.propTypes = {
  isAns: PropTypes.bool,
  children: PropTypes.node,
};

export function Message({ isAns, children }) {
  return (
    <div
      className={`className="flex justify-center items-center flex-wrap max-w-4/5 p-2 break-all" ${
        isAns
          ? "bg-gray-400 self-start text-blue-900 rounded-md rounded-bl-none"
          : "bg-blue-500 self-end rounded-tl-md rounded-tr-md rounded-br-none rounded-bl-md"
      }`}
    >
      {children}
    </div>
  );
}