---
layout: layouts/single.njk
title: Tagesabrechnung
weight: 2
icon: cash-register
keywords:
- Tagesabrechnung
- umsatzerfassung
- umsatzgruppen
- umsatz
- unbare zahlarten
- ausgaben
- buchungstext
- steuerschlüssel
- konto
- kostenstelle
- buchungstext
- rechnung
- debitoren
- vorschuss
- gehaltsvorschuss
- bargeld
- bargeld saldo
- kassendifferenz
- unbare trinkgelder
- trinkgeld
- zählprotokoll
- zwischenspeichern
- abschließen und buchen
- buchen
- vorschüsse
- gehaltsvorschüsse

---
Der kaufmännische Kern des Geschäftsalltags ist die tägliche Erfassung von Umsätzen und Ausgaben. Diese Erfassung erledigen Sie in der "Tagesabrechnung" von Pentacode. Kassenbuch, Debitorenverwaltung und Vorschusserfassung geschieht im Anschluss vollständig automatisch.

## Umsatzerfassung MIT Umsatzgruppen

Wenn Sie bereits [**Umsatzgruppen** ]\(/handbuch/umsaetze/umsatzgruppen/)angelegt haben, finden Sie diese in der von Ihnen gewählten Reihenfolge und **dauerhaft** in der Tagesabrechnung vor. Dies gilt auf für **unbare Zahlarten** oder **Ausgabepositionen**, die Sie eventuell zu Gruppen zusammengefasst haben.

Geben Sie hier lediglich die **Bruttobeträge** ein, wie diese aus Ihrem Kassen- und/oder EC-System hervorgehen.

{% figure caption="Erfassen Sie hier Ihre Brutto-Umsätze" %}

![](/uploads/ta1.png)

{% endfigure %}

**UST**, **Kontonummer** und eventuelle **Kostenstelle** sind bereits in der Umsatzgruppe definiert und werden somit **automatisch gebucht**.

> **Empfehlung**: Bei **Umsatzarten**, die nur **unregelmäßig** vorkommen, ist es aus Gründen der Übersichtlichkeit empfehlenswert, **keine** **Umsatzgruppe** anzulegen. Erfassen Sie sporadische Umsatzarten besser, indem Sie wie nun im Folgenden beschrieben vorgehen.

## Umsatzerfassung OHNE Umsatzgruppen

Legen Sie die **Umsatzarten** an, indem Sie unter **"Neuer Eintrag"** den gewünschten Text eingeben.

Einmal angelegte Umsatzarten erscheinen automatisch im Dropdown-Menü. Sollten Sie viele unterschiedliche Umsatzarten angelegt haben und damit die Liste entsprechend lang sein, geben Sie am besten die ersten Buchstaben in das Eingabefeld ein. Die Auswahl wird mit jeder Buchstabeneingabe weiter eingeengt.

{% figure caption="Durch Anklicken des Eingabefeldes ersehen Sie die Einträge der Vergangenheit" %}

![](/uploads/ta12.png)

{% endfigure %}

Indem Sie durch die TAB-Taste oder durch Anklicken auf das **Zahlenfeld** gelangen, geben Sie den Betrag ein und haben dabei die Möglichkeit, **Buchungstext**, **Steuerschlüssel**, buchhalterisches **Konto** und **Kostenstelle** zu benennen.

{% figure caption="Die buchhalterischen Angaben sind keine Pflichtangaben" %}

![](/uploads/ta13.png)

{% endfigure %}

Als **Buchungstext** für das **Kassenbuch** erscheint standardmäßig **"Umsatz + gewünschter Text"**. Diese Standardvorgabe können Sie beliebig **überschreiben**.

Steuerschlüssel, buchhalterisches Konto und Kostenstelle sind **keine Pflichtangaben**.

Analog zum hier gezeigten Vorgehen können Sie auch mit "Unbaren Zahlungsarten", "Debitoren" und "Ausgaben" verfahren oder jeweils entsprechende Gruppen bilden.

## Statistische Erfassung

Selbst wenn Sie das Kassenbuch von Pentacode nicht nutzen sollten, empfehlen wir, die **Erlöse** in Ihrem Unternehmen zumindest zu **statistischen Zwecken** zu erfassen. Neben einer Darstellung Ihrer Umsätze nach deren Herkunft ermittelt Pentacode automatisch die Arbeits-Produktivität in Ihrem Unternehmen.

**Verwenden Sie für die Umsatzeingabe am besten Umsatzgruppen!**

