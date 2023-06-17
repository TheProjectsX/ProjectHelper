export const titleArray = {
  starter: "Getting Started with HTML",
  formatText: "HTML Text Formatting",
  table: "Creating Table in HTML"
};

export const scriptSubSet = [
  {
    title: "Getting Started",
    tag: "starter",
    path: "/frontend/html",
  },
  {
    title: "Text Formatting",
    tag: "formatText",
    path: "/frontend/html/formatText",
  },
  {
    title: "HTML Table",
    tag: "table",
    path: "/frontend/html/table",
  },
];

export const helperScripts = {
  starter: [
    {
      topTitle: "# Starting With HTML",
      desc: ["The first Boiler Plate to Start HTML Coding!"],
      lang: "html",
      code: `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>Document</title>\n</head>\n<body>\n  \n</body>\n</html>`,
    },
    {
      title: "",
      desc: ["Creating a Table in HTML"],
      lang: "html",
      code: `<table>\n  <tr>\n    <th>Heading 1</th>\n    <th>Heading 2</th>\n    <th>Heading 3</th>\n  </tr>\n  <tr>\n    <td>Item 1.1</td>\n    <td>Item 2.1</td>\n    <td>Item 3.1</td>\n  </tr>\n  <tr>\n    <td>Item 1.2</td>\n    <td>Item 2.2</td>\n    <td>Item 3.2</td>\n  </tr>\n</table>`,
    },
  ],
  formatText: [
    {
      topTitle: "# HTML Formatting Elements",
      title: "Formatting elements were designed to display special types of text",
      desc: ["<code>&lt;b&gt;</code> tag for <b>Bold text</b>"],
      lang: "html",
      code: `<b>This is a Bold text</b>`
    },
    {
      desc: ["<code>&lt;strong&gt;</code> tag for <strong>Strong text</strong>"],
      lang: "html",
      code: `<strong>This is a Strong text</strong>`
    },
    {
      desc: ["<code>&lt;i&gt;</code> tag for <i>Italic text</i>"],
      lang: "html",
      code: `<i>This is a Italic text</i>`
    },
    {
      desc: ["<code>&lt;em&gt;</code> tag for <em>Emphasized text</em>"],
      lang: "html",
      code: `<em>This is a Emphasized text</em>`
    },
    {
      desc: ["<code>&lt;mark&gt;</code> tag for <mark>Marked text</mark>"],
      lang: "html",
      code: `<mark>This is a Marked text</mark>`
    },
    {
      desc: ["<code>&lt;small&gt;</code> tag for <small>Small text</small>"],
      lang: "html",
      code: `<small>This is a Small text</small>`
    },
    {
      desc: ["<code>&lt;del&gt;</code> tag for <del>Deleted text</del>"],
      lang: "html",
      code: `<del>This is a Deleted text</del>`
    },
    {
      desc: ["<code>&lt;ins&gt;</code> tag for <ins>Inserted text</ins>"],
      lang: "html",
      code: `<ins>This is a Inserted text</ins>`
    },
    {
      desc: ["<code>&lt;sub&gt;</code> tag for <sub>Subscript text</sub>"],
      lang: "html",
      code: `<sub>This is a Subscript text</sub>`
    },
    {
      desc: ["<code>&lt;sup&gt;</code> tag for <sup>Superscript text</sup>"],
      lang: "html",
      code: `<sup>This is a Superscript text</sup>`
    },
    {
      desc: ["<code>&lt;code&gt;</code> tag for viewing <code>Code text</code>"],
      lang: "html",
      code: `<code>This text is in Code Style!</code>`
    },
  ],
  table: [
    {
      topTitle: "# Create a Table in HTML",
      title: "Copy and Paste the Below code to create a Table",
      desc: ["In the snippet, <code>tr</code> tag creates a Row", "<code>th</code> tag creates Header", "<code>td</code> tag creates a Data Cell"],
      lang: "html",
      code: `<table>\n  <tr>\n    <th>Header 01</th>\n    <th>Header 02t</th>\n    <th>Header 03</th>\n  </tr>\n  <tr>\n    <td>Data 1.1</td>\n    <td>Data 2.1</td>\n    <td>Data 3.1</td>\n  </tr>\n  <tr>\n    <td>Data 1.2</td>\n    <td>Data 2.2</td>\n    <td>Data 3.2</td>\n  </tr>\n</table>`
    },
    {
      topTitle: "Example:",
      title: `<table>  <tr>    <th>Header 01</th>    <th>Header 02t</th>    <th>Header 03</th>  </tr>  <tr>    <td>Data 1.1</td>\n    <td>Data 2.1</td>    <td>Data 3.1</td>  </tr>  <tr>    <td>Data 1.2</td>    <td>Data 2.2</td>    <td>Data 3.2</td>  </tr></table>`,
      desc: []
    },
  ]
};
