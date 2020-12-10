---
title: Vertrag
weight: 
icon: ''
anchors: []

---
Im Menüpunkt **"Vertrag"** geben Sie die **arbeitszeit**- und **lohnrelevanten Angaben** zum Mitarbeiter ein. Achten Sie hier bitte auf die Richtigkeit und Vollständigkeit der Angaben. Die Berechnung aller Konten eines Mitarbeiters, die gesamte Lohnvorbereitung und der Export der Daten beziehen sich auf die hier hinterlegten Daten.

Bitte stellen Sie sicher, dass die hier hinterlegten Angaben zu jedem Zeitpunkt den Vereinbarungen entsprechen, die Sie mit dem Mitarbeiter laut Arbeitsvertrag getroffen haben.

## Vertragslaufzeit

Geben Sie bei **Vertragsbeginn** das Datum ein, zu dem das Beschäftigungsverhältnis des Mitarbeiters in Ihrem Unternehmen begonnen hat.

{{< figure caption="Geben SIe den Vertragsbeginn und ein evtl. bekanntes Ende ein" >}}

![](/uploads/vertragsbeginn.png)

{{< /figure >}}

Unter **Vertragsende** ist das Datum einzusetzen, zu dem das Beschäftigungsverhältnis endet.

Im Falle eines befristeten Arbeitsverhältnisses ist es empfehlenswert, das Fristende bereits bei der Anlage des Mitarbeiters im System festzuhalten.

**Bemerkungen** bezeichnet einen Textbereich, in den Sie **Notizen** zum Mitarbeiter hinzufügen können.

Wenn Sie den Button bei "**Inaktiv**" setzen, bleibt der Mitarbeiter **im Dienstplan sichtbar**, kann jedoch **nicht geplant** werden. "Inaktiv" unterbricht jedoch nicht die Fortberechnung der verschiedenen Konten eines Mitarbeiters.

## Beschäftigungsverhältnis

Wählen Sie die Art des Beschäftigungsverhältnisses durch Anklicken des betreffenden Feldes.

{{< figure caption="Das gewählte Feld wird bei Anklicken blau" >}}

![](/uploads/beschaftigungsverhaltnis.png)

{{< /figure >}}

Die Überwachung von Lohngrenzen, die Meldung bestimmter Probleme und der Export der Daten in die Lohnbuchhaltung beziehen sich auf das gewählte Beschäftigungsverhältnis.

## Arbeitszeit

Für die Berechnung der Sollarbeitszeit eines Mitarbeiters stehen Ihnen 5 unterschiedliche Modi zur Wahl.

{{< figure caption="So können Sie die Weise wählen, in der die Sollstunden des Mitarbeiters berechnet werden" >}}

![](/uploads/sollstunden.png)

{{< /figure >}}

Welcher Modus für SIe im Einzelfall der möglicherweise geeignete ist, erfahren Sie unter **_Rezepte und Tipps_** im Artikel **_Sollstundenberechnung_**.

### Wochenfaktor

Bei der Wahl "Wochenfaktor" erscheint das Eingabefeld Wochenstunden.

Geben Sie hier die Anzahl der Wochenstunden ein, die ein Mitarbeiter laut Arbeitsvertrag.

{{< figure caption="Berechnung der Sollstunden mit Faktor 4,35" >}}

![](/uploads/wofaktor2.png)

{{< /figure >}}

Die Soll-Arbeitszeit des Mitarbeiters errechnet Pentacode automatisch. Die Anzahl der Wochenstunden wird mit dem Faktor 4,35 multipliziert .

Die monatliche Soll-Arbeitszeit bei einem Festangestellten mit einer 40-Stunden Woche beträgt somit 40 x 4,35 = 174 Stunden pro Monat. Diese Stundenanzahl gilt gleichbleibend für jeden Monat.

### Monatsgenau

Bei der Wahl "Monatsgenau" erscheint das Eingabefeld Wochenstunden.

Geben Sie hier die Anzahl der Wochenstunden ein, die ein Mitarbeiter laut Arbeitsvertrag.

{{< figure caption="Berechnung der Sollstunden entsprechend der Länge eines Monats" >}}

