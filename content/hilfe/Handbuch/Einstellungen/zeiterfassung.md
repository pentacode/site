---
title: Zeiterfassung
weight: 4
icon: stopwatch
anchors:
- hash: 'allgemeingültige-einstellungen '
  title: 'Allgemeingültige Einstellungen '
- hash: definition-der-pausen
  title: Definition der Pausen
- hash: buchung-von-mitarbeiteressen
  title: Buchung von Mitarbeiteressen
- hash: anmeldung
  title: Anmeldung
- hash: abmeldung
  title: Abmeldung
- hash: rundung-von-stempelzeiten
  title: Rundung von Stempelzeiten
- hash: abweichende-Zeiterfassungs-regeln
  title: Abweichende Zeiterfassungs-Regeln
- hash: zeiterfassung-ohne-stempeluhr
  title: Zeiterfassung OHNE Stempeluhr

---
Die elektronische Zeiterfassung in Pentacode ist keine einfache Stechuhr, die "kritiklos" nur den den Anfang und das Ende des Arbeitstages eines Mitarbeiters "stempelt". Die **Regeln**, nach welchen die **Zeiterfassung mit Stempeluhr** in Ihrem Unternehmen funktionieren soll, werden durch Sie definiert.

## Allgemeingültige Einstellungen

Die Regeln, die Sie hier wählen, sind **globale Einstellungen**, welche vorläufig für **alle Mitarbeiter** und für **alle Abteilungen** gelten. Einmal gewählte Regeleinstellungen können **jederzeit geändert** werden. Mit dem Befehl "**Speichern**" gilt ab sofort der neu gewählte Regelsatz.

> **Sie können jedoch sowohl für Abteilungen wie auch für einzelne Mitarbeiter abweichende Regeln definieren!**

Die Zeiterfassung in Pentacode wird von Ihnen idealerweise "pyramidal" organisiert. Bei der Festlegung der Regeln für die Zeiterfassung empfehlen wir Ihnen

* **zuerst** die **allgemeingültigen Regeln** festzulegen, die **für die Mehrzahl der Mitarbeiter** gelten
* **dann** die **Abteilung** auszunehmen, für die eventuell abweichende Regeln gelten sollen und/oder
* den **Mitarbeiter** auszunehmen, für den eventuell andere Regeln gelten sollen.

## Definition der Pausen

Über das **Dropdown-Menü** bestimmen Sie, nach welchen **Regeln** die **Pausenzeiten** Ihrer Mitarbeiter berechnet werden sollen.

{{< figure caption="So können Sie die Art der Pausenerfassung bestimmen" >}}

![](/uploads/pausen.png)

{{< /figure >}}

Der Gesetzgeber schreibt weder die Lage der Pause noch die Dauer von Einzelpausen vor. Deshalb erfasst Pentacode die **Pausen nur in Summe**.

" **Automatisch**" bezeichnet die **gesetzliche Pausenregelung** und bedeutet: Dem Mitarbeiter werden nach mehr als 6 Stunden Arbeitszeit 30 Minuten Pause, nach mehr als 9 Stunden 45 Minuten Pause zugewiesen.

" **Manuell**" bedeutet: Es werden nur die vom Mitarbeiter **aktiv gestempelten Pausen** als Pausen ausgewiesen. Stempelt der Mitarbeiter mehrere Pausen, werden diese zu einer Summe zusammengefasst.

" **Automatisch + Manuell**" bedeutet: Im Normalfall werden mit dieser Regel **Raucherpausen** extra erfasst. Im Genauen heißt dies, dass für alle Mitarbeiter die gesetzlichen Pausenvorschriften gelten. Die Mitarbeiter loggen sich für Ihre **reguläre Pause nicht** aus.

Lediglich die Raucher - oder Mitarbeiter, die aus anderen Gründen **zusätzliche Pausen** für sich in Anspruch nehmen - loggen sich für diese zusätzlichen Pausen aus. Diese **zusätzlichen Pausen** werden dann zur gesetzlichen Pause **hinzu** addiert.

### Zusätzliche Pausen

Über " **+ Neue Pausenregel**" können Sie zusätzliche Pausen einrichten.

> Die "Automatischen Pausen" sind der gesetzlichen Regelung entsprechend als Standard gesetzt, können von Ihnen jedoch geändert werden. Achten Sie dabei jedoch darauf, den gesetzlichen Mindestanspruch nicht zu unterschreiten.

{{< figure caption="So können Sie zusätzliche Pausen anlegen" >}}

![](/uploads/neue-pausenregel.png)

{{< /figure >}}

### Bezahlte Pausen

Sollten Sie die **Pausenzeiten** Ihrer Mitarbeiter **bezahlen**, können Sie durch das Setzen des Buttons "**Automatische Pausen Werden Bezahlt**" und/oder "**Manuelle Pausen Werden Bezahlt**" eine Unterscheidung zwischen den Pausentypen treffen. Bezahlte Pausen werden im Arbeitszeitkonto des Mitarbeiters als Pausen ausgewiesen, bei der Lohnabrechnung in ihrer Dauer jedoch der Arbeitszeit zugerechnet.

