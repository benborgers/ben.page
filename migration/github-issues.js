import fs from "fs";

const filenames = fs.readdirSync("./markdown");

for (const filename of filenames) {
  const slug = filename.replace(".md", "");
  let contents = fs.readFileSync(`./markdown/${filename}`, "utf8");

  contents = contents.replace(
    `\n---`,
    `\npublished: true\nunlisted: true\n---`
  );

  contents = contents.replace(/date: (.*)/, `date: '$1'`);

  contents = contents.replace(/!\[.*?\]\(\/(.+?)\)/g, (_, match) => {
    const filename = match.replace("markdown-posts/", "");

    fs.mkdirSync(`../public/posts/${slug}`, { recursive: true });
    fs.copyFileSync(
      `./markdown-images/${filename}`,
      `../public/posts/${slug}/${filename}`
    );

    return `![](/posts/${slug}/${filename})`;
  });

  fs.writeFileSync(`../posts/${filename}oc`, contents);
}
