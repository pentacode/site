---
layout: layouts/hilfe/single.njk
title: Datenexport
icon: download
---

Unter dem Menüpunkt {% button label="Datenexport" icon="download" %} sind alle in Pentacode verfügbaren Datenexporte an einem Ort zusammengefasst. Hier finden Sie verschiede Optionen zum Export von Arbeitszeiten, Lohnberichten und mehr.

> In den verschiedenen Bereichen von Pentacode finden Sie öfters das {%icon "download"%}**-Symbol**, dieses verweist Sie stets in den hier beschriebenen Reiter.

## Lohnbuchhaltung

Hier finden Sie alle Exportoptionen, die der Lohnvorbereitung und -dokumentation dienen.  

### Lohnbericht Übersicht

In der Lohnbericht-Übersicht sind die Arbeitsstunden und -tage, sowie Zuschlagsstunden, Mitarbeiteressen und das aktuelle Gehalt in einer tabellarischen Ansicht zusammengefasst. Dieser Ausdruck ist vor allem für die Übermittlung an Ihr Lohnbüro gut geeignet und dient als Alternative zum direkten Export/Import in Ihr Lohnbuchhaltungs-Programm.
Wählen Sie dazu unter **Lohnbericht (Übersicht)** den gewünschten Zeitraum aus. Unter **Mitarbeiter** können Sie nun auswählen für wen Sie die Lohnberichtübersicht erstellen wollen - dabei können Sie ganze Abteilungen oder einzelne Mitarbeiter auswählen. Wählen Sie eine **Abteilung und einen Mitarbeiter, werden Ihnen nur die Lohndaten der Schichten des Mitarbeiters in dieser Abteilung angezeigt**.
Geben Sie eine Email Adresse in das Feld über {% button label="**Export Starten**" icon="download" %} ein, um die Lohnberichtsübersicht direkt zu verschicken. 

{% figure caption="Hier Exportieren wir die Lohnberichte aller Manager - wie das **Symbol** zeigt ist davon nur ein Mitarbeiter betroffen" %}
<img src="lohnbericht_übersicht.webp" />
{% endfigure %}

-- Wie Icons ins Captions einfügen?


### Lohnabrechnung Detailliert

Die detaillierte Lohnübersicht fasst **die Inhalte des Lohnberichts mit allen Arbeitszeiten zusammen!** So haben Sie in einem Dokument alle relevanten Lohndaten und können gleichzeitig noch überprüfen, durch welche Arbeitseinsätze sich diese zusammensetzen. 
Wählen Sie dazu **Lohnbericht (Detailliert)** aus und geben wieder den gewünschten Zeitraum sowie die Mitarbeiter / Abteilungen ein, für den Sie die detaillierte Lohnübersicht erstellen möchten. Auch hier haben Sie wieder die Möglichkeit die Daten **direkt per Email zu verschicken**. 

> Im Falle einer Prüfung ist es empfehlenswert, dem Prüfer für eine Stichprobenkontrolle einzelne Ausdrucke der "Lohnabrechnung" zu überlassen. Die offensichtliche Transparenz, Richtigkeit und Glaubwürdigkeit Ihrer Dokumentation durch Pentacode kann den Prüfungsvorgang u.U. erheblich beschleunigen.

-- Digitale Version ausreichend oder?

### Export in Buchhaltungsprogramme

Neben den oben genannten Ausdrucken können Sie lohnabrechnungsrelevante Bewegungsdaten auch in verschiedene Lohnbuchhaltungsprogramme exportieren. Wählen Sie dazu das gewünschte Format unter **Lohnbuchhaltung** aus und gehen Sie gleich vor, wie bei der normalen Lohnabrechnung.
Aktuell unterstützte Formate sind:

- Agenda
- Datev Lodas
- Datev Lohn & Gehalt
- Addison
- Lexware
- LohnAG

