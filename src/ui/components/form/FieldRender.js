import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Checkbox from '@material-ui/core/Checkbox';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

export { FieldRenderStyle } from './FieldRender.style';

const putPwdEye = (cl, showpwd) => (
  <InputAdornment position="end" className={cl}>
    <IconButton
      aria-label="Toggle password visibility"
      onClick={() => showpwd.passClicked(!showpwd.val)}
    >
      { showpwd.val ? <VisibilityOff /> : <Visibility /> }
    </IconButton>
  </InputAdornment>
);

const checkPassType = (type, showpass) => {
  if (type === 'password') {
    return showpass.val ? 'text' : 'password';
  }
  return type;
};

export const renderTextField = ({
  input,
  type,
  label,
  classes,
  meta: { touched, error },
  showPassword,
  ...custom
}) => (
  <FormControl className={classes.tfield} error={touched && error}>
    <InputLabel shrink htmlFor={input.name} className={classes.inplabel}>
      {label}
    </InputLabel>
    <InputBase
      {...input}
      id={input.name}
      type={checkPassType(type, showPassword)}
      classes={{
        root: classes.inproot,
        input: classes.inpelement,
      }}
      endAdornment={(input.name === 'password') ? putPwdEye(classes.adorn, showPassword) : false}
      {...custom}
    />
  </FormControl>
);

export const renderCheckbox = ({
  input,
  label,
  classes,
  ...custom
}) => (
  <FormControlLabel
    control={
      <Checkbox
        checked={input.checked}
        value={input.value}
        {...input}
        {...custom}
      />
    }
    label={label}
    classes={{
      root: classes.formControlLabel,
    }}
  />
);
