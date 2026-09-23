// Obsah pobočky Next Reality Advance převedený z kancelarplzen.cz (stav k 23. 9. 2026),
// upravený podle filloutu klientky ze 17. 9. 2026, a Chocenic z veronikahalova.cz/chocenice-pozemky. Texty jsou převzaté, opravené jen
// zjevné překlepy. V produkci se vše zakládá v administraci CMS šablony NEXT.

export const OFFICE = {
  brand: 'Next Reality Advance',
  company: 'Kancelář Plzeň s.r.o.',
  seat: 'Mikulášská 422/7, 326 00 Plzeň', // sídlo dle filloutu (≠ adresa kanceláře)
  street: 'nám. T. G. Masaryka 546/16',
  city: '301 00 Plzeň',
  phone: '+420 608 20 20 28',
  email: 'advance@nextreality.cz',
  hours: 'Pondělí – pátek 9:00–17:00',
  ico: '09871861',
  registry: 'Vedená u Krajského soudu v Plzni, sp. zn. C 40261/KSPL',
  facebook: 'https://www.facebook.com/NEXT-reality-Advance-109947631247471',
  instagram: 'https://www.instagram.com/kancelarplzen/',
  listings: 'https://www.nextreality.cz/pobocka/1258/next-reality-advance',
  whistleblowing: 'https://kancelarplzen.cz/wp-content/uploads/2023/11/SCAN_20231108_165840802.pdf',
  gdpr: 'https://www.nextreality.cz/gdpr',
};

// fotky: vymaskované (Magnific) na zelené #85B929 z webu; pořadí jako na starém webu; asistentky vynechané (fillout: další kontakty na zaměstnance – Ne)
export const TEAM = [
  { slug: 'radim-lisenko', name: 'Mgr. Radim Lisenko, LL.M., MBA', role: 'Ředitel kanceláře', email: 'radim.lisenko@nextreality.cz', phone: '+420 608 20 20 28', photo: 'radim-lisenko-green.jpg' },
  { slug: 'sona-bruckerova', name: 'Soňa Bruckerová', role: 'Realitní makléř', email: 'sona.bruckerova@nextreality.cz', phone: '+420 720 319 631', photo: 'sona-bruckerova-green.jpg', broker: true },
  { slug: 'veronika-halova', name: 'Veronika Hálová', role: 'Realitní makléř', email: 'veronika.halova@nextreality.cz', phone: '+420 704 737 399', photo: 'veronika-halova-green.jpg', broker: true },
  { slug: 'petra-borovanska', name: 'Ing. Petra Borovanská', role: 'Realitní makléř', email: 'petra.borovanska@nextreality.cz', phone: '+420 603 203 051', photo: 'petra-borovanska-green.jpg', broker: true },
  { slug: 'antonin-srb', name: 'Antonín Srb', role: 'Realitní makléř', email: 'antonin.srb@nextreality.cz', phone: '+420 775 921 234', photo: 'antonin-srb-green.jpg', broker: true },
  { slug: 'jindrich-krisl', name: 'Jindřich Krisl', role: 'Realitní makléř', email: 'jindrich.krisl@nextreality.cz', phone: '+420 777 559 771', photo: 'jindrich-krisl-green.jpg', broker: true },
];

// fillout: prodej celkem 180, pronájem celkem 62; zbylé dva údaje z filloutu (5+ let) a z nextreality.cz (5 makléřů)
export const STATS = [
  { value: 180, suffix: '', label: 'Prodaných nemovitostí', note: 'Celkový počet nemovitostí, které jsme prodali.', icon: 'stat-prodej.svg' },
  { value: 62, suffix: '', label: 'Pronajatých nemovitostí', note: 'Celkový počet nemovitostí, které jsme pronajali.', icon: 'stat-pronajem.svg' },
  { value: 5, suffix: '+', label: 'Let na realitním trhu', note: 'Více než pět let zkušeností s prodejem a pronájmem v Plzni a okolí.', icon: 'stat-zkusenosti.svg' },
  { value: 5, suffix: '', label: 'Realitních makléřů', note: 'Tým profesionálů, který se postará o vaši nemovitost.', icon: 'stat-makleri.svg' },
];

