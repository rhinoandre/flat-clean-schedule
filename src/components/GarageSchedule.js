// functionn to get all saturdays in a month
function getAllSaturdays(year, month) {
  const date = new Date(year, month, 1);
  const saturdays = [];
  while (date.getMonth() === month) {
    if (date.getDay() === 6) {
      saturdays.push(new Date(date).getDate());
    }
    date.setDate(date.getDate() + 1);
  }
  return saturdays;
}

const MONTHS = [
  "JAN", "FEV", "MAR", "ABR", "MAI", "JUN",
  "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"
];

export function GarageSchedule({ year = 2023, numberOfApartments = 6, firstApartment = 1 }) {
  return (
    <div>
      <p className="text-left text-xl">PREZADOS MORADORES, <br /><br /></p>
      <p className="text-left text-xl">COMO ACUMULAM MUITOS PANFLETOS E LIXOS QUE O VENTO TRAZ PARA O PRÉDIO, EXISTE A NECESSIDADE DE ZELAR PELA LIMPEZA DAS GARAGENS E CALÇADAS, SENDO ASSIM, A LIMPEZA SERÁ REALIZADA SEMANALMENTE, PELO APTO CORRESPONDENTE NA ESCALA.</p><br />
      <p className="text-left text-xl">* QUANDO ORGANIZAR FESTAS NA GARAGEM O APTO RESPONSÁVEL PELA FESTA, POR FAVOR RETIRAR OS LIXOS RESTANTES.</p>
      <h2 className="text-center text-xl font-bold mt-5">ESCALAS PARA LIMPEZA DE TODAS AS GARAGENS {year}</h2>
      <div className="grid grid-cols-2">
        {MONTHS.map((month, index) => {
          const saturdays = getAllSaturdays(year, index);
          return (
            <div className={`grid grid-cols-4 ${saturdays.length === 4 ? 'grid-rows-4' : 'grid-rows-5'} border border-black`} key={month}>
              <div className={`${saturdays.length === 4 ? 'row-span-4' : 'row-span-5'} border border-black place-content-around grid`}>
                <span className="items-center">
                  {month}
                </span>
              </div>
              {saturdays.map((saturday) => {
                const currentApartment = firstApartment;
                firstApartment++;
                if (currentApartment === numberOfApartments) {
                  firstApartment = 1;
                }
                return (
                  <>
                    <span className="border border-black">{saturday}</span>
                    <span className="border border-black">APTO - {currentApartment}</span>
                    <span className="border border-black">&nbsp;</span>
                  </>
                )
              })}
            </div>
          )
        })}
      </div>
    </div>
  );
}