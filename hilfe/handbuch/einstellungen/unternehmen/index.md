---
layout: layouts/hilfe/single.njk
title: Unternehmen
weight: 2
icon: building

---
Unter dem Reiter **Unternehmen** können Sie verschiedene Unternehmendaten
hinterlegen und gleichzeitig allgemeine Einstellungen für alle ihre Mitarbeiter
treffen. **Die Adressdaten dienen dabei lediglich der Information und haben
keinen weiteren Einfluss!**

## Beginn der Kontoführung

Unter "**Kontoführung ab**" legen Sie fest, ab welchem **Zeitpunkt** die
**Arbeitszeitkonten** Ihrer Mitarbeiter in Pentacode geführt werden.

Urlaube, SFN-Zuschläge und Lohnkosten werden in Pentacode auch **bruchteilig
berechnet**. Für die Einheitlichkeit der Buchhaltung und eine später bessere
Nachvollziehbarkeit ist es jedoch **empfehlenswert**, den **ersten eines
Monats** zu wählen.

## Saldierung SFN-Konten

Für die Saldierung von
[SFN-Konten](/hilfe/handbuch/mitarbeiter/konten#sfn-konto) bietet Ihnen
Pentacode zwei Optionen:

### Exklusive Beitragspflichtige Zuschläge

Ist diese Option gewählt, werden bei der Saldierung des SFN-Kontos nur
beitragsfreie Zuschläge berücksichtigt. Dies ist die Standardvariante.

### Inklusive Beitragspflichtige Zuschläge

Ist diese Option gewählt, werden bei der Saldierung des SFN-Kontos neben
beitragsfreien Zuschläge auch beitragpflichtige Zuschläge berücksichtigt.

## Arbeitszeiten & Konten Festschreiben

Einer der großen Vorteile der Arbeitszeitdokumentation in Pentacode ist der
Umstand, dass Sie jederzeit "in die Vergangenheit reisen" und Korrekturen an
bereits erfassten Arbeitszeiten vornehmen können. Pentacode berechnet dabei
automatisch alle betroffenen Lohnabrechnungen und Konten neu und liefert damit
jederzeit eine **in sich stimmige, wiederspruchsfreie Dokumentation**.

Diese Flexibilität bringt allerdings auch Gefahren mit sich. So kann zum
Beispiel die Änderung an einer Arbeitszeit in an einem bereits abgeschlossenen
Monat schnell zu Unstimmigkeiten mit bereits durchgeführten Lohnabrechnungen
führen. Desweiteren können Änderungen an bestimmten Vertragsdaten oder
Zeiterfassungs-Einstellungen ebenfalls zu einer ungewünschten, rückwirkenden
Neuberechnung von Konten und Lohnabrechungen führen.

Es ist deshalb ratsam, Arbeitszeiten, Mitarbeiterkonten und Lohnabrechnungen in
regelmäßigen Abständen festzuschreiben. Dies tun sie wie folgt:

1. Navigieren Sie zum Punkt **Einstellungen > Unternehmen**.
2. Unter dem Punk **Arbeitszeiten & Konten festschreiben**, klicken sie auf den Button {% icon "pencil-alt" %} **Bearbeiten**.
3. Klicken Sie auf **Zeitraum wählen...** und wählen Sie den Monat, bis zu welchem Arbeitszeiten und Konten festgeschrieben werden sollen.
4. Klicken sie auf **Bestätigen**.

> {% icon "exclamation-triangle" %} **Achtung:** Das Festschreiben von Konten kann **nicht rückgängig gemacht werden!**

{% figure caption="Unter dem Punkt Einstellungen > Sonstiges können Sie ein Festschreibungsdatum für Arbeitszeiten und Konten festlegen." %}
<img src="konten_festschreiben.webp" />
{% endfigure %}

## Berechnung Gesetzliche Pause

Als Teil der Arbeitszeitdokumentation überwacht Pentacode automatisch alle erfassten Arbeitszeiten auf bestimmte
Regelvorstöße. Einer dieser Regeln ist die gesetzlich vorgeschriebene Mindest-Pausenlänge, die von der Dauer der Schicht
bzw. Arbeitszeit abhängt. Für die Berechnung der gesetzlichen Pause sind zwei Möglichkeiten zur Verfügung gestellt:

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


## Wochenfaktor

Der sogenannte "Wochenfaktor" stellt die durchschnittliche Anzahl der Wochen in
einem Monat dar und wird überall da angewendet, wo wochenbasierte Werte in
monatsbasierte Werte umgerechnet werden müssen und umgekehrt, so wie Beispielsweise die
Berechnung der Monats-Sollstunden anhand der Wochenstunden. In der Praxis kommen
für gewöhnlich einer von zwei verschiedenen Wochenfaktoren zum Einsatz, der
"alte" Wert von 4,33 und der neuere, etwas genauere Wert von 4,35, der auch
Schaltjahre berücksichtigt.

Standardmäßig verwendet Pentacode den Faktor **4,35**. Sollte in Ihrem
Unternehmen ein anderer Wochenfaktor zur Anwendung kommen, zum Beispiel aufgrund
eines Tarifvertrages, können Sie diesen hier anpassen.