---
title: Sonstiges
weight: 5
icon: ball-pile
---

Im Menüpunkt **"Einstellungen"** und dort unter **"Sonstiges"** bestimmen generelle Grundsätze, nach denen Pentacode operiert

## Beginn der Kontoführung

Unter "**Kontoführung ab**" legen Sie fest, ab welchem **Zeitpunkt** die **Arbeitszeitkonten** Ihrer Mitarbeiter in Pentacode geführt werden.

Urlaube, SFN-Zuschläge und Lohnkosten werden in Pentacode auch **bruchteilig berechnet**. Für die Einheitlichkeit der Buchhaltung und eine später bessere Nachvollziehbarkeit ist es jedoch **empfehlenswert**, den **ersten eines Monats** zu wählen.

## Berechnung Gesetzliche Pause

Als Teil der Arbeitszeitdokumentation überwacht Pentacode automatisch alle erfassten Arbeitszeiten auf bestimmte
Regelvorstöße. Einer dieser Regeln ist die gesetzlich vorgeschriebene Mindest-Pausenlänge, die von der Dauer der Schicht
bzw Arbeitszeit abhängt. Für die Berechnung der gesetzlichen Pause sind zwei Möglichkeiten zur Verfügung gestellt:

### Standard

In diesem Modus werden die Pausen nach der **Anwesenheitszeit** berechnet. Nach **mehr als 6 Stunden** Anwesenheitszeit
wird eine minimale Pauselänge von **30 Minuten Pause** erwartet, nach insgesamt **mehr als 9 Stunden** kommen weitere
**15 Minuten** hinzu, also insgesamt 45 Minuten. Konkret sieht die Staffelung wie folgt aus:

| Dauer       | Mindestpause |
| ----------- | ------------ |
| <= 6:00     | 0 min        |
| 6:01 - 9:00 | 30 min       |
| > 9:00      | 45 min       |

### Iterativ

In diesem Modus werden die **Pausen nach** der **Arbeitszeit** berechnet. Dem Mitarbeiter werden nach mehr als 6 Stunden 30 Minuten Pause abgezogen. Er hat somit 5,5 Stunden gearbeitet. Erst wenn er weitere mehr als 3,5 Stunden gearbeitet hat (insgesamt also mehr als 9 Stunden), fallen weitere 15 Minuten Pause an. Die konkrete Staffelung sieht wie folgt aus:

| Dauer       | Mindestpause |
| ----------- | ------------ |
| <= 6:00     | 0 min        |
| 6:01 - 9:30 | 30 min       |
| > 9:30      | 45 min       |

## Saldierung SFN-Konten

Für die Saldierung von [SFN-Konten](/hilfe/handbuch/mitarbeiter/konten#sfn-konto) bietet Ihnen Pentacode zwei Optionen:

### Exklusive Beitragspflichtige Zuschläge

Ist diese Option gewählt, werden bei der Saldierung des SFN-Kontos nur beitragsfreie Zuschläge berücksichtigt. Dies ist die Standardvariante.

### Inklusive Beitragspflichtige Zuschläge

Ist diese Option gewählt, werden bei der Saldierung des SFN-Kontos neben beitragsfreien Zuschläge auch beitragpflichtige
Zuschläge berücksichtigt.

## Nachtzuschläge

Der Gesetzgeber bestimmt die maximalen Arbeitszeiträume, für die Zuschläge bezahlt werden dürfen. Dies heißt jedoch nicht, dass Sie für den gesamten Zeitraum Zuschläge geben müssen.

Sie können die **Zeiträume**, in denen Sie Ihre Mitarbeiter **Nachtzuschläge** erhalten sollen, einengen.

Pentacode **überprüft** hierbei die Zulässigkeit Ihrer Angaben entsprechend der **gesetzlichen Richtlinien**.

Diese ermöglichen die Zahlung von bis zu 25% Zuschlag auf den Bruttolohn in der Zeit von 20:00 Uhr bis 06:00 Uhr, sowie Nachtzuschläge für die Zeit von 00:00 Uhr bis 04:00 Uhr (sofern die Arbeit vor 0:00 Uhr aufgenommen wurde).
