import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { styled, keyframes } from '../../stitches.config';

const slideDown = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideUp = keyframes({
  '0%': { opacity: 0, transform: 'translateY(10px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const TooltipContent = styled(TooltipPrimitive.Content, {
  animationDuration: '0.6s',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  '&[data-side="top"]': { animationName: slideUp },
  '&[data-side="bottom"]': { animationName: slideDown },
});

const ContentContainer = styled('div', {
  maxWidth: '300px',
  fontSize: '0.9rem',
  background: '#f8f8f8',
  border: '1px solid #000',
  padding: '8px 14px',
  borderRadius: '8px',
})


/**
 * @description A utility component for providing a tooltip to a child element on hover.
 * 
 * @param props.children - React Node t hat will act as the trigger for the tooltip.
 * @param props.content - String that will be used to populate the tooltip.
 * @returns The child element wrapped as a trigger for a tooltip on hover
 */
export default function TooltipOnHover({
  children,
  content,
  // ...props
}: {
  children: React.ReactNode,
  content: string,
}) {

  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </ TooltipPrimitive.Trigger>
        <TooltipContent>
          <ContentContainer>
            <span>{content}</span>
          </ContentContainer>
          <TooltipPrimitive.Arrow width={11} height={10} />
        </TooltipContent>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  )
}