![](/uploads/monatsgenau2.png)

{{< /figure >}}

Bei dieser Auswahl errechnet sich die Soll-Arbeitszeit des Mitarbeiters anhand der Länge eines Monats. Sie schwankt somit von Monat zu Monat.

Die  Um einen Festangestellten mit einer 40-Stunden Woche als Beispiel zu nehmen: Dessen monatliche Soll-Arbeitszeit liegt in einem Monat mit 30 Tagen bie 171,... Stunden, in einem Monat mit 31 Tagen bei 177,.. Stunden und im Februar (sofern kein Schaltjahr) bei 160 Stunden.

### Monatsgenau Ohne Feiertage

Eingabe und  Berechnung der monatlichen Soll-Arbeitszeit entsprechen "Monatsgenau".

Bei dieser Auswahl errechnet sich die Soll-Arbeitszeit des Mitarbeiters anhand der Länge eines Monats. Sie schwankt somit von Monat zu Monat.

Pentacode kennt die gesetzlichen Feiertage des Bundeslands, in dem sich Ihr Unternehmen oder die betreffende FIliale Ihres Unternehmens befindet. Fällt in einem Monat ein gesetzlicher Feiertag auf einen Wochentag, so wird die monatliche Soll-Arbeitszeit um den Feiertag gekürzt.

### Feste Wochentage

Bei der Wahl "**Feste Wochentage**" erscheint ein Eingabefeld der sieben Wochentage.

Geben Sie hier die Stunden ein, die ein Mitarbeiter an den betreffenden Tagen arbeiten soll. Diese Auswahl ist im Besonderen zu empfehlen, wenn ein Mitarbeiter **feste Arbeitstage** hat und diese in ihrer Länge auch noch voneinander abweichen. Dies trifft häufig für Mitarbeiter in der Verwaltung zu, bei denen z.B. der Freitag ein verkürzter Arbeitstag ist.

{{< figure caption="Sollstundenberechnung nach Arbeitstagen" >}}

![](/uploads/feste-wotage.png)

{{< /figure >}}

Die Soll-Arbeitszeit des Mitarbeiters errechnet sich über die Häufigkeit, in der ein bestimmter Wochentag in einem Monat auftritt.

Bei tagesabhängig unterschiedlichen Arbeitszeiten hat diese Art der Berechnung Wirkung bei Krank und Urlaub. Wird z.B. ein MItarbeiter, der am Freitag nur 4 Stunden arbeitet, an einem Freitag krank oder nimmt an diesem Tag Urlaub, so werden für sein Arbeitszeitkonto wie auch für die Lohnabrechnung nur 4 Stunden berechnet.

### Feste Wochentage abzgl. Feiertage

Eingabe und  Berechnung der monatlichen Soll-Arbeitszeit entsprechen "Feste Wochentage".

Bei diesem Modus wird jedoch ein Feiertag, der auf einen Arbeitstag des Mitarbeiters fällt, von seiner Soll-Arbeitszeit in Abzug gebracht. Hierbei wird Tag-genau unterschieden.

Fällt ein Feiertag z.B. auf einen Freitag, an dem der Mitarbeiter nur 4 Stunden arbeitet, so werden auch nur 4 Stunden berechnet.

### Jahresarbeitszeitkonto Vereinbart

Pentacode überwacht die Einhaltung des gesetzlichen Mindestlohns. Eine versehentliche Unterschreitung des Mindestlohns könnte eintreten, wenn z.B. ein Mitarbeiter mit Festlohn Überstunden leistet. Sein Festlohn geteilt durch die Anzahl der Arbeitsstunden im betreffenden Monat kann einen Stundenlohn ergeben, der unter dem gesetzlichen Mindestlohn liegt.

In diesem Fall erhalten Sie in Pentacode eine _Problemmeldung_.

Dieses  Problem können Sie vermeiden, indem Sie mit dem Mitarbeiter die Führung eines **Jahresarbeitszeitkontos** vereinbaren.

Setzen Sie in diesem Fall den Button bei "**Jahresarbeitszeitkonto Vereinbart**".

{{< figure caption="Hier bestätitgen SIe die Vereinbarung eines Jahresarbeitszeitkontos" >}}

