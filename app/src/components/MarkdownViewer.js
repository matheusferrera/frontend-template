import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import PropTypes from "prop-types";

const MarkdownViewer = ({ filePath }) => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    // Load the Markdown file content
    fetch(filePath)
      .then(response => {
        console.log(response);
        return response.text();
      })
      .then(data => {
        console.log(data);
        setMarkdownContent(data);
      })
      .catch(error => console.error("Error loading Markdown file:", error));
  }, [filePath]);

  return (
    <div>
      <ReactMarkdown>{markdownContent}</ReactMarkdown>
    </div>
  );
};

MarkdownViewer.propTypes = {
  filePath: PropTypes.string.isRequired,
};

export default MarkdownViewer;
