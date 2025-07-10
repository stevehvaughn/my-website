import { NavLink, SocialLink } from "../types";

// Nav Links for NavBar Criteria
export const homeNavLinks: NavLink[] = [
  {
    name: "Home",
    path: "/"
  },
  {
    name: "About Me",
    path: "/about",
  }
];

export const errorNavLinks: NavLink[] = [
  {
    name: "Music",
    path: "/music",
  },
  {
    name: "Portfolio",
    path: "/dev"
  }
];

export const musicNavLinks: NavLink[] = [
  {
    name: "Music",
    path: "/music"
  },
  {
    name: "Bio",
    path: "/music/bio"
  },
  {
    name: "Concerts",
    path: "/music/concerts"
  },
  {
    name: "Teaching",
    path: "/music/teaching"
  },
  // {
  //   name: "Blog",
  //   path: "/music/blog"
  // },
  // {
  //   name: "Gallery",
  //   path: "/music/gallery"
  // },
  {
    name: "Portfolio",
    path: "/dev"
  },
]

export const devNavLinks: NavLink[] = [
  {
    name: "Portfolio",
    path: "/dev"
  },
  {
    name: "About",
    path: "/dev/about"
  },
  {
    name: "Projects",
    path: "/dev/projects"
  },
  {
    name: "Contact",
    path: "/dev/contact"
  },
  // {
  //   name: "Posts",
  //   path: "/dev/posts"
  // },
  {
    name: "Music",
    path: "/music"
  },
]

// Socials
export const socialLinks: SocialLink[] = [
  {
    name: "Linkedin",
    url: 'https://www.linkedin.com/in/stevehvaughn/'
  },
  {
    name: "Medium",
    url: "https://medium.com/@stevehvaughn"
  },
  {
    name: "Github",
    url: "https://github.com/stevehvaughn",
  },
  {
    name: "Youtube",
    url: "https://www.youtube.com/@stevehvaughn"
  },
  {
    name: "Soundcloud",
    url: "https://soundcloud.com/stevehvaughn"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/stevehvaughn/"
  },
  {
    name: "Facebook",
    url: 'https://www.facebook.com/stevehvaughn/'
  }
]
