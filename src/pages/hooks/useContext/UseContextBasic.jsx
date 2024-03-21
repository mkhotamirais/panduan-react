import { useState, useContext, createContext } from "react";

const ThemeContext1 = createContext(null);
export const UseContext1 = () => {
  return (
    <ThemeContext1.Provider value="dark">
      <UseContext1Child />
    </ThemeContext1.Provider>
  );
};
const UseContext1Child = () => {
  const theme = useContext(ThemeContext1);
  return <div className="border rounded p-2 mb-1">useContext1 theme {theme}</div>;
};

const ThemeContext2 = createContext(null);
export const UseContext2 = () => {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeContext2.Provider value={{ theme, setTheme }}>
      <UseContext2Child />
    </ThemeContext2.Provider>
  );
};
const UseContext2Child = () => {
  const { theme, setTheme } = useContext(ThemeContext2);
  const handleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("light");
  };
  return (
    <div className="border rounded p-2 mb-1">
      useContext2 theme {theme}{" "}
      <button onClick={handleTheme} className="underline">
        toggle theme
      </button>
    </div>
  );
};

const ThemeContext31 = createContext(null);
const ThemeContext32 = createContext(null);
export const UseContext3 = () => {
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState("ahmad");

  const handleTheme = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("light");
  };

  return (
    <ThemeContext31.Provider value={theme}>
      <ThemeContext32.Provider value={{ user, setUser }}>
        <section className={`border rounded p-2 mb-1 ${theme === "dark" && "bg-black text-white"}`}>
          <div>useContext3 theme</div>
          <button onClick={handleTheme} className="underline">
            change theme
          </button>
          <UseContext3Child1 />
          <UseContext3Child2 />
        </section>
      </ThemeContext32.Provider>
    </ThemeContext31.Provider>
  );
};
const UseContext3Child1 = () => {
  const theme = useContext(ThemeContext31);
  return <div>{theme}</div>;
};
const UseContext3Child2 = () => {
  const { user, setUser } = useContext(ThemeContext32);
  const [newUser, setNewUser] = useState("");
  const handleUser = () => {
    setUser(newUser);
    setNewUser("");
  };
  return (
    <div>
      <input type="text" value={newUser} onChange={(e) => setNewUser(e.target.value)} className="border rounded" />
      <button className="underline" onClick={handleUser}>
        change user
      </button>
      <div>{user}</div>
    </div>
  );
};
