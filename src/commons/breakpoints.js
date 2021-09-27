const size = {
  mobile: '414px',
  tablet: '768px',
  desktop: '1200px',
}

const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  desktop: `(min-width: ${size.desktop})`,
}

const breakpoints = { size, device }

export default breakpoints