[**Hier**]\(/handbuch/umsaetze/umsatzgruppen/#anlegen-von-umsatzgruppen)
können Sie nachschlagen, wie Sie diese erstellen und ordnen. 

**Empfehlung:** Sollten Sie in Zukunft das Berichtswesen von Pentacode nutzen wollen, so ist es empfehlenswert, die Umsätze nach Erlösarten (Speisen, Getränke, usw.) zu erfassen, nicht nach MwSt-Sätzen. In der Folge können die Erlösarten den Kostenstellen [zugeordnet]\(/handbuch/umsaetze/erloeszuordnung/) und in den [Berichten ]\(/handbuch/berichte/)z.B. nach Produktivität und weiteren Faktoren analysiert werden.

## Unbare Zahlungen

**Erfassen Sie** die Bezahlung durch EC-Karten, Kreditkarten, Gutscheine usw.
unter **Unbare Zahlungen**. Entnehmen Sie diese am besten direkt ihrem Kassensystem. 

{% figure caption="Erfassen Sie hier die unbaren Zahlarten" %}

![](/uploads/ta2.png)

{% endfigure %}

> **Empfehlung**: Sollten Sie ein EC-Gerät benutzen, legen Sie idealerweise die einzelnen Kartenarten entsprechend der Erfassung durch das Gerät an und vermeiden Sie ein manuelles Aufaddieren der einzelnen Kartenarten. Damit vermeiden Sie Rechenfehler und vereinfachen das Auffinden eines evtl. Tippfehlers im Falle einer Kassendifferenz.

Wenn das Gerät zur Erfassung von Kartenzahlungen direkt an Ihr Kassensystem angeschlossen ist, kann der Kassenbericht zu den Finanzwegen irrtumsfrei verwendet werden.

## Auf Rechnung

**Debitoren**, die einmal erfasst sind, **werden** von Pentacode
**wiedererkannt** und in einer Dropdown-Liste zur Auswahl **vorgeschlagen**.

{% figure caption="Einmal erfasste Debitoren werden automatisch vorgeschlagen" %}

![](/uploads/ta3.png)

{% endfigure %}

Alle Debitoren können Sie übersichtlich unter
[**Debitoren**]\(/handbuch/umsaetze/debitoren) aufgelistet sehen. 

## Ausgaben

**Ausgaben**, die einmal erfasst sind, **werden** von Pentacode **wiedererkannt** und in einer Dropdown-Liste zur Auswahl **vorgeschlagen**.

{% figure caption="Einmal erfasste Ausgaben werden automatisch vorgeschlagen" %}

![](/uploads/ta4.png)

{% endfigure %}

> **Bitte beachten Sie unbedingt!**: In der **Tagesabrechnung** werden ausschließlich **jene Ausgaben** erfasst, die **Teil des Geschäftstages** waren (und somit aus der "Restaurantkasse" (oder vom Kellner) bezahlt wurden).

**Alle anderen Ausgaben** sind im **Kassenbuch** zu erfassen. Sehen Sie hierzu bitte den Artikel **"**[**Kassenbuch**]\(/handbuch/umsaetze/kassenbuch/)**"**.

## Gehaltsvorschüsse

Wenn Sie in das Eingabefeld **"Gehaltsvorschüsse"** klicken, erscheint eine Dropdown-Liste der **aktuell beschäftigten Mitarbeiter** in alphabetischer Reihenfolge nach Vornamen.

{% figure caption="Mitarbeiter können über das Dropdown oder Buchstabeneingabe gewählt werden" %}

![](/uploads/ta5.png)

{% endfigure %}

Sie können einen Mitarbeiter **mit Cursor** oder durch **Buchstabeneingabe** auswählen.

Es können in der Abrechnung **ausschließlich Bar-Vorschüsse** erfasst werden!

Eine Liste der [Vorschüsse]\(/handbuch/mitarbeiter/vorschuesse/)entsteht in der Folge automatisch.

## Bargeld Saldo

Nachdem Sie alle Einnahmen und Ausgaben des Geschäftstages erfasst haben, erhalten Sie den **rechnerischen Kassenstand**.

{% figure caption="Mit der Eingabe von Umsätzen und Ausgaben errechnet Pentacode die Bargeldsumme, die rechnerisch vorhanden ist" %}

![](/uploads/ta6.png)

{% endfigure %}

## Kassendifferenz

Idealerweise **zählen** Sie nun das Ihnen tatsächlich verbliebene **Bargeld** und geben den **Zählbetrag** unter **"Kassenstand Ist"** ein.

{% figure caption="Nach Eingabe des gezählten Bargelds wird eine evtl. Kassendifferenz ausgewiesen" %}

![](/uploads/ta7.png)

{% endfigure %}

Sollte eine Differenz ausgewiesen sein, so überprüfen Sie am besten die Richtigkeit Ihrer Eingaben. Wenn diese richtig sind, zählen Sie evtl. die Kasse nach.

Verbleibt eine **Differenz**, wird diese im Kassenbuch als **Kassendifferenz** ausgewiesen.

## Unbare Trinkgelder

Nehmen wir den Fall an, dass zum Beispiel nach einer geschlossenen Veranstaltung per Karte bezahlt wird und der Gastgeber den Rechnungsbetrag für ein Trinkgeld aufrundet. Oder Sie führen zum Beispiel einen Betrieb, in dem fast ausschließlich mit Karte bezahlt wird und die Gäste den Kartenbetrag um das Trinkgeld erhöhen. In beiden Fällen wäre der Kartenbetrag höher als der Umsatz.

Da das Trinkgeld in diesen Fällen in den Kartenzahlungen "versteckt" ist, **geben Sie als Zählbetrag "0" ein**. Das Ihnen verbliebene Bargeld beträgt ja tatsächlich Null Euro.

Beim "**Abschließen & Buchen**" erscheint nun die Meldung "**Differenz als Unbare Trinkgelder buchen?**"

{% figure caption="Bei Eingabe von '0' als Zählbetrag entsteht der Buchungstext 'Unbare Trinkgelder'" %}

![](/uploads/ta8.png)

{% endfigure %}

Wenn Sie dies bestätigen, entsteht in der Abrechnung und im Kassenbuch die Position "Unbare Trinkgelder".

Wenn Sie unbare Trinkgelder an die Mitarbeiter auszahlen, führen Sie eine entsprechende Buchung im Kassenbuch z.B. mit dem Text "Auszahlung Trinkgeld" als Ausgabe durch.

## Abrechnung mit Zählprotokoll

Sie können die Abrechnung des Geschäftstages auch in Verbindung mit einem [**Zählprotokoll**]\(/handbuch/umsaetze/kassenbuch/#zählprotokoll) durchführen.

Wenn Sie in Pentacode die Bargeldzählung mithilfe des Zählprotokolls durchführen, ergibt sich der gezählte Betrag durch die Eingabe der jeweiligen Stückelungen.

{% figure caption="Bei Abrechnung mit Zählprotokoll ergibt sich der Zählbetrag durch Stückzählung" %}

![](/uploads/ta9.png)

{% endfigure %}

**Drucken** Sie in diesem Fall idealerweise die Tagesabrechnung über das {% icon "print" %}-Symbol aus und **unterzeichnen** Sie den Ausdruck.

Der Ausdruck weist das Zählprotokoll aus.

Ein Zählprotokoll ist der schriftliche Nachweis der "Sturzfähigkeit" der Kasse, so das Amtsdeutsch. In Klarsprache übersetzt bedeutet dies, dass Sie schriftlich nachweisen, dass der gezählte Geldbetrag tatsächlich vorhanden ist.

## Zwischenspeichern

Abhängig von Ihrer Zugangsberechtigung können Sie "Zwischenspeichern" oder "Abschließen & Buchen" durchführen.

**"Zwischenspeichern"** ist allen Administratoren möglich, die zur Durchführung einer **Tagesabrechnung berechtigt** sind.

{% figure caption="Jeder, der eine Tagesabrechnung durchführt, kann diese speichern" %}

![](/uploads/ta10.png)

{% endfigure %}

> Das **"Zwischenspeichern"** ist **ZWINGEND notwendig**. **Nicht gespeicherte Daten** gehen nach Verlassen der Tagesabrechnung **verloren**.

Nachträgliche **Änderungen** können **jederzeit** durchgeführt werden. Ein **"Zwischenspeichern"** kann **beliebig häufig** vorgenommen werden.

## Abschließen und Buchen

Die Funktion **"Abschließen & Buchen"** ist nur für jene Administratoren sichtbar, die auch **Zugang zum Kassenbuch** haben.

{% figure caption="Abschließen und Buchen erfordert die Berechtigung zum Zugang zum Kassenbuch" %}

![](/uploads/ta11.png)

{% endfigure %}

Mit der Durchführung von **"Abschließen & Buchen"** ist die Tagesabrechnung für Administratoren, die nur die Tagesabrechnung durchführen können, **nicht mehr veränderbar**.

Mit **"Abschließen & Buchen"** werden die Positionen der Tagesabrechnung in das **Kassenbuch** übernommen.
