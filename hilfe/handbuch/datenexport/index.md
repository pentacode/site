---
layout: layouts/hilfe/single.njk
title: Datenexport
icon: download
---

Unter dem Menüpunkt {% button label="Datenexport", icon="download" %} sind alle in Pentacode verfügbaren Datenexporte an einem Ort zusammengefasst. Hier finden Sie verschiede Optionen zum Export von Arbeitszeiten, Lohnberichten und mehr. Dabei geben Ihnen verschiedene Icons neben den Exportfunktionen Auskunft darüber in welchem Format der Export stattfindet:

- {% icon "file-pdf" %} Der Export findet in ein PDF-Format statt.
- {% icon "file-text" %} Der Export findet als Textdatei statt, die extern eingelesen werden muss.
- {% icon "file-csv" %} Der Export findet in ein CSV-Format statt. 

> In den verschiedenen Bereichen von Pentacode finden Sie öfters das {%icon "download"%}**-Symbol**, dieses verweist Sie stets in den hier beschriebenen Reiter.

## Lohnbuchhaltung

Hier finden Sie alle Exportoptionen, die der Lohnvorbereitung und -dokumentation dienen.  

### Lohnbericht Übersicht

In der Lohnbericht-Übersicht sind die Arbeitsstunden und -tage, sowie Zuschlagsstunden, Mitarbeiteressen und das aktuelle Gehalt in einer tabellarischen Ansicht zusammengefasst. Dieser Ausdruck ist vor allem für die Übermittlung an Ihr Lohnbüro gut geeignet und dient als Alternative zum direkten Export/Import in Ihr Lohnbuchhaltungs-Programm.
Wählen Sie dazu unter **Lohnbericht (Übersicht)** den gewünschten Zeitraum aus. Unter **Mitarbeiter** können Sie nun auswählen für wen Sie die Lohnberichtübersicht erstellen wollen - dabei können Sie ganze Abteilungen oder einzelne Mitarbeiter auswählen. Wählen Sie eine **Abteilung und einen Mitarbeiter, werden Ihnen nur die Lohndaten der Schichten des Mitarbeiters in dieser Abteilung angezeigt**.

{% figure caption="Hier Exportieren wir die Lohnberichte aller aktiven Servicekräfte - die Nummer neben den Abteilung zeigt Ihnen die Anzahl der erfassten Mitarbeiter." %}
<img src="lohnbericht_übersicht.webp" />
{% endfigure %}

### Lohnabrechnung Detailliert

Die detaillierte Lohnübersicht fasst **die Inhalte des Lohnberichts mit allen Arbeits- und Abwesenheitszeiten, sowie Änderungen am Vertrag sowie dem Arbeitszeitkonto zusammen!** So haben Sie in einem Dokument alle relevanten Lohn- und Bewegungsdaten zusammengefasst. 
Wählen Sie dazu **Lohnbericht (Detailliert)** aus und geben wieder den gewünschten Zeitraum, sowie die Mitarbeiter / Abteilungen ein, für den Sie die detaillierte Lohnübersicht erstellen möchten.