export const ABOUT = {
  lead: 'Jsme realitní kancelář, která vznikla z advokátní praxe, stavějící na právu, znalosti místního trhu a spolupráci se silnými partnery.',
  // shrnutí „O nás" z filloutu
  summary: 'Jsme realitní kancelář, která vznikla z advokátní praxe, stavějící na právu, znalosti místního trhu a spolupráci se silnými partnery s celorepublikovou působností. Spolupracujeme s advokáty, notáři, dražebníky, bankovními a pojišťovacími společnostmi.',
  office: 'Naše kancelář se nachází téměř ve středu města, vedle Hlavního vlakového nádraží a mostu Milénia, jež je dopravní tepnou spojující všechny 4 největší městské části a přivaděče ze směrů Rozvadov, Praha, Most, České Budějovice. K dispozici jsou advokát, notář, finanční poradce, insolvenční správce a samozřejmě realitní specialisté.',
  who: [
    'Jsme realitní kancelář, která vznikla z advokátní praxe, stavějící na právu, znalosti místního trhu a spolupráci se silnými partnery s celorepublikovou působností. Spolupracujeme s advokáty, notáři, dražebníky, bankovními a pojišťovacími společnostmi.',
    'Umíme pracovat i s exekucemi, poradíme s insolvencí, pomůžeme s vypořádáním společného jmění manželů.',
    'Dokážeme stát na straně klienta jako prodávajícího, ale i na straně kupujícího, pokud si naše služby zvolí k vyhledání nemovitosti mimo naši nabídku.',
    'Zajistíme povinné náležitosti, jako je průkaz energetické náročnosti budovy, tak i vhodné, jako je ocenění tržní ceny nemovitosti v místě a čase obvyklé.',
    'Zajistíme i přímý okamžitý výkup nemovitosti a oddlužení.',
    'Kancelář je členem Asociace realitních kanceláří, je řádně pojištěna. Realitní makléři jsou vázáni přísným etickým kodexem Asociace realitních kanceláří a průběžně jsou proškolováni obsáhlým vzdělávacím programem NEXT REALITY. Využívají nejnovějších technologií a moderního realitního marketingu, aby dokázali zobchodovat jakoukoli nemovitost za nejvyšší možnou prodejní cenu.',
  ],
  director: [
    'Ředitel kanceláře Mgr. Radim Lisenko, LL.M., MBA, zkušenosti získával v advokacii, jako podnikový právník, stavební technik, zastupitel města, vedoucí správního odboru a člen dozorčí rady městské akciové společnosti, zabývající se správou nemovitostí.',
    'Má za sebou zastupování klientů ve správních řízeních ohledně zápisů do katastru nemovitostí i následujících žalob proti rozhodnutí katastrálních úřadů u soudu dle části páté občanského soudního řádu. Zachránil několik klientů od exekucí a zabavení nemovitosti v dražbě.',
    'Je připraven zaručit Vám profesionální služby a vstřícné jednání.',
  ],
};

// „Výhody spolupráce" (verze 2) – doslova z filloutu
export const BENEFITS_LIST = [
  'Více jak 5 let zkušeností na realitním trhu',
  'Tým profesionálů, který se dokonale postará o vaši nemovitost',
  'Skvělá znalost lokality',
  'Moderní nástroje pro stanovení ceny nemovitosti',
  'Kvalitní marketing prodeje nemovitosti',
  'Profesionální prezentace nemovitosti – video, fotografie, textace, plány',
  'Dokonalá znalost legislativy v oblasti realit',
  'Kompletní právní servis',
  'Přepisy energií',
];

// kontaktní osoba u formuláře na úvodní stránce (fillout)
export const HOME_CONTACT = { name: 'Veronika Hálová', phone: '+420 704 737 399', email: 'veronika.halova@nextreality.cz' };

// reference z nextreality.cz/pobocka/1258 (fillout: převzít z nextreality.cz – Ano); v CMS se načítají samy
export const REFERENCES = [
  ['S paní Hálovou mám skvělou zkušenost, je profesionálem ve svém oboru! Dům jsme prodali ani ne za 3 měsíce za vyšší cenu, než jsem čekal. Děkuji!', 'Václav Kadlec, Smědčice'],
  ['Skvělý přístup, i přes komplikovanost prodeje si se vším poradili a nakonec prodáno ještě za víc, než jsem čekala!', 'Ivana T., Plzeň'],
  ['Vážení, prodali jsme byt ve Zruči za pomoci Ing. Petry Borovanské. Díky paní makléřce se uskutečnil prodej velmi rychle. Nemáme co vytknout. Je sympatická a má před sebou velkou budoucnost. Zdravíme všechny z realitní kanceláře a přejeme hodně úspěchů. Byli jsme velice spokojeni.', 'Helena Růžková a Jiří Růžek, Zruč-Senec'],
  ['Moje zkušenost s paní makléřkou je pozitivní. Oceňuji hlavně lidský přístup, praktické rady a jasné odpovědi na všechny moje otázky. Doporučuji! 🙂', 'Vendula Winklerová, Blovice'],
  ['Byla jsem moc spokojená s přístupem i jednáním ,jak jednání s panem ředitelem realitky i s makléřem. Velmi sympatický lidé a příjemný s nimi hovořit narovinu . Děkuji za vše', 'Libuše Smolová'],
];