![](/uploads/jaz-vereinbart.png)

{{< /figure >}}

Über- und Minderstunden werden in Pentacode grundsätzlich und für alle Mitarbeiter (also selbst bei Aushilfen) saldiert und in den einzelnen Jahresarbeitszeitkonten in die Zukunft vorgetragen.

Rechtswirksam wird ein Jahresarbeitszeitkonto jedoch erst, wenn dessen Führung mit dem Mitarbeiter schriftlich vereinbart ist. Sollte dies bei Ihnen noch nicht der Fall sein, so senden wir Ihnen gerne eine entsprechende Vereinbarung als Ergänzung zum bestehenden Arbeitsvertrag zu. Wenden Sie sich hierzu einfach an unseren Support.

### Fehlstundenberechnung

Wenn Sie "Feste Wochentage" als Berechnungsmethode gewählte haben, werden die Fehlststunden über die jeweiligen Tage ermittelt. Für die Einstellungen "**Wochenfaktor**" und "**Monatsgenau**" stehen Ihnen für die Berechnung von Fehlzeiten bei Krank und Urlaub **zwei Möglichkeiten** zur Verfügung

#### Feste Stundenzahl

Wenn Sie "**Feste Stundenzahl**" wählen erscheint ein Eingabefeld, in das Sie die Anzahl der Stunden eingeben, die der Mitarbeiter leisten soll. Bei einem Mitarbeiter mit 40-Stunden-Woche und 5 Arbeitstagen wären das z.B. 8 Stunden.

{{< figure caption="Berechnung der Lohnfortzahlung mit festem Stundensatz" >}}

![](/uploads/feste-stundenzahl.png)

{{< /figure >}}

Bei dieser Einstellung wird jeder Tag, an dem der Mitarbieter als Krank oder in Urlaub im Dienstplan eingetragen ist, mit 8 Stunden bewertet. Dies gilt sowohl für die Berechnung im Arbeitszeitkonto wie auch für die Lohnfortzahlung in der Buchhaltung.

#### 13-Wochen Durchschnitt

Bei dieser Einstellung errechnet Pentacode den Wert eines Urlaub- oder Kranktages an der Arbeitszeit, die der Mitarbeiter im Durchschnitt der letzten 13 Wochen gearbeitet hat.

{{< figure caption="Berechnung der Sollstunden im 13-Wochenschnitt" >}}

![](/uploads/13-wochen.png)

{{< /figure >}}

Sollte der Mitarbeiter sozialversicherungsfreie Zuschläge erhalten, werden auch die Zuschläge errechnet, die er im Durchschnitt der letzten 13 Wochen erhalten hat. Da diese Zuschläge im Lohnfortzahlungsfall beitragspflichtig abzurechnen sind, werden sie auch getrennt als beitragspflichtige Zuschläge ausgewiesen.

Pentacode unterscheidet bei der Berechnung zwischen Wochentagen und Sonntagen. Dies hat zur Folge, dass bei einem Krank- oder Urlaubstag, der auf einen Wochentag fällt, keine Sonn- oder Feiertagszuschläge hinzugerechnet werden. Diese wären ansonsten beitragspflichtig abzurechnen.

#### Hinweis bei Einführung von Pentacode

Wenn Sie mit Pentacode beginnen, ist es empfehlenswert, in den ersten drei Monaten mit der Einstellung "Feste Stundenzahl" zu beginnen. Die Einstellung "13-Wochenschnitt" ist zu Beginn ungeeignet, da in den ersten Wochen der Zeitraum, auf den Pentacode zurückgreifen kann, zu kurz ist, um einen verlässlichen Durchschnitt zu errechnen.

## Lohn / Gehalt

### Lohn/Gehalt (brutto)

Geben Sie unter **"Alle Arbeitsbereiche"** das Standardgehalt des Mitarbeiters ein.

Wird ein Mitarbeiter **nach Stunden** bezahlt, wählen Sie im Dropdown-Menü **Stunden**, handelt es sich um einen **festen Monatslohn**, wählen Sie **Monat**.

