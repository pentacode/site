---
layout: layouts/single.njk
title: Datenexport
icon: download
weight: 110
---

Unter dem Menüpunkt "Datenexport", sind alle in Pentacode verfügbaren Datenexporte an einem Ort zusammengefasst. Hier finden Sie verschiedene Optionen zum Export von Arbeitszeiten, Lohnberichten und mehr.

>  {% icon "info-circle" %} **In den verschiedenen Bereichen von Pentacode finden Sie öfters das {%icon "download"%}-Symbol, dieses verweist Sie stets in den hier beschriebenen Reiter.**

## Exportformat

Sie können über den {% button label="Datenexport", icon="download" %}-Reiter verschiedene Dateien mit unterschiedlichen Inhalten exportieren. Je nach Inhalt und Zweck werden die Dateien dabei in unterschiedlichem Dateiformat exportiert, die verschiedenen Icons neben der Exportfunktion geben dabei Auskunft über das Format:

- {% icon "file-pdf" %} Der Export findet in ein PDF-Format statt.
- {% icon "file-text" %} Der Export findet als Textdatei statt, die extern eingelesen werden muss.
- {% icon "file-csv" %} Der Export findet in ein CSV-Format statt. 
- {% icon "file-excel" %} Der Export findet im Standard Excel-Format statt. 

### Lohnbuchhaltung

Hier finden Sie alle Exportoptionen, die der Lohnvorbereitung und -dokumentation dienen. Die verschiedenen Optionen umfassen dabei: 

- **Lohnbericht (Detailliert):** Die detaillierte Lohnübersicht fasst die Inhalte des Lohnberichts mit allen Arbeits- und Abwesenheitszeiten, sowie Änderungen am Vertrag sowie dem Arbeitszeitkonto zusammen. **So haben Sie in einem Dokument alle relevanten Lohn- und Bewegungsdaten zusammengefasst!**

- **Lohnbericht (Übersicht):** In der Lohnbericht-Übersicht sind die Arbeitsstunden und -tage, sowie Zuschlagsstunden, Mitarbeiteressen und das aktuelle Gehalt in einer tabellarischen Ansicht zusammengefasst. Dieser Ausdruck ist vor allem für die Übermittlung an Ihr Lohnbüro gut geeignet und dient als Alternative zum direkten Export/Import in Ihr Lohnbuchhaltungs-Programm.

- **Export in Buchhaltungsprogramme:** Neben den Berichten in PDF-Form können Sie lohnabrechnungsrelevante Bewegungsdaten auch in verschiedene Lohnbuchhaltungsprogramme exportieren. 
Aktuell unterstützte Formate sind:
    - Datev Lohn & Gehalt
    - Datev Lodas
    - Agenda
    - Lexware
    - Addison
    - LohnAG
    - Sage

### Arbeitszeiten

