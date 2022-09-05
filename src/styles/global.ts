import { globalCss } from '../../stitches.config';

function getRandomEmoji() {
  const possibleEmojis = ['👋🏻', '🫠', '🦜', '🎉', '💎', '📔', '🍉'];

  // return 'Shane'
  return possibleEmojis[Math.floor(Math.random() * possibleEmojis.length)];

}

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
  },
  "main > p:first-of-type:before": {
    content: getRandomEmoji(),
    float: 'left',
    fontSize: "6rem",
    lineHeight: 1.2,
    fontWeight: "bold",
    marginRight: "50px",
    fontFamily: "serif",
    textShadow: "$colors$emojiDropShadow 0.04em 0.04em"
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
    fontSize: "1rem",
    paddingBottom: "1.5rem",
  },
  "p > mark": {
    fontSize: "1.3rem",
    backgroundColor: "transparent"
  },
  "h1": {
    overflowWrap: "break-word",
    fontSize: "3.25rem",
    margin: "10px 0",
  },
  "h2": {
    overflowWrap: "break-word",
    fontSize: "3.25rem",
  },
  "h3": {
    overflowWrap: "break-word",
    fontSize: "2.5rem",
  },
  "h4": {
    overflowWrap: "break-word",
    fontSize: "1.75rem",
  },
  "h5": {
    overflowWrap: "break-word",
    fontSize: "1rem",
  },
  "h6": {
    overflowWrap: "break-word",
    fontSize: "1rem",
  },
  "#root": {
    isolation: "isolate",
  },
  "#__next": {
    height: "100%",
    isolation: "isolate",
  },
});