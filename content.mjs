// Obsah pobočky Next Reality Advance převedený z kancelarplzen.cz (stav k 23. 9. 2026)
// a Chocenic z veronikahalova.cz/chocenice-pozemky. Texty jsou převzaté, opravené jen
// zjevné překlepy. V produkci se vše zakládá v administraci CMS šablony NEXT.

export const OFFICE = {
  brand: 'Next Reality Advance',
  company: 'Kancelář plzeň s.r.o.',
  street: 'nám. T. G. Masaryka 546/16',
  city: '301 00 Plzeň',
  phone: '+420 608 20 20 28',
  email: 'advance@nextreality.cz',
  hours: 'Pondělí – pátek 9:00–17:00',
  ico: '09871861',
  dic: 'CZ09871861',
  registry: 'Vedená u Krajského soudu v Plzni, sp. zn. C 40261/KSPL',
  facebook: 'https://www.facebook.com/NEXT-reality-Advance-109947631247471',
  instagram: 'https://www.instagram.com/kancelarplzen/',
  listings: 'https://www.nextreality.cz/pobocka/1258/next-reality-advance',
  whistleblowing: 'https://kancelarplzen.cz/wp-content/uploads/2023/11/SCAN_20231108_165840802.pdf',
  gdpr: 'https://www.nextreality.cz/gdpr',
};

// pořadí jako na starém webu
export const TEAM = [
  { slug: 'radim-lisenko', name: 'Mgr. Radim Lisenko, LL.M., MBA', role: 'Ředitel kanceláře', email: 'radim.lisenko@nextreality.cz', phone: '+420 608 20 20 28', photo: 'radim-lisenko.jpg' },
  { slug: 'barbora-kocicova', name: 'Barbora Kočicová', role: 'Asistentka pro realitní úsek', email: 'sekretariat.advance@nextreality.cz', photo: 'barbora-kocicova.jpg' },
  { slug: 'nikol-zrelicova', name: 'Nikol Zrelicová', role: 'Asistentka pro právní úsek', email: 'sekretariat.advance@nextreality.cz', photo: 'nikol-zrelicova.jpg' },
  { slug: 'sona-bruckerova', name: 'Soňa Bruckerová', role: 'Realitní makléř', email: 'sona.bruckerova@nextreality.cz', phone: '+420 720 319 631', photo: 'sona-bruckerova.jpg', broker: true },
  { slug: 'veronika-halova', name: 'Veronika Hálová', role: 'Realitní makléř', email: 'veronika.halova@nextreality.cz', phone: '+420 704 737 399', photo: 'veronika-halova.jpg', broker: true },
  { slug: 'petra-borovanska', name: 'Ing. Petra Borovanská', role: 'Realitní makléř', email: 'petra.borovanska@nextreality.cz', phone: '+420 603 203 051', photo: 'petra-borovanska.jpg', broker: true },
  { slug: 'antonin-srb', name: 'Antonín Srb', role: 'Realitní makléř', email: 'antonin.srb@nextreality.cz', phone: '+420 775 921 234', photo: 'antonin-srb.jpg', broker: true },
  { slug: 'jindrich-krisl', name: 'Jindřich Krisl', role: 'Realitní makléř', email: 'jindrich.krisl@nextreality.cz', phone: '+420 777 559 771', photo: 'jindrich-krisl.webp', broker: true },
];

export const STATS = [
  { value: 80, suffix: '+', label: 'Bytů', note: 'kterým jsme v letech 2021–2024 pomohli k novému majiteli' },
  { value: 45, suffix: '+', label: 'Domů', note: 'prodaných v letech 2021–2024' },
  { value: 78, suffix: '+', label: 'Pronájmů', note: 'zprostředkovaných v letech 2021–2024' },
  { value: 102, suffix: '', label: 'Obchodů v roce 2025', note: '40 bytů, 23 domů, 27 pronájmů a 12 pozemků' },
];

