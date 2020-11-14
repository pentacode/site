---
title: Einstellungen
weight: 
icon: ''
anchors: []

---
In diesem Menüpunkt legen Sie die Abteilungen in Ihrem Unternehmen an, Sie definieren, nach welchen Regeln die Zeiterfassung erfolgen soll, Sie gebren hier vor, wie Sollstunden und Pausen ermittelt werden und organisieren den Export in das Buchhaltungssystem.

## Benutzerkonto

## Unternehmen

## Arbeitsbereiche

## Zeiterfassung

Die elektronische Zeiterfassung in Pentacode ist keine einfache Stechuhr, die "kritiklos" nur den den Anfang und das Ende des Arbeitstages eines Mitarbeiters "stempelt". Die **Regeln**, nach welchen die **Zeiterfassung mit Stempeluhr** in Ihrem Unternehmen funktionieren soll, werden durch Sie definiert.

Die Regeln, die Sie hier wählen, sind **globale Einstellungen**, welche vorläufig für **alle Mitarbeiter** gelten. Einmal gewählte Regeleinstellungen können **jederzeit geändert** werden. Mit dem Befehl "**Speichern**" gilt ab sofort der neu gewählte Regelsatz.

**Sie können jedoch sowohl für Abteilungen wie auch für einzelne MItarbeiter abweichende Regeln definieren!**

### Einstellungen bei Zeiterfassung MIT Stempeluhr

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5dd29b3f04286364bc91dcd3/images/5ea2eaca2c7d3a7e9aeb9329/file-edF3uGja3i.png)

#### Definition der Pausen

Über das **Dropdown-Menü** bestimmen Sie, nach welchen **Regeln** die **Pausenzeiten** Ihrer Mitarbeiter berechnet werden sollen.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5dd29b3f04286364bc91dcd3/images/5ea2f7d304286364bc98f488/file-8yozvTindY.png)

Der Gesetzgeber schreibt weder die Lage der Pause noch die Dauer von Einzelpausen vor. Deshalb erfasst Pentacode die **Pausen nur in Summe**.

" **Automatisch**" bezeichnet die **gesetzliche Pausenregelung** und bedeutet: Dem Mitarbeiter werden nach mehr als 6 Stunden Arbeitszeit 30 Minuten Pause, nach mehr als 9 Stunden 45 Minuten Pause zugewiesen.

" **Manuell**" bedeutet: Es werden nur die vom Mitarbeiter **aktiv gestempelten Pausen** als Pausen ausgewiesen. Stempelt der Mitarbeiter mehrere Pausen, werden diese zu einer Summe zusammengefasst.

" **Automatisch + Manuell**" bedeutet: Im Normalfall werden mit dieser Regel **Raucherpausen** extra erfasst. Im Genauen heißt dies, dass für alle Mitarbeiter die gesetzlichen Pausenvorschriften gelten. Die Mitarbeiter loggen sich für Ihre **reguläre Pause nicht** aus.

Lediglich die Raucher - oder Mitarbeiter, die aus anderen Gründen **zusätzliche Pausen** für sich in Anspruch nehmen - loggen sich für die zusätzlichen Rauchpausen aus. Diese **zusätzlichen Pausen** werden dann zur gesetzlichen Pause **hinzu** addiert.

Die "Automatischen Pausen" sind der gesetzlichen Regelung entsprechend als Standard gesetzt, können von Ihnen jedoch geändert werden. Achten Sie dabei jedoch darauf, den gesetzlichen Mindestanspruch nicht zu unterschreiten.

Über " **+ Neue Pausenregel**" können Sie zusätzliche Pausen einrichten.

Sollten Sie die **Pausenzeiten** Ihrer Mitarbeiter **bezahlen**, können Sie durch das Setzen des Buttons "**Automatische Pausen Werden Bezahlt**" und/oder "**Manuelle Pausen Werden Bezahlt**" eine Unterscheidung zwischen den Pausentypen treffen. Bezahlte Pausen Pausen im Arbeitszeitkonto des Mitarbeiters als Puasen ausgewiesen, bei der Lohnabrechnung in ihrer Dauer jedoch der Arbeitszeit zugerechnet.

Bsp.: Wenn Sie die **gesetzlichen Pausen bezahlen** wollen, **nicht** aber die Raucherpausen/zusätzlichen Pausen, so setzen Sie den Button bei "**Automatische Pausen Werden Bezahlt**". In diesem Fall werden nur die gesetzlichen Pausen der bezahlten Arbeitszeit zugerechnet, nicht jedoch die Raucherpausen.

