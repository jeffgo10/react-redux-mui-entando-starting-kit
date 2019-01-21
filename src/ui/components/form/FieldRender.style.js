const style = (theme) => {
  const spacingUnit = theme.spacing.unit;
  return {
    tfield: {
      marginTop: 10,
      display: 'block',
    },
    inproot: {
      'label + &': {
        marginTop: spacingUnit * 3,
        width: '100%',
      },
    },
    inpelement: {
      width: '100%',
      borderRadius: 4,
      backgroundColor: theme.palette.common.white,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 12px',
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
    inplabel: {
      fontSize: 18,
      color: '#000',
    },
    chkroot: {
      backgroundColor: '#000',
    },
    formControlLabel: {
      marginTop: spacingUnit * 3,
    },
    adorn: {
      position: 'absolute',
      right: 0,
    },
  };
};

export const FieldRenderStyle = style; // eslint-disable-line import/prefer-default-export
