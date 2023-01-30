// get every other saturday in a month
function getAllSaturdays(year) {
  const date = new Date(year, 0, 1);
  const yearlySaturdays = {};
  // find first saturday of the year
  while(date.getDay() !== 6) {
    date.setDate(date.getDate() + 1);
  }

  while (date.getFullYear() === year) {
    const month = date.getMonth();
    if (!yearlySaturdays[month]) {
      yearlySaturdays[month] = [];
    }
    if (date.getDay() === 6) {
      yearlySaturdays[month].push(new Date(date).getDate());
      date.setDate(date.getDate() + 14);
    }
  }
  return yearlySaturdays;
}

const MONTHS = [
  "JAN", "FEV", "MAR", "ABR", "MAI", "JUN",
  "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"
];

export function StairsSchedule({ year = 2023, numberOfApartments = 6, firstApartment = 1 }) {
  const yearlySaturdays = getAllSaturdays(year);
  console.log(yearlySaturdays)
  return (
    <div>
      <p className="text-left text-2xl">PREZADOS MORADORES, <br /><br /></p>
      <p className="text-left text-2xl">CONFORME COMBINADO EM REUNIÃO DO CONDOMÍNIO, A LIMPEZA DAS ESCADAS (CORRIMÃO, JANELA, EXTINTOR, TEIAS DE ARANHA) SERÁ REALIZADA A CADA 15 DIAS, EM TODOS OS ANDARES DO PRÉDIO, PELO APTO CORRESPONDENTE NA ESCALA.</p>
      <h2 className="text-center text-2xl font-bold mt-5">ESCALAS PARA LIMPEZA DAS ESCADAS - {year}</h2>
      <div className="grid grid-cols-2">
        {Object.keys(yearlySaturdays).map((month, index) => {
          return (
            <div key={month} className={`grid grid-cols-4 ${yearlySaturdays[month].length === 3 ? 'grid-rows-3' : 'grid-rows-2'} border border-black`}>
              <div className={`${yearlySaturdays.length === 4 ? 'row-span-4' : 'row-span-5'} place-content-around grid`}>
                <span className="items-center">
                  {MONTHS[index]}
                </span>
              </div>
              {yearlySaturdays[month].map((saturday) => {
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