#### Buchung von Mitarbeiteressen 

Über das Pfeilsymbol können Sie bestimmen, wieviele **Mahlzeiten** einem Mitarbeiter **automatisch hinzugebucht** werden.

Bsp.: Wenn Ihre Mitarbeiter bei Teilschicht nur eine Mahlzeit erhalten, wählen Sie "Ein Essen pro Tag", erhalten Sie mit jeder Schicht eine Mahlzeit, wählen Sie "bis zu 2 pro Tag"

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5dd29b3f04286364bc91dcd3/images/5ea2fc122c7d3a7e9aeb94e5/file-ucbpVv3Aeu.png)

Sollten Sie die Zeiterfassung in Pentacode durch die Stempeluhr durchführen, so ist der Button bei " **Zeiterfassung per Stempeluhr**" als **Standard gesetzt**. Sollten Sie einzelne Abteilungen oder einzelne Mitarbeiter von der Zeiterfassung per Stempeluhr ausnehmen wollen, deaktivieren Sie den Button in der entsprechenden Abteilung / beim entpsrechenden Mitarbeiter dort unter "Zeiterfassung"

#### "Anmeldung"

Über das Pfeilsymbol bei " **Verfrühter Anmeldung**" wählen Sie zwischen "**Übernehme Zeit Laut Dienstplan**" und "**Übernehme Aktuelle Uhrzeit**", ob bei der Anmeldung eines Mitarbeiters am Tablet die **aktuelle Uhrzeit** geloggt oder die aktuelle Uhrzeit am **geplanten Dienstbeginn** überprüft wird.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5dd29b3f04286364bc91dcd3/images/5ea2ff7a04286364bc98f502/file-NT5x8AS1lE.png)

**"Übernehme Zeit laut Dienstplan"** bedeutet, dass ein Mitarbeiter sich zwar **vor dem geplanten Beginn** seiner Schicht anmelden kann, die Arbeitszeit jedoch erst **ab dem geplanten Schichtbeginn gezählt** wird. Diese Regel folgt dem Grundsatz, dass geplante Arbeitszeit eine Dienstanweisung, keine Empfehlung darstellt.

Wenn sich ein Mitarbeiter **verspätet** anmeldet, gilt der **Zeitpunkt des Log-ins**.

**"Übernehme Aktuelle Uhrzeit"** bedeutet, dass unabhängig vom geplanten Beginn eines Arbeitstages die **Arbeitszeit ab** dem **Zeitpunkt des Log-ins** durch den Mitarbeiter gezählt wird.

Über das Pfeilsymbol bei **"Anmeldung Erlauben"** bestimmen Sie, wie lange **vor** einem **geplanten Dienstbeginn** sich ein Mitarbeiter **anmelden** kann.

**WICHTIG**! Wenn sich ein Mitarbeiter vor der gesetzten Frist über die Stempeluhr anmeldet (im hier gezeigten Beispiel z.B. 45 Minuten vor geplantem Dienstantritt), hat er die Möglichkeit, eine "Spontane Schicht" anzutreten. Eine spontane Schicht wird dann bei der Übersicht der Zeiterfassung mit "**??**" gekennzeichnet und kann dort bearbeitet werden.

Ist der Button bei **"Anmeldung Ohne Dienstplan"** (**3**) aktiviert, können sich auch Mitarbeiter **zur Arbeit anmelden**, die **nicht im Dienstplan** zur Arbeit eingeteilt sind. Dies ist die **empfohlene Einstellung**.

Ist der Button **nicht** aktiviert, ist ein Log-in **nur** für **Mitarbeiter** möglich, die am betreffenden Tag **im Dienstplan** eingeteilt sind.

#### "Abmeldung"

Über das Pfeilsymbols " **Bei verspäteter Abmeldung**" können Sie wählen, ob bei der **Abmeldung** eines Mitarbeiters am Tablet die **aktuelle Uhrzeit** geloggt **oder** grundsätzlich das **geplante Dienstende** auch als das **Ende des Arbeitstages** erfasst wird.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5dd29b3f04286364bc91dcd3/images/5ea302902c7d3a7e9aeb956f/file-vGAr85S038.png)

Bei **"Automatische Abmeldung"** bestimmen Sie über das Pfeilsymbol den Zeitraum **ab Anmeldung** eines Mitarbeiters, zu dem der Mitarbeiter automatisch in der Zeiterfassung **abgemeldet** wird.

