import React, { useState } from "react";

const Faq = () => {
  const [openParagraphIndex, setOpenParagraphIndex] = useState(-1);

  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin nisi dolor, posuere mattis viverra vel, dignissim et augue. Suspendisse convallis nec neque et tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin nisi dolor, posuere mattis viverra vel, dignissim et augue. Suspendisse convallis nec neque et tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; ",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tempus eleifend ullamcorper. Sed maximus nunc vitae metus pharetra, quis pharetra felis iaculis. Aenean in nisl eget lorem congue efficitur id ut orci. Mauris volutpat tortor non lectus rhoncus vestibulum bibendum quis leo. Nulla lobortis feugiat nibh. Mauris pulvinar quam nec lectus ornare, id auctor nulla venenatis. Duis sit amet rhoncus lacus. Proin nisi dolor, posuere mattis viverra vel, dignissim et augue. Suspendisse convallis nec neque et tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; ",
    // Add more paragraphs here
  ];

  const toggleParagraph = (index) => {
    if (openParagraphIndex === index) {
      setOpenParagraphIndex(-1);
    } else {
      setOpenParagraphIndex(index);
    }
  };

  return (
    <div>
      <h1 className="text-center text-4xl font-semibold text-primary my-3">
        Frequently Asked Questions (FAQs)
      </h1>
      <div>
        <ul className="flex flex-col gap-5">
          {paragraphs.map((paragraph, index) => (
            <li key={index}>
              <div
                className="flex  justify-between items-center cursor-pointer"
                onClick={() => toggleParagraph(index)}
              >
                <span className=" px-5 w-11/12 border text-xl h-16 truncate shadow-lg flex items-center mx-auto">
                  <span
                    className={`transform text-lg  mr-5 text-lightGray ${
                      openParagraphIndex === index ? "rotate-0" : "rotate-180"
                    } transition-transform`}
                  >
                    &#9660;
                  </span>
                  {paragraph}
                </span>
              </div>
              {openParagraphIndex === index && (
                <p className="mt-4 w-11/12 mx-auto px-14">{paragraph}</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Faq;