{{< figure caption="So legen Sie fest, wenn Pausenzeiten bezahlt werden sollen" >}}

![](/uploads/bez-pausen.png)

{{< /figure >}}

Bsp.: Wenn Sie die **gesetzlichen Pausen bezahlen** wollen, **nicht** aber die Raucherpausen/zusätzlichen Pausen, so setzen Sie den Button bei "**Automatische Pausen Werden Bezahlt**". In diesem Fall werden nur die gesetzlichen Pausen der bezahlten Arbeitszeit zugerechnet, nicht jedoch die Raucherpausen.

## Buchung von Mitarbeiteressen

Über das Pfeilsymbol können Sie bestimmen, wie viele **Mahlzeiten** einem Mitarbeiter **automatisch hinzugebucht** werden.

{{< figure caption="So wählen Sie die Anzahl automatisch gebuchter Mahlzeiten" >}}

![](/uploads/essen-buchen.png)

{{< /figure >}}

Bsp.: Wenn Ihre Mitarbeiter bei Teilschicht nur eine Mahlzeit erhalten, wählen Sie "Ein Essen pro Tag", erhalten Sie mit jeder Schicht eine Mahlzeit, wählen Sie "bis zu 2 pro Tag"

## "Anmeldung"

Über das Pfeilsymbol bei " **Verfrühter Anmeldung**" wählen Sie zwischen "**Übernehme Zeit Laut Dienstplan**" und "**Übernehme Aktuelle Uhrzeit**", ob bei der Anmeldung eines Mitarbeiters am Tablet die **aktuelle Uhrzeit** geloggt oder die aktuelle Uhrzeit am **geplanten Dienstbeginn** überprüft wird.

{{< figure caption="So bestimmen Sie, ab wann Arbeitszeit beginnt" >}}

![](/uploads/anmeldendp.png)

{{< /figure >}}

**"Übernehme Zeit laut Dienstplan"** bedeutet, dass ein Mitarbeiter sich zwar **vor dem geplanten Beginn** seiner Schicht anmelden kann, die Arbeitszeit jedoch erst **ab dem geplanten Schichtbeginn gezählt** wird. Diese Regel folgt dem Grundsatz, dass geplante Arbeitszeit eine Dienstanweisung, keine Empfehlung darstellt.

Wenn sich ein Mitarbeiter **verspätet** anmeldet, gilt der **Zeitpunkt des Log-ins**.

**"Übernehme Aktuelle Uhrzeit"** bedeutet, dass unabhängig vom geplanten Beginn eines Arbeitstages die **Arbeitszeit ab** dem **Zeitpunkt des Log-ins** durch den Mitarbeiter gezählt wird.

### Anmeldung Erlauben

Über das Pfeilsymbol bei **"Anmeldung Erlauben"** bestimmen Sie, wie lange **vor** einem **geplanten Dienstbeginn** sich ein Mitarbeiter **anmelden** kann.

{{< figure caption="Hier legen Sie den Zeitraum fest, der bei zu früher Anmeldung für die Berechnung der Arbeitszeit ignoriert werden soll" >}}

![](/uploads/anmelden-erlauben.png)

{{< /figure >}}

> **WICHTIG**! Wenn sich ein Mitarbeiter vor der gesetzten Frist über die Stempeluhr anmeldet (im hier gezeigten Beispiel z.B. 15 Minuten vor geplantem Dienstantritt), hat er die Möglichkeit, eine "Spontane Schicht" anzutreten. Eine spontane Schicht wird dann bei der Übersicht der Zeiterfassung mit "**??**" gekennzeichnet und kann dort bearbeitet werden.

### Anmeldung Ohne Dienstplan

Ist der Button bei **"Anmeldung Ohne Dienstplan"** (**3**) aktiviert, können sich auch Mitarbeiter **zur Arbeit anmelden**, die **nicht im Dienstplan** zur Arbeit eingeteilt sind. Dies ist die **empfohlene Einstellung**.

{{< figure caption="So erlauben Sie den Log-in ohne Dienstplan" >}}

![](/uploads/anmmelden-ohne-dp.png)

{{< /figure >}}

Ist der Button **nicht** aktiviert, ist ein Log-in **nur** für **Mitarbeiter** möglich, die am betreffenden Tag **im Dienstplan** eingeteilt sind.

## "Abmeldung"

Über das Pfeilsymbols " **Bei verspäteter Abmeldung**" können Sie wählen, ob bei der **Abmeldung** eines Mitarbeiters am Tablet die **aktuelle Uhrzeit** geloggt **oder** grundsätzlich das **geplante Dienstende** auch als das **Ende des Arbeitstages** erfasst wird.

{{< figure caption="So bestimmen Sie die Erfassung des Arbeitsendes" >}}

