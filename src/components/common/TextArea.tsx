import React from "react";

interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const TextArea = (props: TextAreaProps) => {
  return (
    <div className="border-gray-200 border-2 py-2 outline-none p-2 rounded-xl">
      <textarea
        {...props}
        className="w-full h-20 outline-none no-scrollbar"
      />
    </div>
  );
};

export default TextArea;