// 4 boxy pod výpisem nemovitostí
export const BENEFITS_BOXES = [
  ['Zázemí advokátní praxe', 'Kancelář vznikla z advokátní praxe – obchod stavíme na právu a znalosti místního trhu.'],
  ['Exekuce, insolvence, SJM', 'Umíme pracovat s exekucemi, poradíme s insolvencí i s vypořádáním společného jmění manželů.'],
  ['Odhad a PENB', 'Zajistíme průkaz energetické náročnosti budovy i ocenění tržní ceny v místě a čase obvyklé.'],
  // šablona tu má jen placeholder – ikona vygenerovaná v Magnificu ve stylu ostatních tří
  ['Výkup a oddlužení', 'Zajistíme i přímý okamžitý výkup nemovitosti a oddlužení.', 'img/ikony/vykup-oddluzeni.png'],
];

export const ESTIMATE = {
  title: 'Online odhad nemovitosti zdarma',
  lead: 'Správná cena nemovitosti je důležitá pro její umístění na trhu, a proto její odhad svěřujeme pouze kvalifikovaným profesionálům s právnickým, ekonomickým či stavebním vysokoškolským vzděláním. Cenový odhad probíhá na základě analýzy okolí nemovitosti, současného stavu realitního trhu a dalších faktorů, jako jsou stav či zájem o lokalitu.',
  why: [
    ['Skutečná reálná cena', 'S naším odhadem získáte obraz o reálné ceně, nicméně za určitých podmínek lze nemovitost prodat v řádu desítek procent nad tržní cenou – i toto maximum Vám sdělíme.'],
    ['Rychlý přístup', 'Stačí vyplnit online formulář a odeslat. Následující pracovní den Vás kontaktujeme s bližšími informacemi.'],
    ['Zcela zdarma a bez podmínek', 'Odhad vyhotovíme bezplatně a bez podmínky využití našich dalších služeb. Je jen na Vás, jak následně s odhadem naložíte.'],
    ['Kvalitní servis', 'Za kvalitou odhadu si stojíme. Aby obstál i u institucí či v porovnání s odhady soudních znalců, při předání ověříme relevantnost zvláště technických informací. Cena je odůvodněna několikastránkovou analýzou.'],
    ['Cenotvorba odborníky', 'Správný odhad tržní ceny nemovitosti určuje zájem o ni, rychlost prodeje a snižuje náklady. Nenechávejte cenu na náhodě a svěřte cenotvorbu odborníkům.'],
  ],
};

export const CHOCENICE = {
  title: 'Stavební pozemky Chocenice',
  place: 'Chocenice u Plzně',
  label: 'Poslední volný pozemek',
  lead: 'Rovinaté, oplocené stavební pozemky s vlastním vrtem a sítěmi na hranici. Klidná obec s kompletní základní vybaveností zhruba 25 minut od Plzně.',
  price: 'Cena 2 500 Kč/m²',
  facts: [['4', 'sousedící pozemky'], ['1 899 m²', 'poslední volný – pozemek C'], ['40 %', 'zastavitelnost'], ['25 min', 'do Plzně']],
  text: [
    'V exkluzivním zastoupení nabízíme k prodeji rovinaté a oplocené stavební pozemky, které poskytují ideální podmínky pro výstavbu rodinného domu. Díky maximální zastavitelnosti 40 % máte možnost vytvořit si pohodlné a moderní bydlení s dostatkem prostoru pro zahradu i volný čas. Připravené je základní stavební povolení, lze postavit i dvojdomek.',
    'Pozemky disponují vlastní vrtanou studnou včetně čerpadla a zároveň umožní napojení na obecní vodovod a kanalizaci, která bude vybudována v roce 2026. Plyn i elektřina jsou přivedeny na hranici pozemku.',
    'Obec nabízí občanskou vybavenost – mateřskou školu, první stupeň základní školy, obchod, restauraci i in-line stezku. V dohledné době je naplánován obchvat obce, který zrychlí cestu na trase Plzeň–Nepomuk a zároveň sníží dopravu v obci.',
    'Pozemky nabízejí klidné prostředí, dostupné služby a blízkost přírody.',
  ],
  plots: [
    ['Pozemek A, 2 361 m², Chocenice', 'V rezervaci'],
    ['Pozemek B, 1 446 m², Chocenice', 'Prodáno'],
    ['Pozemek C, 1 899 m², Chocenice', 'Volný', 'https://www.nextreality.cz/detail/113857/prodej-pozemku-bydleni-1-899-m'],
    ['Pozemek D, 1 639 m², Chocenice', 'V rezervaci'],
  ],
  broker: 'veronika-halova',
  gallery: ['dji-0089', 'dji-0090', 'dji-0094', 'dji-0091', 'dji-0092', 'dji-0095', 'dji-0087', 'dji-0088-2', 'dji-0082', 'dji-0084', 'dji-0097', '005a4886', '005a4890', '005a4891', '005a4892'],
};