![](/uploads/abmelden.png)

{{< /figure >}}

### Automatische Abmeldung

Bei **"Automatische Abmeldung"** bestimmen Sie über den Zeitraum **ab Anmeldung** eines Mitarbeiters, zu dem der Mitarbeiter automatisch in der Zeiterfassung **abgemeldet** wird.

{{< figure caption="Hier legen Sie fest, wann ein Mitarbeiter automatisch abgemeldet wird" >}}

![](/uploads/automat-abmeldung.png)

{{< /figure >}}

Sollte ein Mitarbeiter vergessen sich auszuloggen, wird er nach Ablauf des gewählten Zeitraums **automatisch aus geloggt**. Dadurch wird vermieden, dass die Arbeitszeit des Mitarbeiters 'unendlich' weiterläuft.

> Die **automatische Abmeldung führt nicht zu Log-Zeiten**. Das **tatsächliche Ende** des Arbeitstages muss im Hauptmenü **"Zeiterfassung"** oder im Arbeitszeitkonto des Mitarbeiters manuell **nachgetragen** werden.

## Rundung von Stempelzeiten

Über das Pfeilsymbol wählen Sie, ob die **Log-Daten** Ihrer Mitarbeiter für die An- und/oder Abmeldung **gerundet** werden sollen. Die **Rundungen** erfolgen dabei immer auf die gewählten **vollen Minuten**.

{{< figure caption="Hier können Sie die Rundung der Logzeiten festlegen." >}}

![](/uploads/rundung.png)

{{< /figure >}}

Beispiel für Anmeldung **"auf 5 Minuten Aufrunden"**: Ein Mitarbeiter meldet sich um **17:08** Uhr an, im System ist **17:10** Uhr registriert.

Bespiel für Abmeldung **"Auf 5 Minuten Abrunden"**: Ein Mitarbeiter meldet sich um **22:22** Uhr ab, im System ist **22:20** Uhr registriert.

**Übrigens**: die Rundungen bei Anmeldung und Abmeldung auf nur volle 5 Minuten entsprechen bei einem durchschnittlichen 8-Stunden-Tag etwas mehr als 1% der Arbeitszeit in Ihrem Unternehmen.

## Abweichende Zeiterfassungs-Regeln

Wenn Sie für eine **Abteilung** eine oder mehrere Regeln aufstellen wollen, die von den allgemeingültigen Regeln abweichen, öffnen Sie die entsprechende Abteilung durch Anklicken.

Wählen Sie dann den Button "**Abweichende Zeiterfassungsregeln**" und legen dann fest, welche Regeln für diese Abteilung gelten sollen.

{{< figure caption="Durch Wählen des Button bei Abweichende Zeiterfassungsregeln bestimmen Sie Regeln, die ausschließlich für die gewählte Abteilung gelten" >}}

![](/uploads/abw-regeln-abt.png)

{{< /figure >}}

Im gezeigten Beispiel werden für Mitarbeiter, die in der Küchen arbeiten - und zwar ausschließlich bei diesen Mitarbeitern - die gesetzlichen Pausen bezahlt.

**Analog können Sie mit einzelnen Mitarbeitern verfahren.**

{{< figure caption="Sie können abweichende Zeiterfassungsregeln auch für einzelne Mitarbeiter festlegen" >}}

![](/uploads/abw-regeln-ma.png)

{{< /figure >}}

Im hier gezeigten Beispiel wird dieser Mitarbeiter - und nur dieser Mitarbeiter - von der Zeiterfassung über Stempeluhr ausgenommen.

## Zeiterfassung OHNE Stempeluhr

Wenn Sie die Arbeitszeiten Ihrer Mitarbeiter nicht mit Stempeluhr, sondern **manuell** erfassen wollen, so sind die Möglichkeiten für Regeleinstellungen entsprechend verkürzt.

> Wählen Sie in diesem Fall ausschließlich "**Automatisch**" als Pausenmodus.

{{< figure caption="Wenn Sie **ohne Stempeluhr** arbeiten, wählen Sie für **Pausenmodus immer 'Automatisch'**" >}}

![](/uploads/ohne-stempeluhr2.png)

{{< /figure >}}

Die **Länge der Pausen** wird entsprechend der Festlegungen, die Sie getroffen haben, bereits **beim Eintrag in den Dienstplan** automatisch **errechnet**.

Wenn Sie ohne die Stempeluhr von Pentacode arbeiten, geben Sie die **Arbeitszeiten** manuell **im Dienstplan** ein.

Im Menüpunkt "[**Zeiterfassung**](/hilfe/handbuch/zeiterfassung/tagesuebersicht/#zeiterfassung-ohne-stempeluhr)" sind die **geplanten** Arbeitszeiten sichtbar und **immer identisch** mit den Zeiten im **Dienstplan**.

Sie können weiterhin wählen, ob Pausenzeiten bezahlt werden und ob Mitarbeiteressen automatisch gebucht werden soll.