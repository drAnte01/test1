//components/loginFormComponents.tsx
import styles from "../../styles/formStyle.module.css";
import { Link } from "react-router-dom";
import { Login } from "../../Service/FormService";

const LoginComponent = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    try {
      const form = e.currentTarget;

      const Username = (form.elements.namedItem("Username") as HTMLInputElement)
        .value;
      const Password = (form.elements.namedItem("Password") as HTMLInputElement)
        .value;

      const result = await Login({ Username, Password });
      console.log(result.token);
    } catch (error) {
      console.error("Login error:", error);
    }
  };
  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            id="Username"
            name="Username"
            placeholder="user123"
          />

          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="Password"
            id="Password"
            placeholder="********"
          />

          <button type="submit" className={styles.loginButton}>
            Login
          </button>

          <span className={styles.Registration}>
            Don't have account? <Link to="/registration">Sign up</Link>
          </span>
          <span className={styles.PasswordReset}>
            <Link to="/password-reset">Forgot password</Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default LoginComponent;
