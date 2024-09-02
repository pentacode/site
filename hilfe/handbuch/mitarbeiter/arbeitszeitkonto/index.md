---
layout: layouts/hilfe/single.njk
title: Arbeitszeitkonto
weight: 2
icon: scale-unbalanced
---

Im Arbeitszeitkonto werden die vertraglich vereinbarten, den tatsächlich geleisteten Arbeitszeiten gegenübergestellt und Über- oder Minderstunden ausgewiesen.

Die Gegenüberstellung erfolgt nur auf Basis der zum aktuellen Zeitpunkt erfassten Arbeitszeiten. **Geplante Arbeitszeiten werden im Arbeitszeitkonto nicht berücksichtigt**.

Unter [Konten (Übersicht)](/hilfe/handbuch/mitarbeiter/konten/) wird das Arbeitszeitkonto gemeinsam mit dem Zuschlagskonto und Urlaubskonto in einer gemeinsamen Übersicht zusammengefasst. 

Sofern nicht anders erfasst, werden die Über- oder Minderstunden am Ende eines Jahres immer automatisch in das Folgejahr übertragen. Wie Sie diese Überträge bearbeiten können, erfahren Sie unter dem Punkt Konten Zurücksetzen.

## Übersicht

In der Übersicht können Sie die Arbeitszeiten all ihrer Mitarbeiter über einen selbst gewählten Zeitraum einsehen. Dabei werden fünf Werte im Format Stunden:Minuten angezeigt:

*Übertrag -* sind die Über- oder Minderstunden, welche zu Beginn des ausgewählten Zeitraums vom Mitarbeiter angesammelt sind. 

*Soll -* sind die über die [Vertragsbedingungen](/hilfe/handbuch/mitarbeiter/vertrag/) kalkulierten Soll-Stunden des Mitarbeiters für den Zeitraum. 

*Ist -* sind die tatsächlich erarbeiteten Stunden des Mitarbeiters.

*Differenz -* sind die Ist-Stunden abzüglich der Soll-Stunden - dieser Wert gibt an ob Planung und Durchführung von Arbeitszeiten sich decken. 

*Saldo -* sind die insgesamt angesammelten Über- und Minderstunden.

> {% icon "lightbulb" %} Positive Werte sind stets Überstunden - negative Werte stets Minderstunden.

### Zeitraum wählen

In der Übersicht sehen Sie die Arbeitszeiten ihrer Mitarbeiter **standardmäßig für den aktuellen Monat**. Sie können jedoch auch **jeden beliebigen Zeitraum** auswählen.

Klicken Sie dazu auf den {% button icon = "calendar" %} Button in der **linken oberen Ecke**. Mit den Pfeiltasten wählen Sie zwischen einzelnen Monaten. 

Dort können Sie auch zwischen ganzen Wochen, Monaten und Jahren auswählen. Durch den linken Kalender kann man zudem einen beliebigen Startzeitpunkt und im Rechten einen beliebigen Endzeitpunkt wählen. Dann wird der Zeitraum dazwischen angezeigt. 

{% figure caption="Die Arbeitszeiten der Sommersaison auf einen Blick mit individuellem Zeitraum." %}

<img src="zeitraum_waehlen.gif"/>

{% endfigure %}

Ihnen werden die [Arbeitszeitwerte](#übersicht) immer für den ganzen Zeitraum zusammengefasst angezeigt. 

> {% icon "lightbulb" %} Werden zukünftige Monate mit ausgewählt, sind geplante Schichten in den Soll-Stunden enthalten!

### Nach Mitarbeitern filtern

Wie in anderen Übersichten können Sie auch im Arbeitszeitkonto nach **Positionen, Beschäftigungsverhältnis und einzelnen Mitarbeitern** filtern. Klicken Sie dazu einfach auf die Leiste mit dem {% icon "filter" %} Symbol und wählen aus der Liste die gewünschten Kategorien aus. 

> {% icon "lightbulb" %} Der Filter beeinflusst nur, welche Mitarbeiter angezeigt werden! Die Stunden werden für die Mitarbeiter aber stets aus allen Positionen berechnet. 

Filter aus der gleichen Klasse (z.B zwei Abteilungen wie 'Küche' und 'Manager') werden additiv verwendet - es werden also Mitarbeiter der Abteilung 'Küche' und der Abteilung Manager 'angezeigt'. Werden Filter aus verschiedenen Klassen verwendet (z.B das Arbeitsverhältnis 'Vollzeit/Teilzeit' und die Abteilung 'Küche') werden sie exklusiv verwendet - es werden nur Mitarbeiter aus der Abteilung Küche mit dem Arbeitsverhältnis 'Vollzeit/Teilzeit' aufgelistet.

{% figure caption="Hier werden ausschließlich Mitarbeiter aus der Abteilung Küche mit dem ausgewählten Arbeitsverhältnis angezeigt." %}

<img src="arbeitszeitkonto_filter.png"/>

{% endfigure %}


## Einzelansicht

Klicken Sie auf einen Mitarbeiter in der Übersicht erreichen Sie dessen Einzelansicht. Sie können auf [gleiche Weise wie in der Übersicht](#zeitraum-wählen) auch hier den Zeitraum wählen für den Soll- und Ist-Stunden angezeigt werden. 

Mit der Einstellung **'Auflösung'** neben dem Kalender können Sie einstellen ob der gewählt Zeitraum in Wochen, Monats oder Jahresblöcke geteilt wird. 

{% figure caption="In der Einzelansicht erhalten Sie die Stunden eines Mitarbeiters individuell aufgelistet." %}

<img src="einzelansicht_arbeitszeitkonto.png"/>

{% endfigure %}

Wenn Sie Arbeitszeiten händisch eintragen oder kontrollieren möchten, tun Sie dies unter [Arbeitszeiten](/hilfe/handbuch/mitarbeiter/arbeitszeiten/)!