export const ABOUT = {
  lead: 'Jsme realitní kancelář, která vznikla z advokátní praxe, stavějící na právu, znalosti místního trhu a spolupráci se silnými partnery.',
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

// „Výhody spolupráce" – fakta z textu „Kdo jsme" starého webu
export const BENEFITS_LIST = [
  'Vznikli jsme z advokátní praxe – obchod stavíme na právu a znalosti místního trhu.',
  'Spolupracujeme s advokáty, notáři, dražebníky, bankami a pojišťovnami.',
  'Umíme pracovat s exekucemi, poradíme s insolvencí i vypořádáním SJM.',
  'Zastupujeme prodávající i kupující, kteří hledají nemovitost mimo naši nabídku.',
  'Zajistíme průkaz energetické náročnosti budovy i ocenění tržní ceny.',
  'Nabízíme přímý okamžitý výkup nemovitosti a oddlužení.',
  'Jsme členem Asociace realitních kanceláří a jsme řádně pojištěni.',
  'Jako jedni z mála realitních kanceláří máme oprávnění provádět veřejné dražby.',
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

export const DIVORCE = {
  title: 'Rozvod manželství – vypořádání SJM',
  lead: 'Pomáháme manželům v krizi, aby rozvod proběhl co nejhladčeji – právní radou, doporučením advokáta s referencí i praktickou přípravou majetkového vypořádání u nemovitostí.',
  blocks: [
    ['Když už není cesty zpět', [
      'Stává se to mnoha lidem, někdy to, co se zdálo ideální, zaskřípe tak, že už není cesty zpět. Pokud jste manželé, pak nezbývá než rozvod a vypořádání společně nabytého majetku, tzv. společného jmění manželů – ve zkratce SJM. Vypořádání se může týkat i nesezdaných, kteří nabyli majetek v podílovém spoluvlastnictví.',
      'Spravedlivé vypořádání, ideálně dohoda mezi partnery, pak dává možnost zachování dobrých vztahů a klidného výchovného prostředí pro děti.',
      'Jelikož rodinné právo a řešení rozvodů bylo naší advokátní parketou, pomáháme manželům v krizi, aby rozvod proběhl co nejhladčeji. A to nejen právní radou, doporučením advokáta s referencí, ale i praktickou přípravou majetkového vypořádání u nemovitostí.',
      'Aby manželé a partneři věděli, do čeho jdou, a necítili se jednou stranou znevýhodněni, stanovujeme nezávisle aktuální cenu nemovitosti na trhu a navrhujeme alternativy vypořádání.',
    ]],
    ['Jak můžeme pomoci', [
      'Jsme schopni vyplatit ještě před rozvodem finanční částku oběma, nemovitost odkoupit za velmi dobrou cenu s výplatou peněz do několika dnů.',
      'Pokud se manželé nedohodnou na tom, komu nemovitost zůstane, můžeme nemovitost prodat za nejvyšší cenu, případně prodat v aukci.',
      'Nedokážete se vůbec na ničem dohodnout? Nejtransparentnější, ničím nezpochybnitelný, soudy, bankami a institucemi uznávaný způsob vypořádání je prodej ve veřejné dražbě. Ta je nejvhodnější, když dohoda ani vůle k jejímu uzavření není. Dražba je podobná aukci, má svá velmi přesná pravidla a je možné, aby se jí účastnili i manželé – jeden z nich může být v dražbě úspěšný a druhý mu nemůže v koupi zabránit, a ten má zase zaručeno, že dostane nejvyšší částku za polovinu nemovitosti.',
      'Jako jedni z mála realitních kanceláří máme oprávnění veřejné dražby provádět.',
      'Ať už jste v jakékoli fázi rozvodu, ať máte jakékoliv vztahy, přijďte se včas poradit, klidně oba dva, nebo každý zvlášť. Najdeme pro vás nejméně bolestivé řešení, jež vám umožní začít nový život.',
    ]],
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
