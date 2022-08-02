import { yupResolver } from '@hookform/resolvers/yup';
import { Button, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '~/components/form-control/InputField';

AddForm.propTypes = {
  onSubmitAdd: PropTypes.func,
};
const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1, 0, 1, 0),
  },
  avatar: {
    margin: '0 auto',
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    textAlign: 'center',
  },
  submit: {
    // margin: theme.spacing(2, 0,1, 0)
  },
}));
function AddForm({ onSubmitAdd = null }) {
  const classes = useStyles();
  const schema = yup.object().shape({
    productname: yup.string().required('please enter product name'),
    price: yup.number().required('please enter price'),
    productimg: yup.string().required('please enter product image'),
    productsubimg: yup.string().required('please enter product sub image'),
    color: yup.string().required('please enter product color'),
  });

  const form = useForm({
    defaultValues: {
      productname: '',
      price: '',
      productimg: '',
      productsubimg: '',
      color: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitRegister = async (values) => {
    // if (onSubmitAdd) {
    //   await onSubmitAdd(values);
    // }
    console.log('values', values);
  };
  return (
    <div className={classes.root}>
      <Typography className={classes.title} component='h3' variant='h5'>
        New Product
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmitRegister)}>
        <InputField form={form} label='Product Name' name='productname' />
        <InputField form={form} label='Price' name='price' />
        <InputField form={form} label='Product image' name='productimg' />
        <InputField form={form} label='Product sub image' name='productsubimg' />
        <InputField form={form} label='Color' name='color' />
        <Button type='submit' className={classes.submit} variant='contained' color='primary' fullWidth>
          Add product
        </Button>
      </form>
    </div>
  );
}

export default AddForm;