{{< figure caption="Hier geben Sie den Lohn ein und legen fest, ob es sich um einen Stunden- oder Monatslohn handelt" >}}

![](/uploads/gehalt.png)

{{< /figure >}}

### Provision

Wenn ein Mitarbeiter **Umsatzprovision** erhält, geben Sie unter Provision den Prozentsatz ein. **Voraussetzung** für die Berechnung der Provision ist die **Erfassung** des individuellen **Umsatzes** im Hauptmenüpunkt "Zeiterfassung".

{{< figure caption="Wenn Sie hier einen Wert >0 einsetzen, erscheint in der Tagesübersicht "Zeiterfassung" bei diesem Mitarbeiter ein Eingabefeld für die Erfassung des Umsatzes" >}}

![](/uploads/provision2.png)

{{< /figure >}}

Wenn sich die Provision auf den Netto-Umsatz bezieht, ist dort der Netto-Umsatz des Mitarbeiters einzugeben. Bezieht sie sich auf den Brutto-Umsatz, entsprechend der Brutto-Umsatz.

### Lohnartensatz

Über den Lohnartensatz wird der **Export** der Daten in die Lohnbuchhaltung organisiert.

Mit dem Drop-down-Pfeil können Sie unter den Lohnarten wählen, die sie unter "Einstellungen" und dort "Buchhaltung angelegt haben.

{{< figure caption="Selbst wenn ein Mitarbeiter in mehreren Abteilungen arbeitet, jedoch überall denselben Lohn erhält, wählen Sie am besten \[Nichts Gewählt\]" >}}

![](/uploads/lohnarten-1.png)

{{< /figure >}}

In der Standardeinstellung von Pentacode finden Sie den Lohnartensatz "\[Nichts Gewählt\]". Wir empfehlen Ihnen, diesen beizubehalten. Der **Lohnartensatz**, den Pentacode für den Export wählt, orientiert sich damit immer am **Beschäftigungsverhältnis** des Mitarbeiters.

Dies bededutet: Wechselt ein Mitarbeiter z.B. von "Aushilfe/Mini-Jobber" auf "Vollzeit/Teilzeit", wechselt Pentacode auch automatisch den Lohnartensatz. Wenn sie einen bestimmten Lohnartensatz gewählt, muss für den Export der Lohnartensatz manuell entsprechend korrigiert werden.

### Ein Mitarbeiter - mehrere Löhne

Wenn Sie Mitarbeiter haben, die in verschiedenen Abteilungen arbeiten bei unterschiedlichen Löhnen arbeiten, kann dies in Pentacode automatisch berücksichtigt werden.

Wählen Sie in diesem Fall beim betreffenden Mitarbeiter unter **"+ Gehalt hinzufügen"** die entsprechende Abteilungen hinzu und weisen Sie dieser den jeweiligen Lohn zuweisen. Die jeweils gearbeiteten Stunden werden getrennt ausgewiesen und unterscheidbar exportiert.

{{< figure caption="So können bei einem MItarbeiter unterschiedliche Löhne erfasst werden" >}}

![](/uploads/gehalt-hinzufugen.png)

{{< /figure >}}

**ACHTUNG!** Für die Ermittlung des Lohns im Falle der **Lohnfortzahlung** bei Krank und Urlaub wird grundsätzlich der Lohn herangezogen, den sie unter **"Alle Arbeitsbereiche"** angelegt haben.

## Zusatzleistungen

Wenn Sie einem Mitarbeiter über das Gehalt hinaus noch Zusatzleistungen zukommen lassen, z.B. Kindergartenzuschuss, Fahrtgeld, Messergeld u.a.m., können Sie diese hier vermerken.

Wenn Sie auf das "**+ Zusatzleistung hinzufügen**" klicken, öffnet ein Eingabefeld, in das Sie Art und Höhe der einzelnen Zusatzleistungen eingeben.

{{< figure caption="Zusatzleistungen, die Sie hier eingeben, werden bei der Vorausberechnung Ihrer Lohnkosten berücksichtigt" >}}

![](/uploads/zusatzleistungen.png)

{{< /figure >}}

