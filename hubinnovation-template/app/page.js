"use client";
import { useRouter } from "next/navigation";
import { VerificaLogin } from "./controller/loginController";
import { useState } from "react";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const rota = useRouter();

  async function handleSubmit(event){
    event.preventDefault();
    const response = await VerificaLogin(usuario, senha);

    if(response){
      rota.push("/home");
    }
  }

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <div className="w-80 bg-slate-600 p-6 rounded-lg shadow-md">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="block text-white">Usuário</label>
                <input
                  type="text"
                  placeholder="Digite o usuário"
                  className="w-full px-3 py-2"
                  onChange={(e) => setUsuario(e.target.value)}
                />
              </div>

              <div className="form-control">
                <label className="block text-white">Senha</label>
                <input
                  type="password"
                  placeholder="Digite a senha"
                  className="w-full px-3 py-2"
                  onChange={(e) => setSenha(e.target.value)}
                />
              </div>

              <button className="w-full bg-blue-500 text-white rounded">Entrar</button>
            </form>
        </div>
      </div>
    </>
  );
}
