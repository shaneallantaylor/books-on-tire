import { getThemeClassName, gradientShift, styled } from "../../stitches.config";
import { useThemeContext } from "../context/theme-context";
import { MagicWandIcon, SunIcon, MoonIcon } from '@radix-ui/react-icons';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { redirect } from "next/dist/server/api-utils";

const HeaderContainer = styled('header', {
  height: '72px',
  width: '100%',
  backgroundColor: '$headerBackground',
  backdropFilter: 'saturate(180%) blur(20px)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
  position: 'fixed',
  top: 0,
  zIndex: 1,
  transition: '$themeChange',
})

const HeaderP = styled('p', {
  padding: 0,
})

const DropdownTrigger = styled(DropdownMenu.Trigger, {
  all: 'unset',
  position: 'relative',
  // display: 'inline-block',
  // width: '60px',
  // height: '34px',
  // background: 'red',
  // outline: '1px solid black',
  cursor: 'pointer',
  borderRadius: '4px',
  padding: '10px',
  background: '$primaryBackground',



  '&:before': {
    content: '',
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundSize: '400% 400%',
    zIndex: '-1',
    top: 0,
    left: 0,
    borderRadius: '4px',
    scale: '1.08',
    transition: '$themeChange',
    animation: `${gradientShift} 1s ease infinite`,
    background: 'linear-gradient(-45deg,#ada812,#3391bd,#cc57c8,#c3375e,#ff7157)',
    opacity: 0,
  },
  '&:hover': {
    '&:before': {
      opacity: 1,
      backgroundSize: '400% 400%',
    }
  },
  '&[data-state="open"]': {
    '&:before': {
      opacity: 1,
      backgroundSize: '400% 400%',
      animationPlayState: 'paused',
    }
  }
});

const DropdownContent = styled(DropdownMenu.Content, {
  backgroundColor: '$imageContainerBackground',
  borderRadius: '4px',
  border: '1px solid $imageContainerBorder',
  marginRight: '14px',


  '& ul': {
    listStyle: 'none',
    padding: '8px',

    '& li': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      fontSize: '0.8rem',
      fontWeight: 'bold',
      marginBottom: '6px',
      cursor: 'pointer',

      '&:last-of-type': {
        marginBottom: 0,
      }
    }
  }
});

const DropdownArrow = styled(DropdownMenu.Arrow, {
  fill: '$colors$imageContainerBorder',
})

const DropdownRoot = styled(DropdownMenu.Root, {});

const ThemeOption = styled(DropdownMenu.RadioItem, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: '0 8px',
  margin: '10px 0',
  cursor: 'pointer',
  color: '$primary',

  '&:focus-visible': {
    outline: 'none',
    backgroundColor: '$nudge'
  },

  '&[data-state="checked"]': {
    fontWeight: 'bold',
    // color: '$action'
  },

  '& svg': {
    marginRight: '8px',
  }
});




function ThemeSelector() {

  const { theme, setTheme } = useThemeContext();

  const themeClassName = getThemeClassName(theme);

  return (
    <DropdownRoot>
      <DropdownTrigger>
        <MagicWandIcon height={20} width={20} />
      </DropdownTrigger>
      <DropdownMenu.Portal>
        <DropdownContent className={themeClassName} loop={true}>
          <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
            <ThemeOption value="base">
              <SunIcon height={15} width={15} /> Light
            </ThemeOption>
            <ThemeOption value="dark">
              <MoonIcon height={15} width={15} /> Dark
            </ThemeOption>
          </DropdownMenu.RadioGroup>
          <DropdownMenu.Separator />
          <DropdownArrow />
        </DropdownContent>
      </DropdownMenu.Portal>
    </DropdownRoot>
  )
}

export default function Header() {

  return (
    <HeaderContainer>
      <HeaderP>Stuff I Wrote</HeaderP>
      <nav>
        <ThemeSelector />
      </nav>
    </HeaderContainer>
  )
}