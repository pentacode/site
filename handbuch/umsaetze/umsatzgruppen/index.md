---
layout: layouts/single.njk
title: Umsatzgruppen
weight: 1
icon: filter-circle-dollar
keywords:
- umsatzgruppen
- anlegen
- umsätze
- zahlungswege
- kassenbucheinträge

---
Im Menüpunkt "**Umsatzgruppen**" haben Sie die Möglichkeit, **Umsatz-, Zahlungs- und Kostenarten in Gruppen** zusammenzufassen. Durch die Zusammenfassung werden möglicherweise fehlerhafte oder unvollständige Eingaben in der Tagesabrechnung buchhalterisch vereinheitlicht.

Darüber hinaus können diese Gruppen als **dauerhafte Einträge** in der
"[**Tagesabrechnung**]\(/handbuch/umsaetze/tagesabrechnung/)" erscheinen.

## Anlegen von Umsatzgruppen

Klicken Sie auf **+ Neue Umsatzgruppe**" und geben Sie den gewünschten
Buchungstext, UST-Satz und evtl. die Kostenstelle an. 
> Generell ist zu raten die Umsätze **nach Erlösart (Speisen, Getränke, Eintritt etc.)** und nicht
nach MwSt. zu gruppieren um die Funktionen des
[Berichtswesens]\(/handbuch/berichte/umsatzberichte) vollständig nutzen zu können.

{% figure caption="Durch Entfernen des Buttons 'Kassenbuch' wird die Umsatzart lediglich statistisch erfasst" %}

<img src="neue-umsatzgruppe.png" />

{% endfigure %}

Wenn "**Im Kassenbuch führen**" ausgewählt ist, wird die Umsatzgruppe  durch
"**Abschließen und Buchen**" in der Tagesabrechnung **automatisch in das**
[**Kassenbuch**]\(/handbuch/umsaetze/kassenbuch/) **geschrieben**. Wenn Sie
das **Kassenbuch nicht** in Pentacode führen wollen, wählen Sie den Button ab.
Der **Umsatz** fließt dann nur in das **Berichtswesen** und Ihre **Planung**
ein.

> Sollten Sie das Kassenbuch nicht in Pentacode führen, können Sie die
> buchhalterischen Angaben auslassen - **Sie sollten jedoch stets den UST-Satz
> eintragen**, um eine korrekte Berichterstattung zu gewährleisten!

Sollte eine Umsatzart nicht täglich aber doch regelmäßig aufkommen, lohnt sich
auch eine Umsatzgruppe - zur Übersichtlichkeit in der Tagesabrechnung können Sie
dann aber "**Als Vorauswahl in Tagesabrechnung**" abwählen. 

## Bestehende Einträge in Gruppen zusammenfassen

Sie haben bereits mit der Tagesabrechnung gearbeitet, bevor Sie Umsatzgruppen angelegt haben?

In diesem Fall finden Sie eine Liste von **Einträgen im Kassenbuch** vor, die aus bereits erfolgten **Tagesabrechnungen** stammt. Diese Liste entsteht ausschließlich aus Einträgen in der Tagesabrechnung und kann hier **nicht bearbeitet oder ergänzt** werden.

Da Pentacode alle Eingaben auf Einheitlichkeit überprüft, kann es vorkommen,
dass kleine Abweichungen beim manuellen Eintrag in der Tagesabrechnung zu
mehreren Positionen führen, die sich jedoch auf eine Umsatzart beziehen. Hier
zeigen wir Ihnen dies am Beispiel "**Speisen**".
Wenn Sie dies für die Zukunft vereinheitlichen wollen, **ziehen** Sie nun die **gewünschten Einträge** in der Liste einfach per "drag & drop" **in die Gruppe**.

{% figure caption="Ziehen Sie bestehende Umsätze aus der Liste per drag & drop
in die zutreffende Umsatzgruppen - die Umsätze werden somit zusammengefasst." %}
<img src="umsatz-hinzufügen.gif"/>
{% endfigure %}

Dadurch werden alle **zurückliegenden Einträge im Kassenbuch korrigiert** und vereinheitlicht. Alle Texte, Steuersätze Kontonummern und Kostenstellen entsprechen nun den Angaben, die Sie für diese Gruppe definiert haben.

> **Ausnahme** hiervon sind Einträge im Kassenbuch, die von Ihnen **festgeschrieben** worden sind. Diese werden der Gruppe zwar hinzugefügt, die **festgeschriebene Buchung im Kassenbuch** bleibt jedoch unverändert.

## Reihenfolge der Umsatzgruppen

Mit der **gedrückten linken Maustaste** können Sie die angelegten Gruppen in die von Ihnen **gewünschte Reihenfolge** bringen.

{% figure caption="Bringen Sie die Gruppen in die von Ihnen gewünschte Reihenfolge" %}

<img src="umsätze-verschieben.gif"/>

{% endfigure %}

In dieser **Reihenfolge** erscheinen die Gruppen nun **dauerhaft** in der **Tagesabrechnung**.

{% figure caption="Die Umsätze erscheinen in der Tagesabrechnung in der von Ihnen gewählten Reihenfolge" %}
<img src="umsätze-reihenfolge.png"/>
{% endfigure %}

## Neue Umsätze anlegen

**Umsatzarten**, die Sie in der **Vergangenheit** angelegt haben und die nicht in einer Gruppe zusammengefasst sind, können Sie der Abrechnung des Geschäftstages über das **Dropdown-Menü hinzufügen**.

Und in der "**Tagesabrechnung**" können natürlich weiterhin **neue Umsatzarten anlegen** und diese evtl. einer bestehenden Gruppe hinzufügen.

{% figure caption="Sie können bestehenden Umsatzarten jederzeit weitere Umsätze hinzufügen" %}

<img src="umsatz-liste.png"/>

{% endfigure %}

> **Wichtig! Umsätze, die keiner Gruppe angehören, werden bei der Dienstplanung gegen Umsatz-Ziele nicht berücksichtigt!**

## Zahlungswege

In derselben Weise, in der Sie Umsatzgruppen angelegt haben, können Sie die unbaren Zahlungsarten, aber auch sehr häufig wiederkehrende Barausgaben organisieren.

{% figure caption="Wie die Umsätze können Sie auch Ihre Kartenzahlungen in Gruppen zusammenfassen" %}

![](/uploads/umsatzgruppe7.png)

{% endfigure %}

> Das Anlegen von feststehenden Ausgabepositionen ist jedoch nur dann sinnvoll, wenn es sich um **sehr häufig wiederkehrende Ausgaben** handelt.
