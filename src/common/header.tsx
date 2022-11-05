import { getThemeClassName, gradientShift, styled } from "../../stitches.config";
import { useThemeContext } from "../context/theme-context";
import { MagicWandIcon, SunIcon, MoonIcon, ShadowInnerIcon } from '@radix-ui/react-icons';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import Link from "next/link";

const HeaderContainer = styled('header', {
  height: '72px',
  width: '100%',
  // backgroundColor: 'hsla(0, 0%, 0%, 10%);',
  // backdropFilter: 'saturate(180%) blur(20px)',
  backdropFilter: 'blur(25px)',
  // boxShadow: '0px -60px 80px 20px rgb(255 255 255 / 75%)',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20px',
  position: 'fixed',
  top: 0,
  zIndex: 1,
  transition: '$themeChange',

  '& a': {
    color: 'whitesmoke',
    textShadow: '0px 0px 4px black',
    textDecoration: 'none',
    fontWeight: '500',
    display: 'inline-block',
    position: 'relative',
    '&:hover::after': {
      height: '2px',
      width: '105%',
      bottom: '-1px',
      background: 'tomato',
    },
    '&::after': {
      content: '',
      position: 'absolute',
      background: 'whitesmoke',
      bottom: '-3px',
      left: '50%',
      transform: 'translateX(-50%)',
      transition: 'all 0.3s ease',
      width: '99%',
      height: '3px',
    }
  }
})


const DropdownTrigger = styled(DropdownMenu.Trigger, {
  all: 'unset',
  position: 'relative',
  cursor: 'pointer',
  borderRadius: '4px',
  padding: '10px',
  background: '$themeButtonBackground',



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
      <DropdownTrigger aria-label="theme-selector">
        <MagicWandIcon height={20} width={20} />
      </DropdownTrigger>
      <DropdownMenu.Portal>
        <DropdownContent className={themeClassName} loop={true}>
          <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
            <ThemeOption value="base">
              <SunIcon height={15} width={15} /> Notion-esque
            </ThemeOption>
            <ThemeOption value="psl">
              <ShadowInnerIcon height={15} width={15} /> Pumpkin Spice
            </ThemeOption>
            <ThemeOption value="ageOfStars">
              <MoonIcon height={15} width={15} /> Age of Stars
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
      <Link href="/">Stuff I Wrote</Link>
      <nav>
        {/* <ThemeSelector /> */}
      </nav>
    </HeaderContainer>
  )
}