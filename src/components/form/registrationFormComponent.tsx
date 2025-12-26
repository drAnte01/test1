//components/loginFormComponents.tsx
import styles from "../../styles/formStyle.module.css";
import { Link } from "react-router-dom";
import { Registration } from "../../Service/FormService";
import { useState } from "react";

const RegistrationComponent = () => {
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const [errors, setErrors] = useState<{
    name?: string;
    lastName?: string;
    username?: string;
    password?: string;
  }>({});

  const nameRegex = /^[A-Za-zČĆŽŠĐčćžšđ]+([ \-][A-Za-zČĆŽŠĐčćžšđ]+)*$/;
  const usernameRegex = /^(?=.*\d)[A-Za-z0-9]+$/;
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  const validation = () => {
    const newErrors: any = {};

    if (!nameRegex.test(name)) {
      newErrors.name = "Ime smije sadržavati samo slova, razmak ili crticu";
    }
    if (!nameRegex.test(lastName)) {
      newErrors.lastName =
        "Prezime smije sadržavati samo slova, razmak ili crticu";
    }
    if (!usernameRegex.test(username)) {
      newErrors.username = "Username mora sadrzavati barem jedan broj";
    }

    if (password != confPassword) {
      newErrors.password = "Password se ne poklapa sa prethodnim";
    }
    if (!passwordRegex.test(confPassword)) {
      newErrors.password =
        "lozinka mora imati barem jedno veliko slovo, broj, specijalni znak";
    }
    setErrors(newErrors);
    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    validation();
    if (Object.keys(errors).length > 0) return;

    try {
      const form = e.currentTarget;

      const FirstName = (
        form.elements.namedItem("FirstName") as HTMLInputElement
      ).value;
      const LastName = (form.elements.namedItem("LastName") as HTMLInputElement)
        .value;
      const Email = (form.elements.namedItem("Email") as HTMLInputElement)
        .value;
      const Username = (form.elements.namedItem("Username") as HTMLInputElement)
        .value;
      const Password = (form.elements.namedItem("Password") as HTMLInputElement)
        .value;

      const result = await Registration({
        Username,
        Password,
        FirstName,
        LastName,
        Email,
      });
        console.log(result)
    } catch (error) {
      console.error("Registration error:", error);
    }
        

  };
  return (
    <>
      <div className={styles.container}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="FirstName">First name</label>
          <input
            type="text"
            id="FirstName"
            name="FirstName"
            placeholder="Greg"
            required
            pattern="^[A-Za-zČĆŽŠĐčćžšđ]+([ \\-][A-Za-zČĆŽŠĐčćžšđ]+)*$"
            minLength={2}
            title="Ime smije sadržavati samo slova, razmak ili crticu"
            maxLength={20}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
          <label htmlFor="LastName">Last name</label>
          <input
            type="text"
            id="LastName"
            name="LastName"
            placeholder="user123"
            required
            pattern="^[A-Za-zČĆŽŠĐčćžšđ]+([ \\-][A-Za-zČĆŽŠĐčćžšđ]+)*$"
            minLength={2}
            title="Prezime smije sadržavati samo slova, razmak ili crticu"
            maxLength={40}
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
          />
          {errors.lastName && <p style={{ color: "red" }}>{errors.lastName}</p>}
          <label htmlFor="Email">Email</label>
          <input
            type="email"
            id="Email"
            name="Email"
            placeholder="greg12@gmail.com"
          />
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            id="Username"
            name="Username"
            placeholder="user123"
            required
            minLength={6}
            maxLength={15}
            value={username}
            onChange={(e) => setusername(e.target.value)}
          />
          {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="Password"
            id="Password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label htmlFor="ConfirmPassword">Confirm password</label>
          <input
            type="password"
            name="ConfirmPassword"
            id="ConfirmPassword"
            placeholder="********"
            value={confPassword}
            onChange={(e) => setConfPassword(e.target.value)}
          />
          {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
          <button type="submit" className={styles.loginButton}>
            Login
          </button>

          <span className={styles.Registration}>
            Already have account? <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </>
  );
};

export default RegistrationComponent;
