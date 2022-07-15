import { HTMLAttributes } from 'react';
import { styled } from '../../stitches.config'

const StyledFirstLetter = styled('span', {
  color: 'black',
  fontSize: '40px',
  fontWeight: '700'
});

interface FirstParagraphModel extends HTMLAttributes<HTMLElement> {
  text: string
}

export default function FirstParagraph({ text, ...props }: FirstParagraphModel) {

  const firstLetter = text.slice(0, 1);
  const theRestOfIt = text.slice(1);

  return (
    <p {...props}><StyledFirstLetter>{firstLetter}</StyledFirstLetter>{theRestOfIt}</p>
  )
}