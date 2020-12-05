---
title: Vertrag
weight: 
icon: ''
anchors: []

---
Im Menüpunkt **"Vertrag"** geben Sie die **arbeitszeit**- und **lohnrelevanten Angaben** zum Mitarbeiter ein. Achten Sie hier bitte auf die Richtigkeit und Vollständigkeit der Angaben. Die Berechnung aller Konten eines Mitarbeiters, die gesamte Lohnvorbereitung und der Export der Daten beziehen sich auf die hier hinterlegten Daten.

Bitte stellen Sie sicher, dass die hier hinterlegten Angaben zu jedem Zeitpunkt den Vereinbarungen entsprechen, die Sie mit dem Mitarbeiter laut Arbeitsvertrag getroffen haben.

## Vertragslaufzeit 

<<Screenshot>>

Geben Sie bei **Vertragsbeginn** das Datum ein, zu dem das Beschäftigungsverhältnis des Mitarbeiters in Ihrem Unternehmen begonnen hat.

Unter **Vertragsende** ist das Datum einzusetzen, zu dem das Beschäftigungsverhältnis endet. 

Im Falle eines befristeten Arbeitsverhältnisses ist es empfehlenswert, das Fristende bereits bei der Anlage des Mitarbeiters im System festzuhalten.

**Bemerkungen** bezeichnet einen Textbereich, in den Sie **Notizen** zum Mitarbeiter hinzufügen können.

Wenn Sie den Button bei "Inaktiv" setzen, bleibt der Mitarbeiter im Dienstplan sichtbar, kann jedoch nicht geplant werden. "Inaktiv" unterbricht jedoch nicht die Fortberechnung der verschiedenen Konten eines Mitarbeiters.

## Beschäftigungsverhältnis

Wählen Sie die Art des Beschäftigungsverhältnisses durch Anklicken des betreffenden Feldes.

<<Screenshot>>

Die Überwachung von Lohngrenzen, die Meldung bestimmter Probleme und der Export der Daten in die Lohnbuchhaltung beziehen sich auf das gewählte Beschäftigungsverhältnis.

## Arbeitszeit

Für die Berechnung der Sollarbeitszeit eines MItarbeiters stehen Ihnen 5 unterschiedliche Modi zur Wahl.

<<Screenshot>>

Welcher Modus für SIe im Einzelfall der möglicherweise geeignete ist, erfahren Sie unter **_Rezepte und Tipps_** im Artikel **_Sollstundenberechnung_**.

### Wochenfaktor

Bei der Wahl "Wochenfaktor" erscheint das Eingabefeld Wochenstunden.

Geben Sie hier die Anzahl der Wochenstunden ein, die ein Mitarbeiter laut Arbeitsvertrag.

<<Screenshot>>

Die Soll-Arbeitszeit des Mitarbeiters errechnet sich, indem die Anzahl der Wochenstunden mit dem Faktor 4,35 multipliziert wird.

Die monatliche Soll-Arbeitszeit bei einem Festangestellten mit einer 40-Stunden Woche beträgt somit 40 x 4,35 = 174 Stunden pro Monat.

### Monatsgenau

Bei der Wahl "Wochenfaktor" erscheint das Eingabefeld Wochenstunden.

Geben Sie hier die Anzahl der Wochenstunden ein, die ein Mitarbeiter laut Arbeitsvertrag.

<<Screenshot>>

Bei dieser Auswahl errechnet sich die Soll-Arbeitszeit des Mitarbeiters anhand der Länge eines Monats. Sie schwankt somit von Monat zu Monat.

Die  Um einen Festangestellten mit einer 40-Stunden Woche als Beispiel zu nehmen: Dessen monatliche Soll-Arbeitszeit liegt in einem Monat mit 30 Tagen bie 171,... Stunden, in einem Monat mit 31 Tagen bei 177,.. Stunden und im Februar (sofern kein Schaltjahr) bei 160 Stunden.

### Monatsgenau Ohne Feiertage

Eingabe und  Berechnung der monatlichen Soll-Arbeitszeit entsprechen "Monatsgenau".

Bei dieser Auswahl errechnet sich die Soll-Arbeitszeit des Mitarbeiters anhand der Länge eines Monats. Sie schwankt somit von Monat zu Monat.

Pentacode kennt die gesetzlichen Feiertage des Bundeslands, in dem sich Ihr Unternehmen oder die betreffende FIliale Ihres Unternehmens befindet. Fällt in einem Monat ein gesetzlicher Feiertag auf einen Wochentag, so wird die monatliche Soll-Arbetiszeit um den Feiertag gekürzt.

### Feste Wochentage

Bei der Wahl "Feste Wochentage" erscheint ein Eingabefeld der sieben Wochentage.

Geben Sie hier die Stunden ein, die ein Mitarbeiter an den betreffenden Tagen arbeiten soll. Diese Auswahl ist im Besonderen zu empfehlen, wenn ein Mitarbeiter feste Arbeitstage hat und diese in ihrer Länge auch noch voneinander abweichen. Dies trifft häufig für Mitarbeiter in der Verwaltung zu, bei denen z.B. der Freitag ein verkürzter Arbeitstag ist.