> Wir empfehlen monatliche Lohnberichte stets durch Anwählen des Buttons [**Im Dokumentenarchiv ablegen**](#im-dokumentenarchiv-ablegen) in Pentacode zu hinterlegen. Zwar können Sie auch jederzeit Lohnberichte vergangener Monate erstellen - **im Falle einer Prüfungen haben Sie so jedoch die Lohnberichte ihrer Mitarbeiter stets geordnet und sofort zur Verfügung**. 

### Export in Buchhaltungsprogramme

Neben den oben genannten Berichten in PDF-Form können Sie lohnabrechnungsrelevante Bewegungsdaten auch in verschiedene Lohnbuchhaltungsprogramme exportieren. Wählen Sie dazu das gewünschte Format unter **Lohnbuchhaltung** aus und gehen Sie genau so vor, wie bei der normalen Lohnabrechnung.
Aktuell unterstützte Formate sind:

- Agenda
- Datev Lodas
- Datev Lohn & Gehalt
- Addison
- Lexware
- LohnAG

#### Fehlermeldungen

Da der korrekte Export in ihr Buchhaltungsprogramm auf einige Daten wie **Personalnummern und Lohnarten** angewiesen ist, werden Sie darauf aufmerksam gemacht, sollten Daten unvollständig sein. Pentacode unterscheidet dabei drei verschiedene Meldungen:

- {%icon "info-circle"%} Hier werden Ihnen Informationen bspw. zu fehlenden Lohnarten angegeben. Diese können in der Regel übersprungen werden, geben Ihnen aber Hinweise, für welche Mitarbeiter Personaldaten fehlen.
- {%icon "exclamation-triangle"%} Sind **Warnungen**, die Sie darauf aufmerksam machen, dass der Lohnbericht so nicht von ihrer Lohnbuchhaltung zu verwenden ist. Diese Punkte sollten Sie möglichst beheben.
- {%icon "hexagon-exclamation"%} Sind Fehlermeldungen, die den Export des Lohnberichts verhindern. Bis diese behoben sind, ist ein Export nicht möglich. 

{% figure caption="Beim Export dieses Lohnberichts werden wir darauf aufmerksam gemacht, dass es Probleme geben kann, wenn für Mitarbeiter Personalnummern fehlen." %}
<img src="fehlermeldung.webp" />
{% endfigure %}

> {% icon "info-circle" %} **Hinweis:** Mit der Ausnahme von **LohnAG** erfordert der korrekte Export in Buchhaltungsprogramme immer die Erstellung von **Lohnartensätzen**. Mehr Informationen zur Konfiguration von Lohnarten finden Sie unter [Einstellungen/Buchhaltung](/hilfe/handbuch/einstellungen/buchhaltung#lohnarten).


## Arbeitszeiten Exportieren

Pentacode bietet Ihnen einige Optionen, die Arbeitszeiten einzelner Mitarbeiter oder ganzer Abteilungen zu exportieren, sei es für Archivierungszwecke, zur Überprüfung durch den Mitarbeiter oder für die Übermittlung an die Lohnbuchhaltung.

### Nachweis erstellen

Um den Arbeitszeitennachweis zu erstellen navigieren Sie in den Reiter **Datenexport** und klicken auf {% button label="Arbeitszeit-Nachweis" %}. Wählen Sie nun im Kalender erst einmal den Zeitraum aus, für den Sie den Nachweis erstellen wollen. Soll es ein **Monatsnachweis** sein, können Sie auch gleich einen ganzen Monat unter dem Kalender auswählen. 
Wählen Sie nun unter **Mitarbeiter** aus, für wen Sie den Nachweis erstellen wollen. Sie können dabei alle Mitarbeiter, bestimmte Anstellungsverhältnisse, ganze Abteilungen oder einzelne Mitarbeiter auswählen. Wenn Sie **eine Abteilung und einen Mitarbeiter auswählen, werden nur die Arbeitszeiten des Mitarbeiters in dieser Abteilung exportiert!**

{% figure caption="Wir werden im Arbeitszeitnachweis nur die Schichten dieses Mitarbeiters in der Abteilung **Service** sehen." %}
<img src="mitarbeiter_filter.webp" />
{% endfigure %}

**Im Dokumentenarchiv ablegen** sichert eine Kopie des Arbeitszeitennachweises im Dokumentenarchiv des Mitarbeiters und gewährt diesem auch Zugriff darauf. So, dass mit dem Anwählen von **Unterschrift anfordern** der Mitarbeiter den Nachweis auch direkt bestätigen kann, und Ihnen die Absicherung gibt - ganz ohne das Dokument jemals audrucken zu müssen. 

> Wir empfehlen Ihnen ihre Mitarbeiter stets dazu aufzufordern den Arbeitszeitennachweis mit einer Unterschrift zu bestätigen - dies gibt Ihnen Sicherheit im Falle einer Prüfung und deckt Missverständnisse frühzeitig auf. Nutzen Sie dazu wie oben beschrieben die Funktion **Unterschrift anfordern**. Davor müssen Sie jedoch dem Mitarbeiter Zugriff auf sein Dokumentenarchiv gewähren - [hier](/hilfe/handbuch/mitarbeiter/zugaenge-rechte/#berechtigungen-übersicht) können Sie diese Einstellung treffen. 

Klicken Sie nun auf {% button icon="download", lable ="Export starten" %} werden Ihnen die Arbeitszeitnachweise zum **herunterladen bereitgestellt**. Sollten Sie mehrere Mitarbeiter ausgewählt haben, finden Sie diese als einzelne Dokumente in einem Ordner. 

## Stammdaten exportieren

Im Datenexportmenü können Sie auch eine übersichtliche Kopie der Stammdaten ihrer Mitarbeiter anfordern. Klicken Sie dazu auf {% button label="Datenblatt" %} und wählen wieder die Abteilungen oder einzelnen Mitarbeiter deren Daten Sie exportieren möchten. Mit einem Klick auf {% button label="**Export starten**" %} stehen Ihnen die Daten dann wieder zum Download bereit. 

## Kassenbuch

Auf die gleiche Art und Weise wie die Lohn- und Mitarbeiterdaten können Sie auch das Kassenbuch vorgefertigt in ihr Buchhaltungsprogramm exportieren. Wählen Sie dazu erst unter **Kassenbuch** das gewünschte Format und anschließend den **gewünschten Zeitraum und Standort aus**. Die verschiedenen Formate, die Ihnen zur Verfügung stehen umfassen neben einem einfachen Ausdruck als PDF:

- DATEV Buchungsstapel
- DATEV online
- Lexware
- Generisch (Alle Kasssenbucheinträge als standardmäßige CSV-Datei für den Import in verschiedene Programme)

## Per Email versenden

Bei sämtlichen Exporten steht Ihnen die Option zur Verfügung im Feld **Versenden an...** eine Email-Adresse einzutragen, an die Sie eine Kopie des Exports verschicken wollen. Dies kann bspw. nützlich sein, um ihrer Buchhaltung vereinfacht Lohndaten zukommen zu lassen. 
**Einmal eingegeben wird die Email Adresse automatisch ausgefüllt und stets eine Kopie verschickt!**
-- Option für mehrere Emails