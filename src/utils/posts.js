import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import dirTree from 'directory-tree';

const postsDirectory = path.join(process.cwd(), 'src/posts');
const musicDirectory = path.join(postsDirectory, "music");
const devDirectory = path.join(postsDirectory, "dev");

const musicPosts = dirTree(musicDirectory);
const devPosts = dirTree(devDirectory);

function makePostsObj(dir) {
  const name = dir.name
  const posts = []

  for (const post of dir.children) {
    posts.push(post.name);
  }
  return {
    category: name,
    posts: [...posts]
  }
}

const musicPostsObj = makePostsObj(musicPosts);
const devPostsObj = makePostsObj(devPosts);
const allPostsObj = [musicPostsObj, devPostsObj];

// // Object Structure for Posts with category
// // { 
// //   category: foo,
// //   posts: ['post-1.md', 'post-2.md'] 
// // }

// When calling the fucntion -  pass in a string with the category to filter by that post, leave empty to get all posts
// i.e.: getSortedPostsData("music")
export function getSortedPostsData(category) {
  let postsArr = [];

  if (category) {
    const categoryDirectory = path.join(postsDirectory, category);
    postsArr.push(makePostsObj(dirTree(categoryDirectory)));
  } else {
    postsArr = allPostsObj;
  }

  // Create array of all PostsData
  let postDataArr = [];
  postsArr.map((item) => {
    let category = item.category;
    let fullPath;
    let id;

    for (const post of item.posts) {
      // Remove ".md" from file name to get id
      id = post.replace(/\.md$/, '');
      fullPath = path.join(postsDirectory, category, post);

      // Read markdown file as string
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      // Combine the data with the id
      postDataArr.push({
        id,
        category: category,
        ...matterResult.data,
      });
    }
  });

  // Sort posts by date
  return postDataArr.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllPostIds(category) {
  let dir;
  if (category) {
    dir = path.join(postsDirectory, category);
  } else {
    dir = postsDirectory;
  }

  const fileNames = fs.readdirSync(dir);
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export async function getPostData(id, category) {
  let dir;
  if (category) {
    dir = path.join(postsDirectory, category);
  } else {
    dir = postsDirectory;
  }

  const fullPath = path.join(postsDirectory, category, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}