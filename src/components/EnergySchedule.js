const MONTHS = [
  "JAN", "MAR", "MAI", "JUL", "SET", "NOV"
];

export function EnergySchedule({ year = 2023, numberOfApartments = 6 }) {
  return (
    <div>
      <p className="text-left text-3xl">PREZADOS MORADORES,</p><br />
      <p className="text-left text-3xl">APÓS EFETUAR O PAGAMENTO DA CONTA DE ENERGIA NO MÊS CORRESPONDENTE AO SEU APARTAMENTO, FAVOR ANEXAR O COMPROVANTE E DEIXÁ-LOS ARQUIVADOS NA PASTA.</p><br />
      <p className="text-left text-3xl">AO MORADOR DO APARTAMENTO 6, PEDIMOS A GENTILEZA DE COLOCAR A CONTA DE LUZ QUE CHEGA EM SUA CAIXA DE CORREIO, NESTE LOCAL ANTES DO VENCIMENTO, PARA QUE POSSAMOS REALIZAR O PAGAMENTO SEM ATRASOS.</p>
      <br />
      <h2 className="text-center text-xl font-bold mt-10">ESCALA DE PAGAMENTOS CONTA DE ENERGIA DO CONDOMÍNIO - {year}</h2>
      <div className="grid place-content-center text-2xl">
        {MONTHS.map(month => {
          return (
            <div className="grid grid-cols-3 w-[500px]">
              <span className="border border-black">{month}</span>
              <span className="border border-black">APTO - {numberOfApartments--}</span>
              <span className="border border-black">&nbsp;</span>
            </div>
          )
        })}
      </div>
    </div >
  );
}