<<Screenshot>>

Die Soll-Arbeitszeit des Mitarbeiters errechnet sich über die Häufigkeit, in der ein bestimmter Wochentag in einem Monat auftritt.

Bei tagesabhängig unterschiedlichen Arbeitszeiten hat diese Art der Berechnung Wirkung bei Krank und Urlaub. Wird z.B. ein MItarbeiter, der am Freitag nur 4 Stunden arbeitet, an einem Freitag krank oder nimmt an diesem Tag Urlaub, so werden für sein Arbeitszeitkonto wie auch für die Lohnabrechnung nur 4 Stunden berechnet. 

### Feste Wochentage abzgl. Feiertage

Eingabe und  Berechnung der monatlichen Soll-Arbeitszeit entsprechen "Feste Wochentage".

Bei diesem Modus wird jedoch ein Feiertag, der auf einen Arbeitstag des Mitarbeiters fällt, von seiner Soll-Arbeitszeit in Abzug gebracht. Hierbei wird Tag-genau unterschieden.

Fällt ein Feiertag z.B. auf einen Freitag, an dem der Mitarbeiter nur 4 Stunden arbeitet, so werden auch nur 4 Stunden berechnet.

### Jahresarbeitszeitkonto Vereinbart

Pentacode überwacht die Einhaltung des gesetzlichen Mindestlohns. Eine versehentliche Unterschreitung des Mindestlohns könnte eintreten, wenn z.B. ein Mitarbeiter mit Festlohn Überstunden leistet. Sein Festlohn geteilt durch die Anzahl der Arbeitsstunden im betreffenden Monat kann einen Stundenlohn ergeben, der unter dem gesetzlichen Mindestlohn liegt.

In diesem Fall erhalten Sie in Pentacode eine Problemmeldung.

Dieses  Problem können Sie vermeiden, indem Sie mit dem Mitarbeiter die Führung eines Jahresarbeitszeitkontos vereinbaren.

Setzen Sie in diesem Fall den Button bei "Jahresarbeitszeitkonto Vereinbart".

<<Screenshot>>

Über- und Minderstunden werden in Pentacode grundsätzlich und für alle Mitarbeiter (also selbst bei Aushilfen) saldiert und in den einzelnen Jahresarbeitszeitkonten in die Zukunft vorgetragen.

Rechtswirksam wird ein Jahresarbeitszeitkonto jedoch erst, wenn dessen Führung mit dem Mitarbeiter schriftlich vereinbart ist. Sollte dies bei Ihnen noch nicht der Fall sein, so senden wir Ihnen gerne eine entsprechende Vereinbarung als Ergänzung zum bestehenden Arbeitsvertrag zu. Wenden Sie sich hierzu einfach an unseren Support.

Wählen Sie bei ( **3**) **"Tage / Woche"** die Anzahl der Tage, die ein Mitarbeiter in der Regel arbeitet.

Wenn Sie **"Auto"** wählen, ermittelt Pentacode automatisch die Anzahl der Arbeitstage / Woche, die der Mitarbeiter im Durchschnitt der jeweils letzten 13 Wochen gearbeitet hat.

Geben Sie bei ( **4**) **"Stunden / Woche"** die Anzahl der Arbeitsstunden ein, zu denen der Mitarbeiter laut Arbeitsvertrag verpflichtet ist.

\---

Sollte mit dem Mitarbeiter die Führung eines ( **5**) **Jahresarbeitszeitkontos** vereinbart sein, sollte der Button gesetzt werden. In diesem Fall werden Warnhinweise (i.B. Hinweise bei Unterschreitung des gesetzlichen Mindestlohns durch Überstunden) außer Kraft gesetzt.

Das Jahresarbeitszeitkonto wird in Pentacode grundsätzlich für alle Mitarbeiter geführt. Für dessen Rechtswirksamkeit ist es jedoch wesentlich, dass die Führung des Jahresarbeitszeitkontos und damit die fortlaufende Saldierung von Über- und Minderstunden schriftlich vereinbart ist.

\---

**Gehalt & Urlaub**

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5dd29b3f04286364bc91dcd3/images/5de91a4404286364bc9287eb/file-6MuuxTgDjj.png)

Geben Sie unter ( **1**) **"Alle Arbeitsbereiche"** das Standardgehalt des Mitarbeiters ein.

Wird ein Mitarbeiter **nach Stunden** bezahlt, wählen Sie im Dropdown-Menü **Stunden**, handelt es sich um einen **festen Monatslohn**, wählen Sie **Monat**.

Arbeitet ein Mitarbeiter in verschiedenen Abteilungen bei unterschiedlichen, abteilungsabhängigen Löhnen, können Sie unter ( **2**) **"+ Gehalt hinzufügen"** die entsprechenden Abteilungen wählen und diesen den jeweiligen Lohn zuweisen.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5dd29b3f04286364bc91dcd3/images/5ddfb33f04286364bc924aec/file-Jg5wj5KSRs.png)

