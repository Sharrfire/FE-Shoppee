import LoginForm from './LoginForm';

login.propTypes = {};

function login(props) {
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div>
      <LoginForm onSubmit={handleSubmit} />
    </div>
  );
}

export default login;
