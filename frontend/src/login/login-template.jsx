import { useState } from "react";
import { ButtonLogin } from "./components/button-login";
import { InputText } from "./components/input-text";

export function Login() {
  const [error] = useState();
  return (
    <div className="min-h-screen flex items-center justify-center bg-pink-50 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          Iniciar Sesión
        </h2>

        {error && <div className="text-red-500 mb-4 text-center">{error}</div>}

        <div className="space-y-5">
          <InputText title={"Usuario"} />

          <div>
            <label className="block text-sm text-gray-600">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-lg bg-pink-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
              required
            />
          </div>
          <ButtonLogin />
        </div>
      </div>
    </div>
  );
}