Sollte ein Mitarbeiter vergessen sich auszuloggen, wird er nach Ablauf des gewählten Zeitraums **automatisch ausgeloggt**. Dadurch wird vermieden, dass die Arbeitszeit des Mitarbeiters 'unendlich' weiterläuft.

Die **automatische Abmeldung führt nicht zu Log-Zeiten**.

Das **tatsächliche Ende** des Arbeitstages muss im Hauptmenü **"Zeiterfassung"** manuell **nachgetragen** werden.

#### Rundung von Stempelzeiten

Über das Pfeilsymbol ( **6**) wählen Sie, ob die **Log-Daten** Ihrer Mitarbeiter für die An- und/oder Abmeldung **gerundet** werden sollen. Die **Rundungen** erfolgen dabei immer auf die gewählten **vollen Minuten**.

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5dd29b3f04286364bc91dcd3/images/5ea303542c7d3a7e9aeb957f/file-wRWUqVbVx6.png)

Beispiel für Anmeldung **"auf 5 Minuten Aufrunden"**: Ein Mitarbeiter meldet sich um **17:08** Uhr an, im System ist **17:10** Uhr registriert.

Bespiel für Abmeldung **"Auf 5 Minuten Abrunden"**: Ein MItarbeiter meldet sich um **22:22** Uhr ab, im System ist **22:20** Uhr registriert.

**Übrigens**: die Rundungen bei Anmeldung und Abmeldung auf nur volle 5 Minuten entsprechen bei einem durchschnittlichen 8-Stunden-Tag etwas mehr als 1% der Arbeitszeit in Ihrem Unternehmen.

### Einstellungen bei Zeiterfassung OHNE Stempeluhr

Wenn Sie die Arbeitszeiten Ihrer Mitarbeiter nicht mit Stempeluhr, sondern **manuell** erfassen wollen, so sind die Möglichkeiten für Regeleinstellungen entsprechend verkürzt.

