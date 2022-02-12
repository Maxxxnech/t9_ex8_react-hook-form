import logo from "./logo.svg";
import "./App.css";
import content from "./static";
import InputAndLabel from "./components/InputAndLabel";
// Хук для состояния формы
import { useForm } from "react-hook-form";
// Валидатор
import { yupResolver } from "@hookform/resolvers/yup";
// Схема валидации
import * as yup from "yup";

//** схема для валидации**
const schema = yup
  .object()
  .shape({
    username: yup.string().required("Пожалуйста, введите имя пользователя"),
    password: yup.string().required("Пожалуйста, введите пароль").min(5, "Пароль должен быть длинее 5 символов"),
    email: yup.string().required("Пожалуйста, введите адрес электронной почты").email('Пожалуйста, введите корректный адрес'),
  })
  .required();

const onSubmit = (data) => console.log(data);

function App() {
  const { register, handleSubmit, formState: {errors} } = useForm({
    // **Валидатор и схема валидации**
    resolver: yupResolver(schema),
  });
  
  return (
    <div className="App">
      <h1>t9, задание 8: Валидация react-hook-form</h1>
      <p>
        <strong>react-hook-form</strong> (состояние данных формы),{" "}
        <strong>@hookform/resolvers</strong> (validation resolver / валидатор),{" "}
        <strong>Yup</strong> (schema builder / схема валидации)
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {content.inputs.map((el) => (
          <InputAndLabel
            key={el.name}
            name={el.name}
            label={el.label}
            type={el.type}
            register={register}
            error={errors[el.name]}
          />
        ))}
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      <div></div>
    </div>
  );
}

export default App;