Im **Arbeitszeit-Nachweis** werden alle geleisteten Schichten für die [ausgewählten Mitarbeiter](#mitarbeiterfilter) im [ausgewählten Zeitraum](#zeitraum) mit Pausen und Gesamtdauer, sowie der Stand des Arbeitszeitkontos aufgeführt. Der Arbeitszeitennachweis ist besonders dafür sinnvoll, die Arbeitszeiten durch den Mitarbeiter [gegenzeichnen zu lassen](#unterschrift-anfordern), um Dokumentationsfehler frühzeitig aufzudecken und im Falle einer Prüfung die Bewegungsdaten der Mitarbeiter vorlegen zu können. 

### Dienstplan 

Hier können Sie den Dienstplan für einzelne Mitarbeiter, Abteilungen oder die ganze Belegschaft eines Standortes exportieren. Der Export findet im Excel-Format statt. 

### Konten

Hier können Sie die verschiedenen Kontenstände und Bewegungen ihrer Mitarbeiter exportieren. Durch die Option **Auflösung** können Sie bestimmen, ob die Konten im Export jeweils im Wochen-, Monats- oder Jahresrhythmus saldiert werden sollen.  

Die Inhalte der Exporte des Arbeitszeit-, Urlaubs- und Zuschlagskontos gleichen den unter dem Reiter [Mitarbeiter]\(/handbuch/mitarbeiter/) dargestellten Konten.

### Stammdatenblatt

Unter {% button label="**Datenblatt**" %} werden alle unter [Stammdaten]\(/handbuch/mitarbeiter/stammdaten/) aufgeführten Daten des Mitarbeiters auf einer übersichtlichen PDF-Seite aufgeführt. 
Die kann nützlich sein, um Mitarbeiterdaten zu übertragen - **achten Sie dabei aber immer darauf, dass es sich hierbei um sensible Daten handelt!**

### Kassenbuch

Auf die gleiche Art und Weise wie die Lohn- und Mitarbeiterdaten können Sie auch die Inhalte des Kassenbuchs übertragen. Dies dient dem einfachen Export des in Pentacodes geführten Kassenbuch in die Lohnbuchhaltungssoftware ihrer Wahl. Die verschiedenen Formate, die Ihnen zur Verfügung stehen, umfassen neben einem einfachen Ausdruck als PDF:

- DATEV Buchungsstapel
- DATEV online
- Lexware
- Generisch (Alle Kassenbucheinträge als standardmäßige CSV-Datei für den Import in verschiedene Programme)

### Individuelle Exporte

Individuelle Exporte können Sie verwenden, um jede Zusammenstellung von Daten in einer Excel Tabelle zusammenzufassen. Dabei sind ihrer Kreativität in der Anwendung kaum Grenzen gesetzt. Klicken Sie auf das {%icon "toggle-on"%} **Symbol** um die Liste möglicher Spalten aufzuführen. 

Mit {%icon "toggle-off"%} **Keine** und {%icon "toggle-on"%} **Alle** könne Sie alle Spalten an- oder abwählen. Wählen Sie sonst die gewünschten Spalten für ihre Exporttabelle aus und verfahren Sie mit [Zeitraum](#zeitraum) und [Mitarbeiterfilter](#mitarbeiterfilter) genau wie in den anderen Exportformaten. 

> {% icon "lightbulb" %} **Tipp:** In den Mitarbeiterkonten, Arbeitszeiten und den Verträgen steht Ihnen in der rechten oberen Ecke ein {% icon "file-excel" %} Button zur Verfügung - mit diesem können Sie **die aktuell ausgewählten Filter direkt als Exportvorlage nutzen!**

{% figure caption= "Alle Kontendaten Ihrer Aushilfen und freien Mitarbeiter in einer Tabelle? Die Individuellen Exporte machen es möglich!" %}

<img src="individuelle_exporte.gif"/>

{% endfigure %}

## Exportoptionen

Nachdem Sie [das gewünschte Exportformat](#exportformat) ausgewählt haben, können Sie durch weitere Optionen den Export personalisieren. 

### Zeitraum

Mit den Pfeiltasten können Sie zwischen den Monaten des Jahres wechseln und auswählen welchen Zeitraum Sie für den Datenexport wünschen. Durch einen Klick auf den Kalender können Sie einen **individuellen Zeitraum** wählen. Dazu bestimmen Sie im linken Kalender den Anfangs- und im rechten Kalender den Endzeitpunkt ihres Exports. 

{% figure caption="Wollen Sie den Lohnbericht nur für August erstellen oder doch für die gesamte Sommersaison? Wählen Sie den gewünschten Zeitraum einfach aus." %}
<img src="zeitraum.gif" />
{% endfigure %}

### Mitarbeiterfilter

Im Mitarbeiterfilter können wir auswählen für welche Mitarbeitergruppen wir einen Export erstellen wollen. Dazu können wir über die Filterleiste die gewünschten Mitarbeiter über Abteilungen, Anstellungsverhältnisse oder einzeln auswählen. Dabei ist zu beachten, dass Filteroptionen sich **untereinander weiter beschränken.**

> {% icon "person-chalkboard" %}**Beispiel**: Wir wählen im Filter die Vertragsart 'Festangestellt' und die Abteilung 'Küche' aus. Nun werden nur die Mitarbeiter ausgewählt, die **sowohl festangestellt als auch in der Küche tätig sind.** Wählen wir zusätzlich die Abteilung 'Service', werden alle Festangestellten angezeigt, welche in **Küche, Service oder in beiden Abteilungen tätig sind.**

{% figure caption="Hier etwa exportieren wir die Lohnberichte aller Manager." %}
<img src="lohnbericht_übersicht.webp" />
{% endfigure %}

> **Tipp:** Durch die Auswahl einer Abteilung und eines spezifischen Mitarbeiters werden nur die Arbeitszeiten und Lohndaten exportiert, die dieser Mitarbeiter **innerhalb der gewählten Abteilung** besitzt.

{% figure caption="Wir werden im Lohnbericht nur die Daten dieses Mitarbeiters in der Abteilung **Manager** sehen." %}
<img src="mitarbeiter_filter.webp" />
{% endfigure %}

### Per Email versenden

Bei sämtlichen Exporten steht Ihnen die Option zur Verfügung im Feld **Versenden an...** eine Email Adresse einzutragen, an die Sie eine Kopie des Exports verschicken wollen. Dies kann bspw. nützlich sein, um ihrer Buchhaltung vereinfacht Lohndaten zukommen zu lassen. 
**Einmal eingegeben wird die Email Adresse automatisch ausgefüllt und stets eine Kopie sämtlicher Exporte verschickt!**

### Im Dokumentenarchiv ablegen

Für den Arbeitszeitennachweis sowie den detaillierten Lohnbericht bietet Pentacode Ihnen die Möglichkeit die exportierte Datei zusätzlich im Dokumentenarchiv des Mitarbeiters zu speichern. Wählen Sie dazu die Option {% button label="**Im Dokumentenarchiv ablegen**" %} an. 

#### Schlagwörter auswählen

Sobald Sie **Im Dokumentenarchiv ablegen** angewählt haben, erscheint zusätzlich die Option das Dokument mit einem Schlagwort zu versehen. Dieses hilft Ihnen die gewünschte Datei schneller ausfindig zu machen. Weitere Informationen zu den Schlagwörtern finden Sie [hier]\(/handbuch/einstellungen/dokumente). 

> {% icon "lightbulb" %} **Tipp:** Sie sollten die gleiche Art von Dokument am besten stets mit dem gleichen Schlagwort versehen - Also etwa alle Arbeitszeitnachweise mit **'Arbeitszeiten'**. 

#### Unterschrift anfordern

Wenn Sie **Im Dokumentenarchiv ablegen** angewählt haben erscheint für Arbeitszeitnachweise zusätzlich die Möglichkeit ihren Mitarbeiter aufzufordern diese gegenzuzeichnen und zu bestätigen. Dieser wird anschließend eine Nachricht in seiner [Mitarbeiterapp]\(/handbuch/mitarbeiter-app/) bekommen welche ihn auf die Anfrage aufmerksam macht. Einmal unterzeichnet wird das Dokument anschließend so im Dokumentenarchiv des Mitarbeiters hinterlegt. 

> {% icon "lightbulb" %} **Tipp:** Wir empfehlen Ihnen ihre Mitarbeiter stets dazu aufzufordern den Arbeitszeitennachweis mit einer Unterschrift zu bestätigen - dies gibt Ihnen Sicherheit im Falle einer Prüfung und deckt Missverständnisse frühzeitig auf. Nutzen Sie dazu wie oben beschrieben die Funktion **Unterschrift anfordern**. Dazu muss der Mitarbeiter jedoch einen [Zugang besitzen]\(/handbuch/mitarbeiter/allgemein/).


## Fehlermeldungen

Da der korrekte Export in ihr Buchhaltungsprogramm auf einige Daten wie **Personalnummern und Lohnarten** angewiesen ist, werden Sie eventuell darauf aufmerksam gemacht, sollten Daten unvollständig sein. Pentacode unterscheidet dabei drei verschiedene Meldungen:

- {% icon "info-circle" %} Hier werden Ihnen Informationen bspw. zu fehlenden Lohnarten angegeben. Diese können in der Regel übersprungen werden, geben Ihnen aber Hinweise, für welche Mitarbeiter Personaldaten fehlen.
- {% icon "exclamation-triangle" %} Sind **Warnungen**, die Sie darauf aufmerksam machen, dass der Lohnbericht so nicht von ihrer Lohnbuchhaltung zu verwenden ist. Diese Punkte sollten Sie möglichst beheben.
- {% icon "hexagon-exclamation" %} Sind Fehlermeldungen, die den Export des Lohnberichts verhindern. Bis diese behoben sind, ist ein Export nicht möglich. 

{% figure caption="Beim Export dieses Lohnberichts werden wir darauf aufmerksam gemacht, dass es Probleme geben kann, wenn für Mitarbeiter Personalnummern fehlen." %}
<img src="fehlermeldung.webp" />
{% endfigure %}


## Dateien herunterladen und drucken

Sobald Sie auf {% button icon="download", label="Export starten" %} klicken, bietet Ihnen Pentacode mehrere Optionen an:

- {% button icon="eye", label="Öffnen" %} Hier wird eine Vorschau der Datei in ihrem Browser oder in Excel geöffnet.
- {% icon "download" %} *Downloaden* Sie laden die Dateien zusammengefasst in einem Ordner herunter. Dabei wird für die Nachweise und Berichte jedes Mitarbeiters eine eigene Datei innerhalb des Ordners erstellt.
- {% icon "print" %} *Drucken* Die Druckvorschau wird geöffnet, mit einem für den Druck optimierten Format der Datei. 
