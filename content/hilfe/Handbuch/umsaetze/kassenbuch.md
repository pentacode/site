---
title: Kassenbuch
weight: 3
icon: book-open
anchors:
- hash: erfassen-von-einnahmen-&-ausgaben
  title: Erfassen von Einnahmen & Ausgaben
- hash: gehaltsvorschuss
  title: Gehaltsvorschuss
- hash: zählprotokoll
  title: Zählprotokoll
- hash: überwachung-des-kassensaldos
  title: Überwachung des Kassensaldos
- hash: splittbuchung
  title: Splittbuchung
- hash: suchfunktion
  title: Suchfunktion
- hash: kassenbuch-exportieren
  title: Kassenbuch exportieren
- hash: festschreibung-des-Kassenbuchs
  title: Festschreibung des Kassenbuchs

---
Das **Kassenbuch** in Pentacode entsteht **selbständig** durch **"Abschließen & Buchen"** in der Tagesabrechnung.

> **Manuell in das Kassenbuch werden ausschließlich jene Einnahmen oder Ausgaben eingetragen, für die Sie im Wortsinn "an den Tresor" gehen, in anderen Worten: Wenn Sie auf Gelder zugreifen, die aus zurückliegenden, bereits abgerechneten Tagen stammen.**

Wenn Sie z.B. am Montag eine Bankeinzahlung durchführen, so zahlen Sie das Bargeld ein, das von den Umsätzen des Wochenendes verblieben ist. Diese Bankeinzahlung ist deshalb unmittelbar in das Kassenbuch einzutragen. Es ist nicht Teil eines laufenden Geschäftstages und wird deshalb nicht in der Abrechnung des Geschäftstages erfasst.

Weitere Beispiele für Ausgaben, die in das Kassenbuch einzutragen sind, wären: Geldentnahmen aus dem Tresor für Einkäufe oder für Vorschüsse, die nicht aus der "Restaurantkasse" gezahlt werden, sondern die sich Mitarbeiter "im Büro" abholen u.ä.m.

## Erfassen von Einnahmen & Ausgaben

Über das **"+"**-Zeichen können Sie **Einnahmen** und **Ausgaben** im Kassenbuch **hinzufügen**. Bar ausbezahlte Gehaltsvorschüsse werden darüber hinaus automatisch in die "Vorschussliste" der Mitarbeiter übertragen.

{{< figure caption="Über das + Zeichen können Einnahmen und Ausgaben im Kassenbuch erfasst werden" >}}

![](/uploads/kb1.png)

{{< /figure >}}

Jede **Eingabe oder Veränderung** im Kassenbuch wird **zuerst farbig** hervorgehoben. Nach der Eingabe findet weder eine Nummerierung, noch eine Saldierung des Kassenstandes statt.

{{< figure caption="Eingaben oder Veränderungen werden zuerst farbig hervorgehoben" >}}

![](/uploads/kb2.png)

{{< /figure >}}

Erst wenn Sie die manuelle Eingabe im Kassenbuch **speichern**, erhält die Position eine Nummerierung und der Kassenstand wird saldiert.

Wenn Sie die **Kassenbuchführung eines Tages abgeschlossen** haben, ist das **Kassenbuch** zu **speichern**. Ohne Speichern gehen die eingegebenen Daten verloren.

## Gehaltsvorschuss