**ACHTUNG!** Für die Ermittlung des Lohns im Falle der **Lohnfortzahlung** bei Krank und Urlaub wird grundsätzlich der Lohn herangezogen, den sie unter **"Alle Arbeitsbereiche"** angelegt haben.

Unter ( **3**) **"Sonderleistungen"** geben Sie die **Summe der Arbeitgeberzuschüsse** ein. Bitte beachten Sie, dass Sie für sozialversicherungspflichtige Zuschüsse auch den jeweiligen Sozialversicherungsbeitrag hinzufügen.

\---

**Urlaub & Fehltage**

Geben Sie unter![](https://s3.amazonaws.com/helpscout.net/docs/assets/5dd29b3f04286364bc91dcd3/images/5de792b92c7d3a7e9ae4b57b/file-fnAjFhcz0i.png)die vereinbarte Anzahl der Urlaubstage / Jahr ein.

Der Urlaubsanspruch eines Mitarbeiters kann nach unterschiedlichen Maßgaben berechnet werden:

a) Wählen Sie

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5dd29b3f04286364bc91dcd3/images/5de793662c7d3a7e9ae4b583/file-gKv2TRtk3v.png) wird der Urlaubsanspruch während eines Monats **fortlaufend auf Basis der gearbeiteten Stunden** berechnet.

b) Wählen Sie

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5dd29b3f04286364bc91dcd3/images/5de7940104286364bc927856/file-UyNJdTXg5T.png)wächst dem Mitarbeiter sein monatlicher Urlaubsanspruch zu **Beginn** eines Monats zu.

Scheidet der Mitarbeiter während eines Monats aus, wird der Urlaubsanspruch, der im Monat des Ausscheidens entstanden ist, in Abhängigkeit von seinen Arbeitsstunden prozentual errechnet.

\---

Wenn Sie bei

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5dd29b3f04286364bc91dcd3/images/5de7993c04286364bc927889/file-WYDYpJX1BW.png)**keinen Wert** einfügen, werden die Arbeitsstunden für die Berechnung von Krank- und Urlaubstagen über den **Durchschnitt der letzten 13 Arbeitswochen** berechnet. Dies ist die Standardeinstellung in Pentacode.

Wenn Sie mit der Arbeit mit Pentacode beginnen, liegen keine Werte für die Vergangengheit vor. Um in diesem Fall einen verlässlichen Wert zu erhalten, empfehlen wir Ihnen, zumindest während der ersten 13 Wochen einen festen Wert einzugeben, z.B.:

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5dd29b3f04286364bc91dcd3/images/5de79b182c7d3a7e9ae4b5ca/file-r5lOPU4R9n.png)Diesen errechnen Sie, indem Sie die Anzahl der vereinbarten Stunden/Woche durch Arbeitstage/Woche teilen (z.B. 40 Stunden / 5 Arbeitstage = 8 Stunden).

Sie können diesen festen Wert zu jedem Zeitpunkt wieder löschen. Ab dem Zeitpunkt der Löschung wird mit dem 13-Wochen-Durchschnitt weitergerechnet.

\---

**Zuschläge**

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5dd29b3f04286364bc91dcd3/images/5de91dd22c7d3a7e9ae4c5be/file-WrMNRwuwsQ.png)

Wenn Sie Ihren Mitarbeitern Zuschläge zahlen, legen Sie die Höhe der Zuschläge für den Mitarbeiter fest. In der Standardeinstellung von Pentacode sind die Zuschläge mit ihren gesetzlich erlaubten Höchstwerten ausgewiesen.

Sie können die Zuschläge individuell nach unten anpassen.

Sollten Sie **Zuschläge pauschal im Voraus** bezahlen, so geben Sie unter (**1**)

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5dd29b3f04286364bc91dcd3/images/5de7a2b92c7d3a7e9ae4b5ed/file-zgLpXtCtan.png)die Höhe der monatlichen Pauschalvorauszahlung ein.

Im Konto "SFN-Zuschläge" werden die Vorauszahlungen mit den Zuschlägen in €, die laut Arbeitszeiterfassung entstanden sind, monatlich abgeglichen und fortlaufend saldiert.

Eine unterjährige Überzahlung ist sozialversicherungs- und lohnsteuerrechtlich nicht von Bedeutung. Für die korrekte Behandlung der am Jahresende saldierten Über- oder Unterzahlung von Zuschlägen setzen Sie sich bitte mit Ihrem Steuerberater oder Lohnabrechner in Verbindung.

\---

In der Standardeinstellung von Pentacode werden ( **2**) Sonn- und Feiertagszuschläge mit den Nachtzuschlägen kumuliert. Dies heißt, dass der Mitarbeiter an Sonn- und Feiertagen auch Nachtzuschläge erhält.

Sollte dies **nicht** gewünscht sein, ist der Button zu **deaktivieren**. In diesem Fall werden dem Mitarbeiter an einem Sonn- oder Feiertag die **Sonn- und Feiertagszuschläge** hinzugerechnet, **nicht** jedoch die **Nachtzuschläge**.