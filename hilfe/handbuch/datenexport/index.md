---
layout: layouts/hilfe/single.njk
title: Datenexport
icon: download
---

Unter Datenexport können Sie Daten von Pentacode zusammengefasst herunterladen. In den verschiedenen Gebieten von Pentacode finden Sie öfters das {%icon "download"%}**-Symbol**, dieses verweißt Sie stets zum Reiter Datenexport von dem Sie die Daten zusammengefasst herunterladen können. 

-- Datenexport bis jetzt lokalisieren
-- 


## Lohnbuchhaltung

## Arbeitszeiten

## Arbeitszeiten Exportieren

Pentacode bietet Ihnen einige Optionen, die Arbeitszeiten eines oder aller Ihrer Mitarbeiter zu exportieren, sei es für
Archivierungszwecke, zur Überprüfung durch den Mitarbeiter oder für die Übermittlung in die Lohnbuchhaltung.

### Arbeitszeiten Nachweis

Der "**Arbeitszeiten Nachweis**" listet die täglichen Arbeitszeiten mit ihrem jeweiligen Anfang und Ende, den Ruhepausen und die Dauer des Arbeitstages.

{% figure caption="Arbeitszeiten 'AZ' und bezahlte Zeiten 'Bez' sind in diesem Beispiel identisch, da Pausen **nicht** bezahlt werden", extraClass="float-right" %}
<img src="arbeitzeiten-nachweis.png" />
{% endfigure %}

Am rechten oberen Rand finden Sie die **Soll- und Ist-Arbeitszeiten** des Monats einander gegenübergestellt und die
**Differenz** ausgewiesen. In der Spalte "**AZ**" ist die **tatsächliche Arbeitszeit** nach Abzug der Pausen zu sehen,
in der danebenliegenden Spalte "**BEZ**" die Anzahl der **bezahlten Stunden**. Im Regelfall sind die Angaben in beiden
Spalten identisch. Wenn Sie hingegen **Pausen bezahlen**, werden diese den bezahlten Stunden unter "**BEZ**" hinzu
addiert.