Wenn Sie einen Gehaltsvorschuss **im Kassenbuch** erfassen , da die Vorschusszahlung **nicht Teil der Tagesabrechnung** ist, wählen Sie über das "**+**"Zeichen "**Gehaltsvorschuss**". Auch Gehaltsvorschüsse über das Kassenbuch werden automatisch der [Vorschussliste ](/hilfe/handbuch/mitarbeiter-alle/vorschuesse/#vorschussliste)zugeführt. 

Die Liste der Mitarbeiter ist **alphabetisch** nach Nachnamen gegliedert, es erscheint immer der **erste** Namen im Alphabet. Indem Sie auf den Namen klicken, erscheint im Dropdown-Menü die Liste der aktuell beschäftigten Mitarbeiter.

{{< figure caption="So erfassen Sie Gehaltsvorschüsse im Kassenbuch, wenn diese nicht Bestandteil der Tagesabrechnung sind" >}}

![](/uploads/kb12.png)

{{< /figure >}}

Wählen Sie den Mitarbeiter mit dem Cursor oder über Buchstabeneingabe, geben Sie den Auszahlungsbetrag ein und "**Speichern**" Sie.

> **Als Auszahlungsdatum wird immer der aktuelle Tagesdatum vorgeschlagen. Stellen Sie sicher, dass Sie das Datum im Bedarfsfall entsprechend korrigieren!**

## Zählprotokoll

Ein Zählprotokoll ist der schriftliche Nachweis der "Sturzfähigkeit" der Kasse, so das Amtsdeutsch. In Klarsprache übersetzt bedeutet dies, dass Sie schriftlich nachweisen, dass der gezählte Geldbetrag tatsächlich vorhanden ist.

> **Es gibt (noch) keine gesetzliche Verpflichtung zur Durchführung eines Zählprotokolls. Mit Blick auf die Betriebsprüfung ist es jedoch dringend ratsam, dieses _mindestens_ nach _jeder_ Bankeinzahlung durchzuführen, wenn der Zählbetrag relativ gering ist. Der Nachweis der Sturzfähigkeit Ihrer Kasse verringert das Risiko einer Umsatz-Zuschätzung erheblich!**

Ein stichhaltiges Zählprotokoll hat Formvorschriften zu erfüllen. Es muss die sogenannte "**Stückelung**" ausweisen und wird idealerweise nach dem Prinzip Ansager/Schreiber von zwei Personen unterschrieben.

Es erhöht die Glaubwürdigkeit, wenn mindestens eine dieser Personen **nicht** Inhaber des Unternehmens ist.

Wenn Sie über das "**+**"Zeichen "**Zählprotokoll**" wählen, öffnet ein Zählprotokoll, welches das aktuelle Tagesdatum und den rechnerischen Bargeldbestand des Tages ausweist.

> Aus rechtlichen Gründen kann ein Zählprotokoll **nur tagesaktuell** durchgeführt werden, **nicht für einen  Zeitpunkt, der in der Vergangenheit liegt**. Das Zählprotokoll bezieht sich deshalb **grundsätzlich auf den tagesaktuellen Kassenbestand**.

Unter "**Zählung durchgeführt von**" steht standardmäßig der Name der Person, die in Pentacode angemeldet ist. Dieser Name kann jederzeit überschrieben werden.

Geben Sie nun die Stückelung ein. Der Zählbetrag wird automatisch aufaddiert.

{{< figure caption="Der Zählbetrag wird bei Eingabe der Stückelung automatisch aufaddiert" >}}

![](/uploads/zahlprotokoll1.png)

{{< /figure >}}

Sollte die Zählung eine negative oder auch positive **Differenz** zum rechnerischen Bargeldbestand ausweisen, werden Sie bei "Speichern" gefragt, ob die **Differenz gebucht** **oder** durch "Überspringen" **ignoriert** werden soll.

{{< figure caption="Ein Differenzbetrag zwischen rechnerischem und tatsächlichem Bargeldbestand kann gebucht oder ignoriert werden" >}}

![](/uploads/zahlprotokoll2.png)

{{< /figure >}}

In jedem Fall entsteht im Kassenbuch der Saldo-neutrale Eintrag "**Kassenzählung**", der die Durchführung des sogenannten "Kassensturzes" nachweist.

{{< figure caption="Im hier gezeigten Beispiel wird der Differenzbetrag der Kassenzählung ausgewiesen" >}}

![](/uploads/zahlprotokoll3.png)

{{< /figure >}}

Durch "Speichern" wird die Kassenzählung im Kassenbuch festgeschrieben.

> Gastronomie zählt im Jargon der Finanzbehörden zum "bargeldintensiven" Gewerbe. Kassendifferenzen können hier durchaus vorkommen und sollten als solche auch verbucht werden.

Bei einem "Mouse-over" erscheint am rechten Rand das {{< icon "print" >}}-Symbol. Indem Sie diese anklicken, können Sie das Zählprotokoll **ausdrucken**.

{{< figure caption="Drucken Sie das Zählprotokoll aus unterzeichnen Sie es mit Datumsangabe" >}}

![](/uploads/zahlprotokoll5.png)

{{< /figure >}}

> **Zählprotokolle sollten ausgedruckt und unterzeichnet und für den Fall eine Betriebsprüfung in einem eigenen Ordner abgelegt werden werden.**

## Überwachung des Kassensaldos

Das **Kassenbuch** überwacht selbständig den laufenden Endsaldo und lässt einen **negativen Endsaldo nicht** zu.

{{< figure caption="Das Kassenbuch lässt keinen Negativ-Saldo zu" >}}

![](/uploads/kb3.png)

{{< /figure >}}

Wenn durch eine Ausgabe ein **negativer Saldo** entstehen sollte, wird die **Zeile farbig** markiert und der **Endsaldo** mit **"0,00"** ausgewiesen (da diese Zelle keinen Wert < 0 zulässt).

In diesem Fall müssen Sie den **Eintrag durch "Abbrechen" löschen**. Sie können den Eintrag **nicht** speichern.

## Splittbuchung

Mit einem Mouse-over über die Position erscheint am rechten Seitenrand ein {{< icon "page-break" >}}-Symbol. Durch Anklicken dieses {{< icon "page-break" >}}-Symbols können Sie Ausgaben wie auch Einnahmen **splitten**.

Die Eingabe eines **Buchungstextes** ist dabei **zwingend,** die Angabe von UST und Kontonummer ist optional. Buchungstexte aus der Vergangenheit werden Ihnen bei der Eingabe vorgeschlagen. Sollten Sie diese bereits kontiert haben, werden alle Angaben automatisch übernommen.

{{< figure caption="So können Sie auf einfache Weise einen Beleg nach Kostenstelle / UST trennen" >}}

![](/uploads/kb4.png)

{{< /figure >}}

Eine Splittbuchung wird nur angenommen, wenn die **Summe der gesplitteten Beträge dem Gesamtrechnungsbetrag** entspricht.

Mit "**Speichern**" wird die Splittbuchung ins Kassenbuch geschrieben. Um sie zu übernehmen, muss nochmals gespeichert werden.

{{< figure caption="Nach Übernahme ins Kassenbuch muss hier erneut gespeichert werden" >}}

![](/uploads/kb5.png)

{{< /figure >}}

## Suchfunktion

Über die **Suchfunktion** können Sie nach **Buchungstext** und **Zahlen** **filtern**. Mit jeder Eingabe wird der Kreis der Möglichkeiten weiter eingeschränkt

{{< figure caption="So können Sie im Kassenbuch suchen" >}}

![](/uploads/kb6.png)

{{< /figure >}}

## Kassenbuch exportieren

Über das **Export**-Symbol wählen Sie mit **"Format"**, ob Sie das Kassenbuch **ausdrucken** wollen **oder** das Format, mit dem das Kassenbuch an Ihre Buchhaltung **exportiert** wird.

Dabei können Sie den **Zeitraum wählen**. Die Standardvorgabe umfasst immer den gesamten Kalendermonat.

{{< figure caption="So können Sie das Kassenbuch ausdrucken oder an die Buchhaltung senden" >}}

![](/uploads/kb7.png)

{{< /figure >}}

Indem Sie in das Feld "Format" klicken, können Sie die Buchhaltungsformate wählen, die Sie der Buchhaltung zukommen lassen wollen.

{{< figure caption="So können Sie das Format wählen" >}}

![](/uploads/kb11.png)

{{< /figure >}}

## Festschreibung des Kassenbuchs

Über das **Archiv**-Symbol wird das Kassenbuch **festgeschrieben**.

{{< figure caption="Über das Archiv-Symbol können Sie die Festschreibung des Kassenbuchs veranlassen" >}}

![](/uploads/kb9.png)

{{< /figure >}}

Eine **Festschreibung** kann **nicht mehr rückgängig** gemacht werden. Ist das Kassenbuch festgeschrieben, können **festgeschriebene Werte** nur mehr durch **Korrekturbuchungen** korrigiert werden.

{{< figure caption="Mit 'Bestätigen' wird das Kassenbuch unveränderbar" >}}

![](/uploads/kb10.png)

{{< /figure >}}