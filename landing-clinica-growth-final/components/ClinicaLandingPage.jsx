import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, BarChart4, TrendingUp } from "lucide-react";

export default function ClinicaLandingPage() {
  const [formData, setFormData] = useState({ nome: "", email: "", telefone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    alert("Cadastro enviado com sucesso!");
    setFormData({ nome: "", email: "", telefone: "" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      <div className="max-w-5xl mx-auto grid gap-10">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-4">Trilha de Desenvolvimento para Clínicas Médicas</h1>
          <p className="text-lg text-gray-600">Aumente sua rentabilidade, fortaleça sua marca e dobre o faturamento em até 6 meses.</p>
        </header>

        <section className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <CheckCircle className="w-8 h-8 text-green-600 mb-2" />
              <h2 className="text-xl font-semibold mb-1">Diagnóstico Estratégico</h2>
              <p className="text-gray-600">Identifique gargalos, oportunidades e trace um plano prático baseado em dados reais.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <BarChart4 className="w-8 h-8 text-blue-600 mb-2" />
              <h2 className="text-xl font-semibold mb-1">Rentabilidade Inteligente</h2>
              <p className="text-gray-600">Aumente seu ticket médio com serviços premium, gestão otimizada e estratégias de venda.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <TrendingUp className="w-8 h-8 text-orange-600 mb-2" />
              <h2 className="text-xl font-semibold mb-1">Posicionamento de Marca</h2>
              <p className="text-gray-600">Fortaleça sua presença online, gere autoridade e transforme sua marca em referência.</p>
            </CardContent>
          </Card>
        </section>

        <section className="text-center">
          <h3 className="text-2xl font-semibold mb-4">O que você vai alcançar:</h3>
          <ul className="text-gray-700 space-y-2">
            <li>✔ Faturamento dobrado em até 6 meses</li>
            <li>✔ Captação previsível de novos pacientes</li>
            <li>✔ Autoridade e reconhecimento no mercado</li>
            <li>✔ Processos otimizados e maior margem de lucro</li>
          </ul>
        </section>

        <section className="bg-gray-100 p-6 rounded-xl shadow-md">
          <h4 className="text-xl font-semibold text-center mb-4">Cadastre-se para receber o plano completo</h4>
          <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-3">
            <input type="text" name="nome" placeholder="Seu nome" value={formData.nome} onChange={handleChange} required className="p-3 rounded border border-gray-300" />
            <input type="email" name="email" placeholder="Seu e-mail" value={formData.email} onChange={handleChange} required className="p-3 rounded border border-gray-300" />
            <input type="tel" name="telefone" placeholder="Seu telefone" value={formData.telefone} onChange={handleChange} required className="p-3 rounded border border-gray-300" />
            <Button type="submit" className="md:col-span-3 text-lg px-8 py-4">Quero Receber o Plano</Button>
          </form>
        </section>

        <footer className="text-center mt-10 space-y-4">
          <h4 className="text-xl font-semibold">Pronto para transformar sua clínica?</h4>
          <Button className="text-lg px-8 py-4">Comece Agora</Button>
          <p>
            Ou fale diretamente pelo WhatsApp:
            <a href="https://wa.me/556992905660" target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold ml-2">Clique aqui</a>
          </p>
        </footer>
      </div>
    </div>
  );
}