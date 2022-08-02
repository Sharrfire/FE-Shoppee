import { yupResolver } from '@hookform/resolvers/yup';
import { Button, makeStyles, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '~/components/form-control/InputField';

EditForm.propTypes = {
  product: PropTypes.object,
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
function EditForm({ product = {} }) {
  const classes = useStyles();
  const schema = yup.object().shape({
    productname: yup.string().required('please enter product name'),
    price: yup.number().required('please enter price'),
    productimg: yup.string().required('please enter product image'),
    productsubimg: yup.array().required('please enter product sub image'),

    color: yup.string().required('please enter product color'),
  });

  const form = useForm({
    defaultValues: {
      productname: product.name,
      price: product.price.toString(),
      productimg: product.images[0].path,
      color: [' Xanh', ' Đỏ'],
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitRegister = async (values) => {
    // if (onSubmitEdit) {
    //   await onSubmitEdit(values);
    // }
    console.log('values', values);
  };
  return (
    <div className={classes.root}>
      <Typography className={classes.title} component='h3' variant='h5'>
        Edit Product
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmitRegister)}>
        <InputField form={form} label='Name' name='productname' />
        <InputField form={form} label='Price' name='price' />
        <InputField form={form} label='Image' name='productimg' />
        <InputField form={form} label='Color' name='color' />
        <Button type='submit' className={classes.submit} variant='contained' color='primary' fullWidth>
          Edit{' '}
        </Button>
      </form>
    </div>
  );
}

export default EditForm;
