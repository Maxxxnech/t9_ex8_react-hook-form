import React from "react";

export default function InputAndLabel({name, label, type, register, error}){
    return (
        <div>
          <p><label htmlFor={name}>{label}</label></p>
          <p><input name={name} type={type} className="input" {...register(name)}/></p>
          <p className="message">{error?.message}</p>
        </div>
    )
}