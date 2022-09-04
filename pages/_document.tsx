import React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../stitches.config';
import { globalStyles } from '../src/styles/global';

export default class Document extends NextDocument {
  render() {
    const allTheCSSText = getCssText() + globalStyles()
    return (
      <Html lang="en">
        <Head>
          <style id="stitches" dangerouslySetInnerHTML={{ __html: allTheCSSText }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}