**![](https://s3.amazonaws.com/helpscout.net/docs/assets/5dd29b3f04286364bc91dcd3/images/5ead5c12042863474d1a073b/file-VEaNLlQKKU.png)**Wählen Sie in diesem Fall ausschließlich "**Automatisch**" als Pausenmodus.

Die **Länge der Pausen** wird entsprechend der Festlegungen, die Sie getroffen haben, bereits **beim Eintrag in den Dienstplan** automatisch **errechnet**.

Wenn Sie ohne die Stempeluhr von Pentacode arbeiten, geben Sie die **Arbeitszeiten** manuell **IM DIENSTPLAN** ein.

Im Menüpunkt "**Zeiterfassung**" sind die **geplanten** Arbeitszeiten sichtbar und **immer identisch** mit den Zeiten im **Dienstplan**. (Sehen Sie ergänzend hierzu den Hilfeartikel "Zeiterfassung - Tagesbericht" im Hauptmenü "Zeiterfassung"

Sie können weiterhin wählen, ob Pausenzeiten bezahlt werden und ob Mitarbeiteressen automatisch gebucht werden soll.

## Sonstiges

Im Menüpunkt **"Einstellungen"** und dort unter **"Sonstiges"** bestimmen generelle Grundsätze, nach denen Pentacode operiert

![](https://s3.amazonaws.com/helpscout.net/docs/assets/5dd29b3f04286364bc91dcd3/images/5ea3064304286364bc98f584/file-1sQNejvNT1.png)

#### "Kontoführung Ab"

Unter "**Kontoführung ab**" legen Sie fest, ab welchem **Zeitpunkt** die **Arbeitszeitkonten** Ihrer Mitarbeiter in Pentacode geführt werden.

Urlaube, SFN-Zuschläge und Lohnkosten werden in Pentacode auch **bruchteilig berechnet**. Für die Einheitlichkeit der Buchhaltung und eine später bessere Nachvollziehbarkeit ist es jedoch **empfehlenswert**, den **ersten eines Monats** zu wählen.

#### "Sollstundenberechnung"

Für die "**Sollstundenberechnung**" der Arbeitszeiten Ihrer Mitarbeiter haben Sie Möglichkeit, zwischen **"Wochenfaktor"**, **"Monatsgenau"** und "**Monatsgenau ohne Feiertage**" zu wählen.

**"Wochenfaktor"** bedeutet, dass sich die Arbeitszeit, die ein Mitarbeiter laut Arbeitsvertrag arbeiten sollte, wie folgt berechnet: **wöchentliche Arbeitszeit** laut Angabe zum Mitarbeiter unter seinen "Stammdaten", dort unter "Vertrag" **x 4,35** (Beispiel: 40 Stunden/Woche * 4,35 = 174 Sollstunden/Monat).

Diese Berechnungsmethode hat zur Folge, dass die **monatliche Sollarbeitszeit** eines Mitarbeiters **immer gleichbleibend** ist.

**"Monatsgenau"** bedeutet, dass die **monatliche Sollarbeitszeit** eines Mitarbeiters **entsprechend** der **Länge eines Monats** in Pentacode **automatisch berechnet** wird. Die zu erbringende Arbeitszeit schwankt entsprechend von Monat zu Monat. Dies ist die exaktere Berechnungsmethode.

Bei "**Monatsgenau ohne Feiertage**" werden **gesetzliche Feiertage**, die nicht auf einen Sonntag fallen, in Abzug gebracht und **verringern** die zu erbringende **Sollarbeitszeit** des Mitarbeiters entsprechend.

#### "Berechnung Gesetzliche Pause"

Für die Berechnung der gesetzlichen Pause sind zwei Möglichkeiten zur Verfügung gestellt:

"**Standard**" bedeutet: In diesem Modus werden die **Pausen nach** der **Anwesenheitszeit** berechnet. Dem Mitarbeiter werden nach **mehr als 6 Stunden** Anwesenheitszeit **30 Minuten Pause** abgezogen, nach insgesamt **mehr als 9 Stunden** weitere **15 Minuten**.

In diesem Fall werden einem Mitarbeiter nach 9:01 Stunden Anwesenheitszeit in Summe 45 Minuten Pause berechnet, die zu bezahlende Arbeitszeit beträgt somit 8:16 Stunden.

"**Iterativ**" bedeutet: In diesem Modus werden die Pausen nach der **Arbeitszeit** berechnet. Dem Mitarbeiter werden nach mehr als 6 Stunden 30 Minuten Pause abgezogen. Er hat somit 5,5 Stunden gearbeitet. Erst wenn er weitere mehr als 3,5 Stunden gearbeitet hat (insgesamt also mehr als 9 Stunden), werden weitere 15 Minuten Pause abgezogen.

In diesem Fall werden einem Mitarbeiter nach 9:31 Stunden Anwesenheitszeit in Summe 45 Minuten Pause berechnet, die zu bezahlende Arbeitszeit beträgt somit 8:46 Stunden.

#### "Nachtzuschläge"

Sie können die **Zeiträume**, in denen Sie Ihren Mitarbeitern **Nachtzuschläge** zahlen, einengen. **Pentacode überprüft hierbei nicht die Zulässigkeit Ihrer Angaben!**

Beachten Sie deshalb unbedingt die **gesetzlichen Richtlinien**. Diese ermöglichen die Zahlung von bis zu 25% Zuschlag auf den Bruttolohn in der Zeit von 20:00 Uhr bis 06:00 Uhr, sowie Nachtzuschläge für die Zeit von 00:00 Uhr bis 04:00 Uhr (sofern die Arbeit vor 0:00 Uhr aufgenommen wurde).

## Buchhaltung

## Rechnungstellung

Hier sind Ihre Rechnungsanschrift, das hinterlegte Zahlungsmittel und die Rechnungen an Sie hinterlegt.

#### Rechnungsanschrift

Wenn Sie Kunde von Pentacode werden, wird die Rechnungsanschrift Ihren Angaben entsprechend von uns hinterlegt. Diese Angaben erscheinen als Adressat auf den Rechnungen, die Sie von uns erhalten. Eine Änderung dieser Angaben können Sie jederzeit vornehmen.

Der Avis für den bevorstehenden Bankeinzug wird an die hier hinterlegte Email-Adresse versandt.

#### Zahlungsmittel

Unsere Rechnungen werden über das Lastschriftmandat, das Sie uns erteilt haben, von Ihrem Konto eingezogen. Die Lastschriftdaten sind hier hinterlegt.

Sollte sich Ihre Bankverbindung ändern, klicken Sie einfach auf "Zahlungsmittel ändern" und schicken uns die geänderten Daten. Der nächste Einzug erfolgt dann vom neuen Konto.

#### Zahlungsverlauf

Rechnungen werden von uns nicht zugesandt, sondern an dieser Stelle automatisch hinterlegt. Die Reihenfolge der Ablage ist chronologisch absteigend.