---
title: "Überarbeitung der Kostenberichte"
date: 2024-11-27
cover: kostenberichte_neu.png
coverAlt: Der neue Kostenbericht
author: mklein
categories:
  - Produkt
---

Mit dem Update auf Version 1.30.0 haben wir den Bereich **Berichte/Personalkosten** überarbeitet. In diesem Artikel erklären wir, was sich geändert hat und worauf Sie bei der Nutzung und Auswertung der neuen Berichte achten sollten.

## Warum gab es Änderungen?

Ein wichtiger Grund für die Überarbeitung war, dass die Berichte oft sehr lange Ladezeiten hatten, besonders in Betrieben mit vielen Daten. Wir haben die **Ladezeiten deutlich verbessert**, sodass die Berichte jetzt schneller geladen werden.

## Was ist neu?

### 1. Verbesserte Darstellung
Die Berichte sehen jetzt anders aus. Statt des alten Flächendiagramms gibt es ein **Liniendiagramm**, das übersichtlicher ist. Das ist besonders hilfreich für Unternehmen mit vielen Arbeitsbereichen.

### 2. Neue Segmentierungsoptionen
Bisher konnten Sie die Personalkosten nach Arbeitsbereichen, Status (z. B. Arbeit, Urlaub, Krankheit) und Beschäftigungsverhältnis aufteilen. Jetzt gibt es zusätzlich die Möglichkeit, die Kosten nach **Komponenten** anzuzeigen, wie:

- Basislohn
- Pausen
- Zuschläge
- Provisionen
- Mitarbeiteressen  

Zuschläge werden also nicht mehr bei „Status“ angezeigt, sondern unter „Komponenten“.

### 3. Bessere Auswahl der Daten
- Sie können einzelne Segmente der Berichte **ein- und ausblenden**.
- Es ist möglich, neben einzelnen Abteilungen auch ganze Standorte darzustellen.
- Der Vergleich mit den **Gesamt-Personalkosten** kann ein- oder ausgeblendet werden.

### 4. Arbeitgeber-Nebenkosten
Neu ist, dass Sie auch die **Arbeitgeber-Nebenkosten** im Bericht ein- oder ausblenden können.

## Was hat sich bei den Berechnungen geändert?

Bisher haben wir die **„tatsächlichen“ Personalkosten** angezeigt. Das sind die Beträge, die den Mitarbeitenden nach einem Abrechnungszeitraum wirklich ausgezahlt werden. Dabei gab es aber zwei Probleme:

- Die Berechnungen waren oft schwer nachvollziehbar.
- Ein Vergleich mit anderen Berichten, wie der Dienstplan-Kostenanalyse, war kompliziert.

**Deshalb zeigen die Berichte jetzt die „effektiven“ Personalkosten an.**

### Unterschied: „tatsächliche“ vs. „effektive“ Personalkosten

- **„Tatsächliche“ Personalkosten:** Das, was am Ende des Monats ausgezahlt wird.
- **„Effektive“ Personalkosten:** Der Wert der tatsächlich geleisteten Arbeitszeit, inklusive Über- und Minderstunden.  

Bei Stundenlöhnern bleibt die Berechnung gleich. Bei Gehaltsempfängern wird der Basislohn jetzt wie folgt berechnet:

> **Basislohn = [Geleistete Stunden] * [Effektiver Stundenlohn]**

Der **effektive Stundenlohn** wird so berechnet:

> **Effektiver Stundenlohn = ([Monatliches Gehalt] + [Monatliche Sonderleistungen]) / ([Wochen-Sollstunden] * [Wochenfaktor])**

Der Wochenfaktor beträgt in der Regel **4,35**, kann aber in den [Einstellungen](/hilfe/handbuch/einstellungen/unternehmen/#wochenfaktor) angepasst werden.


## Vorteile der neuen Berechnungsmethode

1. **Einfacher nachzuvollziehen**, weil sie von den geleisteten Stunden abhängt.
2. **Bessere Darstellung des tatsächlichen Personalaufwands**, da die Kosten direkt mit den Einnahmen verglichen werden können.
3. Berichte können jetzt für beliebige Zeiträume erstellt werden, auch für noch nicht abgeschlossene Abrechnungszeiträume.
4. Die Kosten sind jetzt konsistent mit anderen Berichten in der App, wie der Dienstplan-Kostenanalyse.

## Unser Fazit

Mit dem Update sind die Berichte übersichtlicher, schneller und einfacher zu verstehen. Wir hoffen, dass Sie davon profitieren. Bei Fragen oder Problemen können Sie sich jederzeit an unseren Support wenden.



