import fs from "fs";

const filenames = fs.readdirSync("./github-issues");

for (const filename of filenames) {
  const slug = filename.replace(".md", "");
  let contents = fs.readFileSync(`./github-issues/${filename}`, "utf8");

  contents = contents.replace("technical: ", `published: true\nunlisted: `);

  contents = contents.replace(/date: (.+)/, `date: '$1'`);

  contents = contents.replace(
    /!\[.*?\]\(\/github-issues\/(.+?)\)/g,
    (_, match) => {
      const filename = match;

      fs.mkdirSync(`../public/posts/${slug}`, { recursive: true });
      fs.copyFileSync(
        `./github-issues-images/${filename}`,
        `../public/posts/${slug}/${filename}`
      );

      return `![](/posts/${slug}/${filename})`;
    }
  );

  contents = contents.replace(
    /<img.*src="\/github-issues\/(.+?)".*>/g,
    (_, match) => {
      const filename = match;

      fs.mkdirSync(`../public/posts/${slug}`, { recursive: true });
      fs.copyFileSync(
        `./github-issues-images/${filename}`,
        `../public/posts/${slug}/${filename}`
      );

      return `![](/posts/${slug}/${filename})`;
    }
  );

  contents = contents.replace(
    /<video src="\/github-issues\/(.+?)".*>/g,
    (_, match) => {
      const filename = match;

      fs.mkdirSync(`../public/posts/${slug}`, { recursive: true });
      fs.copyFileSync(
        `./github-issues-images/${filename}`,
        `../public/posts/${slug}/${filename}`
      );

      return `{% video content="public/posts/${slug}/${filename}" /%}`;
    }
  );

  fs.writeFileSync(`../posts/${filename}oc`, contents);
}
