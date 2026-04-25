export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "code"; lang?: string; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  type: "next" | "normal";
  readingTime: string;
  author: string;
  content: ContentBlock[];
};

export const posts: Post[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "开始使用 Next.js",
    description:
      "Next.js 是一个用于构建现代 Web 应用程序的强大框架。本文将介绍如何开始使用 Next.js 构建你的第一个应用。",
    date: "2024-01-20",
    type: "next",
    readingTime: "6 分钟",
    author: "Lenovo",
    content: [
      {
        type: "p",
        text: "Next.js 是由 Vercel 维护的全栈 React 框架。它把路由、渲染、数据获取、打包优化整合在一起，让你可以专注在产品本身，而不是反复造轮子。",
      },
      {
        type: "h2",
        text: "为什么选择 Next.js？",
      },
      {
        type: "list",
        items: [
          "基于文件系统的路由，写文件就是写路由",
          "App Router + React Server Components，按需选择渲染策略",
          "图片、字体、脚本自动优化，开箱即用的性能",
          "API Routes 与 Server Actions，让前后端无缝协作",
        ],
      },
      {
        type: "h2",
        text: "创建一个新项目",
      },
      {
        type: "p",
        text: "用官方脚手架是最快的方式。一行命令就能搭好包含 TypeScript、Tailwind、ESLint 的现代项目结构：",
      },
      {
        type: "code",
        lang: "bash",
        text: "npx create-next-app@latest my-app",
      },
      {
        type: "p",
        text: "进入项目后运行 dev server，浏览器访问 http://localhost:3000 就能看到首页。修改 app/page.tsx 会触发热更新，所见即所得。",
      },
      {
        type: "code",
        lang: "bash",
        text: "cd my-app\nnpm run dev",
      },
      {
        type: "h2",
        text: "新增一个页面",
      },
      {
        type: "p",
        text: "在 app/ 目录下新建文件夹，里面放一个 page.tsx，就是一个新路由。比如 app/about/page.tsx 对应的就是 /about。",
      },
      {
        type: "code",
        lang: "tsx",
        text: "export default function AboutPage() {\n  return <h1>关于我们</h1>;\n}",
      },
      {
        type: "quote",
        text: "约定优于配置 —— 这是 Next.js 的核心哲学之一。",
      },
      {
        type: "h2",
        text: "下一步",
      },
      {
        type: "p",
        text: "建议跟着官方教程做一遍 Dashboard 项目，再翻一翻 App Router 的文档，重点理解 Layout、Loading、Error 这三个特殊文件，你就能真正写出生产级的应用了。",
      },
    ],
  },
  {
    slug: "deploy-to-vercel",
    title: "部署到 Vercel",
    description:
      "Vercel 为 Next.js 应用提供了最佳的部署平台。了解如何将你的 Next.js 应用部署到 Vercel，以获得最佳的性能和开发体验。",
    date: "2024-01-21",
    type: "normal",
    readingTime: "4 分钟",
    author: "Lenovo",
    content: [
      {
        type: "p",
        text: "Vercel 是 Next.js 的母公司，部署体验自然是一等公民。从代码到全球边缘节点，整个过程通常不到一分钟。",
      },
      {
        type: "h2",
        text: "三步上线",
      },
      {
        type: "list",
        items: [
          "把项目推到 GitHub / GitLab / Bitbucket",
          "在 Vercel 控制台 Import 这个仓库",
          "选择默认配置，点击 Deploy，等待构建完成",
        ],
      },
      {
        type: "p",
        text: "Vercel 会自动识别 Next.js 项目，正确配置构建命令、输出目录和 Serverless Functions，无需任何手动设置。",
      },
      {
        type: "h2",
        text: "环境变量",
      },
      {
        type: "p",
        text: "在 Settings → Environment Variables 里添加变量，区分 Production / Preview / Development 三套环境。代码里通过 process.env.MY_KEY 读取即可。",
      },
      {
        type: "code",
        lang: "ts",
        text: "const apiKey = process.env.NEXT_PUBLIC_API_KEY;\nconst dbUrl = process.env.DATABASE_URL;",
      },
      {
        type: "h2",
        text: "Preview Deployments",
      },
      {
        type: "p",
        text: "每一次 Pull Request 都会自动生成一个独立的预览环境，URL 可以直接发给同事或客户做验收。这是 Vercel 最让人上瘾的功能之一。",
      },
      {
        type: "quote",
        text: "Push to Git, deploy to the world. —— Vercel 的核心承诺。",
      },
      {
        type: "h2",
        text: "自定义域名",
      },
      {
        type: "p",
        text: "在项目的 Domains 标签里添加你的域名，按提示在 DNS 服务商处加一条 CNAME 或 A 记录，Vercel 会自动签发并续期 HTTPS 证书。",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

/**
 * 模拟服务端获取博客列表。
 * 真实项目中可以替换为数据库查询、CMS API 或 fetch 远程接口。
 */
export async function fetchPosts(): Promise<Post[]> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return posts;
}

/**
 * 模拟服务端获取单篇博客详情。
 */
export async function fetchPost(slug: string): Promise<Post | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return getPost(slug);
}
