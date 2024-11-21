---
title: "Überarbeitung der Kostenberichte"
date: 2024-11-21
cover: kostenberichte_neu.png
coverAlt: Der neue Kostenbericht
author: mklein
categories:
  - Produkt
---

Als Teil des v1.30.0 Updates haben wir unter anderem wesentliche Anpassungen am Bereich Berichte/Personalkosten vorgenommen. Wie sich der neue Kostenbericht vom bisherigen unterscheidet und worauf Sie bei der Auswertung und Interpretation des neuen Berichtes achten müssen erfahren Sie in diesem Artikel.

## Deutlich Verbesserte Performance

Eine der Motivationen für die Überarbeitung der Kostenberichte war eine Optimierung der Performance. Vor allem bei größeren Betrieben mit hohen Datenmengen kam es in der Vergangenheit beim Laden der Kostenberichte zu sehr langen Ladezeiten. Dieses Problem haben wir als Teil der Überarbeitung der Kostenberichte addressiert. Beim Laden der Kostenberichte sollte Ihnen also eine **signifikante Verbesserung der Ladezeiten** auffallen.

## Überarbeitete Grafiken und UI

Eine der Änderungen, die Ihnen sofort ins Auge springen werden, ist das überarbeitete User Interface und etwas abgeänderte Grafiken. Zunächst haben wir die Art der Grafik von einem "gestapelten" Flächendiagramm auf ein normales Liniendiagramm geändert. Dies erhöht vor allem bei Unternehmen mit vielen Arbeitsbereichen die Übersichtlichkeit und Lesbarkeit deutlich.

Desweiteren werden Sie feststellen, dass sich die Segementierungsoptionen geändert haben. Zusätzlich zu der Segmentierung nach Arbeitsbereichen, Status (Arbeit, Urlaub, Krank etc.) und Beschäftigungsverhältnis können Sie Kosten nun auch segmentiert nach deren Bestandteilen bzw. Komponenten anzeigen lassen. Diese Umfassen Basislohn, Pausen, Provision, Zuschläge und Mitarbeiteressen. Dies bedeutet auch, dass Zuschläge nun nicht mehr als Segment im Bereich "Status", sondern unter "Komponenten" angezeigt werden.

Eine weitere Verbesserung, die wir als Teil diese Updates vorgenommen haben, betrifft die Auswahl der angezeigten Daten. Einzelne Segmente können nun beliebig ein- und ausgeblendet werden. Darüber hinaus können Sie in der Darstellung nach Arbeitsbereichen nicht nur einzelne Abteilungen, sonderen auch gesamte Standorte anzeigen lassen. Dies ermöglicht Ihnen, sich auf bestimmte Teilbereiche zu fokusieren und diese übersichtlicher darzustellen. Sie können zudem den Vergleich mit den Gesamt-Personalkosten ein- oder ausblenden um die Lesbarkeit der Grafik weiter zu verbessern.

Zu guter letzt haben Sie nun auch die Möglichkeit, Arbeitgeber-Nebenkosten ein- und auszublenden.

## Umstellung von "tatsächlichen" auf "effektive" Personalkosten

Die vermutlich signifikanteste Änderung betrifft die Art der dargestellten Daten. In der Vergangenheit hatten wir versucht, die "tatsächlichen" Personalkosten so genau wie möglich abzubilden. Als "tatsächliche" Personalkosten bezeichen wir den Brutto-Betrag, der am Ende eines Abrechnungszeitraums dem Mitarbeiter gutgeschrieben wird. Im Falle eines Gehaltsempfängers wird der Basislohn in diesem Fall als fester monatlicher Betrag angerechnet (das Gehalt des Mitarbeiters), auf den dann variable Kosten wie Zuschläge oder Provisionen aufgeschlagen werden. Die Segmentierung nach Status (Arbeit/Urlaub/Krank) und Arbeitsbereichen erfolgte dann anteilig basierend auf den im entsprechenden Segment angefallenen Stunden.

Leider mussten wir feststellen, dass diese Art der Berechnung nicht nur sehr fehleranfällig, sondern auch schwer nachvollziehbar ist und einen Abgleich mit Kostenberichten in anderen Bereichen (z.b. die Dienstplan-Kostenanalyse) deutlich erschwert. **Deshalb haben wir uns entschieden, die Auswertung von den oben beschriebenen "tatsächlichen" Personalkosten auf "effektive" Personalkosten umzustellen.**

Der Unterschied zwischen "effektiven" und "tatsächlichen" Personalkosten erklärt sich wie folgt: Statt dem tatsächlich ausgezahlten Basislohn wird nun der monetäre Gegenwert der tatsächlich geleisteten Arbeitszeit berechnet, welcher auch bei Gehaltsempfängern abhängig von den geleisten Stunden im Abrechnungszeitraum monatlich variieren kann. In anderen Worten: Während die "tatsächlichen" Personalkosten den im Abrechnungzeitraum zu leistenden Lohn entsprechen, beschreiben die "effektiven" Personalkosten die Verbindlichkeiten an den Mitarbeiter, die auch den monetären Wert von angefallenen Über- und Minderstunden berücksichtigen. Bei Stundenlöhnern ist dieser Betrag identisch, bei Gehaltsempfängern ändert sich die Berechnungsmethode wie folgt:

> **[Basislohn] = [Geleistete Stunden] * [Effektiver Stundenlohn]**

Der effektive Stundenlohn eines Gehaltsempfängers ergibt sich wie folgt:

> **[Effektiver Stundenlohn] = ([Monatliches Gehalt] + [Monatliche Sonderleistungen]) / ([Wochen-Sollstunden] * [Wochenfaktor])**

Wobei der sogenannte "Wochenfaktor" im Regelfall **4,35** beträgt. Dieser kann allerdings in den Grundeinstellungen unter [Einstellungen/Unternehmen](/hilfe/handbuch/einstellungen/unternehmen/#wochenfaktor) bei Bedarf angepasst werden.

Die Auswertung nach "effektiven" Personalkosten hat zusätzlich zu den oben genannten Faktoren folgende Vorteile:

- Deutlich einfacher nachvollziehbar, das direkt Abhängig von den geleisteten Stunden.
- Anders als die "tatsächlichen" Personalkosten stellen die "effektiven" Personalkosten eine **wesentlich deutlichere Representation des Personalaufwands** dar, der für die Betrachtung des wirtschaftlichen Erfolgs des Unternehmens notwendig ist. So können zum Beispiel die effektiven Personalkosten mit den im gleichen Zeitraum gewonnenen Erträgen verglichen werden, um einen Messwert für die wirtschaftliche Produktivät des gesamten Unternehmens sowie einzelner Arbeitsbereiche zu erhalten. 
- Während die tatsächlichen Personalkosten immer nur für gesamte, abgeschlossen Abrechnungszeiträume berechnet und segmentiert werden können, ermöglichen die effektiven Personalkosten eine fortlaufende Auswertung über beliebige Zeiträume. So werden in Zukunft Berichte über benutzerdefinierte Zeiträume erstellt werden können, die auch partielle und nicht abgeschlossene Abrechnungszeiträume umfassen können.
- Kostenbeträge sollten nun konsistent mit anderen Bereichen der App sein, wie z.B. die Kostenanalyse im Dienstplan.

Wir sind überzeugt, dass die überarbeitete Berechnungsmethode, sowie die Verbesserung der User-Experience und Performance einen deutlichen Mehrwert für unsere Kunden darstellen. Sollten Sie dennoch Fragen oder Bedenken zur Umstellung haben, dann zögern Sie bitte nicht, sich an unseren Support zu wenden.


