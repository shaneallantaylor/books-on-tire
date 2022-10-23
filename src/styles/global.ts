import { globalCss, keyframes } from '../../stitches.config';

const gradient = keyframes({
  '0%': { backgroundPosition: '0 50%' },
  '50%': { backgroundPosition: '100% 50%' },
  'to': { backgroundPosition: '0 50%' },
});


export const globalStyles = globalCss({
  "*": {
    boxSizing: 'border-box',
    margin: 0,
  },
  "*::before": {
    boxSizing: 'border-box',
  },
  "*::after": {
    boxSizing: 'border-box',
  },
  "html": {
    height: "100%",
  },
  "body": {
    height: "100%",
    overscrollBehavior: 'none',
    // backgroundImage: 'linear-gradient(113deg, hsl(270deg 100% 7%) 24%,  hsl(235deg 46% 14%) 60%,  hsl(221deg 50% 18%) 74%,  hsl(212deg 51% 21%) 82%,  hsl(206deg 50% 25%) 88%,  hsl(202deg 46% 30%) 93%,  hsl(198deg 40% 34%) 96%,  hsl(194deg 34% 39%) 98%,  hsl(189deg 28% 45%) 100%,  hsl(184deg 22% 50%) 101%,  hsl(177deg 23% 57%) 101%,  hsl(168deg 25% 64%) 102%,  hsl(159deg 28% 72%) 102%,  hsl(146deg 33% 80%) 101%,  hsl(128deg 44% 88%) 101%,  hsl(104deg 100% 95%) 100%)',
    // backgroundImage: 'linear-gradient(115deg, hsl(270deg 100% 7%) 24%, hsl(241deg 72% 10%) 60%, hsl(222deg 100% 9%) 74%, hsl(217deg 100% 10%) 82%, hsl(213deg 100% 10%) 88%, hsl(210deg 100% 11%) 93%, hsl(206deg 100% 11%) 96%, hsl(201deg 100% 10%) 98%, hsl(196deg 100% 10%) 100%, hsl(188deg 100% 9%) 101%, hsl(178deg 100% 8%) 101%, hsl(167deg 100% 8%) 102%, hsl(156deg 100% 9%) 102%, hsl(145deg 100% 9%) 101%, hsl(133deg 100% 9%) 101%, hsl(105deg 100% 10%) 100%)',
    backgroundAttachment: 'fixed',
    // backgroundImage: 'linear-gradient( 115deg, hsl(24deg 100% 3%) 24%, hsl(24deg 16% 10%) 60%, hsl(24deg 10% 15%) 74%, hsl(23deg 7% 20%) 82%, hsl(23deg 5% 26%) 88%, hsl(23deg 4% 32%) 93%, hsl(23deg 3% 38%) 96%, hsl(23deg 3% 44%) 98%, hsl(23deg 2% 51%) 100%, hsl(23deg 2% 57%) 101%, hsl(23deg 2% 64%) 101%, hsl(23deg 2% 71%) 102%, hsl(23deg 2% 78%) 102%, hsl(23deg 2% 85%) 101%, hsl(23deg 2% 92%) 101%, hsl(0deg 0% 100%) 100% )',
    // backgroundImage: 'linear-gradient( 115deg, hsl(24deg 100% 3%) 24%, hsl(28deg 38% 7%) 60%, hsl(26deg 27% 11%) 74%, hsl(27deg 26% 14%) 82%, hsl(27deg 25% 17%) 88%, hsl(28deg 25% 21%) 93%, hsl(29deg 25% 24%) 96%, hsl(30deg 25% 27%) 98%, hsl(30deg 25% 31%) 100%, hsl(31deg 25% 35%) 101%, hsl(32deg 24% 38%) 101%, hsl(33deg 24% 42%) 102%, hsl(33deg 24% 45%) 102%, hsl(34deg 24% 49%) 101%, hsl(35deg 27% 53%) 101%, hsl(36deg 31% 57%) 100% )',
    backgroundImage: 'linear-gradient( 115deg, hsl(24deg 100% 3%) 34%, hsl(28deg 60% 5%) 69%, hsl(29deg 43% 7%) 82%, hsl(29deg 34% 9%) 89%, hsl(28deg 31% 11%) 94%, hsl(28deg 30% 12%) 97%, hsl(29deg 30% 14%) 99%, hsl(30deg 30% 15%) 100%, hsl(31deg 30% 17%) 101%, hsl(32deg 30% 18%) 102%, hsl(32deg 30% 20%) 102%, hsl(33deg 30% 21%) 102%, hsl(34deg 30% 23%) 101%, hsl(35deg 30% 24%) 101%, hsl(36deg 30% 26%) 100%, hsl(37deg 29% 27%) 100% )',
    // backgroundSize: '400% 400%',
    // animation: `${gradient} 40s ease infinite`,
  },
  "a[target='_blank']": {
    color: "$linkExternal",
  },
  "a[target='_blank']::after": {
    content: " \\29C9"
    // content: " \\1f855"
  },
  "a[target='_blank']:visited": {
    color: "$linkExternalVisited",
  },
  "img": {
    display: "block",
    maxWidth: "100%",
  },
  "picture": {
    display: "block",
    maxWidth: "100%",
  },
  "video": {
    display: "block",
    maxWidth: "100%",
  },
  "canvas": {
    display: "block",
    maxWidth: "100%",
  },
  "svg": {
    display: "block",
    maxWidth: "100%",
  },
  "input": {
    font: "inherit",
  },
  "button": {
    font: "inherit",
  },
  "textarea": {
    font: "inherit",
  },
  "select": {
    font: "inherit",
  },
  "p": {
    overflowWrap: "break-word",
    fontSize: "1.5rem",
    paddingBottom: "1.5rem",
    fontWeight: '200',
  },
  "p > mark": {
    fontSize: "1.3rem",
    backgroundColor: "transparent"
  },
  "h1": {
    overflowWrap: "break-word",
    fontSize: "3.25rem",
    fontWeight: "400",
    margin: "10px 0",
  },
  "h2": {
    overflowWrap: "break-word",
    fontSize: "3.25rem",
    fontWeight: "400",
  },
  "h3": {
    overflowWrap: "break-word",
    fontSize: "2.5rem",
    fontWeight: "400",
  },
  "h4": {
    overflowWrap: "break-word",
    fontSize: "1.75rem",
    fontWeight: "400",
  },
  "h5": {
    overflowWrap: "break-word",
    fontSize: "1.525rem",
    fontWeight: "400",
  },
  "h6": {
    overflowWrap: "break-word",
    fontSize: "1.525rem",
    fontWeight: "400",
  },
  "#root": {
    isolation: "isolate",
  },
  "#__next": {
    height: "100%",
    isolation: "isolate",
  },
});