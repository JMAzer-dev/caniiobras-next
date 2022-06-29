import Link from "next/link";

const Empresa = () => {
  return (
    <div id="empresa" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full items-center">
      <div className="pb-16 tracking-widest">
            <h1>Empresa</h1>
          </div>
      <div className="empresa grid md:grid-cols-2 grid-cols-1">
        <div className="text-xl w-full">
          <h1 className="title text-gray-800 pb-4 text-start">Canii - Projeto e Construção</h1>
          <p className="text-gray-600 leading-8 text-justify">
            Atuamos com novos conceitos e técnicas inovadoras e exclusivas.
            Fornecemos Projetos Arquitetônicos e Complementares , Projetos de
            Design de Interiores e também cuidamos das obras. (Construção Civil,
            Reformas, etc.) Oferecendo desde orientação técnica até a
            Administração total da obra, com Profissionais experientes e
            capacitados para proporcionar soluções de alta qualidade e adequadas
            a cada orçamento. Temos orgulho de fornecer uma gama completa de
            serviços pós-venda com valor agregado e temos o compromisso de
            ajudar você pelo menor custo possível.
          </p>
        </div>
        <div className="p-8">
        <img
          className="p-2 hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-800 drop-shadow-md hidden sm:block"
            src="/../assets/empresaimg.png"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Empresa;