import { FieldRenderStyle } from 'ui/components/form/FieldRender';

const style = (theme) => {
  const spacingUnit = theme.spacing.unit;
  return {
    ...FieldRenderStyle(theme),
    formcont: {
      margin: '0 auto',
    },
    loginButton: {
      margin: `${spacingUnit * 3}px auto 0`,
      display: 'block',
      backgroundColor: '#616161',
      color: '#fff',
      textTransform: 'none',
      padding: `${spacingUnit}px ${spacingUnit * 7}px`,
    },
    notif: {
      backgroundColor: 'beige',
      padding: 10,
      marginBottom: 20,
    },
  };
};

export default style;
