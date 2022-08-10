import { SubmitHandler, useForm } from "react-hook-form";
import { I_Validation } from "../../models/formValidator";
import { schema } from "../../utils/schemes/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import InputMask from "react-input-mask";
import "./styles.sass";

export const Form = () => {



  const { register, handleSubmit, formState:{ errors, isValid } } = useForm<I_Validation>({
    resolver: yupResolver(schema),
    mode: "onBlur"
  });
  const onSubmit: SubmitHandler<I_Validation> = (data) => console.log(data);

  return (
    <>
      <form className="container" onSubmit={handleSubmit(onSubmit)}>
        <div>Enter your full name</div>
        <input className="input-field" {...register("fullName")} placeholder="name and second name" />
        <span className="error-message">{errors.fullName?.message}</span>
        <div>Enter your phone number</div>
        <InputMask
          className="input-field" 
          alwaysShowMask={true}
          mask="+7\(999)999-99-99"
          {...register("phoneNumber")}
        />
        <span className="error-message"> {errors.phoneNumber?.message}</span>
        <div>Enter your Email</div>
        <input className="input-field" {...register("Email")} placeholder="E-mail" />
        <span className="error-message">{errors.Email?.message}</span>
        <div>Enter your birth date</div>
        <input
          className="input-field"
          type="date"
          {...register("birthDate", { required: "Date is required" })}
        />
        <span className="error-message">{errors.birthDate?.message}</span>
        <div>Enter your message</div>
        <textarea className="input-message" {...register("message")} placeholder="Message" />
        <span className="error-message">{errors.message?.message}</span>

        <input className="submit-button" type="submit" placeholder="Submit" disabled={!isValid}/>

      </form>
    </>
  );
};
