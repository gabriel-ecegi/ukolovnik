# Mydock+

## Vite

Pro build aplikace je použit Vite s SWC pluginem pro rychlejší build aplikace. Konfigurace je v vite.config.ts

## React

Je použit React. Jsou silně preferovány funkční komponenty a hooky. Pro práci s formuláři je použita knihovna react-hook-form.

## TypeScript

Na všetchno je použit TypeScript ve striktním módu. Pravidla se nastavují v biome.json

## Biome

Pro lintování a formátování kódu je použit Biome. Je konfigurovatelný v biome.json. Nainstalovat https://marketplace.visualstudio.com/items?itemName=biomejs.biome do VSCode.

## react-query

Pro fetchování dat je použita knihovna react-query. Slouží zároveň i jako forma cache pro data. Není vyloučeno, že v budoucnu bude použita i knihovna pro state management. Pro vývojové prostředí jsou k dispozici i devtools.

## react-router

Pro routování aplikace je použita knihovna react-router.

## mui

Pro stylování aplikace je použita knihovna Material-UI. Nad komponentami jsou vytvořeny vlastní SAB komponenty - tlačítka, inputy, tabulky, atd.
Nad knihovou jsou vytvořeny i wrapper komponenty pro jednodušší práci s react-hook-form.

## react-hook-form

Pro práci s formuláři je použita knihovna react-hook-form.

## zod

Pro validaci formulářů je použita knihovna zod. Její internalizována do češtiny s pomocí knihovny zod-i18n-map.

## vite-module-federation

TBD

## i18next a react-i18next

Překlady jsou řešeny pomocí knihovny i18next a react-i18next. Pro přidání nového překladu vložte novou property to ResourceDictionary. Řešení je silnětypove - typesafe, tím padám musíte přidat překlad do každého jazyka.

# Příkazy

Spuštění vývojového serveru na localhost:3000

```bash
npm run dev
```

Provedení produkčního buildu aplikace

```bash
npm run build
```

Provedení lintování kódu

```bash
npm run lint
```
