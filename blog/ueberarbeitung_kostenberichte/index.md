---
title: "Überarbeitung der Kostenberichte"
date: 2024-11-27
cover: kostenberichte_neu.png
coverAlt: Der neue Kostenbericht
author: mklein
categories:
  - Produkt
---

Mit Version 1.30.0 haben wir den **Bereich Berichte/Personalkosten** umfassend überarbeitet, um Ihnen die tägliche Arbeit zu erleichtern. Was genau sich verändert hat und wie Sie die neuen Funktionen optimal nutzen können, erfahren Sie hier.

## Warum gab es Änderungen?

Ein wichtiger Grund für die Überarbeitung war, dass die Berichte oft lange Ladezeiten hatten, besonders in Betrieben mit vielen Daten. Mit dem neuen Update ist das Geschichte: wir haben die **Ladezeiten deutlich verbessert** und einige neue Funktionen eingebaut. 

## Was ist neu?

### 1. Verbesserte Darstellung
Wir haben das bisherige Flächendiagramm durch ein Liniendiagramm ersetzt. Die neue Darstellung bietet Ihnen mehr Übersicht, besonders wenn Sie mit vielen Arbeitsbereichen arbeiten.

### 2. Neue Segmentierungsoptionen
Zusätzlich zur bisherigen Unterteilung nach Arbeitsbereichen, Status und Beschäftigungsverhältnis können Sie Ihre Personalkosten jetzt nach Komponenten aufschlüsseln, darunter:

- Basislohn
- Pausen
- Zuschläge
- Provisionen
- Mitarbeiteressen  

Das hilft Ihnen, gezieltere Einsichten zu gewinnen und die einzelnen Bestandteile Ihrer Personalkosten besser zu verstehen. Zuschläge werden nicht mehr bei „Status“ angezeigt, sondern unter „Komponenten“.

### 3. Bessere Auswahl der Daten
- Sie können einzelne Segmente der Berichte **ein- und ausblenden**.
- Es ist möglich, neben einzelnen Abteilungen auch ganze Standorte darzustellen und zu vergleichen.
- Der Vergleich mit den **Gesamt-Personalkosten** kann ein- oder ausgeblendet werden.

### 4. Arbeitgeber-Nebenkosten
Neu ist, dass Sie auch die **Arbeitgeber-Nebenkosten** im Bericht ein- oder ausblenden können.

## Neue Berechnungsmethode Personalkosten

Bisher hatten wir die **„tatsächlichen“ Personalkosten** angezeigt. Das sind die Beträge, die den Mitarbeitenden nach einem Abrechnungszeitraum wirklich ausgezahlt werden. Bei dieser Form der Berechnung gab es jedoch zwei Probleme:

- Die Berechnungen waren oft schwer nachvollziehbar.
- Ein Vergleich mit anderen Berichten, wie der Dienstplan-Kostenanalyse, war kompliziert.

**Zukünftig zeigen die Berichte deshalb jetzt die „effektiven“ Personalkosten an.**

### Unterschied: „tatsächliche“ vs. „effektive“ Personalkosten

- **„Tatsächliche“ Personalkosten:** Das, was den Mitarbeitern am Ende des Monats ausgezahlt wird.
- **„Effektive“ Personalkosten:** Der Wert der tatsächlich geleisteten Arbeitszeit, inklusive Über- und Minderstunden.  

Bei Stundenlöhnern bleibt die Berechnung gleich. Bei Gehaltsempfängern wird der Basislohn jetzt wie folgt berechnet:

> **Basislohn = [Geleistete Stunden] * [Effektiver Stundenlohn]**

Der **effektive Stundenlohn** wird so berechnet:

> **Effektiver Stundenlohn = ([Monatliches Gehalt] + [Monatliche Sonderleistungen]) / ([Wochen-Sollstunden] * [Wochenfaktor])**

Der Wochenfaktor beträgt in der Regel **4,35**, kann aber in den [Einstellungen](/hilfe/handbuch/einstellungen/unternehmen/#wochenfaktor) angepasst werden.


## Vorteile der neuen Berechnungsmethode

1. **Einfacher nachzuvollziehen**, weil sie von den geleisteten Stunden abhängt.
2. **Bessere Darstellung der tatsächlichen Wirtschaftlichkeit**, da die Kosten direkt mit den Einnahmen verglichen werden können.
3. Berichte können jetzt für beliebige Zeiträume erstellt werden, auch für teils in der Zukunft liegende und noch nicht abgeschlossene Abrechnungszeiträume.
4. Die Kosten sind jetzt konsistent mit anderen Berichten in der App, wie der Dienstplan-Kostenanalyse.

## Unser Fazit

Mit diesem Update machen wir unsere Berichte schneller, übersichtlicher und noch nützlicher. Wir hoffen, Ihnen gefallen die Änderungen und Sie erleben wie einfach effiziente Auswertung sein kann. Bei Fragen oder Problemen können Sie sich jederzeit an unseren Support wenden!



