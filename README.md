# nextrealityadvance.cz – náhled ve šabloně NEXT

Náhled ke schválení: web pobočky Next Reality Advance (Plzeň) převedený z kancelarplzen.cz do standardní šablony NEXT (dev.nextrealityweb.cz), s developmentem Chocenice.

Ostrý web se zakládá v administraci CMS šablony, tenhle náhled slouží jako podklad k tomu, co kam patří.

## Spuštění

```bash
node build.mjs   # stáhne/zrcadlí šablonu a vygeneruje preview/*.html
node dev.js      # http://localhost:5192
```

- `content.mjs`: veškerý obsah pobočky (kontakty, tým, texty, Chocenice). Texty se mění tady.
- `transform.mjs`: kam se obsah v šabloně propisuje.
- `tpl/`: cache stránek šablony. Když ji smažete, build stáhne aktuální verzi.
- `preview/img/`: fotky týmu a kanceláře (z kancelarplzen.cz), Chocenice (z veronikahalova.cz), logo (SVG z disku IMPnet GRAFIKA).
- `old/`: stažené HTML starého webu (kvůli dohledání).

Šedé štítky v náhledu označují obsah, který je zatím ze šablony.