Die Zusatzleistungen, die Sie hier vermerken, werden für den Lohnexport **nicht** berücksichtigt. Sie sind als feste Werte ohnehin im jeweiligen Buchhaltungssystem hinterlegt.

Pentacode ermittelt jedoch die Lohnkosten, um Ihnen in Echtzeit und lange vor Fertigstellung der Lohnabrechnung einen Überblick zu geben.  Die hier angelegten Zuschüsse werden in die Vorausberechnung der Lohnkosten integriert.

Bitte beachten Sie, dass Sie bei sozialversicherungspflichtigen Zuschüsse auch den jeweiligen Sozialversicherungsbeitrag hinzufügen.

## Urlaub & Fehltage

Geben Sie bei "Urlaubsanspruch (pro Jahr)" die vereinbarte Anzahl der Urlaubstage/Jahr ein, die mit dem Mitarbeiter vereinbart sind.

Der Urlaubsanspruch eines Mitarbeiters kann nach unterschiedlichen Maßgaben berechnet werden.

{{< figure caption="So wählen Sie, wie der Urlaub des Mitarbeiters berechnet werden soll" >}}

![](/uploads/urlaub2.png)

{{< /figure >}}

Wenn Sie bei Urlaubszuwachs "Nach Arbeitsstunden" wählen, wird der Urlaubsanspruch während eines Monats **fortlaufend auf Basis der gearbeiteten Stunden** berechnet.

b) Wählen Sie "Monatlich", wächst dem Mitarbeiter sein monatlicher Urlaubsanspruch zu **Beginn** eines Monats zu.

Scheidet der Mitarbeiter während eines Monats aus, wird der Urlaubsanspruch, der im Monat des Ausscheidens entstanden ist, in Abhängigkeit von seinen Arbeitsstunden prozentual errechnet.

## Zuschläge

Wenn Sie einem Mitarbeiter Zuschläge zahlen, legen Sie die Höhe der Zuschläge für den Mitarbeiter fest. In der Standardeinstellung von Pentacode sind die Zuschläge mit ihren gesetzlich erlaubten Höchstwerten ausgewiesen.

Sie können die Zuschläge individuell nach unten anpassen.

{{< figure caption="Sie können SFN-Zuschläge bei jedem Mitarbieter individuell festlegen" >}}

![](/uploads/zuschlage2.png)

{{< /figure >}}

### Zuschläge kumulieren

In der **Standardeinstellung** von Pentacode werden Sonn- und Feiertagszuschläge mit den Nachtzuschlägen **kumuliert**. Dies heißt, dass der Mitarbeiter an Sonn- und Feiertagen auch Nachtzuschläge erhält.

{{< figure caption="Wenn Zuschläge **nicht** kumuliert werden sollen, muss der Button **abgewählt** werden" >}}

![](/uploads/kumulieren2.png)

{{< /figure >}}

Sollte dies **nicht** gewünscht sein, ist der Button zu **deaktivieren**. In diesem Fall werden dem Mitarbeiter an einem Sonn- oder Feiertag die **Sonn- und Feiertagszuschläge** hinzugerechnet, **nicht** jedoch die **Nachtzuschläge**.

### Monatliche SFN-Pauschale

Sollten Sie **Zuschläge pauschal im Voraus** bezahlen, so aktivieren Sie den Button bei "**... bezahlen**" und geben Sie im Eingabefeld, dass dann erscheint die Höhe der monatlichen Pauschalvorauszahlung ein.

{{< figure caption="So können pauschale Vorauszahlungen von SFN-Zuschlägen in Pentacode erfasst und zur Kontrolle saldiert werden" >}}

![](/uploads/sfn-pauschale.png)

{{< /figure >}}

Im Konto "SFN-Zuschläge" werden die Vorauszahlungen mit den Zuschlägen in €, die laut Arbeitszeiterfassung entstanden sind, monatlich abgeglichen und fortlaufend saldiert.

Eine unterjährige Überzahlung ist sozialversicherungs- und lohnsteuerrechtlich nicht von Bedeutung. Für die korrekte Behandlung der am Jahresende saldierten Über- oder Unterzahlung von Zuschlägen setzen Sie sich bitte mit Ihrem Steuerberater oder Lohnabrechner in Verbindung.