> Da der Export in das Buchhaltungsprogramm auf einige Daten wie Personalnummern und Lohnarten angewiesen ist, wird Ihnen eine Meldung angezeigt sollten diese fehlen. Sie können unter [Einstellungen/Buchhaltung](/hilfe/handbuch/einstellungen/buchhaltung#lohnarten) Lohnarten erstellen, um diese den Mitarbeitern zuzuweisen und im Export zu integrieren.

{% figure caption="Beim Export dieses Buchhaltungsformat werden wir darauf aufmerksam gemacht, dass für einige Mitarbeiter die Personalnummer fehlt." %}
<img src=".webp" />
{% endfigure %}

-- bedeutung der unterschiedlichen Zeichen?
-- {%icon "hexagon-exclamation"%} {%icon "exclamation-triangle"%} {%icon "info-circle"%}


> {% icon "info-circle" %} **Hinweis:** Mit der Ausnahme von **LohnAG** erfordert der korrekte Export in Buchhaltungsprogramme immer die Erstellung von **Lohnartensätzen**. Mehr Informationen zur Konfiguration von Lohnarten finden Sie unter [Einstellungen/Buchhaltung](/hilfe/handbuch/einstellungen/buchhaltung#lohnarten).



## Arbeitszeiten Exportieren

Pentacode bietet Ihnen einige Optionen, die Arbeitszeiten einzelner Mitarbeiter oder ganzer Abteilungen zu exportieren, sei es für Archivierungszwecke, zur Überprüfung durch den Mitarbeiter oder für die Übermittlung an die Lohnbuchhaltung.

### Nachweis erstellen

Um den Arbeitszeitennachweis zu erstellen navigieren Sie in den Reiter **Datenexport** und klicken auf {%button label = "Arbeitszeit-Nachweis"%}. Wählen Sie nun im Kalender erst einmal den Zeitraum aus, für den Sie den Nachweis erstellen wollen. Soll es ein **Monatsnachweis** sein, können Sie auch gleich einen ganzen Monat unter dem Kalender auswählen. 
Wählen Sie nun unter **Mitarbeiter** aus, für wen Sie den Nachweis erstellen wollen. Sie können dabei alle Mitarbeiter, bestimmte Anstellungsverhältnisse, ganze Abteilungen oder einzelne Mitarbeiter auswählen. Wenn Sie **eine Abteilung und einen Mitarbeiter auswählen, werden nur die Arbeitszeiten des Mitarbeiters in dieser Abteilung exportiert!**

{% figure caption="Wir werden im Arbeitszeitnachweis nur die Schichten dieses Mitarbeiters in der Abteilung **Service** sehen." %}
<img src="mitarbeiter_filter.webp" />
{% endfigure %}

Sollten Sie **den Nachweis direkt per Email verschicken** wollen - können Sie die Empfängeradresse direkt beim Exportieren mit angeben.

**Im Dokumentenarchiv ablegen** sichert eine Kopie des Arbeitszeitennachweises im Dokumentenarchiv des Mitarbeiters und gewährt diesem auch Zugriff darauf. So, dass mit dem Anwählen von **Unterschrift anfordern** der Mitarbeiter den Nachweis auch direkt bestätigen kann, und Ihnen die Absicherung gibt - ganz ohne das Dokument jemals audrucken zu müssen. 

> Wir empfehlen Ihnen ihre Mitarbeiter stets dazu aufzufordern den Arbeitszeitennachweis mit einer Unterschrift zu bestätigen - dies gibt Ihnen Sicherheit im Falle einer Prüfung und deckt Missverständnisse frühzeitig auf. Nutzen Sie dazu wie oben beschrieben die Funktion **Unterschrift anfordern**. Davor müssen Sie jedoch dem Mitarbeiter Zugriff auf sein Dokumentenarchiv gewähren - [hier](/hilfe/handbuch/mitarbeiter/zugaenge-rechte/#berechtigungen-übersicht) können Sie diese Einstellung treffen. 

Klicken Sie nun auf {%button icon="download", lable ="Export starten"%} werden Ihnen die Arbeitszeitnachweise zum **herunterladen bereitgestellt**. Sollten Sie mehrere Mitarbeiter ausgewählt haben, finden Sie diese als einzelne Dokumente in einem Ordner. 

## Stammdaten exportieren

Im Datenexportmenü können Sie auch eine übersichtliche Kopie der Stammdaten ihrer Mitarbeiter anfordern. Klicken Sie dazu auf {%button label="Datenblatt"%} und wählen wieder die Abteilungen oder einzelnen Mitarbeiter deren Daten Sie exportieren möchten. Auch hier haben Sie wieder die Möglichkeit das **Datenblatt direkt an eine Email Adresse zu verschicken**. Geben Sie dazu die Empfängeradresse in das Textfeld unter **Versenden an** ein. Mit einem Klick auf {%button label="**Export starten**"%} stehen Ihnen die Daten dann wieder zum Download bereit. 

## Kassenbuch

Auf die gleiche Art und Weise wie die Lohn- und Mitarbeiterdaten können Sie auch das Kassenbuch vorgefertigt in ihr Buchhaltungsprogramm exportieren. Wählen Sie dazu erst unter **Kassenbuch** das gewünschte DATEV-Format und anschließend den gewünschten Zeitraum und Standort aus. Auch hier haben Sie wieder die Option eine Kopie der Daten direkt per Email zu verschicken. Geben Sie dazu die gewünschte Empfängeradresse in das Textfeld "Versenden an" ein.      

-- Gif Kassenbuch exportieren

-- Optionen des Kassenbuchexports