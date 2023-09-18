const accordionData = [
  {
    question: "Aký je priemerný časový rámec pre kompletnú rekonštrukciu bytu/domu?",
    answer:
      "Priemerný časový rámec pre kompletnú rekonštrukciu závisí od rozsahu a zložitosti projektu. Väčšina bytových rekonštrukcií sa pohybuje v rozmedzí 6-12 týždňov, zatiaľ čo rekonštrukcie domov môžu trvať od 3 do 6 mesiacov. Odporúčame konzultáciu s naším tímom pre presný časový odhad vášho projektu.",
  },
  {
    question: "Ako prebieha spolupráca s vašou firmou od začiatku až po dokončenie rekonštrukcie?",
    answer:
      "Na začiatku projektu sa stretneme s klientom, aby sme pochopili jeho potreby a očakávania. Následne pripravíme návrh a rozpočet. Po schválení projektu a podpísaní zmluvy začneme s prácami. Počas celého procesu budeme udržiavať pravidelný kontakt s klientom a informovať ho o postupe prác.",
  },
  {
    question: "Aké sú základné kroky v procese rekonštrukcie a ako môžem sledovať postup prác?",
    answer:
      "Základné kroky zahŕňajú plánovanie, návrh, rozpočtovanie, demoláciu, stavebné a dokončovacie práce. Poskytujeme klientom prístup k online platforme, kde môžu sledovať aktuálny postup prác, fotografiám z pracoviska a aktualizáciám týkajúcim sa projektu.",
  },
  {
    question: "Ako sa stanovuje konečná cena rekonštrukcie? Sú možné nečakané dodatočné náklady počas realizácie projektu?",
    answer:
      "Konečná cena je stanovená na základe rozpočtu, ktorý je schválený pred začiatkom prác. Snažíme sa odhadnúť všetky možné náklady vopred. Avšak v prípade neočakávaných okolností alebo zmeny v požiadavkách zo strany klienta môžu vzniknúť dodatočné náklady. V takom prípade vždy konzultujeme klienta a hľadáme najlepšie riešenie.",
  },
  {
    question: "Aký typ záruky poskytujete na vykonané práce a použité materiály?",
    answer:
      "Poskytujeme 2-ročnú záruku na všetky vykonané práce a podľa typu materiálu môže byť záruka na materiály dlhšia, čo závisí od výrobcu. V prípade akýchkoľvek problémov sme pripravení rýchlo a efektívne reagovať.",
  },
];

const Faq = () => {
  return (
    <div className="accordion accordion-style-seven md-mt-60" id="accordionOne">
      {accordionData.map((item, index) => (
        <div className="accordion-item" key={index}>
          <div className="accordion-header" id={"heading" + index}>
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#collapse" + index}
              aria-expanded="false"
              aria-controls={"collapse" + index}
            >
              {item.question}
            </button>
          </div>
          <div
            id={"collapse" + index}
            className={`accordion-collapse collapse${
              index === 1 ? " show" : ""
            }`}
            aria-labelledby={"heading" + index}
            data-bs-parent="#accordionOne"
          >
            <div className="accordion-body">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Faq;