Um den Arbeitszeiten-Nachweis eines **einzelnen Mitarbeiters** auszudrucken, gehen Sie in das
[Arbeitszeitblatt](#das-arbeitszeitblatt) des Mitarbeiters, klicken den {% button icon="file-export" %}-Button in
der linken unteren Ecke und wählen die Option "Arbeitszeitnachweis".

Um den Arbeitszeiten-Nachweis **aller Mitarbeiter** auszudrucken, gehen Sie in die
[Arbeitszeiten-Übersicht](#arbeitszeiten-übersicht), klicken den {% button icon="file-export" %}-Button in
der rechten oberen Ecke und wählen die Option "Arbeitszeitnachweis".

> Wir empfehlen Ihnen, die Arbeitszeitnachweise jedes Monats auszudrucken und von Ihren Mitarbeitern **unterzeichnen**
> zu lassen.
> Dieser Ausdruck dient zum einen als **Nachweis** bei Überprüfungen durch die jeweiligen Prüfungsbehörden. Zum anderen
> bestätigt der Mitarbeiter mit der Unterschrift die Richtigkeit der Dokumentation. Dies dient Ihrem Schutz vor späteren
> Anfechtungen.

{% figure caption="Die Lohnabrechnung entspricht dem 'Arbeitszeiten Nachweis', ist jedoch wesentlich detaillierter", extraClass="float-right" %}
<img src="lohnabrechnung-individuell.png" />
{% endfigure %}

### Lohnabrechnung Individuell

Der Ausdruck "**Lohnabrechnung Individuell**" weist neben den Angaben des "Arbeitszeiten Nachweis" auch die eventuellen Sonn-,
Feiertags- und Nachtarbeitsstunden, sowie die Anzahl eventueller Mahlzeiten aus. Am Fußende sehen Sie die
**Zusammenfassung** nach Stunden und die daraus resultierenden jeweiligen **Euro**-Beträge. Die Lohnangaben beziehen
sich dabei auf das **Arbeitgeber-Brutto**. Dieser Nachweis dient vor allem Ihrer **internen** Dokumentation und ist
nicht zwingend geeignet, den Mitarbeitern ausgehändigt zu werden.

Um die indviduelle Lohnabrechnung eines **einzelnen Mitarbeiters** auszudrucken, gehen Sie in das
[Arbeitszeitblatt](#das-arbeitszeitblatt) des Mitarbeiters, klicken den {% button icon="file-export" %}-Button in
der linken unteren Ecke und wählen die Option "Lohnabrechnung".

Um die indivuellen Lohnabrechnungen **aller Mitarbeiter** auszudrucken, gehen Sie in die
[Arbeitszeiten-Übersicht](#arbeitszeiten-übersicht), klicken den {% button icon="file-export" %}-Button in
der rechten oberen Ecke und wählen die Option "Lohnabrechnung Individuell".

> Im Falle einer Prüfung ist es empfehlenswert, dem Prüfer für eine Stichprobenkontrolle einzelne Ausdrucke der "Lohnabrechnung" zu überlassen. Die offensichtliche Transparenz, Richtigkeit und Glaubwürdigkeit Ihrer Dokumentation durch Pentacode kann den Prüfungsvorgang u.U. erheblich beschleunigen.

### Lohnabrechnung Übersicht

In der Lohnabrechung-Übersicht, sind die Arbeitsstunden und -tage, sowie Zuschlagsstunden, Mitarbeiteressen und das/der
aktuelle Gehalt/Lohn in einer tabellarischen Ansicht zusammengefasst. Dieser Ausdruck ist vor allem für die Übermittlung
an Ihr Lohnbüro gut geeignet und dient als Alternative zum direkten Export/Import in Ihr Lohnbuchhaltungs-Programm.

Um die Lohnabrechung-Übersicht eines Monats auszudrucken, gehen Sie in die [Arbeitszeiten-Übersicht](#arbeitszeiten-übersicht), klicken dort den {% button icon="file-export" %}-Button und wählen die Option "Lohnabrechnung-Übersicht".

{% figure caption="Die Lohnabrechnung-Übersicht fasst die Arbeitsstunden Ihrer Mitarbeiter in einer tabellarischen Ansicht zusammen." %}
<img src="lohnabrechnung-übersicht.png" />
{% endfigure %}

> {% icon "lightbulb " %} **Tipp:** Falls sie Ihre Lohnabrechnung nicht vom ersten bis zum letzten Tag des Monats,
> sondern **monatsübergreifend** vornehmen, können Sie bei der Lohnabrechnung-Übersicht auch einen abweichenden Zeitraum
> wählen, also zum Beispiel vom 15. eines Monats bis zum 14. des Folgemonats.

### Export In Buchhaltungsprogramme

Neben den oben genannten Ausdrucken können Sie lohnabrechnungs-relevante Bewegungsdaten auch in verschieden
Lohnbuchhaltungs-Programme exportieren. Klicken Sie hierzu den {% button icon="file-export" %}-Button in der
[Arbeitszeiten-Übersicht](#arbeitszeiten-übersicht) und wählen Sie das gewünschte Format. Folgende Programme werden
aktuell unterstützt:

- Agenda
- Lodas
- Datev Lohn & Gehalt
- Addison
- Lexware
- LohnAG

> {% icon "info-circle" %} **Hinweis:** Mit der Ausnahme von **LohnAG** erfordert der Export in Buchhaltungsprogramme
> die Erstellung von **Lohnartensätzen**. Mehr Informationen zur Konfiguration von Lohnarten finden Sie unter
> [Einstellungen/Buchhaltung](/hilfe/handbuch/einstellungen/buchhaltung#lohnarten).


## Stammdaten

## Kassenbuch

## 