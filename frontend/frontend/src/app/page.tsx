"use client";

import { useForm } from "react-hook-form";
import { IRegisterForm } from "./types";
import { userService } from "./services/userService";

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IRegisterForm>();

  const onSubmit = async (data: IRegisterForm) => {
    console.log(data);
    try {
      const result = await userService.register(data);
      console.log("Usuario registrado:", result);
    } catch (error) {
      console.log("Error al registrar el usuario:", error);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Registro
        </h1>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          {/* Nombre */}
          <div className="flex flex-col gap-2">
            <input
              {...register("firstName", {
                required: "El nombre es obligatorio",
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres",
                },
              })}
              type="text"
              placeholder="Nombre"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.firstName && (
              <span className="text-red-500 text-sm">
                {errors.firstName.message}
              </span>
            )}
          </div>

          {/* Apellido */}
          <div className="flex flex-col gap-2">
            <input
              {...register("lastName", {
                required: "El apellido es obligatorio",
                minLength: {
                  value: 3,
                  message: "El apellido debe tener al menos 3 caracteres",
                },
              })}
              type="text"
              placeholder="Apellido"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.lastName && (
              <span className="text-red-500 text-sm">
                {errors.lastName.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <input
              {...register("email", {
                required: "El correo electrónico es obligatorio",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "El correo electrónico no es válido",
                },
              })}
              type="email"
              placeholder="Email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Contraseña */}
          <div className="flex flex-col gap-2">
            <input
              {...register("password", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 6,
                  message: "La contraseña debe tener al menos 6 caracteres",
                },
              })}
              type="password"
              placeholder="Contraseña"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          {/* Repetir contraseña */}
          <div className="flex flex-col gap-2">
            <input
              {...register("confirmPassword", {
                required: "Debes confirmar tu contraseña",
                validate: (value) => {
                  if (value !== watch("password")) {
                    return "Las contraseñas no coinciden";
                  }
                },
              })}
              type="password"
              placeholder="Repetir contraseña"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          {/* Boton */}
          <button
            type="submit"
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-3 rounded-lg transition-colors"
          >
            Registrarse
          </button>
        </form>

        {/* Texto de "Ya tienes cuenta" */}
        <p className="mt-6 text-center text-gray-600 text-sm">
          ¿Ya tienes cuenta?{" "}
          <span className="text-indigo-500 hover:underline cursor-pointer">
            Inicia sesión
          </span>
        </p>
      </div>
    </main>
  );
}
